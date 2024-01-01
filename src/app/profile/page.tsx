"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import "../../css/UserCard.css";
import ProfileCard from "@/components/profileCard";
import { TbLogout, TbPlaceholder } from "react-icons/tb";
import "../globals.css";
import { EditIcon, PlusCircle, SaveIcon } from "lucide-react";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { FaExclamationCircle, FaYoutubeSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdCancelPresentation, MdDelete } from "react-icons/md";
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
      _id: string;
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
  _id: string;
  projectName: string;
  projectDescription: string;
  projectTags: string[];
  videoLink: string;
  projectTypes: string;
  projectLink: string;
}

export default function ProfilePage() {
  
  console.log = () => {};
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
        _id: "",
        projectName: "",
        projectDescription: "",
        projectTags: [],
        videoLink: "",
        projectTypes: "",
        projectLink: "",
      },
    ],
  });
  const { toast } = useToast();
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
  const { data: session, status: sessionStatus } = useSession();
  // const router = useRouter()
  useEffect(() => {
    const fetchData = async () => {
      if (sessionStatus === "authenticated") {
        if (session && session.user) {
          // @ts-ignore
          const userId = session.user.id;
          await getUesrData(userId);
        }
        console.log("allData", allData);
      }
    };

    fetchData();
  }, [sessionStatus]);

  async function getUesrData(userId: any) {
    const type = "Mentor";
    console.log(process.env.NEXT_PUBLIC_BACKEND_SECURITY_TOKEN);
    try {
      let resUser = await fetch(`api/project?mentorId=${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "secureToken": `${process.env.NEXT_PUBLIC_BACKEND_SECURITY_TOKEN}`
        },
      });
      // console.log("user --- > ", resUser);
      if (resUser.ok) {
        const { message, mentor, status } = await resUser.json();
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
    const techStackArray = await manageTechStack(projectData.projectTags.trim());
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

      if (response.ok) {
        toast({
          title: "Congratulations",
          description: "You have successfully registered your project",
        });

        window.location.reload();
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
  console.log("allData.registeredProjects", allData.registeredProjects);

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

// interface EditableFieldProps {
//   value: string;
//   onChange: (value: string) => void;
// }

// export const EditableField: React.FC<EditableFieldProps> = ({
//   value,
//   onChange,
// }) => {
//   const [editedValue, setEditedValue] = useState(value);
//   const handleSaveClick = () => {
//     console.log("clicked -2 ");

//     onChange(editedValue);
//   };

//   return (
//     <div className="flex flex-col gap-4">
//       {/* {isEditing ? ( */}
//       <input
//         className="h-[5vh] p-2 rounded-sm"
//         type="text"
//         value={editedValue}
//         onChange={(e) => setEditedValue(e.target.value)}
//       />
//       <button
//         onClick={handleSaveClick}
//         className="h-[5vh] p-2 w-[30%] rounded-sm bg-red-300"
//       >
//         Save
//       </button>
//     </div>
//   );
// };

function ProjectCard({
  _id,
  projectName,
  projectDescription,
  projectTags,
  videoLink,
  projectTypes,
  projectLink,
}: projectDatas) {
  console.log("id", _id);
  console.log("projectName", projectName);
  const router = useRouter();
  const projectId = _id ;
  const [projId, setprojId] = useState(_id);
  const [editedName, setEditedName] = useState(projectName);
  const [editedVideoLink, setEditedVideoLink] = useState(videoLink);
  const [editedGithubLink, setEditedGithubLink] = useState(projectLink);
  const [editedDescription, setEditedDescription] =
    useState(projectDescription);
  const [editedTechStack, setEditedTechStack] = useState(projectTags.join(" "));
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [editable, setEditable] = useState(false);
  const [projectType, setProjectType] = useState(projectTypes);
  const { toast } = useToast();
  const handleSaveChanges = async () => {
    function manageTechStack(ele: string) {
      const techStackArray = ele.split(" ");
      return techStackArray;
    }
    const techStackArray = await manageTechStack(editedTechStack.trim());

    try {
      const response = await fetch("/api/project", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectId: projId,
          projectName: editedName,
          projectDescription: editedDescription,
          githubLink: editedGithubLink,
          projectTypes: projectType,
          projectTags: techStackArray,
          videoLink: editedVideoLink,
        }),
      });
      if (response.ok) {
        toast({
          title: "Please reload the page once.",
          description: "You have successfully Edited your project",
        });
        window.location.reload();
      }
    } catch (error) {
      toast({
        title: "Failed to Edit Project",
        variant: "destructive",
      });
      console.log("Failed to retrieve User Data");
      console.log("error", error);
    }
    console.log("projectType", projectType);
    console.log("Saving changes...");
    setEditable(false);
  };

  const cancelChanges = () => {
    setEditedName(projectName);
    setEditedVideoLink(videoLink);
    setEditedGithubLink(projectLink);
    setEditedDescription(projectDescription);
    setProjectType(projectTypes);
    setEditedTechStack(projectTags.join(" "));
    setEditable(false);
  };

  const handleEditOptions = () => {
    setprojId(_id);
    setEditedName(projectName);
    setProjectType(projectTypes);
    setEditedVideoLink(videoLink);
    setEditedGithubLink(projectLink);
    setEditedDescription(projectDescription);
    setEditedTechStack(projectTags.join(" "));
    setEditable(true);
  };
  const handleDeleteOptions = async () => {
    if (!showDeleteModal) {
      setShowDeleteModal(true);
      return;
    }
    console.log("projectId - > ",projectId);
    
    try {
      const response = await fetch("/api/project", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectId: projectId,
        }),
      });
      console.log("response",response);
      
      if (response.ok) {
        toast({
          title: "Please refresh the page once.",
          description: "You have successfully Deleted this project",
        });
        setShowDeleteModal(false);
        window.location.reload();
      }
    } catch (error) {
      toast({
        title: "Failed to Delete Project",
        variant: "destructive",
      });
      console.log("Failed to Delete Project");
      console.log("error", error);
    }
  };

  return (
    <div className="backdrop-blur-2xl z-50 border-2 border-gray-400 py-8 p-5 rounded-lg w-80 md:w-96">
      {!editable ? (
        <>
          <div className="flex gap-5 items-center pb-5 justify-between">
            <p className="text-2xl font-bold text-white">{projectName}</p>
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
            <a href={projectLink} target="_blank">
              <FaGithub size={28} className="cursor-pointer" />
            </a>
            <a href={videoLink} target="_blank">
              <FaYoutubeSquare size={28} className="cursor-pointer" />
            </a>
          </div>
          <p className="text-neutral-300 line-clamp-5">
            {projectDescription.length > 100
              ? projectDescription.slice(0, 100) + "..."
              : projectDescription}
          </p>
          <div className="flex gap-3 flex-wrap mt-4 bottom-2">
            {projectTags.map((txt, i) => {
              return (
                <p key={i} className="bg-[#5a5a5a59] text-white p-1 rounded-md">
                  #{txt}
                </p>
              );
            })}
          </div>
          <div className="flex flex-row w-[100%] mt-5 items-center justify-between cursor-pointer">
            <span
              onClick={handleEditOptions}
              className="flex flex-row gap-1 pt-1 bg-green-500 rounded-sm px-3"
            >
              <span>Edit</span>
              <EditIcon className="mb-2" fontSize={20} color="black" />
            </span>
            <span
              onClick={handleDeleteOptions}
              className="flex flex-row pt-1 gap-1 bg-red-500 rounded-sm px-3"
            >
              <span>Delete</span>
              <MdDelete className="mb-2" fontSize={20} color="black" />
            </span>
          </div>
          {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className="text-lg">Are you sure you want to delete this project?</p>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={handleDeleteOptions}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Yes
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-green-500 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
        </>
      ) : (
        <form
          onSubmit={handleSaveChanges}
          className="h-[400px] overflow-y-scroll"
        >
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Project Name
            </label>
            <input
              placeholder="Enter Project Name"
              type="text"
              value={editedName}
              required
              onChange={(e) => setEditedName(e.target.value)}
              className="w-full bg-gray-200 text-gray-800 border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              YouTube Link
            </label>
            <input
              placeholder="Enter YouTube link"
              type="text"
              value={editedVideoLink}
              onChange={(e) => setEditedVideoLink(e.target.value)}
              className="w-full bg-gray-200 text-gray-800 border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              GitHub Link
            </label>
            <input
              required
              placeholder="Enter project Github Link"
              type="text"
              value={editedGithubLink}
              onChange={(e) => setEditedGithubLink(e.target.value)}
              className="w-full bg-gray-200 text-gray-800 border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="mb-4 text-white">
            <label htmlFor="projectType" className="block mb-1">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              className="w-full p-2 border-b border-white bg-transparent focus:outline-none focus:border-gray-400"
              required
              onChange={(e) => setProjectType(e.target.value)}
            >
              <option className="text-white" value="">
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
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Project Description
            </label>
            <textarea
              required
              placeholder="Enter project description"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="w-full bg-gray-200 text-gray-800 border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Tech Stack
            </label>
            <input
              placeholder="Enter project tech stacks, space seperatedly"
              type="text"
              required
              value={editedTechStack}
              onChange={(e) => setEditedTechStack(e.target.value)}
              className="w-full bg-gray-200 text-gray-800 border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="flex flex-row w-[100%] justify-between items-center gap-4 cursor-pointer">
            <div className="flex flex-row w-[30%]  items-center gap-1 cursor-pointer">
              <span className="flex flex-row gap-2 rounded-sm">
                <button
                  type="submit"
                  className="flex flex-row gap-1 pt-2 bg-green-500 rounded-sm px-1 cursor-pointer text-white"
                >
                  Save
                  <SaveIcon className="mb-2" fontSize={25} color="white" />
                </button>
                <span
                  onClick={cancelChanges}
                  className="flex flex-row gap-1 pt-2 bg-red-300 rounded-sm px-1 cursor-pointer "
                >
                  <span>Cancel</span>
                  <MdCancelPresentation
                    className="mb-2"
                    fontSize={25}
                    color="black"
                  />
                </span>
              </span>
            </div>
            <span
              onClick={handleDeleteOptions}
              className="flex flex-row py-1 pt-[9px] gap-2 bg-red-500 rounded-sm px-2"
            >
              <span>Delete</span>
              <MdDelete className="mb-2" fontSize={20} color="black" />
            </span>
            {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className="text-lg">Are you sure you want to delete this project?</p>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={handleDeleteOptions}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Yes
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
          </div>
        </form>
      )}
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
