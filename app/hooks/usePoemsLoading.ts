"use client";
import { get } from "http";
import { Poem } from "../models";
import { useEffect, useState } from "react";

export const usePoemsLoading = () => {
  const poemsFilePath = "/poems.json";
  const [poems, setPoems] = useState<Poem[] | undefined>(undefined);

  const loadPoems = async () => {
    const response = await fetch(poemsFilePath);
    if (!response.ok) {
      throw new Error("Failed to load poems data");
    }
    const data = await response.json();
    setPoems(data.poems as Poem[]);
  };

  useEffect(() => {
    function load() {
      loadPoems();
    }

    load();
  }, []);

  const getPoemById = (id: string): Poem | undefined => {
    return poems?.find((poem) => poem.title === id);
  };

  return { poems, loadPoems, getPoemById };
};
