import { useEffect, useRef } from "react";

export function Loader() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fill = fillRef.current;
    const loader = document.getElementById("vz-loader");
    if (!fill || !loader) return;

    let width = 0;
    const interval = setInterval(() => {
      width += Math.random() * 18 + 4;
      if (width >= 100) {
        width = 100;
        fill.style.width = "100%";
        clearInterval(interval);
        setTimeout(() => {
          loader.classList.add("hidden");
        }, 400);
      } else {
        fill.style.width = width + "%";
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="vz-loader">
      <div className="vz-loader-inner">
        <div className="vz-loader-bar">
          <div className="vz-loader-fill" ref={fillRef} />
        </div>
        <div className="vz-loader-text">Loading Portfolio...</div>
      </div>
    </div>
  );
}
