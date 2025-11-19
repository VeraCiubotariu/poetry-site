import ReactPlayer from "react-player";
import "./lazy-iframe.css";

export type LazyIframeProps = {
  src: string;
  title: string;
};

export function LazyIframe({ src, title }: LazyIframeProps) {
  return (
    <div className="song-container">
      <div className="iframe-wrapper">
        <ReactPlayer key={title} src={src} light={true} />
      </div>
      <div className="song-title">{title}</div>
    </div>
  );
}
