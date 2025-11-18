"use client";
import { useState } from "react";
import { NavButton } from "../nav-button";
import "./mobile-menu.css";

export type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedNavButton?: "poems" | "songs" | "about";
};

export const MobileMenu = ({
  isOpen,
  setIsOpen,
  selectedNavButton,
}: MobileMenuProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 600);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`mobile-menu${isClosing ? " slide-out" : ""}`}>
      <button className="close-button" onClick={handleClose}>
        X
      </button>
      <div className="menu-options">
        <NavButton
          title="Poezii"
          selected={selectedNavButton === "poems"}
          href="/poems"
          onClick={handleClose}
        />
        <NavButton
          title="Cântece"
          selected={selectedNavButton === "songs"}
          href="/songs"
          onClick={handleClose}
        />
        <NavButton
          title="Despre"
          selected={selectedNavButton === "about"}
          href="/about"
          onClick={handleClose}
        />
      </div>
    </div>
  );
};
