import { Poem } from "@/app/models";
import Link from "next/link";
import { getPoemId } from "@/app/utils";
import "./poem-card.css";

export type PoemCardProps = {
  poem: Poem;
  onClick?: () => void;
};

export const PoemCard = ({ poem, onClick }: PoemCardProps) => {
  const { title, verses } = poem;

  return (
    <Link
      className="poem-card"
      href={`poem/${getPoemId(poem)}`}
      onClick={onClick}
    >
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
