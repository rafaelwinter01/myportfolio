"use client";
import { cn } from "@/lib/utils";
import { TProject } from "@/types";
import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";

import "./components.css";
import { FaEye, FaGithub } from "react-icons/fa6";

interface ProjectCardProps extends TProject {
  reversed: boolean;
}

function ProjectCard({
  title,
  description,
  picture,
  link,
  repository,
  techs,
  period,
  company,
  reversed = false,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "border border-slate-600 bg-slate-800 rounded-lg w-full max-w-4xl h-96 md:h-96 flex items-center justify-center md:justify-between md:p-6 parent ", //shadow-md shadow-slate-600
        reversed && "flex-row-reverse",
        "anim-container"
      )}
    >
      <div className="h-full w-full flex flex-col justify-between gap-2 items-center p-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        <Separator orientation="horizontal" className="w-full bg-slate-700" />
        <div className="w-full flex flex-col flex-grow justify-center items-center gap-2 transition-all child">
          <div className="w-full flex gap-2 justify-center text-sm">
            {period && (
              <>
                <div>
                  Period: <b>{period}</b>
                </div>
                <Separator
                  orientation="vertical"
                  className="h-3 self-center bg-slate-700"
                />
              </>
            )}
            <div>
              {company ? (
                <>
                  Company: <b>{company}</b>
                </>
              ) : (
                <b>Personal</b>
              )}
            </div>
          </div>
          <div className="flex w-full h-full items-center">
            <p className="text-wrap text-sm text-center text-slate-300">
              {description}
            </p>
          </div>
          <div className="max-w-lg flex gap-1 flex-wrap items-center justify-center">
            {techs.map((tech, key) => (
              <Badge key={key} variant="highlight" className="dark ">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <Separator orientation="horizontal" className="w-full bg-slate-700" />
        <div className="flex-grow-0 flex gap-2">
          {link && (
            <a href={link} target="_blank">
              <Button className="dark rounded-full w-32 h-6 md:w-40">
                <FaEye fontSize={16} />
                <span className="text-xs m-2">View</span>
              </Button>
            </a>
          )}
          {repository && (
            <a href={repository} target="_blank">
              <Button className="dark rounded-full w-32 h-6 md:w-40">
                <FaGithub fontSize={16} />
                <span className="text-xs m-2">Source</span>
              </Button>
            </a>
          )}
        </div>
      </div>
      <div className="absolute md:relative h-full flex-shrink-0 flex items-center justify-center p-1 opacity-25 md:opacity-100 transition-all image">
        <div className="w-full md:w-max p-1 md:p-3 border border-slate-500 rounded hover:scale-105 transition-all">
          {picture ? (
            <Image
              width={270}
              height={200}
              src={picture}
              alt={"Project picture"}
              className="rounded"
            />
          ) : (
            <div className="bg-[url('../img/noimage.jpg')] bg-center bg-no-repeat bg-contain w-[270px] h-[200px]"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
