import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import RegisterForm from "@/components/RegisterForm";
import { authOptions } from "@/utils/authOptions";

export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session) return redirect("/profile");

  return <RegisterForm />;
}
