import { connectMongoDB } from "@/lib/mongodb";
import Mentee from "@/models/mentee";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/utils/mailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      whatsapp,
      ipAddress,
      college,
      year,
      github,
      linkedIn,
      isFirstTime,
      answer1,
      // isVerified
    } = await req.json();
    // console.log( name , email , password , phone , whatsapp , ipAddress ,college , year , github , linkedIn , isFirstTime , answer1 );
    
    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(phone);

    console.log("hit 2");
    // const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    console.log("hit 1");    
    const savedMentee = await Mentee.create({
      type: "Mentee",
      name,
      email,
      phone,
      whatsapp,
      ipAddress,
      college,
      year,
      github,
      linkedIn,
      isFirstTime,
      answer1,
    });
    console.log("savedMentee", savedMentee);

    // send success mail for successful registration
    // await sendEmail({ email, userType: "Mentee", userId: savedMentee._id})
    await sendEmail({
      to: email,
      mailType: "REGISTRATION SUCCESS",
      info: {
        userType: "Mentee",
        userName: name,
      },
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
