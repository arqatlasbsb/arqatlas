import React, { useEffect, useState } from "react";

// Como usar o componente:
/**
 * <FullScreenBannerVideo
 *   desktopSrc={require("../videos/hero-desktop.mp4")}
 *   mobileSrc={require("../videos/hero-mobile.mp4")} // opcional
 *   poster={require("../images/hero-poster.jpg")} // opcional
 * />
 */

const FullScreenBannerVideo = ({
  desktopSrc,
  mobileSrc = null,
  poster = null,
  overlay = null,
}) => {
  const [src, setSrc] = useState(desktopSrc);

  useEffect(() => {
    // escolhe mobile ou desktop com base na largura
    const update = () => {
      if (mobileSrc && window.matchMedia("(max-width: 767px)").matches) {
        setSrc(mobileSrc);
      } else {
        setSrc(desktopSrc);
      }
    };
    update();
    const mq = window.matchMedia("(max-width: 767px)");
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, [desktopSrc, mobileSrc]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black/80">
      <video
        className="w-full h-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden={false}
      />
      {overlay && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20">
          <div className="pointer-events-auto">{overlay}</div>
        </div>
      )}
    </div>
  );
};

export default FullScreenBannerVideo;

{
  /* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
     -https://www.linkedin.com/in/gabrielsouto01
     -https://github.com/soutozk
     -https://www.instagram.com/soutozk/ */
}
