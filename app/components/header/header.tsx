"use client";
import { NavButton } from "../nav-button";
import "./header.css";
import { useState } from "react";
import { MobileMenu } from "../mobile-menu";

export type HeaderProps = {
  selectedNavButton?: "poems" | "songs" | "about";
};

export const Header = ({ selectedNavButton }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-left">
          <NavButton
            title="Poezii"
            selected={selectedNavButton === "poems"}
            href="/poems"
          />
          <NavButton
            title="Cântece"
            selected={selectedNavButton === "songs"}
            href="/songs"
          />
        </div>

        <div className="logo">Corina Nica</div>
        <div className="header-right">
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(true)}
          />
          <NavButton
            className="nav-about-button"
            title="Despre"
            selected={selectedNavButton === "about"}
            href="/about"
          />
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        selectedNavButton={selectedNavButton}
      />
    </>
  );
};
