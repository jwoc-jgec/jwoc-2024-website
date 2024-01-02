"use client";
import React, { useEffect, useState } from "react";
import "../../css/sidebar.css";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
type Props = {};

function page({}: Props) {
  // console.log = () => {}
  const [collapsed, setCollapsed] = useState(false);
  const [options, setOptions] = useState("Mentor");
  const [data, setData] = useState<any[]>([]);
  const fetchData = async (endpoint: string) => {
    try {
      const response = await fetch(`api/${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          secureToken: `${process.env.NEXT_PUBLIC_BACKEND_SECURITY_TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const Respdata = await response.json();
      if (options === "Mentor") {
        setData(Array.isArray(Respdata.mentors) ? Respdata.mentors : []);
        // console.log("data", Respdata.mentors);
      } else if (options === "Mentee") {
        setData(Array.isArray(Respdata.mentees) ? Respdata.mentees : []);
        console.log("data - 2", Respdata);
      } else if (options === "Project") {
        setData(Array.isArray(Respdata.data) ? Respdata.data : []);
        console.log("data - 3", Respdata);
      }
      // console.log("data", Respdata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData("mentor");
  }, []);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleToggle = async (id: string) => {
    // Make a request to the backend to update data based on the toggle
    console.log(id);

    try {
      const response = await fetch(`/api/mentor`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        // @ts-ignore
        body: JSON.stringify({ mentorId: id }),
      });
      console.log("response", response);

      setData((prevData) =>
        prevData.map((item) =>
          item._id === id ? { ...item, isBanned: !item.isBanned } : item
        )
      );
    } catch (error) {
      console.error("Error toggling data:", error);
    }
  };
  const handleToggleMentee = async (id: string) => {
    // Make a request to the backend to update data based on the toggle
    console.log(id);

    try {
      const response = await fetch(`/api/mentee`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        // @ts-ignore
        body: JSON.stringify({ menteeId: id }),
      });
      console.log("response", response);

      setData((prevData) =>
        prevData.map((item) =>
          item._id === id ? { ...item, isBanned: !item.isBanned } : item
        )
      );
    } catch (error) {
      console.error("Error toggling data:", error);
    }
  };

  const handleToggleProject = async (id: string) => {
    console.log(id);
    try {
      const response = await fetch(`/api/project`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        // @ts-ignore
        body: JSON.stringify({ projectId: id, msg: "UPDATE FROM ADMIN" }),
      });
      console.log("response", response);

      setData((prevData) =>
        prevData.map((item) =>
          item._id === id ? { ...item, isSelected: !item.isSelected } : item
        )
      );
    } catch (error) {
      console.error("Error toggling data:", error);
    }
  };

  return (
    <div className="flex text-white">
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <button onClick={handleCollapse} className="collapse-btn">
          {collapsed ? "Open Sidebar" : "Collapse Sidebar"}
        </button>
        <div className={`options`}>
          <div
            className={`options ${
              collapsed ? "collapsedOp" : ""
            } cursor-pointer`}
            onClick={() => {
              setOptions("Mentor");
              fetchData("mentor");
            }}
          >
            Mentor
          </div>
          <div
            className={`options ${
              collapsed ? "collapsedOp" : ""
            } cursor-pointer`}
            onClick={() => {
              setOptions("Mentee");
              fetchData("mentee");
            }}
          >
            Mentee
          </div>
          <div
            className={`options ${
              collapsed ? "collapsedOp" : ""
            } cursor-pointer`}
            onClick={() => {
              setOptions("Project");
              fetchData("project");
            }}
          >
            Project
          </div>
        </div>
      </div>
      {options === "Mentor" && (
        <div className="main-section p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item, idx) => (
              <div
                key={idx}
                className="card bg-white p-4 rounded-md shadow-md text-black"
              >
                {/* {item} */}
                <h2 className="text-lg font-bold mb-2">{item.name}</h2>
                <div className="flex items-center mb-2">
                  <Linkedin />
                  <a>
                    <Github />
                  </a>
                  <button
                    onClick={() => handleToggle(item._id)}
                    className={`ml-auto ${
                      item.isBanned ? "bg-red-500" : "bg-green-500"
                    } text-white px-3 py-1 rounded`}
                  >
                    {item.isBanned ? "Banned" : "Not Banned"}
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div>
                    <span className="font-semibold">Phone No:</span>

                    <span>{item.phone}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Whatsapp No:</span>

                    <span>{item.whatsapp}</span>
                  </div>
                </div>

                <p className="text-gray-600">{item.description}</p>
                <div className="flex flex-col items-center gap-3">
                  {Array.isArray(item.RegisteredProjectId) &&
                    item.RegisteredProjectId.map((items: any, indx: any) => (
                      <div className="card bg-slate-700 p-4 rounded-md shadow-md w-full text-white">
                        Project {indx + 1}
                        <h2 className="text-lg font-bold mb-2">
                          {items.projectName}
                        </h2>
                        <p>{items.projectDescription}</p>
                        <div className="flex items-center space-x-2 mb-2">
                          <a
                            href={items.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                          >
                            GitHub
                          </a>
                        </div>
                        <div className="flex flex-row flex-wrap items-center gap-2">
                          {items.projectTags.map((ele: string, idx: number) => (
                            <span
                              key={idx}
                              className="p-1 rounded-sm bg-green-800 text-white"
                            >
                              #{ele}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {options === "Mentee" && (
        <div className="main-section p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data &&
              data.map((mentee, index) => (
                <div
                  className="card bg-white p-4 rounded-md shadow-md text-black"
                  key={index}
                >
                  <div className="sm:flex sm:items-center px-6 py-4">
                    <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                      <p className="text-xl font-semibold text-gray-900 mb-1">
                        {mentee.name}
                      </p>
                      <p className="text-sm text-gray-600">{mentee.email}</p>
                      <p className="text-sm text-gray-600">{mentee.college}</p>
                      <p className="text-sm text-gray-600">
                        {mentee.year} Year
                      </p>
                      <div className="mt-2">
                        <a
                          href={mentee.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          GitHub
                        </a>
                        <span className="mx-2">|</span>
                        <a
                          href={`${mentee.linkedIn}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          LinkedIn
                        </a>
                      </div>
                      <button
                        onClick={() => handleToggleMentee(mentee._id)}
                        className={`mt-4 bg-${
                          mentee.isBanned ? "red" : "green"
                        }-500 text-white px-4 py-2 rounded`}
                      >
                        {mentee.isBanned ? "Banned" : "Not Banned"}
                      </button>
                    </div>
                  </div>
                  <div className="border-t border-gray-200"></div>
                  <div className="px-6 py-4">
                    <p>Answer1</p>
                    <p className="text-gray-700">{mentee.answer1}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      {options === "Project" && (
        <div className="main-section p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data &&
              data.map((project, index) => (
                <div
                  className="card bg-slate-300 p-4 rounded-md shadow-md text-black"
                  key={index}
                >
                  <div className="sm:flex sm:items-center px-6 py-4">
                    <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                      <p className="text-xl font-semibold text-gray-900 mb-1">
                        {project.projectName}
                      </p>
                      <p className="text-sm text-gray-600">
                        {project.projectTypes}
                      </p>
                      <div className="mt-2">
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          GitHub
                        </a>
                        {project.videoLink && (
                          <>
                            <span className="mx-2">|</span>
                            <a
                              href={project.videoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-red-500 underline"
                            >
                              Video Link
                            </a>
                          </>
                        )}
                      </div>
                      <div className="flex flex-col justify-start gap-2">
                        <p className="flex flex-row">
                          <span>Project Owner : </span>
                          <span>{project.projectOwner?.name}</span>
                        </p>
                        <p className="flex flex-row">
                          <span>Owner Email : </span>
                          <span> {project.projectOwner?.email}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200"></div>
                  <div className="px-6 py-4">
                    <p className="text-gray-700">
                      {project.projectDescription}
                    </p>
                    <div className="flex flex-wrap mt-2">
                      {project.projectTags &&
                        project.projectTags.map((tag: any, index: number) => (
                          <span
                            key={index}
                            className="px-1 py-1 bg-gray-200 text-gray-800 rounded-sm mx-1"
                          >
                            #{tag}
                          </span>
                        ))}
                    </div>
                    <button
                      onClick={() => handleToggleProject(project._id)}
                      className={`mt-4 bg-${
                        !project.isSelected ? "red" : "green"
                      }-500 text-white px-4 py-2 rounded`}
                    >
                      {project.isSelected ? "Selected" : "Not isSelected"}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
