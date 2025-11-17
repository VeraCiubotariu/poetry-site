import { LazyIframe } from "../components";
import { PageLayout } from "../components/page-layout";
import "./songs.css";

export default function SongsPage() {
  const songsLinks = [
    "https://www.youtube.com/embed/Wm-k5u394ng",
    "https://www.youtube.com/embed/fSPk_1OMHu0",
    "https://www.youtube.com/embed/4u4P5ouCQZI",
    "https://www.youtube.com/embed/cic43dIVQcs",
    "https://www.youtube.com/embed/9foobVuWE2E",
    "https://www.youtube.com/embed/Zpwbvb_4kzE",
    "https://www.youtube.com/embed/gi3hntXw-KA",
    "https://www.youtube.com/embed/s8_MKZ4pZS8",
    "https://www.youtube.com/embed/eaktNokxnno",
    "https://www.youtube.com/embed/L9wxkz3JYkY",
    "https://www.youtube.com/embed/Fi8ly2ekxhw",
    "https://www.youtube.com/embed/WcnterHIDgU",
    "https://www.youtube.com/embed/iD1RhfD4C2A",
    "https://www.youtube.com/embed/UZtxbeJFf8U",
    "https://www.youtube.com/embed/b6INQJzvbKw",
    "https://www.youtube.com/embed/EvwTIdhBats",
    "https://www.youtube.com/embed/zB7lN3pBpIs",
    "https://www.youtube.com/embed/lf9Jjpes5eQ",
    "https://www.youtube.com/embed/CFlQ8RTzXR8",
    "https://www.youtube.com/embed/UMMZNUPHGTU",
    "https://www.youtube.com/embed/zK62Iwa2Isg",
    "https://www.youtube.com/embed/NpAHtwqrRic",
    "https://www.youtube.com/embed/08sWg4fDFBo",
  ];

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
