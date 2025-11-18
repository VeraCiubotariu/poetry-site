"use client";
import { Poem } from "../models";
import * as poemsConfig from "../../public/poems.json";
import { getPoemId } from "../utils";

export const usePoemsLoading = () => {
  const poems = poemsConfig.poems;

  const getPoemById = (id: string): Poem | undefined => {
    return poems?.find((poem) => getPoemId(poem) === id);
  };

  return { poems, getPoemById };
};
