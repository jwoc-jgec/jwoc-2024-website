import { connectMongoDB } from "@/lib/mongodb";
import Mentee from "@/models/mentee";
import Mentor from "@/models/mentor";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){

    try {

        // connection with database
        await connectMongoDB();

        // Get verifyToken and userType from request
        const { verifyToken, type } = await request.json();

        // Find the user from collection
        let user;
        if(type === "Mentor") {
            user = await Mentor.findOne({ verifyToken });
            if (!user) {
                return NextResponse.json({error: "Invalid token"}, {status: 400});
            }
        }
        else if(type === "Mentee") {
            user = await Mentee.findOne({ verifyToken });
            if (!user) {
                return NextResponse.json({error: "Invalid token"}, {status: 400})
            }
        }

        // update user verify details
        user.isVerified = true;
        user.verifyToken = undefined;
        await user.save();
        
        return NextResponse.json({ message: "Email verified successfully" }, {status: 200})


    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something Went Wrong" }, {status: 500})
    }

}