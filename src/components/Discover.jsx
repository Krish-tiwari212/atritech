import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{" "}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals. We actively listen to your goals, target audience, and the challenges you face.
        </p>
        <p>
        We go beyond the surface, uncovering your aspirations, pain points, and desired outcomes. We analyze trends, competition, and user behavior to inform our strategic recommendations.
        We work with you to establish clear and measurable goals for your project.
        </p>
        <p>
        We become an extension of your team, invested in your success.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
