import { Metadata } from "next";
import PoemsPage from "./poems/page";

export const metadata: Metadata = {
  title: "Corina Nica - Poezii",
  description: "Poezii scrise de Corina Nica",
};

export default function Home() {
  return <PoemsPage />;
}
