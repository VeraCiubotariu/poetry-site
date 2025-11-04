import React from "react";
import "./search-bar.css";
import { useDebounce } from "@/app/hooks";

export type SearchBarProps = {
  onChange?: (newValue: string) => void;
};

export const SearchBar = ({ onChange }: SearchBarProps) => {
  const [value, setValue] = React.useState("");
  const debouncedOnChange = useDebounce(onChange, 300);

  return (
    <input
      className="searchbar"
      placeholder="Caută poezie"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        debouncedOnChange?.(e.target.value);
      }}
    />
  );
};
