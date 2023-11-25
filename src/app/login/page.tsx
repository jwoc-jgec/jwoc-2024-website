import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import React from "react";
import { redirect } from "next/navigation";
import { authOptions } from "@/utils/authOptions";

export default async function login() {
  const session = await getServerSession(authOptions);

  if (session) return redirect("/profile");
  return (
    <div>
      <LoginForm />
    </div>
  );
}
