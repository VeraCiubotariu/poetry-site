"use client";
import { useEffect } from "react";
import { AboutSection } from "../components";
import { PageLayout } from "../components/page-layout";
import "./about.css";
import { aboutTexts } from "../utils";

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target?.classList.add("about-section-animation");
          return;
        }

        entry.target?.classList.remove("about-section-animation");
      });
    });

    const elements = document.querySelectorAll(".about-section-text");

    if (elements) {
      elements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageLayout selectedNavButton="about">
        {aboutTexts.map((aboutText) => (
          <AboutSection key={aboutText} aboutText={aboutText} />
        ))}
      </PageLayout>
      <div className="author"></div>
      <div className="button-bar">
        <a href="https://www.facebook.com/corina.nica1" target="_blank">
          <button className="facebook-button" />
        </a>
        <a
          href="https://www.youtube.com/@corinasigeorgenica5747"
          target="_blank"
        >
          <button className="youtube-button" />
        </a>
      </div>
    </>
  );
}
