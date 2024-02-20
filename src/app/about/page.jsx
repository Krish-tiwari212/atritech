import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
        At Atri Technologies, we know that great things don't happen in silos. That's why collaboration is the cornerstone of everything we do, from the way we approach projects to the relationships we build with our clients.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Atri was started by two friends who noticed the need for experienced devs.
            Our team brings together a wealth of experience and expertise across various disciplines, fostering creative solutions and innovation.
            We work closely with our clients, understanding their unique needs and goals to become an extension of their team.
          </p>
          <p>
            At Atri, we’re more than just colleagues — we’re a family. 
            We encourage open dialogue and feedback, ensuring everyone feels heard and valued, leading to better outcomes.
            We acknowledge and celebrate the contributions of every individual, fostering a sense of ownership and shared accomplishment.
            By combining different strengths and perspectives, we create solutions that exceed expectations.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35+" label="Projects Built" />
          <StatListItem value="52+" label="Clients Happy" />
          <StatListItem value="$25M+" label="Profit Generated" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
