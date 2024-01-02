import { connectMongoDB } from "@/lib/mongodb";
import Mentee from "@/models/mentee";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        // Connect with database
        await connectMongoDB();

        // Secure request check
        if(req.headers.get("secureToken") !== process.env.BACKEND_SECURITY_TOKEN)
            return NextResponse.json({ message: "Unauthorize request" }, {status: 401});

        // Get all mentees
        const mentees = await Mentee.find();

        return NextResponse.json(
            { messge: "Successfully provide all mentees", mentees },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something Went Wrong to get mentee details" },
            { status: 500 }
        );
    }
}

export async function PATCH(req: NextRequest) {
    try {
        // Connect with database
        await connectMongoDB();
        // details from request
        const { menteeId } = await req.json();
        console.log(menteeId);
        // Update mentor
        const mentee = await Mentee.findById(menteeId);
        mentee.isBanned = !mentee.isBanned;
        await mentee.save()

        return NextResponse.json(
            { message: "Updated Mentee details" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something Went Wrong during update" },
            { status: 500 }
        );
    }
}