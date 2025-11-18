import { Metadata } from "next";
import { AboutPageContent } from "./about-page-content";

export const metadata: Metadata = {
  title: "Corina Nica - Despre",
  description: "Informații despre Corina Nica",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
