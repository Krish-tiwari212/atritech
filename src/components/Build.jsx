import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        With the foundation laid in the Discovery Phase, we embark on the exciting Build Phase, where your vision transforms into a tangible digital reality. We believe in a collaborative and agile approach, ensuring you&apos;re involved every step of the way.
        </p>
        <p>
        Our expert team translates your requirements into a robust and scalable technical architecture, designed for performance and future growth.
        </p>
        <p>
        We break down projects into manageable sprints, delivering regular demos and incorporating your feedback for continuous improvement.
        </p>
      </div>
      <Blockquote
        author={{ name: "Debra Fiscal", role: "CEO of Unseal" }}
        className="mt-12"
      >
        Atri were so regular with their progress updates we almost began
        to think they were automated!
      </Blockquote>
    </Section>
  );
};

export default Build;
