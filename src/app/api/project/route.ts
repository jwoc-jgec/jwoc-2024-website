import { connectMongoDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/project";
import Mentor from "@/models/mentor";

export async function POST(req : NextRequest) {
    try {

        // Connect to database
        await connectMongoDB();
        
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

        // Connect to database
        await connectMongoDB();

        // Get all queries
        const queries = req.nextUrl.searchParams;


        let projects;
        // Find all projects filtered by projectTypes
        if(!queries.has("mentorId")){
            const domain = queries.get("domain");
            if(domain != "all")
                projects = await Project.find({projectTypes : domain});
            else
                projects = await Project.find();
        }

        // Find projects of a particular mentor
        else{
            const mentor = await Mentor.findById(queries.get("mentorId"));
            projects = await Project.find({_id : {$in : mentor.RegisteredProjectId}});
        }

        return NextResponse.json({ message: "Projects found successfully.", data : projects }, { status: 200 });


    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something Went Wrong." }, { status: 500 });
    }
}

export async function PATCH(req : NextRequest) {
    try {
        // Connect to database
        await connectMongoDB();

        // get data from request
        const { projectId, projectName, projectDescription, projectLink, projectTags, videoLink } = await req.json();

        // Update the datails as require
        if(projectName) {
            await Project.findByIdAndUpdate(projectId, {projectName, edited : true});
        } else if(projectDescription) {
            await Project.findByIdAndUpdate(projectId, {projectDescription, edited : true});
        } else if(projectLink) {
            await Project.findByIdAndUpdate(projectId, {projectLink, edited : true});
        } else if(projectTags) {
            await Project.findByIdAndUpdate(projectId, {projectTags, edited : true});
        } else if(videoLink) {
            await Project.findByIdAndUpdate(projectId, {videoLink, edited : true});
        }

        return NextResponse.json({ message: "Project Details updated successfully." }, { status : 200 });

    }catch(error) {
        console.log(error);
        return NextResponse.json({ message: "Something Went Wrong"}, { status : 500 });
    }
}