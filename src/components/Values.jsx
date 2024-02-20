import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, at Atri Technologies, we don&apos;t just build websites and apps, we build relationships. Fueled by a shared passion for digital excellence, our core values guide every interaction and decision:
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Collaboration">
          We believe in the power of collective brilliance. Through open communication, diverse perspectives, and teamwork, we unlock the full potential of every project.
          </GridListItem>
          <GridListItem title="Innovation">
          We don&apos;t shy away from the cutting edge. We embrace emerging technologies and explore bold ideas, constantly pushing the boundaries of what&apos;s possible.
          </GridListItem>
          <GridListItem title="Integrity">
          Trust is paramount. We act with honesty, transparency, and ethical responsibility in everything we do, building lasting relationships with our clients and partners.
          </GridListItem>
          <GridListItem title="Passion">
          We are driven by a genuine love for the digital world. Our infectious enthusiasm translates into dedication, meticulous attention to detail, and a commitment to crafting exceptional experiences.
          </GridListItem>
          <GridListItem title="Loyal">
          We&apos;re not just your service provider, we&apos;re your long-term partner. We believe in fostering true connections, understanding your unique needs, and going above and beyond to ensure your ongoing success.
          </GridListItem>
          <GridListItem title="Innovative">
          We understand that loyalty alone isn&apos;t enough. That&apos;s why we combine our dedication to you with a relentless pursuit of innovation. We explore cutting-edge technologies, embrace bold ideas, and constantly push the boundaries of what's possible, delivering groundbreaking solutions that fuel your growth.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
