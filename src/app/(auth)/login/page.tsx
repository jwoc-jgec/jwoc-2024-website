import LoginForm from "@/components/LoginForm";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default async function page() {
  const session = await getServerSession();
  if (session) redirect("/profile");
  return (
    <div
      className={`flex flex-col items-center justify-center h-[80vh] p-5 ${inter.className}`}
    >
      <LoginForm />
    </div>
  );
}
