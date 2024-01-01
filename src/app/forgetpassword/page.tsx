"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { PulseLoader } from "react-spinners";
const Page = () => {
  console.log = () => {};
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
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
  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    try {
      let response = await fetch(`api/verifyEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          type: "FORGOT PASSWORD",
        }),
      });
      if (response.ok) {
        toast({
          title: "Direction",
          description: "Please check your email",
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast({
        title: "Failed to send the email",
        variant: "destructive",
      });
      console.log("Failed to send the email");
      console.log("error", error);
    }
    setLoading(false);
    setEmail("");
    router.push("/login");
  };

  return (
    <div className="flex justify-center items-center w-screen h-[80vh] ">
      <motion.div
        initial="initial"
        animate="animate"
        variants={animationVariants}
        transition={{ duration: 1 }}
        className="p-10 rounded-sm bg-white w-[80vw] md:w-[30vw]"
      >
        <form onSubmit={handleSubmit} className="w-full mt-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {!loading ? (
            <Button type="submit" className="mt-4">
              Send Link
            </Button>
          ) : (
            <div className="bg-black mt-[10px] p-4 rounded-sm w-[20%] flex justify-center ">
            <PulseLoader size={5} color="#36d7b7" />
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Page;
