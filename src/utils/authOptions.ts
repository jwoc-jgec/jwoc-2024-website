import { connectMongoDB } from "@/lib/mongodb";
import Mentor from "@/models/mentor";

import CredentialsProvider, {
  CredentialInput,
} from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { DefaultSession, Session, SessionStrategy } from "next-auth";
import { JWT } from "next-auth/jwt";

interface Credentials {
  email?: string;
  password?: string;
}

interface CustomUser {
  _id: string;
  email: string;
  password: string;
}
interface SessionCallbackParams {
  session?: { user?: { id: string } };
  token?: { id: string };
}

interface JWTCallbackParams {
  user?: { id: string };
  token?: { id: string };
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
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

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

          return { id: user._id, email: user.email } as any;
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
  callbacks: {
    async session({ session, token }: SessionCallbackParams): Promise<Session | DefaultSession> {
      if (session?.user && token?.id) {
        (session.user as { id: string }).id = token.id;
      }
      return session as Session | DefaultSession;
    },

    async jwt({ user, token }: JWTCallbackParams): Promise<JWT> {
      if (user) {
        (token as { id: string }).id = user.id;
      }
      return token as JWT;
    },
  },

  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: "/login",
  },
};
