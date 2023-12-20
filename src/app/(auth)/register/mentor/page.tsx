"use client";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useEffect,useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
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
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import CountDown from "@/components/CountDown";
import { PulseLoader } from "react-spinners";
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
    required_error: "You need to select yes or no.",
  }),
  question2: z.string().min(1, { message: "Answer Required" }).max(500),
  year: z.string().min(1).max(1),
  otp: z.string().min(6).max(6),
  password: z.string().min(6).max(100),
  confirmPassword: z.string().min(6).max(100),
});

const inter = Inter({ subsets: ["latin"] });
type Input = z.infer<typeof registerSchema>;

export default function Home() {
  const targetDate = new Date('December 20, 2023 18:00:00 GMT+0530').getTime()
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [genOtp, setgenOtp] = useState("");
  const [isverified, setIsverified] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const [email, setEmail] = useState("");
  const [timeUp, setTimeUp] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [timesUp, setTimesUp] = useState(false);

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
  const router = useRouter()
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
      otp: "",
    },
  });

 async function onSubmit(data: Input) {
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
      question1: answer1,
      question2: answer2,
      ...rest
    } = data;

    const renamedData = {
      ipAddress,
      college,
      phone,
      answer2,
      answer1,
      isVerified : true,
      ...rest,
    };
    setLoading2(true);
    const resUserExists = await fetch("/api/userExist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "Mentor",
        email: renamedData.email,
      }),
    });

    const { user } = await resUserExists.json();

    setLoading2(false);

    if (user) {
      toast({
        title: "User Already Exist",
        variant: "destructive",
      });
      return;
    }

    setLoading2(true);
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(renamedData),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("response from Server", data);
        setLoading2(false);
        if (data.message === "User registered.") {
          toast({
            title: "Congratulations",
            description: "Successfully Registered for JWoC 2K24!",
          });
        router.push('/login')
        } else {
          toast({
            title: "Something went Wrong",
            variant: "destructive",
          });
        }
      })
      .catch((error) => {
        setLoading2(false);
        console.error(error);
      });
    // alert(JSON.stringify(data, null, 4));

    console.log(data);
  }

  function generateOTP() {
    const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
    const otpLength = 6;
    let otp = "";
    for (let i = 1; i <= otpLength; i++) {
      const index = Math.floor(Math.random() * digits.length);
      otp = otp + digits[index];
    }
    return otp;
  }
  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };


  async function handleOTP(email: string) {
    setIsverified(false);
    const validRes = isValidEmail(email);
    if (!validRes) {
      toast({
        title: "Enter a Valid Email",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setFirstTime(false);
    
    toast({
      title: "Direction",
      description: "Have sent OTP to your email",
    });
    const OTP = await generateOTP().toUpperCase();
    setgenOtp(OTP);
    setTimeout(() => {
      setLoading(false);
    }, 10000);

    const resUserExists = await fetch("/api/verifyEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp: OTP,
        email: email,
      }),
    });
    console.log("resUserExists", resUserExists);
    if (resUserExists.ok) {
      setOtpSent(true);
      // setIsverified(true);
      // toast({
      //   title: "Congratulations",
      //   description: "You have successfully verified your email",
      // });
      return;
    }
    setOtpSent(false);
    toast({
      title: "Failed to send OTP",
      variant: "destructive",
    });
  }


  function matchcOTP(otp: string) {
    // console.log(otpSent);
    console.log("otp   : ", genOtp);

    if (otp.trim() === genOtp) {
      setIsverified(true);
      toast({
        title: "Congratulations",
        description: "You have successfully verified your email",
      });
      return;
    }
    toast({
      title: "Wrong OTP Entered",
      variant: "destructive",
    });
  }
  return (
    <>
    {!timeUp?<CountDown targetDate={targetDate} title="Mentor"/>:<div
      className={`${inter.className}  p-10  flex flex-col items-center justify-center`}
    >
      <Card className="w-80 md:w-[400px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Register as JWoC Mentor.</CardDescription>
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
                        <div className="flex flex-row items-center space-x-2">
                          <FormItem
                            className={`${otpSent ? `w-[100%]` : `w-[70%]`}`}
                          >
                            <FormLabel>
                              <span>Email</span>
                            </FormLabel>
                            <FormControl>
                              {/* {!otpSent ? ( */}
                              <Input
                                placeholder="Enter your email..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                          {/* Button to verify email */}
                          <Button
                            type="button"
                            className={`${cn({
                              hidden: formStep === 2,
                            })} mt-8 w-[30%]`}
                          >
                            {!loading ? (
                              <>
                                {!firstTime ? (
                                  <>
                                    {/* {timesUp ? ( */}
                                      <span
                                        onClick={() => handleOTP(field.value)}
                                      >
                                        Resend OTP
                                      </span>
                                    {/* ) : (
                                      <span>00:{seconds}</span>
                                    )} */}
                                  </>
                                ) : (
                                  <span onClick={() => handleOTP(field.value)}>
                                    Verify
                                  </span>
                                )}
                              </>
                            ) : (
                              <span>
                                <PulseLoader size={5} color="#36d7b7" />
                              </span>
                            )}
                          </Button>
                        </div>
                      )}
                    />
                    {otpSent && (
                      <FormField
                        control={form.control}
                        name="otp"
                        disabled={isverified}
                        render={({ field }) => (
                          <div className="flex flex-row items-center space-x-2">
                            <FormItem className="w-[70%]">
                              <FormLabel>
                                <span>OTP</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter your OTP..."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                            <Button
                              type="button"
                              className={`${cn({
                                hidden: formStep === 2,
                              })} mt-8 w-[30%]`}
                            >
                              {!isverified ? (
                                <span onClick={() => matchcOTP(field.value)}>
                                  Match
                                </span>
                              ) : (
                                <>
                                  {" "}
                                  {loading ? (
                                    <span
                                      onClick={() => matchcOTP(field.value)}
                                    >
                                      Match
                                    </span>
                                  ) : (
                                    <CheckCircle2 color="#00ff00" />
                                  )}
                                </>
                              )}
                            </Button>
                            {/* )} */}
                          </div>
                        )}
                      />
                    )}
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
