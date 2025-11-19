import { Metadata } from "next";
import { LazyIframe } from "../components";
import { PageLayout } from "../components/page-layout";
import { songs } from "../utils";
import "./songs.css";

export const metadata: Metadata = {
  title: "Corina Nica - Cântece",
  description: "Cântece scrise de Corina si George Nica",
};

export default function SongsPage() {
  return (
    <PageLayout selectedNavButton="songs">
      <div className="songs-page-container">
        <div className="songs-container">
          {songs.map(({ link, title }, index) => (
            <LazyIframe src={link} title={title} key={index} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
