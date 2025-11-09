import { NavButton } from "../nav-button";
import "./header.css";

export type HeaderProps = {
  selectedNavButton?: "poems" | "songs" | "about";
};

export const Header = ({ selectedNavButton }: HeaderProps) => {
  return (
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
        <button className="mobile-menu-button"></button>
        <NavButton
          className="nav-about-button"
          title="Despre"
          selected={selectedNavButton === "about"}
          href="/about"
        />
      </div>
    </header>
  );
};
