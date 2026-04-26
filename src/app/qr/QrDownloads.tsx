"use client";

import { useCallback } from "react";

type Props = {
  svgMarkup: string;
  filenameBase: string;
};

export default function QrDownloads({ svgMarkup, filenameBase }: Props) {
  const downloadSvg = useCallback(() => {
    const blob = new Blob([svgMarkup], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    triggerDownload(url, `${filenameBase}.svg`);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, [svgMarkup, filenameBase]);

  const downloadPng = useCallback(
    (size: number) => {
      const img = new Image();
      const svgBlob = new Blob([svgMarkup], { type: "image/svg+xml;charset=utf-8" });
      const svgUrl = URL.createObjectURL(svgBlob);
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);
        canvas.toBlob((blob) => {
          if (!blob) return;
          const pngUrl = URL.createObjectURL(blob);
          triggerDownload(pngUrl, `${filenameBase}-${size}px.png`);
          setTimeout(() => URL.revokeObjectURL(pngUrl), 1000);
        }, "image/png");
        URL.revokeObjectURL(svgUrl);
      };
      img.src = svgUrl;
    },
    [svgMarkup, filenameBase]
  );

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={downloadSvg}
        className="px-3 py-1.5 text-xs font-semibold rounded-md bg-ink text-cream hover:opacity-90"
      >
        SVG (Druck)
      </button>
      <button
        onClick={() => downloadPng(1024)}
        className="px-3 py-1.5 text-xs font-semibold rounded-md bg-primary text-white hover:bg-primary-dark"
      >
        PNG 1024 px
      </button>
      <button
        onClick={() => downloadPng(2048)}
        className="px-3 py-1.5 text-xs font-semibold rounded-md bg-primary text-white hover:bg-primary-dark"
      >
        PNG 2048 px
      </button>
      <button
        onClick={() => window.print()}
        className="px-3 py-1.5 text-xs font-semibold rounded-md bg-[#C9A455] text-ink hover:bg-[#A5843F]"
      >
        🖨️ Drucken
      </button>
    </div>
  );
}

function triggerDownload(url: string, filename: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
