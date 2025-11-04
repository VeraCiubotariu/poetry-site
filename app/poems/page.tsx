"use client";
import { PageLayout } from "../components/page-layout";
import { PoemCard } from "../components/poem-card/poem-card";
import { SearchBar } from "../components/search-bar";
import { usePoemsLoading } from "../hooks";
import React from "react";
import "./poems.css";

export default function PoemsPage() {
  const { poems } = usePoemsLoading();
  const [filter, setFilter] = React.useState("");
  const filteredPoems = poems?.filter((poem) =>
    poem.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <PageLayout selectedNavButton="poems">
      <div className="toolbar">
        <SearchBar onChange={setFilter} />
      </div>
      <div className="poems-page-container">
        <div className="poems-container">
          {filteredPoems?.map((poem) => (
            <PoemCard key={poem.title} poem={poem} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
