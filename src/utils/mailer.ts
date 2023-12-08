import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import Mentee from "@/models/mentee";
import Mentor from "@/models/mentor";
import { NextResponse } from "next/server";

export const sendEmail = async({email, userType, userId} : any) => {
    try {

        // Hash userId for security
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        // Add a verifyToken to usermodel
        if(userType === "Mentee") {
            await Mentee.findByIdAndUpdate(userId, { verifyToken: hashedToken });
        } else if(userType === "Mentor") {
            await Mentor.findByIdAndUpdate(userId, { verifyToken: hashedToken });
        }
        
        // link to be sent user
        const link = `${process.env.BASE_URL}/verifyEmail?token=${hashedToken}&user=${userType}`;
        
        // Nodemailer configuration
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 587,
            service: "gmail",
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.MAIL_PASSWORD
            }
        });
        
        
        // Mailing Details and content
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Verify your email for JWoC2k24 " + userType,
            html: `<p>Click <a href=${link}>here</a> 
            to "verify your email"
            <br>
            or copy and paste the link below in your browser. 
            <br> ${link}
            </p>`,
    };

    // Send mail to user
    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something Went Wrong" }, { status: 500 });
    }
};
