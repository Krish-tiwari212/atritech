import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem invert title="Passion">
          We are driven by a genuine love for the digital world. Our infectious enthusiasm translates into dedication, meticulous attention to detail, and a commitment to crafting exceptional experiences.
          </GridListItem>
          <GridListItem invert title="Loyal">
          We're not just your service provider, we&apos;re your long-term partner. We believe in fostering true connections, understanding your unique needs, and going above and beyond to ensure your ongoing success.
          </GridListItem>
          <GridListItem invert title="Innovative">
          We understand that loyalty alone isn&apos;t enough. That&apos;s why we combine our dedication to you with a relentless pursuit of innovation. We explore cutting-edge technologies, embrace bold ideas, and constantly push the boundaries of what&apos;s possible, delivering groundbreaking solutions that fuel your growth.
          </GridListItem>
          <GridListItem invert title="Integrity">
          Trust is paramount. We act with honesty, transparency, and ethical responsibility in everything we do, building lasting relationships with our clients and partners.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
