"use client";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CountDown from "@/components/CountDown";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
const registerSchema = z.object({
  email: z.string().email(),
  name: z
    .string()
    .min(3, { message: "Your name should not be that short!" })
    .max(255),
  Address: z
    .string()
    .min(3, { message: "Your Address should not be that short!" })
    .max(255),
  phoneNo: z
    .string()
    .min(10)
    .max(10)
    .refine((val) => !isNaN(val as unknown as number), {
      message: "Phone Number be a number",
    }),
  whatsapp: z
    .string()
    .min(10)
    .max(10)
    .refine((val) => !isNaN(val as unknown as number), {
      message: "Phone Number be a number",
    }),
  collegeName: z
    .string()
    .min(3, { message: "Your College name should not be that short!" })
    .max(255),
  github: z
    .string()
    .min(3, { message: "Your github username should not be that short!" })
    .max(255),
  linkedIn: z
    .string()
    .min(3, { message: "Your LinkedIn Handle should not be that short!" })
    .max(255),
  question1: z.enum(["yes", "no"], {
    required_error: "You need to select yes ot no.",
  }),
  question2: z.string().min(3, { message: "Answer Required" }).max(255),
  year: z.string().min(1).max(1),
  password: z.string().min(6).max(100),
  confirmPassword: z.string().min(6).max(100),
});

const inter = Inter({ subsets: ["latin"] });
type Input = z.infer<typeof registerSchema>;

export default function Home() {
  const targetDate = new Date('December 20, 2023 00:00:00 GMT+0530').getTime()
  const [timeUp, setTimeUp] = useState(false);
const router = useRouter()
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const remainingTime = targetDate - now;

      if(remainingTime <= 0 && !timeUp) {
        setTimeUp(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);

  }, [targetDate]);

  const { toast } = useToast();
  const [formStep, setFormStep] = React.useState(0);
  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      confirmPassword: "",
      email: "",
      name: "",
      password: "",
      phoneNo: "",
      collegeName: "",
      Address: "",
      github: "",
      linkedIn: "",
      question1: "no",
      question2: "",
      whatsapp: "",
      year: "",
    },
  });

  function onSubmit(data: Input) {
    if (data.confirmPassword !== data.password) {
      toast({
        title: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    const {
      Address: ipAddress,
      collegeName: college,
      phoneNo: phone,
      question1: isFirstTime,
      question2: answer1,
      ...rest
    } = data;

    const renamedData = {
      ipAddress,
      college,
      phone,
      isFirstTime,
      answer1,
      ...rest,
    };

    fetch("/api/menteeReg", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(renamedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("response from Server", data);
        if (data.message === "User registered.") {
          toast({
            title: "Congratulations",
            description: "Successfully Registered for JWoC 2K24!",
          });
          router.push('/')
        } else {
          toast({
            title: "Something went Wrong",
            variant: "destructive",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(data);
  }

  return (
    // <div
    //   className={`${inter.className}  absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
    // >
    <>
    {!timeUp ?<CountDown targetDate={targetDate} title="Mentee" data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="500"/>:<div data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="500"
      className={`${inter.className} p-10  flex flex-col items-center justify-center`}
    >
      <Card className="w-80 md:w-[400px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Register as JWoC Mentee.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-3 overflow-x-hidden "
            >
              <motion.div
                className={cn("space-y-3", {
                  // hidden: formStep == 1,
                })}
                // formStep == 0 -> translateX == 0
                // formStep == 1 -> translateX == '-100%'
                animate={{
                  translateX: `-${formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                {/* name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name..." {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* student id */}
                <FormField
                  control={form.control}
                  name="phoneNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Phone Number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your WhatsApp Number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* CollegeName */}
                <FormField
                  control={form.control}
                  name="collegeName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>College Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your College Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* year */}
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year of study</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Enter your Study Year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[1, 2, 3, 4].map((year) => {
                            return (
                              <SelectItem value={year.toString()} key={year}>
                                Year {year}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                className={cn("space-y-3 absolute top-0 left-0 right-0", {
                  // hidden: formStep == 1,
                })}
                // formStep == 0 -> translateX == 0
                // formStep == 1 -> translateX == '-100%'
                animate={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                style={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                {/* name */}
                <FormField
                  control={form.control}
                  name="Address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Address" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* email */}
                <FormField
                  control={form.control}
                  name="github"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Github Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Github Username"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* student id */}
                <FormField
                  control={form.control}
                  name="linkedIn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Linked handle</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your LinkedIn Handle"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* CollegeName */}
                <FormField
                  control={form.control}
                  name="question1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Is it your First Participation in Opensource?
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="font-normal">Yes</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="font-normal">No</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* year */}
                <FormField
                  control={form.control}
                  name="question2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        What new things do you wish to learn through this event?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type Your Message Here"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                className={cn("space-y-3 absolute top-0 left-0 right-0", {
                  // hidden: formStep == 0,
                })}
                // formStep == 0 -> translateX == 100%
                // formStep == 1 -> translateX == 0
                animate={{
                  translateX: `${200 - formStep * 100}%`,
                }}
                style={{
                  translateX: `${200 - formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                {/* password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your password..."
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* confirm password */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Please confirm your password..."
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={"ghost"}
                  onClick={() => {
                    setFormStep((prev) => prev - 1);
                  }}
                  className={cn({
                    hidden: formStep == 0,
                  })}
                >
                  Go Back
                </Button>
                <Button
                  type="submit"
                  className={cn({
                    hidden: formStep == 0 || formStep == 1,
                  })}
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  variant={"outline"}
                  className={cn({
                    hidden: formStep == 2,
                  })}
                  onClick={() => {
                    // validation
                    if (formStep == 0) {
                      form.trigger([
                        "email",
                        "name",
                        "year",
                        "collegeName",
                        "phoneNo",
                      ]);
                      const emailState = form.getFieldState("email");
                      const nameState = form.getFieldState("name");
                      const yearState = form.getFieldState("year");
                      const collegeName = form.getFieldState("collegeName");
                      const phoneNo = form.getFieldState("phoneNo");

                      if (!emailState.isDirty || emailState.invalid) return;
                      if (!nameState.isDirty || nameState.invalid) return;
                      if (!yearState.isDirty || yearState.invalid) return;
                      if (!collegeName.isDirty || collegeName.invalid) return;
                      if (!phoneNo.isDirty || phoneNo.invalid) return;
                    } else if (formStep == 1) {
                      form.trigger([
                        "Address",
                        "github",
                        "linkedIn",
                        "question1",
                        "question2",
                      ]);
                      const addressState = form.getFieldState("Address");
                      const githubState = form.getFieldState("github");
                      const linkedInState = form.getFieldState("linkedIn");
                      const q1State = form.getFieldState("question1");
                      const q2State = form.getFieldState("question2");

                      if (!addressState.isDirty || addressState.invalid) return;
                      if (!githubState.isDirty || githubState.invalid) return;
                      if (!linkedInState.isDirty || linkedInState.invalid)
                        return;
                      //   if (!q1State.isDirty || q1State.invalid) return;
                      if (!q2State.isDirty || q2State.invalid) return;
                    }

                    setFormStep((prev) => prev + 1);
                  }}
                >
                  Next Step
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>}
    </>
    
  );
}