import { sendEmail } from "@/utils/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();
        await sendEmail({ 
            to: "Animesh", 
            mailType: "CONTACT", 
            info: {
                senderName: name,
                senderEmail: email,
                senderMessage: message
            }
        });
        return NextResponse.json({ message: "Form Sent Successfully." }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ Message: "Something Went Wrong during submit feedback form." }, { status: 500 });
    }
}