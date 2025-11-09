"use client";
import { PageLayout } from "@/app/components/page-layout";
import { usePoemsLoading } from "@/app/hooks";
import { useParams } from "next/navigation";
import "./poem.css";

export default function PoemPage() {
  const params = useParams();
  const id = decodeURIComponent(params.id as string);
  const { getPoemById } = usePoemsLoading();
  const poem = getPoemById(id);

  return (
    <>
      <PageLayout>
        <div className="poem-page-container">
          <div className="poem-container">
            <h1>{poem?.title}</h1>
            <div className="poem-page-verse">
              {poem?.verses.map((verse, verseIndex) => (
                <div key={verseIndex}>
                  <div className="verse" key={verseIndex}>
                    {verse.map((line, lineIndex) => (
                      <div key={`${verseIndex}${lineIndex}`}>{line}</div>
                    ))}
                  </div>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageLayout>
      <div className="flower" />
    </>
  );
}
