"use client";
import Link from "next/link";
import { Inter } from "next/font/google";
import React, { use, useEffect, useState } from "react";
import {
  Mail,
  LinkedinIcon,
  GithubIcon,
  SearchCodeIcon,
  ArrowRight,
} from "lucide-react";

// import { data } from "../../Data/projectData";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  projectName: string;
  projectLink: string;
  projectDescription: string;
  projectTypes: string;
  projectTags: string[];
  isSelected : boolean ;
  projectOwner: {
    name: string;
    email: string;
    college: string;
    year: number;
    linkedIn: string;
    isBanned: boolean;
  };
};

function ProjectCard({
  projectName,
  projectOwner,
  projectDescription,
  projectLink,
  projectTags,
  projectTypes,
  
}: Props) {
  return (
    <div className="flex w-full max-w-sm md:max-w-md flex-col items-start gap-5 rounded-lg px-6 py-8  shadow-xl" style={{
      background: "linear-gradient(77.9deg, #02498b3e 0%, #49038340 60%, #75023c57 100%)",
      boxShadow: "0px 0px 3px #5f9ea085"}}>
      <div className="flex items-center justify-start   ">
        {/* <Image
          className="rounded-full pr-5"
          alt=""
          height={100}
          width={100}
          src={image ?? ""}
        /> */}
        <div className="">
          <div className="text-2xl font-extrabold text-yellow-200 line-clamp-2">
            {projectName}
          </div>
          <div className="flex flex-col text-neutral-100 gap-3 text-lg font-bold">
            <p className="text-base">By {projectOwner?.name}</p>
            <div className="flex gap-6">
              <Link target="_blank" href={`mailto:${projectOwner?.email}`}>
                <Mail className="cursor-pointer" />
              </Link>
              <Link target="_blank" href={projectOwner?.linkedIn}>
                <LinkedinIcon className="cursor-pointer" />
              </Link>
              {/* <Link href={github}>
                <GithubIcon href={github} className="cursor-pointer" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {projectTags.map((topic, index) => (
          <div
            key={index}
            className={`${inter.className} inline-block rounded-full  bg-gradient-to-tr from-yellow-300 to-yellow-200 px-2 py-0.5 text-xs font-bold text-black`}
          >
            #{topic}
          </div>
        ))}
      </div>

      <p className={`text-neutral-100 text-sm ${inter.className}`}>
        {projectDescription}
      </p>
      <Link
        target="_blank"
        className="rounded-lg flex justify-center items-center text-center w-1/2 text-sm md:text-lg bg-[#033b74] px-5 py-3 font-bold text-white "
        href={projectLink}
      >
        Contribute Now
      </Link>
    </div>
  );
}

const formSchema = z.object({
  search: z.string(),
});

const Page = () => {
  const [projects, setProjects] = useState<Props[]>([]);
  // const [projectsCount, setProjectsCount] = useState<number>(0);
  // useEffect(() => setProjectsCount(projects.length), []);
  const [input, setInput] = useState<string>("");
const {toast} = useToast()
  useEffect(() => {
    const getProkjectData = async () => {
      try {
        const reponse = await fetch("/api/project", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            secureToken: `${process.env.NEXT_PUBLIC_BACKEND_SECURITY_TOKEN}`,
          },
        });
        const resp = await reponse.json();
        console.log("reponse 2",resp);
        if (reponse.ok) {
          setProjects(resp.data);
        }
        else{
          toast({
            title: "Failed to load Projects",
            variant : "destructive"
          })
        }
      } catch (error) {
        toast({
          title: "Failed to load Projects",
          variant : "destructive"
        })
        console.log(error);
        
      }
      
    }
    getProkjectData()
  },[])
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    const filteredProjectsByProjectName = projects.filter((project) =>
      project.projectName
        .toLocaleLowerCase()
        .includes(input.toLocaleLowerCase())
    );
    const filteredProjectsByTech = projects.filter((project) =>
      project.projectTags.some((p) =>
        p.toLocaleLowerCase().includes(input.toLocaleLowerCase())
      )
    );
    // let filteredProjectsByAuthor = data.filter((project) =>
    //   project.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    // );

    if (input == "") setProjects(projects);
    const finalArray = Array.from(
      new Set([...filteredProjectsByTech, ...filteredProjectsByProjectName])
    );

    setProjects(finalArray);
    // setProjectsCount(projects.length);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="min-h-screen flex flex-col items-center p-5">
      <h1 className="md:text-5xl text-4xl py-10 text-white font-black">
        JWoC Projects
      </h1>
      <div className="pb-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      onChangeCapture={(
                        e: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        handleChange(e);
                      }}
                      placeholder="Search By Name or Tag"
                      className=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="bg-[#033b74]" type="submit">
              <SearchCodeIcon />
            </Button>
          </form>
        </Form>
      </div>
      {/* <div className="w-full max-w-7xl">
        <p className="text-white font-bold py-3">
          Number Of Projects: {projectsCount}
        </p>
      </div> */}
      <div className="item-center flex flex-col flex-wrap justify-center gap-10 md:flex-row">
        {projects.map((project, index) => (
          <>{ project.isSelected && 
            (<ProjectCard
            key={index}
            projectName={project.projectName}
            projectLink={project.projectLink}
            projectDescription={project.projectDescription}
            projectTags={project.projectTags}
            projectOwner={project.projectOwner}
            projectTypes={project.projectTypes}
            isSelected={project.isSelected}
          />)}
          </>
        ))}
      </div>
    </div>
  );
};

export default Page;
