import { connectMongoDB } from "@/lib/mongodb";
import Mentee from "@/models/mentee";
import Mentor from "@/models/mentor";
import { NextRequest, NextResponse } from "next/server";

connectMongoDB();
export async function POST(req: NextRequest) {
  console.log('hit 1');
    try {
    const { type,  email } = await req.json();
    console.log('email',email);
    console.log('type',type);
    if (type === 'Mentor') {
      const user = await Mentor.findOne({ email });
      console.log('exist',user);
      return NextResponse.json({ user });
    }
    const user = await Mentee.findOne({ email });
    console.log('userexist',user);
    return NextResponse.json({ user });
    
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
