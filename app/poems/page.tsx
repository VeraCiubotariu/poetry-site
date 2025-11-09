"use client";
import { PageLayout } from "../components/page-layout";
import { PoemCard } from "../components/poem-card/poem-card";
import { SearchBar } from "../components/search-bar";
import { usePoemsLoading } from "../hooks";
import React from "react";
import "./poems.css";
import { poemFilter } from "../utils";

export default function PoemsPage() {
  const { poems } = usePoemsLoading();
  const [filter, setFilter] = React.useState("");
  const filteredPoems = poems?.filter((poem) => poemFilter(poem, filter));

  return (
    <PageLayout selectedNavButton="poems">
      <div className="toolbar">
        <SearchBar onChange={setFilter} />
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
