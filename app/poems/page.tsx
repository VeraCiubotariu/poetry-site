"use client";
import { PageLayout } from "../components/page-layout";
import { PoemCard } from "../components/poem-card/poem-card";
import { SearchBar } from "../components/search-bar";
import React from "react";
import "./poems.css";
import { poemFilter } from "../utils";
import { useEffect } from "react";
import { usePoemsLoading } from "../hooks";
import { useAppContext } from "../utils/app-context";

export default function PoemsPage() {
  const { poems } = usePoemsLoading();
  const { filter, setFilter } = useAppContext();
  const filteredPoems = poems.filter((poem) => poemFilter(poem, filter));

  useEffect(() => {
    if (!filteredPoems) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("poem-card-animation");
        } else {
          entry.target.classList.remove("poem-card-animation");
        }
      });
    });

    const elements = document.querySelectorAll(".poem-card");

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredPoems]);

  return (
    <PageLayout selectedNavButton="poems">
      <div className="toolbar">
        <SearchBar initialValue={filter} onChange={setFilter} />
      </div>
      <div className="poems-page-container">
        <div className="poems-container">
          {filteredPoems?.map((poem) => (
            <PoemCard key={poem.title + poem.verses[0]} poem={poem} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
