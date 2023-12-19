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
      password,
      phone,
      whatsapp,
      ipAddress,
      college,
      year,
      github,
      linkedIn,
      isFirstTime,
      answer1,
    } = await req.json();
    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(phone);

    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    const savedMentee = await Mentee.create({
      type: "Mentee",
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
      isFirstTime,
      answer1,
    });

    // send success mail for successful registration
    // await sendEmail({ email, userType: "Mentee", userId: savedMentee._id})
    await sendEmail({to: email, mailType: "REGISTRATION SUCCESS", info: {userType: "Mentee"}});

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
