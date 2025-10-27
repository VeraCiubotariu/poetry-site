import { Header } from "../header";
import "./page-layout.css";

export type PageLayoutProps = {
  selectedNavButton: "poems" | "songs" | "about";
  children: React.ReactNode;
};

export const PageLayout = ({
  selectedNavButton,
  children,
}: PageLayoutProps) => {
  return (
    <>
      <Header selectedNavButton={selectedNavButton} />
      <main>{children}</main>
    </>
  );
};
