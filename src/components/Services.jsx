import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Don't let opportunities pass you by. We empower you to discover exciting possibilities, delve deeper into their potential, and take decisive action to leverage them for success.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
            Craft stunning, user-friendly websites: Seamless design meets powerful functionality, tailored to your unique brand and goals.
            </ListItem>
            <ListItem title="Application development">
            Bring your mobile app idea to life: From concept to launch, we create engaging and intuitive apps that users love.
            </ListItem>
            <ListItem title="E-commerce">
            Build a thriving online store: Convert visitors into customers with a user-friendly and secure shopping experience.
            </ListItem>
            <ListItem title="Custom content management">
            Take control of your website content: Empower your team to easily create, edit, and publish content without technical expertise.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
