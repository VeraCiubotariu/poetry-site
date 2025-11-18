"use client";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<{
  filter: string;
  setFilter: (value: string) => void;
  // isMobileMenuOpen: boolean;
  // setIsMobileMenuOpen: (value: boolean) => void;
}>({
  filter: "",
  setFilter: () => {},
  // isMobileMenuOpen: false,
  // setIsMobileMenuOpen: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filter, setFilter] = useState("");
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <AppContext.Provider value={{ filter, setFilter }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
