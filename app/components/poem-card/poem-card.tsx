import { Poem } from "@/app/models";
import "./poem-card.css";
import Link from "next/link";
import { get } from "http";
import { getPoemId } from "@/app/utils";

export type PoemCardProps = {
  poem: Poem;
};

export const PoemCard = ({ poem }: PoemCardProps) => {
  const { title, verses } = poem;

  return (
    <Link className="poem-card" href={`poem/${getPoemId(poem)}`}>
      <h1>{title}</h1>
      <div className="verses-container">
        {verses.map((verse, verseIndex) => (
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
    </Link>
  );
};
