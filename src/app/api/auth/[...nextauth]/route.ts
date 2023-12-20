import NextAuth from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

const handler = NextAuth(authOptions as any);
// console.log("handler", handler);

export { handler as GET, handler as POST };
