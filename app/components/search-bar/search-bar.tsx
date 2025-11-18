import React from "react";
import "./search-bar.css";
import { useDebounce } from "@/app/hooks";

export type SearchBarProps = {
  initialValue?: string;
  onChange?: (newValue: string) => void;
};

export const SearchBar = ({ initialValue, onChange }: SearchBarProps) => {
  const [value, setValue] = React.useState(initialValue || "");
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
