"use client";

import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";

type ScreenshotGridProps = {
  children: ReactNode;
  columns?: 1 | 2 | 3;
};

export function ScreenshotGrid({
  children,
  columns = 3,
}: ScreenshotGridProps) {
  const grid =
    columns === 1
      ? "grid gap-6"
      : columns === 2
      ? "grid gap-5 md:grid-cols-2"
      : "grid gap-4 sm:grid-cols-3";

  return <div className={grid}>{children}</div>;
}

type ScreenshotProps = {
  src: string;
  alt: string;
  sizes?: string;
};

export function Screenshot({ src, alt, sizes }: ScreenshotProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <figure
        onClick={() => setIsOpen(true)}
        className="cursor-zoom-in overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(17,17,17,0.06)] transition-transform hover:scale-[1.01]"
      >
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          className="h-auto w-full"
          sizes={sizes}
        />
      </figure>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/85 p-6"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-6 text-3xl text-white/80 hover:text-white"
            aria-label="Close"
          >
            ×
          </button>
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={900}
            className="h-auto max-h-[92vh] w-auto max-w-[92vw] rounded-lg"
          />
        </div>
      )}
    </>
  );
}