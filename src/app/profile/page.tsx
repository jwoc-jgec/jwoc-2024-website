"use client";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import "../../css/UserCard.css";
import ProfileCard from "@/components/profileCard";
import { TbLogout } from "react-icons/tb";
import "../globals.css";
import { GithubIcon, PlusCircle, YoutubeIcon } from "lucide-react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
interface UserData {
  name: string;
  email: string;
  phone: string;
  projectId: string;
  PRMerged: number;
}
interface projectData {
  ProjectName: string;
  projectDescription: string;
  projectType: string;
  projectTags: string;
  projectLink: string;
  projectVideoLink: string;
  mentorId: string;
}
export default function ProfilePage() {
  const router = useRouter();
  const [uData, setData] = useState<any>({
    email: "",
  });
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
    projectId: "",
    PRMerged: 0,
  });
  const [noOfUpload, setNoOfUplolad] = useState<number>(0);
  const [projectData, setProjectData] = useState<projectData>({
    ProjectName: "",
    projectDescription: "",
    projectType: "",
    projectTags: "",
    projectLink: "",
    projectVideoLink: "",
    mentorId: "",
  });

  const { data: session, status: sessionStatus } = useSession();
  useEffect(() => {
    if (sessionStatus === "authenticated") {
      getUesrData();
    }
  }, [uData, sessionStatus]);

  useEffect(() => {
    if (session) {
      console.log("data  - prof", session.user?.email);
      console.log("session - prof", sessionStatus);
      // let cred = session.user?.email
      setData(session);
    } else {
      console.log("data  - prof - den");
    }
  }, [session, router]);

  useEffect(() => {
    const fetchData = async () => {
      if (sessionStatus === "authenticated") {
        await getUesrData();
      }
    };

    fetchData();
  }, [uData, sessionStatus]);

  async function getUesrData() {
    // if (uData && uData.email) {
    console.log("uData.email", uData.user.email);
    console.log("uData", uData);
    const email = uData.user.email;
    const type = "Mentor";
    try {
      console.log("entered");

      const resUserExists = await fetch("api/userExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, email }),
      });
      const { user } = await resUserExists.json();
      console.log("user --- ", user);
      setProjectData((prev) => ({
        ...prev,
        mentorId: user._id,
      }));
      setUserData(user);
      setNoOfUplolad(user.RegisteredProjectId.length);

      console.log("userData", userData);
    } catch (error) {
      toast.error("Failed to retrieve User Data");
      console.log("Failed to retrieve User Data");
      console.log("error", error);
    }
  }

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("hit 1");

    try {
      // Make a POST request to /api/project
      console.log("project data", projectData);

      const response = await fetch("/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectName: projectData.ProjectName,
          projectLink: projectData.projectLink,
          projectDescription: projectData.projectDescription,
          projectTypes: projectData.projectType,
          projectTags: projectData.projectTags,
          videoLink: projectData.projectVideoLink,
          mentorId: projectData.mentorId,
        }),
      });
      console.log("response from backend ", response);

      if (response.ok) {
        console.log("Project submitted successfully!");
      } else {
        console.error("Failed to submit project");
      }
    } catch (error) {
      console.error("Error submitting project", error);
      // Handle the error or show a user-friendly message
    }
  };

  // console.log("userData", userData.name);

  const projects: projectData[] = [
    {
      ProjectName: "Project Name",
      projectDescription:
        "loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum dolor sit amet ",
      projectType: "Web",
      projectTags: "Tech Stack",
      projectLink: "",
      projectVideoLink: "",
      mentorId: "",
    },
    {
      ProjectName: "Project Name",
      projectDescription: "Project Description",
      projectType: "Web",
      projectTags: "Tech Stack",
      projectLink: "",
      projectVideoLink: "",
      mentorId: "",
    },
  ];

  return (
    <div className="flex flex-col pt-5 gap-10 items-center justify-center font-sans">
      <ProfileCard userData={userData} />
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="  bg-[#debad647] shadow-lg backdrop-blur-[40px] flex flex-row gap-5 p-[2vh] mt-[3vh] rounded-[10px] text-white"
      >
        <span className=" font-mono text-xl ">Logout</span>
        <TbLogout fontSize="1.3em" />
      </button>
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="text-3xl font-bold text-white">Your Projects</h1>
        <p className="text-xl text-white">
          You have uploaded {noOfUpload}/3 projects
        </p>
      </div>
      <div className="flex gap-10 pb-20  flex-col md:flex-row  flex-wrap items-center justify-center">
        {projects.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
        <Dialog>
          <DialogTrigger>
            {noOfUpload < 3 && <AddProjectCard noOfProjects={noOfUpload} />}
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <ProjectForm
              noOfUpload={noOfUpload}
              submitForm={submitForm}
              setProjectData={setProjectData}
              projectData={projectData}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function AddProjectCard({ noOfProjects }: { noOfProjects: number }) {
  return (
    <div className="w-80 cursor-pointer border-gray-400 border-2  backdrop-blur-2xl  rounded-xl flex items-center flex-col py-10 px-4">
      <PlusCircle size={100} className="mb-5 text-gray-400" />
      <p className="text-2xl text-gray-400">Add Project</p>
      <p className="text-xl text-gray-400">
        Uploaded Projects: {noOfProjects}/3
      </p>
    </div>
  );
}

function ProjectCard({
  ProjectName,
  projectDescription,
  projectLink,
  projectTags,
  projectVideoLink,
}: projectData) {
  return (
    <div className="backdrop-blur-2xl z-50 border-2 h-72 border-gray-400 py-8 p-5 rounded-lg w-80 md:w-96">
      <div className="flex gap-5 items-center pb-5">
        <p className="text-2xl font-bold text-white">{ProjectName}</p>
        <div className="text-xs flex items-center justify-center bg-blue-200 text-blue-700 border-dotted px-2 py-0.5 rounded-full">
          <p className="font-bold">! </p>
        </div>
      </div>
      <div className="flex gap-5 mb-5 text-white">
        <GithubIcon size={28} href={projectLink} className="cursor-pointer" />
        <YoutubeIcon
          size={28}
          href={projectVideoLink}
          className="cursor-pointer"
        />
      </div>
      <p className="text-neutral-300 line-clamp-5">{projectDescription}</p>
    </div>
  );
}

function ProjectForm({
  noOfUpload,
  projectData,
  setProjectData,
  submitForm,
}: {
  noOfUpload: number;
  submitForm: (e: React.FormEvent) => void;
  setProjectData: React.Dispatch<React.SetStateAction<projectData>>;
  projectData: projectData;
}) {
  return (
    <div className="flex justify-center text-black items-center">
      <div className=" backdrop-blur-[40px] focus:bg-[#FF42D947] focus:backdrop-blur-[40px] text-white p-8 w-full max-w-md mx-auto rounded-lg shadow-lg">
        <h1 className="text-2xl text-black font-bold mb-6">
          Upload Project Details &nbsp; {noOfUpload}/3
        </h1>
        <form onSubmit={submitForm}>
          <div className="mb-4 text-black">
            <label htmlFor="projectName" className="block mb-1">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              className="w-full p-2 border-b border-white bg-transparent focus:outline-none focus:border-gray-400"
              placeholder="Enter project name"
              autoComplete="off"
              required
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  ProjectName: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-4 text-black">
            <label htmlFor="ProjectLink" className="block mb-1">
              Project Link
            </label>
            <input
              type="text"
              id="ProjectLink"
              name="ProjectLink"
              className="w-full p-2 border-b border-white bg-transparent focus:outline-none focus:border-gray-400"
              placeholder="Enter project Github Link"
              autoComplete="off"
              required
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  projectLink: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-4 text-black">
            <label htmlFor="projectType" className="block mb-1">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              className="w-full p-2 border-b border-white bg-transparent focus:outline-none focus:border-gray-400"
              required
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  projectType: e.target.value,
                })
              }
            >
              <option className="text-black" value="">
                Select Project Type
              </option>
              <option className="text-black" value="Web">
                Web
              </option>
              <option className="text-black" value="AI/ML">
                AI/ML
              </option>
              <option className="text-black" value="Blockchain">
                Blockchain
              </option>
              <option className="text-black" value="Android">
                Android
              </option>
              <option className="text-black" value="Android">
                Other
              </option>
            </select>
          </div>
          <div className="mb-4 text-black">
            <label htmlFor="ProjectTags" className="block mb-1">
              Project Tags
            </label>
            <input
              type="text"
              id="ProjectTags"
              name="ProjectTags"
              className="w-full p-2 border-b border-white bg-transparent focus:outline-none focus:border-gray-400"
              placeholder="Enter Tech stack of this project"
              autoComplete="off"
              required
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  projectTags: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-4 text-black">
            <label htmlFor="ProjectYtLink" className="block mb-1">
              YouTube Link (Project Description)
            </label>
            <input
              type="url"
              id="ProjectYtLink"
              name="ProjectYtLink"
              className="w-full p-2 border-b border-white bg-transparent focus:outline-none focus:border-gray-400"
              placeholder="Enter YouTube link"
              autoComplete="off"
              required
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  projectVideoLink: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-4 text-black">
            <label htmlFor="projectDescription" className="block mb-1">
              Project Description (max 50 words)
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              className="w-full p-2 border-b border-white bg-transparent focus:outline-none focus:border-gray-400 resize-none"
              placeholder="Enter project description"
              autoComplete="off"
              required
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  projectDescription: e.target.value,
                })
              }
            ></textarea>
          </div>

          <div className="mb-4 text-black">
            <label htmlFor="techStack" className="block mb-1">
              Tech Stack
            </label>
            <input
              type="text"
              id="ProjectYtLink"
              name="ProjectYtLink"
              className="w-full p-2 border-b border-white bg-transparent focus:outline-none focus:border-gray-400"
              placeholder="Enter the tech stack"
              autoComplete="off"
              required
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  projectVideoLink: e.target.value,
                })
              }
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={`bg-black text-white px-4 py-2 w-full  rounded-[5px] hover:bg-gray-300 transition duration-300`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
