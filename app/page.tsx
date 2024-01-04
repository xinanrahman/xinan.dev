import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Navigation } from "./components/nav";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <Navigation />
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-transparent duration-500 bg-white cursor-default text-edge-outline animate-title font-display md:text-5xl whitespace-nowrap bg-clip-text ">
        Hey <span style={{ color: "yellow" }}>👋</span>, I'm Xinan.
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 animate-fade-in">
        <h2 className="mx-32 text-xl text-zinc-400 ">
          <p>
            I'm a student developer pursuing a B.S in Computer Science at Johns
            Hopkins University. I've previously interned at{" "}
            <Link
              target="_blank"
              href="https://aws.amazon.com/?nc2=h_lg"
              className="underline duration-500 text-zinc-200 hover:text-white"
            >
              Amazon Web Services
            </Link>
            ,{" "}
            <Link
              target="_blank"
              href="https://www.generationlab.org/"
              className="underline duration-500 text-zinc-200 hover:text-white"
            >
              Generation Lab
            </Link>
            , and{" "}
            <Link
              target="_blank"
              href="https://www.motiva.ai/"
              className="underline duration-500 text-zinc-200 hover:text-white"
            >
              Motiva AI
            </Link>
            . I've also built deep learning tooling for autonomous UAVs at the{" "}
            <Link
              target="_blank"
              href="https://iaa.jhu.edu/"
              className="underline duration-500 text-zinc-200 hover:text-white"
            >
              Johns Hopkins Institute for Assured Autonomy
            </Link>
            .
          </p>
          <p className="mt-8">
            Through my internships and independent projects, I've honed my
            problem-solving skills across <span>full-stack development</span>,
            working with LLMs, cloud infrastructure-as-code, and systems
            development. I'm actively looking for internships and new grad
            opportunities, and am excited to contribute in fast-paced,
            collaborative teams.
          </p>
          <p className="mt-8">
            📧 Feel free to reach me at{" "}
            <Link
              href="mailto:srahma24@jhu.edu"
              className="underline duration-500 text-zinc-200 hover:text-white"
            >
              srahma24@jhu.edu
            </Link>{" "}
            or schedule some time on my{" "}
            <Link
              href="https://cal.com/xinan/"
              className="underline duration-500 text-zinc-200 hover:text-white"
            >
              calendar
            </Link>
            !
          </p>
        </h2>
      </div>
    </div>
  );
}
