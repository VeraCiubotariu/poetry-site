import { Poem } from "@/app/models";
import "./poem-card.css";

export type PoemCardProps = {
  poem: Poem;
};

export const PoemCard = ({ poem }: PoemCardProps) => {
  const { title, verses } = poem;

  return (
    <div className="poem-card">
      <h1>{title}</h1>
      <div className="verses-container">
        {verses.map((verse, verseIndex) => (
          <>
            <div className="verse" key={verseIndex}>
              {verse.map((line, lineIndex) => (
                <div key={`${verseIndex}${lineIndex}`}>{line}</div>
              ))}
            </div>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};
