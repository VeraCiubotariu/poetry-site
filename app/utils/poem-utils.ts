import { Poem } from "../models";

export const getPoemId = (poem: Poem): string => {
  return `${poem.title}${poem.verses[0]}`.replace(/[^a-zA-Z]/g, "");
};
