import { Poem } from "../models";

export const poemFilter = (poem: Poem, query: string) => {
  const lowerCaseTitle = poem.title.toLowerCase();
  const diacriticsInsesitiveTitle = lowerCaseTitle
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return (
    lowerCaseTitle.includes(query.toLowerCase()) ||
    diacriticsInsesitiveTitle.includes(query.toLowerCase())
  );
};
