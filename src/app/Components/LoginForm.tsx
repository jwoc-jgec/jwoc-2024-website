"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/profile");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log("res login", res);

      if (res!.ok) {
        console.log("re 1");
        const form = e.target;
        toast.success("Logged in Successfully!");
        form.reset();
        router.push("/profile");
      } else {
        console.log("re 2");
        toast.error("Login Failed :(");
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("re 3");
      toast.error("Invalid Credentials!");
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md animate-slide-up">
        <h2 className="text-2xl font-bold mb-4 text-primary">Login Form</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn bg-primary text-white">
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Don&rsquo;t have an account?{" "}
            <a href="/signup" className="text-primary underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
