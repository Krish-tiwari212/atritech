import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/ProjectCard";
import clsx from "clsx";
import React from "react";
import raccoon from "@/images/raccoon.png";
import portfolio from "@/images/portfolio.png";

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
        title="Portfolio"
      >
        <div className="mt-10">
        <ProjectCard color="border-2" cl="card" url="https://raccoon-tshirt.onrender.com/" name="Portfolio" year="2024" image={portfolio} techstack="React.js, Next.js, Postman"/>
        </div>
      </PageIntro>
    </>
  );
};

export default WorkPage;
