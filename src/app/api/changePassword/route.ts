import { NextRequest, NextResponse } from "next/server";
import Mentor from "@/models/mentor";
import { connectMongoDB } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
    try {

        // Get details from request
        const { mentorId, oldPassword, token, newPassword } = await req.json();

        // Connect MongoDB
        await connectMongoDB();


        // If authenticate mentor
        if (mentorId) {
            const mentor = await Mentor.findById(mentorId);
            // Check if the user exists and password is correct
            if (!mentor || !await mentor.isCorrectPassword(oldPassword))
                return NextResponse.json({ message: "Wrong password" }, { status: 401 });
            
            // Update password
            mentor.password = newPassword;
            await mentor.save();
        }

        // If UnAthenticate mentor
        else {
            const mentor = await Mentor.findOne({ forgotPasswordToken: token });
            if(!token || !mentor)
                return NextResponse.json({ message: "Invalid Token" }, { status: 403 });
            mentor.password = newPassword;
            mentor.forgotPasswordToken = undefined;
            await mentor.save();
        }

        return NextResponse.json({ message: "Password changed successfully." }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong during change password." }, { status: 500 });
    }
}