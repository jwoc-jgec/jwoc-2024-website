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
import { useToast } from "@/components/ui/use-toast";
import { FaExclamationCircle, FaYoutubeSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
interface UserData {
  name: string;
  email: string;
  phone: string;
  projectId: string;
  PRMerged: number;
}
interface AllData {
  id: string;
  name: string;
  email: string;
  phone: string;
  PRMerged: number;
  registeredProjects: [
    {
      id: string;
      projectName: string;
      projectDescription: string;
      projectTags: string[];
      videoLink: string;
      projectTypes: string;
      projectLink: string;
    }
  ];
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
interface projectDatas {
  id: string;
  projectName: string;
  projectDescription: string;
  projectTags: string[];
  videoLink: string;
  projectTypes: string;
  projectLink: string;
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
  const [allData, setAllData] = useState<AllData>({
    id: "",
    name: "",
    email: "",
    phone: "",
    PRMerged: 0,
    registeredProjects: [
      {
        id: "",
        projectName: "",
        projectDescription: "",
        projectTags: [],
        videoLink: "",
        projectTypes: "",
        projectLink: "",
      },
    ],
  });
  // const [noOfUpload, setNoOfUplolad] = useState<number>(0);
  const [projectData, setProjectData] = useState<projectData>({
    ProjectName: "",
    projectDescription: "",
    projectType: "",
    projectTags: "",
    projectLink: "",
    projectVideoLink: "",
    mentorId: "",
  });
  const { toast } = useToast();
  const { data: session, status: sessionStatus } = useSession();
  useEffect(() => {
    const fetchData = async () => {
      if (sessionStatus === "authenticated") {
        if (session && session.user) {
          // @ts-ignore
          const userId = session.user.id;
          console.log("sessionStatus --- ", userId);
          await getUesrData(userId);
        }
      }
    };

    fetchData();
  }, [sessionStatus]);

  async function getUesrData(userId: any) {
    const type = "Mentor";
    try {
      console.log("entered");
      console.log("userId --->");

      let resUser = await fetch(`api/project?mentorId=${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log("user --- > ", resUser);
      if (resUser.ok) {
        const { message, mentor, status } = await resUser.json();
        console.log("Mentor:", mentor);
        const userDataFromBackend = mentor[0];
        setAllData({
          id: userDataFromBackend._id,
          name: userDataFromBackend.name,
          email: userDataFromBackend.email,
          phone: userDataFromBackend.phone,
          PRMerged: userDataFromBackend.PRMerged,
          registeredProjects: userDataFromBackend.registeredProjects,
        });
      }
    } catch (error) {
      toast({
        title: "Failed to retrieve User Data",
        variant: "destructive",
      });
      console.log("Failed to retrieve User Data");
      console.log("error", error);
    }
  }

  function manageTechStack(ele: string) {
    const techStackArray = ele.split(" ");
    return techStackArray;
  }
  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const techStackArray = await manageTechStack(projectData.projectTags);
    try {
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
          projectTags: techStackArray,
          videoLink: projectData.projectVideoLink,
          mentorId: allData.id,
        }),
      });
      console.log("response from backend ", response);

      if (response.ok) {
        toast({
          title: "Congratulations",
          description: "You have successfully registered your project",
        });
        // console.log("Project submitted successfully!");
      } else {
        console.error("Failed to submit project");
      }
    } catch (error) {
      toast({
        title: "Error submitting project",
        variant: "destructive",
      });
      console.error("Error submitting project", error);
      // Handle the error or show a user-friendly message
    }
  };

  return (
    <div className="flex flex-col pt-5 gap-10 items-center justify-center font-sans">
      <ProfileCard allData={allData} />
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="  bg-red-400 shadow-lg backdrop-blur-[40px] flex flex-row gap-5 p-[2vh] mt-[3vh] rounded-[10px] text-white"
      >
        <span className=" font-mono text-xl  ">Logout</span>
        <TbLogout fontSize="1.3em" />
      </button>
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="text-3xl font-bold text-white">Your Projects</h1>
        <p className="text-xl text-white">
          You have uploaded {allData.registeredProjects.length}/3 projects
        </p>
      </div>
      <div className="flex gap-10 pb-20  flex-col md:flex-row  flex-wrap items-center justify-center">
        {allData.registeredProjects.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
        <Dialog>
          <DialogTrigger>
            {allData.registeredProjects.length < 3 && (
              <AddProjectCard
                noOfProjects={allData.registeredProjects.length}
              />
            )}
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <ProjectForm
              noOfUpload={allData.registeredProjects.length}
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
  projectName,
  projectDescription,
  projectLink,
  videoLink,
  projectTags,
  projectTypes,
}: projectDatas) {
  return (
    <div className="backdrop-blur-2xl z-50 border-2 h-72 border-gray-400 py-8 p-5 rounded-lg w-80 md:w-96">
      <div className="flex gap-5 items-center pb-5 justify-between">
        <p className="text-2xl font-bold text-white">{projectName}</p>
        {/* <div className="text-xs flex items-center justify-center bg-blue-200 text-blue-700 border-dotted px-2 py-0.5 rounded-full">
        <p className="font-bold">! </p>
      </div> */}
        <div className="flex flex-col items-center">
          <FaExclamationCircle
            fontSize="1.6rem"
            color="#5a5a5a"
            title="Decision Pending"
          />
          <p className="text-[#5a5a5a] text-[12px]">Decision Pending</p>
        </div>
      </div>
      <div className="flex gap-5 mb-5 text-white">
        {/* <GithubIcon size={28} href={projectLink} /> */}
        <FaGithub size={28} href={projectLink} className="cursor-pointer" />
        <FaYoutubeSquare
          size={28}
          href={videoLink}
          className="cursor-pointer"
        />
      </div>
      <p className="text-neutral-300 line-clamp-5">
        {projectDescription.length > 100
          ? projectDescription.slice(0, 100) + "..."
          : projectDescription}
      </p>
      {/* <p className="text-white">{projectTags.split(" ")}</p> */}
      <div className="flex gap-3 flex-wrap mt-4 bottom-2">
        {projectTags.map((txt, i) => {
          return (
            <p className="bg-[#5a5a5a59] text-white p-1 rounded-md">#{txt}</p>
          );
        })}
      </div>
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
      <div className=" focus:bg-[#FF42D947] text-white p-8 w-full max-w-md mx-auto rounded-lg shadow-lg">
        <h1 className="text-2xl text-black font-bold mb-6 text-center">
          Upload Project Details
        </h1>
        <form onSubmit={submitForm} className="h-[400px] overflow-y-scroll">
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
              placeholder="Enter project tech stacks, space seperatedly"
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
              // required
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

          {/* <div className="mb-4 text-black">
            <label htmlFor="techStack" className="block mb-1">
              Tech Stack
            </label>
            <input
              type="text"
              id="ProjectTechStack"
              name="ProjectTechStack"
              className="w-full p-2 border-b border-white bg-transparent focus:outline-none focus:border-gray-400"
              placeholder="Enter project tech stacks, space seperatedly"
              autoComplete="off"
              required
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  projectTags: e.target.value,
                })
              }
            />
          </div> */}
          <div className="text-center">
            <button
              type="submit"
              className={
                "bg-black text-white px-4 py-2 w-full  rounded-[5px] hover:bg-gray-300 transition duration-300"
              }
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
