import { PageLayout } from "../components/page-layout";
import "./about.css";

export default function AboutPage() {
  return (
    <>
      <PageLayout selectedNavButton="about">
        <div>About Page</div>
      </PageLayout>
      <div className="author" />
    </>
  );
}
