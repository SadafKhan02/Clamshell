"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Expand, Minus, Plus, RotateCcw } from "lucide-react";

type ProductImageViewerProps = {
  title: string;
  src?: string;
  alt: string;
  unavailableMessage?: string;
};

export function ProductImageViewer({
  title,
  src,
  alt,
  unavailableMessage,
}: ProductImageViewerProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenError, setFullscreenError] = useState("");

  useEffect(() => {
    const syncFullscreenState = () => {
      setIsFullscreen(document.fullscreenElement === viewerRef.current);
    };

    document.addEventListener("fullscreenchange", syncFullscreenState);
    return () =>
      document.removeEventListener("fullscreenchange", syncFullscreenState);
  }, []);

  async function toggleFullscreen() {
    const viewer = viewerRef.current;

    if (!viewer) {
      return;
    }

    setFullscreenError("");

    try {
      if (document.fullscreenElement === viewer) {
        await document.exitFullscreen();
      } else {
        await viewer.requestFullscreen();
      }
    } catch (error) {
      setFullscreenError(
        error instanceof Error
          ? `Could not open fullscreen view: ${error.message}`
          : "Could not open fullscreen view.",
      );
    }
  }

  return (
    <div
      ref={viewerRef}
      className="overflow-hidden rounded-3xl border border-[#E3D7C8] bg-[#FAF7F2] shadow-sm fullscreen:rounded-none"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E3D7C8] bg-white px-4 py-3 sm:px-5">
        <p className="text-sm font-bold text-[#1A1614]">{title}</p>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setZoom((value) => Math.max(1, value - 0.25))}
            disabled={!src || zoom <= 1}
            aria-label="Zoom out"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E3D7C8] text-[#785135] transition-colors hover:bg-[#FEF4F0] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Minus className="h-4 w-4" aria-hidden="true" />
          </button>
          <span className="min-w-12 text-center text-xs font-semibold tabular-nums text-[#4A2D1A]">
            {src ? `${Math.round(zoom * 100)}%` : "N/A"}
          </span>
          <button
            type="button"
            onClick={() => setZoom((value) => Math.min(3, value + 0.25))}
            disabled={!src || zoom >= 3}
            aria-label="Zoom in"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E3D7C8] text-[#785135] transition-colors hover:bg-[#FEF4F0] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setZoom(1)}
            disabled={!src || zoom === 1}
            aria-label="Reset zoom"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E3D7C8] text-[#785135] transition-colors hover:bg-[#FEF4F0] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit fullscreen" : "View fullscreen"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#D96B4F] text-white transition-colors hover:bg-[#C4573B]"
          >
            <Expand className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="relative flex aspect-[4/3] min-h-64 items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#FDFBF9,#F6F1EC)] p-5 sm:min-h-80 fullscreen:h-[calc(100vh-4rem)] fullscreen:aspect-auto">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-contain p-4 transition-transform duration-200"
            style={{ transform: `scale(${zoom})` }}
          />
        ) : (
          <div className="max-w-xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D96B4F]">
              Drawing image unavailable
            </p>
            <p className="mt-3 text-lg font-bold text-[#1A1614]">
              Original engineering drawing: To Be Updated
            </p>
            <p className="mt-2 text-sm leading-6 text-[#4A2D1A]">
              {unavailableMessage ??
                "The original drawing was not included in the files available to this project. It has not been recreated or substituted."}
            </p>
          </div>
        )}
      </div>
      {fullscreenError && (
        <p className="border-t border-[#E3D7C8] bg-[#FEF4F0] px-4 py-2 text-sm text-[#983B23]" role="alert">
          {fullscreenError}
        </p>
      )}
    </div>
  );
}
