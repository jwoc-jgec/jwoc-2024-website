"use client"
import "../css/font.css"

import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  email: z.string().email({ message: "Enter a vaild email" }),
  password: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

export default function LoginForm() {
 
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const router = useRouter()
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
   if (window.event ) {
    window.event.preventDefault();
   } 
   const loginResp =  signIn("credentials", {
      email: values.email.trim(),
      password: values.password.trim(),
    });
    console.log("loginResp", loginResp);
  }
  const animationVariants = {
    initial: {
      y: -100, // Start from the top (off-screen)
      opacity: 0, // Start with 0 opacity
    },
    animate: {
      y: 0, // Move to the original position
      opacity: 1, // Fade in
    },
  };
  const forgetPwHandle = () => {
    router.push("/forgetpassword")
  }
  return (
    <motion.div
    initial="initial"
    animate="animate"
    variants={animationVariants}
    transition={{ duration: 1 }} >
    <Card className="md:w-[400px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login your account
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="jwoc@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
          <div className="flex flex-row justify-between pt-2">
            <span className=" cursor-pointer hover:underline" onClick={forgetPwHandle}>Forgot Password</span>
            <span className=" cursor-pointer hover:underline" onClick={() => {router.push("/register")}}>Sign Up</span>
          </div>
        </Form>
      </CardContent>
    </Card>
    </motion.div>
  );
}