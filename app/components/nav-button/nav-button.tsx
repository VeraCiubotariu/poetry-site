import classNames from "classnames";
import "./nav-button.css";
import Link from "next/link";

export type NavButtonProps = {
  title: string;
  selected?: boolean;
  href: string;
  className?: string;
  onClick?: () => void;
};

export const NavButton = ({
  title,
  selected,
  href,
  className,
  onClick,
}: NavButtonProps) => {
  return (
    <Link
      href={href}
      className={classNames("nav-button", className, { selected: selected })}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};
