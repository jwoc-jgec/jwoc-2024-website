import { connectMongoDB } from "@/lib/mongodb";
import Mentor from "@/models/mentor";

import CredentialsProvider, {
  CredentialInput,
} from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { SessionStrategy } from "next-auth";

interface Credentials {
  email?: string;
  password?: string;
}

interface CustomUser {
  email: string;
  password: string;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      } as Record<string, CredentialInput>,

      async authorize(credentials: Credentials | undefined) {
        // Ensure credentials is defined before extracting values
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        console.log("credentials", credentials);

        const { email, password } = credentials;

        try {
          await connectMongoDB();
          let user: CustomUser | null = null;
          user = await Mentor.findOne({ email });
          if (!user) {
            return null;
          }

          const passwordsMatch: boolean = await bcrypt.compare(
            password,
            user.password
          );

          if (!passwordsMatch) {
            return null;
          }
          return user as any;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 4 * 24 * 60 * 60, //30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: "/profile",
  },
};
