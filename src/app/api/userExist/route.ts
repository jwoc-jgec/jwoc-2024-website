import { connectMongoDB } from "@/lib/mongodb";
import Mentee from "@/models/mentee";
import Mentor from "@/models/mentor";
import { NextRequest, NextResponse } from "next/server";

connectMongoDB();
export async function POST(req: NextRequest) {
    try {
    const { type,  email } = await req.json();
    console.log('email',email);
    console.log('type',type);
    if (type === 'Mentor') {
      const user = await Mentor.findOne({ email });
      // console.log(user);
      
      // console.log('exist',user);
      // if (user1) {
        return NextResponse.json({ user });
        // }
      }
      const user = await Mentee.findOne({ email });
      // console.log(user2);
    // console.log('userexist',user);
    return NextResponse.json({ user });
    
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
