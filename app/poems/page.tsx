"use client";
import { PageLayout } from "../components/page-layout";
import { PoemCard } from "../components/poem-card/poem-card";
import { usePoemsLoading } from "../hooks";
import "./poems.css";

export default function PoemsPage() {
  const { poems } = usePoemsLoading();
  console.log("Loaded poems:", poems);

  return (
    <PageLayout selectedNavButton="poems">
      <div className="poems-container">
        {poems?.map((poem) => (
          <PoemCard key={poem.title} poem={poem} />
        ))}
      </div>
    </PageLayout>
  );
}
