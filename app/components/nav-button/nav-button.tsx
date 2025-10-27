import classNames from "classnames";
import "./nav-button.css";
import Link from "next/link";

export type NavButtonProps = {
  title: string;
  selected?: boolean;
  href: string;
};

export const NavButton = ({ title, selected, href }: NavButtonProps) => {
  return (
    <Link
      href={href}
      className={classNames("nav-button", { selected: selected })}
    >
      {title}
    </Link>
  );
};
