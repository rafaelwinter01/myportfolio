import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/db/projects";
import { TProject } from "@/types";
import React from "react";

import "./styles.css";

async function Projects() {
  //  const data = await getProjects();
  const data = await fetch(`${process.env.NEXT_API_URL}/projects/`, {
    next: { revalidate: 3600 },
  });

  let projects;
  let error;

  if (data.status !== 200) {
    error = true;
  } else {
    projects = await data.json();
  }

  return (
    <main className="h-full w-full flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl text-slate-100 font-semibold">PROJECTS</h1>
      <div className="p-10 w-full max-w-6xl flex flex-col items-center justify-center gap-6 text-white">
        {error ? (
          <h1>It was not possible to retrieve projects</h1>
        ) : (
          (projects as TProject[]).map((project, key) => (
            <ProjectCard {...project} key={key} reversed={key % 2 === 0} />
          ))
        )}
      </div>
    </main>
  );
}

export default Projects;
