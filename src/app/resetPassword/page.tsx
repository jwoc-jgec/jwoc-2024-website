"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { PulseLoader } from "react-spinners";

const Page = () => {
    console.log = () => {};
  const router = useRouter();
  const { toast } = useToast();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const animationVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 8 || confirmPassword.length < 8) {
      toast({
        title: "Password Too Short",
        description: "Password must be atleast 8 characters long.",
        variant: "destructive",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    try {
      const token = searchParams.get("token");
      let response = await fetch(`api/changePassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          newPassword,
        }),
      });
      console.log("rep");
      const resp = await response.json();
      if (response.ok) {
        toast({
          title: "Password Reset",
          description: `${resp.message}`,
        });
        setLoading(false);
        router.push("/login");
      } else {
        toast({
          title: `${resp.message}`,
          variant: "destructive",
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast({
        title: "Failed to reset password",
        variant: "destructive",
      });
      console.error("Failed to reset password", error);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-[80vh]">
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
            htmlFor="newPassword"
          >
            New Password
          </label>
          <input
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newPassword"
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {!loading ? (
            <Button type="submit" className="mt-4">
              Reset Password
            </Button>
          ) : (
            <div className="bg-black mt-[10px] p-4 rounded-sm w-[20%] flex justify-center">
              <PulseLoader size={5} color="#36d7b7" />
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Page;
