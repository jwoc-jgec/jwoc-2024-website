"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const questions = [
  { question: "1. Enter your name ...", ansType: "name" },
  { question: "2. Enter your email ...", ansType: "email" },
  { question: "3. Enter your password...", ansType: "password" },
  { question: "4. What is your Phone No ?", ansType: "phone" },
  { question: "5. What is your whatsapp No ?", ansType: "whatsapp" },
  { question: "6. Where do you live ?", ansType: "ipAddress" },
  { question: "7. What your College name...", ansType: "college" },
  { question: "8. Enter Current year of study...", ansType: "year" },
  { question: "9. Enter your Github handle...", ansType: "github" },
  { question: "10. Enter your linkedIn handle...", ansType: "linkedIn" },
  {
    question: "11. Do you have any previous mentorship experience ?",
    ansType: "question1",
  },
  {
    question: "12. What drives you for contributing to Open Source ?",
    ansType: "question2",
  },
];
const questionsMentee = [
  { question: "1. Enter your name ...", ansType: "name" },
  { question: "2. Enter your email ...", ansType: "email" },
  { question: "3. Enter your password...", ansType: "password" },
  { question: "4. What is your Phone No ?", ansType: "phone" },
  { question: "5. What is your whatsapp No ?", ansType: "whatsapp" },
  { question: "6. Where do you live ?", ansType: "ipAddress" },
  { question: "7. What your College name...", ansType: "college" },
  { question: "8. Enter Current year of study...", ansType: "year" },
  { question: "9. Enter your Github handle...", ansType: "github" },
  { question: "10. Enter your linkedIn handle...", ansType: "linkedIn" },
  {
    question:
      "11. 'First participation in Open Source event (Ans in Yes / No )",
    ansType: "isFirstTime",
  },
  {
    question:
      "12. What new things do you wish to try and learn through this event ?",
    ansType: "question1",
  },
];

export default function RegisterForm() {
  const [error, setError] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [regType, setRegType] = useState("");
  const [mentoranswers, setMentorAnswers] = useState({
    type: "Mentor",
    name: "",
    email: "",
    password: "",
    phone: "",
    whatsapp: "",
    ipAddress: "",
    college: "",
    year: 0,
    github: "",
    linkedIn: "",
    question1: "",
    question2: "",
  });
  const [menteeanswers, setMenteeAnswers] = useState({
    type: "Mentee",
    name: "",
    email: "",
    password: "",
    phone: "",
    whatsapp: "",
    ipAddress: "",
    college: "",
    year: 0,
    github: "",
    linkedIn: "",
    isFirstTime: false,
    question1: "",
  });
  const [showQuestion, setShowQuestion] = useState(false);

  const router = useRouter();

  const { data: session, status: sessionStatus } = useSession();
  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/profile");
    }
  }, [sessionStatus, router]);

  useEffect(() => {
    // Delay the appearance of the question to create an entrance animation
    const timeoutId = setTimeout(() => {
      setShowQuestion(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [currentQuestionIndex]);

  const handleAnswerChange = (e: any) => {
    e.preventDefault();
    regType === "Mentor"
      && setMentorAnswers((prevMenteeAnswers) => ({
          ...prevMenteeAnswers,
          [questions[currentQuestionIndex].ansType]: e.target.value,
        }))
  };
  const handleAnswerChangeMentee = (e: any) => {
    e.preventDefault();
    regType === "Mentee" &&  questions[currentQuestionIndex].ansType === "isFirstTime"
    && e.target.value.trim().toLowerCase() === "yes"
      ? setMenteeAnswers((prevMenteeAnswers) => ({
          ...prevMenteeAnswers,
          [questions[currentQuestionIndex].ansType]: true,
        }))
    : setMenteeAnswers((prevMenteeAnswers) => ({
        ...prevMenteeAnswers,
        [questions[currentQuestionIndex].ansType]: e.target.value,
      }));
  };

  const handleNextQuestion = (e: any) => {
    e.preventDefault();
    setShowQuestion(false);
    // Add a delay to ensure fade-out animation completes before updating the question
    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }, 100);
  };

  const handlePrevQuestion = (e: any) => {
    e.preventDefault();
    setShowQuestion(false);

    // Add a delay to ensure fade-out animation completes before updating the question
    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }, 100);
  };

  const handleRegTypeMentee = (e: any) => {
    e.preventDefault();
    setRegType("Mentee");
  };
  const handleRegTypeMentor = (e: any) => {
    e.preventDefault();
    setRegType("Mentor");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const isValidEmail = (email: string) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    };
    if (
      !mentoranswers.name ||
      !mentoranswers.email ||
      !mentoranswers.password ||
      !mentoranswers.password ||
      !mentoranswers.whatsapp ||
      !mentoranswers.phone ||
      !mentoranswers.ipAddress ||
      !mentoranswers.college ||
      !mentoranswers.year ||
      !mentoranswers.github ||
      !mentoranswers.linkedIn ||
      !mentoranswers.question1 ||
      !mentoranswers.question2
    ) {
      toast.error("All fields are necessary.");
      setError("All fields are necessary.");
      return;
    }
    if (!isValidEmail(mentoranswers.email)) {
      toast.error("Email is invalid");
      setError("Email is invalid");
      return;
    }

    if (!mentoranswers.password || mentoranswers.password.length < 8) {
      toast.error("Password is invalid");
      setError("Password is invalid");
      return;
    }
    if (!mentoranswers.phone || mentoranswers.phone.length < 8) {
      toast.error("Phone No  is invalid");
      setError("Phone No is invalid");
      return;
    }
    if (!mentoranswers.whatsapp || mentoranswers.whatsapp.length < 8) {
      toast.error("whatsapp No  is invalid");
      setError("whatsapp is invalid");
      return;
    }
    if (mentoranswers.year < 0) {
      toast.error("Year of is invalid");
      setError("Year of is invalid");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: mentoranswers.type,
          email: mentoranswers.email,
        }),
      });
      const { user } = await resUserExists.json();
      console.log("user", user);

      if (user) {
        setError("User already exists.");
        return;
      }
      console.log("ans", mentoranswers);

      console.log(" name: mentoranswers.name", mentoranswers.name);

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: mentoranswers.name,
          email: mentoranswers.email,
          password: mentoranswers.password,
          phone: mentoranswers.phone,
          whatsapp: mentoranswers.whatsapp,
          ipAddress: mentoranswers.ipAddress,
          college: mentoranswers.college,
          year: mentoranswers.year,
          github: mentoranswers.github,
          linkedIn: mentoranswers.linkedIn,
          answer1: mentoranswers.question1,
          answer2: mentoranswers.question2,
        }),
      });
      console.log("res", res);

      if (res.ok) {
        const form = e.target;
        toast.success("Registered Successfully!");
        form.reset();
        router.push("/login");
      } else {
        toast.error("Something went Wrong :(");
        console.log("User registration failed.");
      }
    } catch (error) {
      toast.error("Error during registration :(");
      console.log("Error during registration: ", error);
    }
  };





  //  For Mentee Registration
  const handleSubmitmentee = async (e: any) => {
    e.preventDefault();
    const isValidEmail = (email: string) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    };
    // if (
    //   !menteeanswers.name ||
    //   !menteeanswers.email ||
    //   !menteeanswers.password ||
    //   !menteeanswers.whatsapp ||
    //   !menteeanswers.phone ||
    //   !menteeanswers.ipAddress ||
    //   !menteeanswers.college ||
    //   !menteeanswers.year ||
    //   !menteeanswers.github ||
    //   !menteeanswers.linkedIn ||
    //   !menteeanswers.question1
    // ) {
    //   toast.error("All fields are necessary.");
    //   setError("All fields are necessary.");
    //   return;
    // }
    if (!isValidEmail(menteeanswers.email)) {
      toast.error("Email is invalid");
      setError("Email is invalid");
      return;
    }

    if (!menteeanswers.password || menteeanswers.password.length < 8) {
      toast.error("Password is invalid");
      setError("Password is invalid");
      return;
    }
    if (!menteeanswers.phone || menteeanswers.phone.length < 8) {
      toast.error("Phone No  is invalid");
      setError("Phone No is invalid");
      return;
    }
    if (!menteeanswers.whatsapp || menteeanswers.whatsapp.length < 8) {
      toast.error("whatsapp No  is invalid");
      setError("whatsapp is invalid");
      return;
    }
    if (menteeanswers.year < 0) {
      toast.error("Year of is invalid");
      setError("Year of is invalid");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: menteeanswers.type,
          email: menteeanswers.email,
        }),
      });
      const { user } = await resUserExists.json();
      console.log("user", user);

      if (user) {
        setError("User already exists.");
        return;
      }
      console.log("ans", menteeanswers);

      console.log(" name: menteeanswers.name", menteeanswers.name);

      const res = await fetch("api/menteeReg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: menteeanswers.name,
          email: menteeanswers.email,
          password: menteeanswers.password,
          phone: menteeanswers.phone,
          whatsapp: menteeanswers.whatsapp,
          ipAddress: menteeanswers.ipAddress,
          college: menteeanswers.college,
          year: menteeanswers.year,
          github: menteeanswers.github,
          linkedIn: menteeanswers.linkedIn,
          isFirstTime: menteeanswers.isFirstTime,
          answer1: menteeanswers.question1,
        }),
      });
      console.log("res", res);

      if (res.ok) {
        const form = e.target;
        toast.success("Registered Successfully!");
        form.reset();
        router.push("/login");
      } else {
        toast.error("Something went Wrong :(");
        console.log("User registration failed.");
      }
    } catch (error) {
      toast.error("Error during registration :(");
      console.log("Error during registration: ", error);
    }
  };
  return (
    <div className="flex items-center justify-center h-[80vh]">
      {regType.length <= 0 && (
        <div className="flex flex-col items-center gap-5 py-10 px-8 rounded-md justify-center text-xl bg-slate-800">
          <button
            onClick={handleRegTypeMentee}
            className="text-white  bg-blue-950 border border-white p-2 rounded"
          >
            Mentee Registration
          </button>
          <button
            onClick={handleRegTypeMentor}
            className="text-white  bg-blue-950 border border-white p-2 rounded"
          >
            Mentor Registration
          </button>
        </div>
      )
      }
      { regType.length > 0 && regType === "Mentor" && (
        <form
          onSubmit={handleSubmit}
          className="flex text-2xl w-3/5 transparent bg-slate-800 "
        >
          {currentQuestionIndex >= 0 && (
            <div
              className={` p-8 rounded-lg shadow-lg h-2/5 w-full fill-transparent bg-slate-800   ${
                showQuestion ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <h2 className="text-wheat mt-6 mb-6 text-3xl">
                {questions[currentQuestionIndex].question}
              </h2>
              {questions[currentQuestionIndex].ansType === "password" ? (
                <input
                  type="password"
                  value={
                    (mentoranswers as any)[
                      questions[currentQuestionIndex].ansType
                    ]
                  }
                  onChange={handleAnswerChange}
                  className=" mt-8 mb-8 w-full flex justify-center items-center p-5 border-gray-300 rounded text-2xl text-black"
                />
              ) : (
                <input
                  type="text"
                  value={
                    (mentoranswers as any)[
                      questions[currentQuestionIndex].ansType
                    ]
                  }
                  onChange={handleAnswerChange}
                  className=" mt-8 mb-8 w-full flex justify-center items-center p-5 border-gray-300 rounded text-2xl text-black"
                />
              )}
              <div className="flex justify-between text-2xl ">
                {currentQuestionIndex > 0 && (
                  <button
                    onClick={handlePrevQuestion}
                    className="text-wheat backdrop-blur-md bg-blue-950 border border-wheat p-2 rounded"
                  >
                    Previous
                  </button>
                )}
                {currentQuestionIndex < questions.length - 1 ? (
                  <button
                    onClick={handleNextQuestion}
                    className="text-wheat backdrop-blur-md bg-blue-950 border border-wheat p-2 rounded"
                  >
                    Next
                  </button>
                ) : (
                  <button className="text-wheat backdrop-blur-md bg-blue-950 border border-wheat p-2 rounded">
                    Submit
                  </button>
                )}
              </div>
            </div>
          )}
        </form>
      )}
      {regType.length > 0 && regType === "Mentee" && (
        <form
          onSubmit={handleSubmitmentee}
          className="flex text-2xl w-3/5 transparent bg-slate-800"
        >
          {currentQuestionIndex >= 0 && (
            <div
              className={` p-8 rounded-lg shadow-lg h-2/5 w-full fill-transparent bg-slate-800 ${
                showQuestion ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <h2 className="text-wheat mt-6 mb-6 text-3xl">
                {questions[currentQuestionIndex].question}
              </h2>
              {questions[currentQuestionIndex].ansType === "password" ? (
                <input
                  type="password"
                  value={
                    (menteeanswers as any)[
                      questions[currentQuestionIndex].ansType
                    ]
                  }
                  onChange={handleAnswerChangeMentee}
                  className=" mt-8 mb-8 w-full flex justify-center items-center p-5 border-gray-300 rounded text-2xl text-black"
                />
              ) : (
                <input
                  type="text"
                  value={
                    (menteeanswers as any)[
                      questions[currentQuestionIndex].ansType
                    ]
                  }
                  onChange={handleAnswerChangeMentee}
                  className=" mt-8 mb-8 w-full flex justify-center items-center p-5 border-gray-300 rounded text-2xl text-black"
                />
              )}
              <div className="flex justify-between text-2xl ">
                {currentQuestionIndex > 0 && (
                  <button
                    onClick={handlePrevQuestion}
                    className="text-wheat backdrop-blur-md bg-blue-950 border border-wheat p-2 rounded"
                  >
                    Previous
                  </button>
                )}
                {currentQuestionIndex < questions.length - 1 ? (
                  <button
                    onClick={handleNextQuestion}
                    className="text-wheat backdrop-blur-md bg-blue-950 border border-wheat p-2 rounded"
                  >
                    Next
                  </button>
                ) : (
                  <button className="text-wheat backdrop-blur-md bg-blue-950 border border-wheat p-2 rounded">
                    Submit
                  </button>
                )}
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
