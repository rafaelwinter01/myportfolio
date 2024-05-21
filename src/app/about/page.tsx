import { IconName, TechIcon } from "@/components/TechIcons";
import React from "react";
import "./styles.css";

// const highlight = "text-slate-800 text-xl bg-slate-100 p-1 rounded";
const highlight = "text-teal-400"; // "text-white bg-teal-700 p-1 text-italic";

function About() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center p-6 gap-2">
      <h1 className="text-5xl text-slate-100 font-semibold">ABOUT ME</h1>
      <div className="w-full max-w-6xl flex items-center justify-center gap-4 text-white">
        <div className="w-9/12 flex-1 m-10 flex flex-col justify-between gap-2 text-sm overflow-hidden p-2 transition-all">
          <p className="text-xl leading-loose p1">
            Hi there! I&apos;m Rafael Winter, a{" "}
            <span className={highlight}>Software Engineer</span> with a passion
            for tackling <span className={highlight}>challenges</span> and
            building <span className={highlight}>innovative solutions</span>.
          </p>
          <p className="text-xl leading-loose mt-2 p2">
            The thrill of crafting something new from scratch and the
            satisfaction of solving{" "}
            <span className={highlight}>complex problems</span> are what drive
            me in this field. For the past{" "}
            <span className="text-slate-200">18 years</span>, I&apos;ve honed my
            skills working at a company that provides{" "}
            <span className="text-slate-200">IT solutions</span> to the{" "}
            <span className="text-slate-200">Brazilian government</span>. There,
            I have been playing a key role in a team dedicated to{" "}
            <span className={highlight}>fraud prevention</span> within the
            Federal Revenue&apos;s Income Tax Declaration System. This project
            has allowed me to contribute to a vital aspect of Brazil&apos;s
            financial infrastructure while constantly pushing me to develop{" "}
            <span className={highlight}>innovative solutions</span> for{" "}
            <span className={highlight}>complex challenges</span>.
          </p>
          <p className="text-xl leading-loose mt-2 p3">
            Beyond work, I enjoy tinkering with code to build personal tools
            that automate repetitive tasks in my workflow. This passion for{" "}
            <span className={highlight}>efficiency</span> spills over into my
            professional approach, where I&apos;m always looking for ways to{" "}
            <span className={highlight}>streamline processes</span> and improve
            overall <span className={highlight}>productivity</span>.
          </p>
          <p className="text-xl leading-loose mt-2 ">
            My recent personal projects have involved utilizing technologies
            like:
          </p>

          <div className="flex gap-2 flex-wrap pt-4">
            <TechIcon iconName={IconName.HTML} size={36} />
            <TechIcon iconName={IconName.CSS} size={36} />
            <TechIcon iconName={IconName.JavaScript} size={36} />
            <TechIcon iconName={IconName.TypeScript} size={36} />
            <TechIcon iconName={IconName.Tailwind} size={36} />
            <TechIcon iconName={IconName.NodeJS} size={36} />
            {/* <TechIcon iconName={IconName.React} size={36} /> */}
            <TechIcon iconName={IconName.NextJS} size={36} color="#FFF" />
            <TechIcon iconName={IconName.MongoDB} size={36} />
            {/* <TechIcon iconName={IconName.MySQL} size={36} /> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
