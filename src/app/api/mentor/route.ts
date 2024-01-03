import { connectMongoDB } from "@/lib/mongodb";
import Mentor from "@/models/mentor";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        // Connect with database
        await connectMongoDB();

        // check request security
        if (req.headers.get("secureToken") !== process.env.BACKEND_SECURITY_TOKEN)
            return NextResponse.json({ message: "Unauthorize request" }, { status: 401 });

        // Give all the mentor details with aggregation
        const mentors = await Mentor.aggregate([
            {
                $lookup: {
                    from: "projects",
                    localField: "RegisteredProjectId",
                    foreignField: "_id",
                    as: "RegisteredProjectId",
                    pipeline: [
                        {
                            $project: {
                                projectOwner: false,
                            },
                        },
                    ],
                },
            },
        ]);

        return NextResponse.json(
            { message: "Successfully provide all mentor details", mentors },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something Went Wrong during fetch mentor details" },
            { status: 500 }
        );
    }
}

export async function PATCH(req: NextRequest) {
    try {
        // Connect with database
        await connectMongoDB();

        // details from request
        const { mentorId } = await req.json();
        console.log(mentorId);
        
        // Update mentor
        const mentor = await Mentor.findById(mentorId);
        mentor.isBanned = !mentor.isBanned;
        await mentor.save();

        return NextResponse.json(
            { message: "Updated Mentor details" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something Went Wrong during update" },
            { status: 500 }
        );
    }
}
