import { connectMongoDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/project";
import Mentor from "@/models/mentor";

connectMongoDB();

export async function POST(req : NextRequest) {
    try {

        // Get all the required data from request
        const { projectName, projectLink, projectDescription, projectTypes, projectTags, mentorId } = await req.json();
        
        // Find the projectOwner in mentor collection
        const mentor = await Mentor.findById(mentorId);
        
        // If mentor couldn't be found
        if(!mentor) {
            return NextResponse.json({ message: "Mentor couldn't be found" }, {status : 400});
        }

        // Create a new Project
        const project = new Project({
            projectName,
            projectLink,
            projectDescription,
            projectTypes,
            projectTags,
            projectOwner : mentorId
        });

        // If maximum project limit exist
        if(mentor.RegisteredProjectId.length == 3) {
            return NextResponse.json({ message: "Mentor have already registered 3 projecs" }, {status: 400});
        }


        // Add project in collection
        const savedProject = await project.save();

        // Add the project in mentor's document
        mentor.RegisteredProjectId.push(savedProject._id);
        await mentor.save();

        return NextResponse.json({ message: "Project uploaded successfully." }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "An error occurred while uploading project." }, { status: 500 });
    }
}

export async function GET(req : NextRequest) {
    try {

        // get mentorId
        const { mentorId } = await req.json();

        let projects;
        // Find all projects
        if(!mentorId){
            projects = await Project.find();
        }
        // Find projects of a particular mentor
        else{
            const mentor = await Mentor.findById(mentorId);
            projects = await Project.find({_id : {$in : mentor.RegisteredProjectId}});
        }

        return NextResponse.json({ message: "Projects found successfully.", data : projects }, { status: 200 });


    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something Went Wrong." }, { status: 500 });
    }
}