"use client";

import { Inter } from "next/font/google";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const inter = Inter({ subsets: ["latin"] });

function DemoCreateAccount() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Login</Button>
      </CardFooter>
    </Card>
  );
}

export default function Page() {
  return (
    <div
      className={`flex flex-col items-center justify-center h-[80vh] p-5 ${inter.className}`}
    >
      <DemoCreateAccount />
    </div>
  );
}
