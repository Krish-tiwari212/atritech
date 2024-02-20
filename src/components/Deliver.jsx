import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        The moment has arrived! In the Deliver Phase, we unveil your meticulously crafted digital solution, ready to make a splash in the online world. But our commitment extends beyond launch
        </p>
        <p>
        We ensure a smooth and secure transition from development to your chosen hosting environment, minimizing downtime and disruption.
        We empower your team with in-depth training, equipping them to maximize the potential of your new website, app, or platform.
        </p>
        <p>
        We&apos;re here to support a successful launch, monitoring performance, addressing any initial issues, and fine-tuning for optimal user experience.
        We don&apos;t disappear after launch. We believe in fostering long-term partnerships, offering ongoing maintenance, support, and strategic guidance to ensure your digital solution thrives.
        he Deliver Phase is more than just delivering a product; it&apos;s delivering results. We celebrate your success as our own, providing the ongoing support and expertise you need to maximize the impact of your digital presence.
        </p>
      </div>
      <h3 className="mt-12 mb-6 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          
        </ListItem>
        <ListItem title="Infrastructure">
          
        </ListItem>
        <ListItem title="Support">
          
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
