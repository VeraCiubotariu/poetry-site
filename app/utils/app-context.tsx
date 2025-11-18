"use client";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<{
  filter: string;
  setFilter: (value: string) => void;
  poemsScrollPosition?: number;
  setPoemsScrollPosition: (value: number) => void;
}>({
  filter: "",
  setFilter: () => {},
  setPoemsScrollPosition: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filter, setFilter] = useState("");
  const [poemsScrollPosition, setPoemsScrollPosition] = useState<
    number | undefined
  >(undefined);

  return (
    <AppContext.Provider
      value={{
        filter,
        setFilter,
        poemsScrollPosition,
        setPoemsScrollPosition,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
