import { Metadata } from "next";
import { PoemsPageContent } from "./poems-page-content";

export const metadata: Metadata = {
  title: "Corina Nica - Poezii",
  description: "Poezii scrise de Corina Nica",
};

export default function PoemsPage() {
  return <PoemsPageContent />;
}
