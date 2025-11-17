"use client";
import * as crypto from "crypto";
import "./about-section.css";

export type AboutSectionProps = {
  aboutText: string;
};

export const AboutSection = ({ aboutText }: AboutSectionProps) => {
  const lines = aboutText.split("\n");

  return (
    <div className="about-section-container">
      <div className="about-section-text">
        {lines.map((line) => (
          <div key={crypto.randomBytes(20).toString("hex")}>
            {line}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};
