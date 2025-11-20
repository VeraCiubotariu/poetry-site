import { Poem } from "../models";

export const getPoemId = (poem: Poem): string => {
  const cleanedPoemTitle = poem.title
    .toLowerCase()
    .replace(/[^a-zăâîșşț\- ]/g, "")
    .replace(/[ ]/g, "-");
  return `${cleanedPoemTitle}-${poem.id}`;
};
