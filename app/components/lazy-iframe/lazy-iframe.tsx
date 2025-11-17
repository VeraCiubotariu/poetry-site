"use client";
import { useState } from "react";
import "./lazy-iframe.css";

export type LazyIframeProps = {
  src: string;
  title: string;
};

export function LazyIframe({ src, title }: LazyIframeProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="iframe-wrapper" style={{ position: "relative" }}>
      {!loaded && <div className="iframe-placeholder shimmer" />}
      <iframe
        width={320}
        height={160}
        src={src}
        title={title}
        onLoad={() => setLoaded(true)}
        style={{
          display: loaded ? "block" : "none",
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
