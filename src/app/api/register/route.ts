import { connectMongoDB } from "@/lib/mongodb";
import Mentor from "@/models/mentor";
// import Mentee from "@/models/mentee";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/utils/mailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      password,
      phone,
      whatsapp,
      ipAddress,
      college,
      year,
      github,
      linkedIn,
      answer1 ,
      answer2
      // isVerified
    } = await req.json();
    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(phone);
    // console.log("isVerified ---> ", isVerified);
    
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    const savedMentor = await Mentor.create({
      name,
      email,
      password: hashedPassword,
      phone,
      whatsapp,
      ipAddress,
      college,
      year,
      github,
      linkedIn,
      answer1,
      answer2
      // isVerified
    });
// console.log("savedMentor", savedMentor);

    // send success mail for successful registration
    // await sendEmail({ email, userType: "Mentor", userId: savedMentor._id})
    await sendEmail({
      to: email, 
      mailType: "REGISTRATION SUCCESS", 
      info: { 
        userType: "Mentor", 
        userName: name 
      }
    });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    console.log(error);
    
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
