import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/ProjectCard";
import clsx from "clsx";
import React from "react";
import raccoon from "@/images/raccoon.png";
import crave from "@/images/crave.png";
import travor from "@/images/travor.png";
import avidya from "@/images/avidya.png";
import homeroom from "@/images/kahoot.jpeg"


const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. Our team of experts doesn&apos;t shy away from complexity. We&apos;ve tackled diverse industry-level projects, honing our skills to deliver exceptional results tailored to your unique needs.
        </p>
      </PageIntro>
      <PageIntro
        projects={false}
        project={true}
        className=""
        eyebrow="Few of our Projects"
        title="Crave Medias"
      >
        <div className="mt-10">
        <ProjectCard color="border-2" cl="card" url="https://cravemedias.com/" name="Crave Medias" year="2024" image={crave} techstack="Svelte, Sveltekit, Anime Js, Three js"/>
        </div>
      </PageIntro>
      <PageIntro
        projects={false}
        project={true}
        className=""
        eyebrow="Few of our Projects"
        title="Raccoon Store"
      >
        <div className="mt-10">
        <ProjectCard color="border-2" cl="card" url="https://raccoon-tshirt.onrender.com/" name="Raccoon" year="2023" image={raccoon} techstack="Flask, Snipcart, Postgresql, Postman, Js"/>
        </div>
      </PageIntro>
      <PageIntro
        projects={false}
        project={true}
        className=""
        eyebrow="Few of our Projects"
        title="Avidya Ecommerce Store"
      >
        <div className="mt-10">
        <ProjectCard color="border-2" cl="card" url="https://avidya.onrender.com/" name="Avidya" year="2024" image={avidya} techstack="React.js, Flask, Snipcart, Pico Css"/>
        </div>
      </PageIntro>
      <PageIntro
        projects={false}
        project={true}
        className=""
        eyebrow="Few of our Projects"
        title="Travor"
      >
        <div className="mt-10">
        <ProjectCard color="border-2" cl="card" url="https://travor.onrender.com/" name="Travor" year="2024" image={travor} techstack="React.js, Tailwind, Postman, flask"/>
        </div>
      </PageIntro>
      <PageIntro
        projects={false}
        project={true}
        className=""
        eyebrow="Few of our Projects"
        title="Homeroom"
      >
        <div className="mt-10">
        <ProjectCard color="border-2" cl="card" url="#" name="Homeroom" year="2024" image={homeroom} techstack="Flutter, Fastapi, Postman"/>
        </div>
      </PageIntro>
    </>
  );
};

export default WorkPage;
