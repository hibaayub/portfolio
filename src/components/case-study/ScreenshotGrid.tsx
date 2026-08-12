import Image from "next/image";
import type { ReactNode } from "react";

type ScreenshotGridProps = {
  children: ReactNode;
  columns?: 2 | 3;
};

export function ScreenshotGrid({
  children,
  columns = 3,
}: ScreenshotGridProps) {
  const grid =
    columns === 2 ? "grid gap-5 md:grid-cols-2" : "grid gap-4 sm:grid-cols-3";

  return <div className={grid}>{children}</div>;
}

type ScreenshotProps = {
  src: string;
  alt: string;
  sizes?: string;
};

export function Screenshot({ src, alt, sizes }: ScreenshotProps) {
  return (
    <figure className="overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(17,17,17,0.06)]">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="h-auto w-full"
        sizes={sizes}
      />
    </figure>
  );
}
