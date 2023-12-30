import Mentor from "@/models/mentor";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/utils/mailer";
import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
    try {
        // // connection with database
        // await connectMongoDB();

        // // Get verifyToken and userType from request
        // const { verifyToken, type } = await request.json();

        // // Find the user from collection
        // let user;
        // if(type === "Mentor") {
        //     user = await Mentor.findOne({ verifyToken });
        //     if (!user) {
        //         return NextResponse.json({error: "Invalid token"}, {status: 400});
        //     }
        // }
        // else if(type === "Mentee") {
        //     user = await Mentee.findOne({ verifyToken });
        //     if (!user) {
        //         return NextResponse.json({error: "Invalid token"}, {status: 400})
        //     }
        // }

        // // update user verify details
        // user.isVerified = true;
        // user.verifyToken = undefined;
        // await user.save();

        // Get required details from request
        const { otp, email, type } = await request.json();
        // Verify email ID
        if (type === "VERIFICATION") {
            await sendEmail({
                to: email,
                mailType: "VERIFICATION",
                info: { otp },
            });

            return NextResponse.json(
                { message: "OTP Sent Successfully" },
                { status: 200 }
            );
        }

        // Forgot Password email send
        else if (type === "FORGOT PASSWORD") {
            // connect mongodb
            await connectMongoDB();

            // Find the mentor
            const mentor = await Mentor.findOne({ email });
            // console.log(mentor);

            // Invalid mentor
            if (!mentor)
                return NextResponse.json(
                    { message: "User not found." },
                    { status: 401 }
                );

            // Generate hashed token
            const hashedToken = await bcrypt.hash(`${mentor._id}`, 10);
            // console.log("Hashed Token : ", hashedToken);

            // Save this in forgotPasswordToken field of Mentor Model
            mentor.forgotPasswordToken = hashedToken;
            await mentor.save();

            // send user the token to reset Password
            await sendEmail({
                to: email,
                mailType: "FORGOT PASSWORD",
                info: {
                    link: `http://${process.env.BASE_URL}/resetPassword?token=${hashedToken}`,
                },
            });

            return NextResponse.json(
                { message: "Forgot Password Mail sent successfully." },
                { status: 200 }
            );
        }

        return NextResponse.json(
            { message: "Not a valid request" },
            { status: 401 }
        );
    } catch (error) {
        console.log(error);

        return NextResponse.json(
            { message: "Something Went Wrong during verifyEmail." },
            { status: 500 }
        );
    }
}
