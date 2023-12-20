"use client";
import "../css/font.css";

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
import { motion, useScroll } from "framer-motion";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
const formSchema = z.object({
  email: z.string().email({ message: "Enter a vaild email" }),
  password: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoading(false);
    if (window.event) {
      window.event.preventDefault();
    }
    setLoading(true);
    signIn("credentials", {
      email: values.email.trim(),
      password: values.password.trim(),
    });
    setLoading(false);
    console.log(values);
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
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={animationVariants}
      transition={{ duration: 1 }}
    >
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
                <>
                  {!loading ? (
                    <span className=" px-[155px] py-[10px]">
                      Submit
                    </span>
                  ) : (
                    <PulseLoader size={5} color="#36d7b7" />
                  )}
                </>
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
