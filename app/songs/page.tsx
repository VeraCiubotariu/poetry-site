import { LazyIframe } from "../components";
import { PageLayout } from "../components/page-layout";
import { songsLinks } from "../utils";
import "./songs.css";

export default function SongsPage() {
  return (
    <PageLayout selectedNavButton="songs">
      <div className="songs-page-container">
        <div className="songs-container">
          {songsLinks.map((link, index) => (
            <LazyIframe src={link} title={`Video ${index}`} key={index} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
