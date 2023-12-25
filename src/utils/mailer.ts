// import nodemailer from "nodemailer";
// import bcryptjs from "bcryptjs";
// import Mentee from "@/models/mentee";
// import Mentor from "@/models/mentor";
// import { render } from "@react-email/render"
import { transport1, transport2, transport3 } from "./mailTransporters";
import { NextResponse } from "next/server";
import { verificationMail, contactUsMail, registrationSuccessfulMail, resetPasswordMail } from "@/utils/emails";
// import producer from "./socket.io/producer";
// import consumer from "./socket.io/consumer";

export interface mailInfo {
    to: string | Array<string>,
    mailType: string,
    info: info
}

// export interface mailOption {
//     from: string,
//     to: string | Array<string>,
//     subject?: string,
//     text?: string,
//     html?: string
// }

export interface info {
    userType?: string,
    userName?: string,
    otp?: string,
    senderName?: string,
    senderEmail?: string,
    senderMessage?: string
}

export const sendEmail = async ({to, mailType, info} : mailInfo) => {
    try {
        
        // const from = process.env.EMAIL;

        // var transport = nodemailer.createTransport({
        //     host: process.env.BASE_URL,
        //     port: 587,
        //     service: "gmail",
        //     auth: {
        //         user: process.env.EMAIL,
        //         pass: process.env.MAIL_PASSWORD
        //     }
        // });

        // console.log(to, mailType, info);
        // await consumer();

        if(mailType === "VERIFICATION") {
            // return await producer({
            return await transport3.sendMail({
                from: process.env.VERIFY_EMAIL,
                to,
                subject: "Email Verification for JWoC-2k24",
                html: verificationMail(info)
            });
        }
        else if(mailType === "REGISTRATION SUCCESS") {
            // return await producer({
            return await transport1.sendMail({
                from: process.env.EMAIL,
                to,
                subject: `Welcome To JWoC | Successfully Registered as ${info.userType}`,
                html: registrationSuccessfulMail(info)
            });
        }
        else if(mailType === "FORGOT PASSWORD") {
            // return await producer({
            return await transport3.sendMail({
                from: process.env.VERIFY_EMAIL,
                to,
                subject: 'JWoC - Reset Password',
                html: resetPasswordMail(info)
            });
        }
        else if(mailType === "CONTACT") {
            // return await producer({
            return await transport2.sendMail({
                from: process.env.CONTACT_EMAIL,
                to: process.env.CONTACT_EMAIL,
                subject: "User Query/Feedback",
                html: contactUsMail(info)
            })
        }
        // if(mailType === "VERIFICATION") {
        //     return await transport3.sendMail({
        //         from: process.env.VERIFY_EMAIL,
        //         to,
        //         subject: "Email Verification for JWoC-2k24",
        //         html: verificationMail(info)
        //     });
        // }
        // else if(mailType === "REGISTRATION SUCCESS") {
        //     return await transport1.sendMail({
        //         from: process.env.EMAIL,
        //         to,
        //         subject: `Welcome To JWoC | Successfully Registered as ${info.userType}`,
        //         html: registrationSuccessfulMail(info)
        //     });
        // }
        // else if(mailType === "FORGOT PASSWORD") {
        //     return await transport3.sendMail({
        //         from: process.env.VERIFY_EMAIL,
        //         to,
        //         subject: 'JWoC - Reset Password',
        //         html: resetPasswordMail(info)
        //     });
        // }
        // else if(mailType === "CONTACT") {
        //     return await transport2.sendMail({
        //         from: process.env.CONTACT_EMAIL,
        //         to: process.env.CONTACT_EMAIL,
        //         subject: "User Query/Feedback",
        //         html: contactUsMail(info)
        //     })
        // }

        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something Went Wrong" }, { status: 500 });
    }
}
// export const sendEmail = async({email, userType, userId} : any) => {
//     try {

//         // Hash userId for security
//         const hashedToken = await bcryptjs.hash(userId.toString(), 10);

//         // Add a verifyToken to usermodel
//         if(userType === "Mentee") {
//             await Mentee.findByIdAndUpdate(userId, { verifyToken: hashedToken });
//         } else if(userType === "Mentor") {
//             await Mentor.findByIdAndUpdate(userId, { verifyToken: hashedToken });
//         }
        
//         // link to be sent user
//         const link = `${process.env.BASE_URL}/verifyEmail?token=${hashedToken}&user=${userType}`;
        
//         // Nodemailer configuration
//         var transport = nodemailer.createTransport({
//             host: "sandbox.smtp.mailtrap.io",
//             port: 587,
//             service: "gmail",
//             secure: false,
//             auth: {
//                 user: process.env.EMAIL,
//                 pass: process.env.MAIL_PASSWORD
//             }
//         });
        
        
//         // Mailing Details and content
//         const mailOptions = {
//             from: process.env.EMAIL,
//             to: email,
//             subject: "Verify your email for JWoC2k24 " + userType,
//             html: `<p>Click <a href=${link}>here</a> 
//             to "verify your email"
//             <br>
//             or copy and paste the link below in your browser. 
//             <br> ${link}
//             </p>`,
//     };

//     // Send mail to user
//     const mailresponse = await transport.sendMail(mailOptions);
//     return mailresponse;

//     } catch (error) {
//         console.log(error);
//         return NextResponse.json({ message: "Something Went Wrong" }, { status: 500 });
//     }
// };
