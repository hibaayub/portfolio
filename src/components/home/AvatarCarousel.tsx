"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type FocusEvent as ReactFocusEvent,
  type MouseEvent as ReactMouseEvent,
} from "react";

export type AvatarLook = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  subtitle: string;
};

const defaultLooks: readonly AvatarLook[] = [
  {
    src: "/images/avatar-graduation.png",
    width: 413,
    height: 1467,
    alt: "Illustrated avatar of me in a white pleated dress with an orange University of Illinois graduation stole",
    title: "Commencement Day",
    subtitle: "University of Illinois grad",
  },
  {
    src: "/images/avatar-business.png",
    width: 580,
    height: 1475,
    alt: "Illustrated avatar of me in a burgundy suit and glasses, holding a laptop",
    title: "PM Mode",
    subtitle: "Ready for the roadmap review",
  },
  {
    src: "/images/avatar-pakistani.png",
    width: 534,
    height: 1429,
    alt: "Illustrated avatar of me in a maroon embroidered Pakistani outfit with a sheer dupatta",
    title: "Eid & Weddings",
    subtitle: "Proudly Pakistani",
  },
];

type AvatarCarouselProps = {
  looks?: readonly AvatarLook[];
  label?: string;
  className?: string;
};

const SWIPE_THRESHOLD = 40;
const ROTATE_MS = 4000;

function signedOffset(index: number, current: number, count: number) {
  let diff = index - current;
  diff = ((diff % count) + count) % count;
  if (diff > count / 2) diff -= count;
  return diff;
}

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function subscribeVisibility(onStoreChange: () => void) {
  document.addEventListener("visibilitychange", onStoreChange);
  return () => document.removeEventListener("visibilitychange", onStoreChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

function useDocumentHidden() {
  return useSyncExternalStore(
    subscribeVisibility,
    () => document.hidden,
    () => false,
  );
}

export function AvatarCarousel({
  looks = defaultLooks,
  label = "Illustrated looks",
  className = "",
}: AvatarCarouselProps) {
  const count = looks.length;
  const [active, setActive] = useState(0);
  const [instantIndexes, setInstantIndexes] = useState<number[]>([]);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const hidden = useDocumentHidden();
  const activeRef = useRef(0);
  const swipe = useRef<{ id: number; x: number; y: number } | null>(null);
  const suppressClick = useRef(false);

  const goTo = useCallback(
    (index: number) => {
      if (count < 2) return;
      const normalized = ((index % count) + count) % count;
      const current = activeRef.current;
      if (normalized === current) return;

      const jumping: number[] = [];
      for (let i = 0; i < count; i += 1) {
        const nextOffset = signedOffset(i, normalized, count);
        const previousOffset = signedOffset(i, current, count);
        if (Math.abs(nextOffset - previousOffset) > 1) jumping.push(i);
      }

      activeRef.current = normalized;
      setInstantIndexes(jumping);
      setActive(normalized);
    },
    [count],
  );

  const step = useCallback(
    (delta: number) => {
      goTo(activeRef.current + delta);
    },
    [goTo],
  );

  useEffect(() => {
    if (instantIndexes.length === 0) return;
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => setInstantIndexes([]));
    });
    return () => {
      cancelAnimationFrame(first);
      if (second) cancelAnimationFrame(second);
    };
  }, [instantIndexes]);

  useEffect(() => {
    if (userPaused || hovered || focused || hidden || reduced || count < 2) return;
    const id = window.setInterval(() => step(1), ROTATE_MS);
    return () => window.clearInterval(id);
  }, [userPaused, hovered, focused, hidden, reduced, count, step, active]);

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
  };

  const onFocusCapture = (event: ReactFocusEvent<HTMLElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    setFocused(!target.closest("[data-playback='true']"));
  };

  const onBlurCapture = (event: ReactFocusEvent<HTMLElement>) => {
    const next = event.relatedTarget;
    if (next instanceof Node && event.currentTarget.contains(next)) return;
    setFocused(false);
  };

  const onPointerEnter = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === "mouse") setHovered(true);
  };

  const onPointerLeave = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === "mouse") setHovered(false);
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    swipe.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const start = swipe.current;
    swipe.current = null;
    if (!start || start.id !== event.pointerId) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return;
    suppressClick.current = true;
    step(dx < 0 ? 1 : -1);
  };

  const onClickCapture = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!suppressClick.current) return;
    suppressClick.current = false;
    event.preventDefault();
    event.stopPropagation();
  };

  if (count === 0) return null;

  const activeLook = looks[active] ?? looks[0];

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      className={`relative max-w-full ${className}`}
      onKeyDown={onKeyDown}
      onFocusCapture={onFocusCapture}
      onBlurCapture={onBlurCapture}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <div className="relative">
        <div
          className="avatar-stage relative overflow-hidden"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            swipe.current = null;
          }}
          onClickCapture={onClickCapture}
        >
          <div key={activeLook.src} className="avatar-shadow" aria-hidden="true" />
          {looks.map((look, index) => {
            const offset = signedOffset(index, active, count);
            const isActive = offset === 0;
            const instant = instantIndexes.includes(index);
            const slotStyle = {
              "--pos": offset,
              "--scale": isActive ? 1 : 0.7,
              zIndex: isActive ? 2 : 1,
            } as CSSProperties;

            return (
              <div
                key={look.src}
                className="avatar-slot pointer-events-none absolute inset-0"
                data-instant={instant ? "true" : undefined}
                data-look={look.title}
                style={slotStyle}
              >
                <div
                  className="avatar-figure-wrap pointer-events-auto absolute left-1/2 w-max"
                  data-instant={instant ? "true" : undefined}
                  data-active={isActive ? "true" : "false"}
                  style={{
                    opacity: isActive ? 1 : 0.35,
                    filter: isActive ? "none" : "blur(1.5px)",
                  }}
                >
                  <div className={isActive ? "avatar-float relative" : "relative"}>
                    <Image
                      src={look.src}
                      alt={look.alt}
                      width={look.width}
                      height={look.height}
                      sizes="(max-width: 639px) 180px, 280px"
                      quality={90}
                      draggable={false}
                      preload={index === 0}
                      loading={index === 0 ? undefined : "lazy"}
                      style={{
                        display: "block",
                        height: "var(--avatar-figure-height)",
                        width: "auto",
                        maxWidth: "none",
                      }}
                    />
                    <button
                      type="button"
                      tabIndex={isActive ? -1 : 0}
                      aria-current={isActive ? "true" : undefined}
                      aria-label={isActive ? undefined : `Show ${look.title}`}
                      className={`absolute inset-0 ${isActive ? "pointer-events-none" : "cursor-pointer"}`}
                      onClick={() => {
                        if (!isActive) goTo(index);
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Previous look"
          onClick={() => step(-1)}
          className="absolute top-1/2 left-2 z-30 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-[0_6px_18px_rgba(17,17,17,0.08)] transition duration-200 hover:border-pink hover:text-pink sm:left-3 sm:h-12 sm:w-12"
        >
          <Chevron direction="left" />
        </button>
        <button
          type="button"
          aria-label="Next look"
          onClick={() => step(1)}
          className="absolute top-1/2 right-2 z-30 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-[0_6px_18px_rgba(17,17,17,0.08)] transition duration-200 hover:border-pink hover:text-pink sm:right-3 sm:h-12 sm:w-12"
        >
          <Chevron direction="right" />
        </button>
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="mt-4 min-h-[4.25rem] px-4 text-center"
      >
        <div key={activeLook.src} className="avatar-caption">
          <p className="text-base font-semibold tracking-tight text-ink sm:text-lg">
            {activeLook.title}
          </p>
          <p className="mt-1 text-sm text-muted">{activeLook.subtitle}</p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center">
        <span />
        <div role="group" aria-label="Choose a look" className="flex items-center">
          {looks.map((look, index) => {
            const isActive = index === active;
            return (
              <button
                key={look.src}
                type="button"
                aria-label={`Show ${look.title}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => goTo(index)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full"
              >
                <span
                  aria-hidden="true"
                  className={`block h-2 w-2 rounded-full ${
                    isActive ? "bg-ink" : "border border-ink/30 bg-transparent"
                  }`}
                />
              </button>
            );
          })}
        </div>
        <div className="flex justify-start pl-1">
          <button
            type="button"
            data-playback="true"
            aria-pressed={userPaused}
            aria-label={userPaused ? "Play carousel" : "Pause carousel"}
            onClick={() => setUserPaused((value) => !value)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white text-ink transition duration-200 hover:border-pink hover:text-pink"
          >
            {userPaused ? <PlayIcon /> : <PauseIcon />}
          </button>
        </div>
      </div>
    </section>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 18 18"
      aria-hidden="true"
      className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
      fill="none"
    >
      <path
        d={direction === "left" ? "M11 4.5 6.5 9 11 13.5" : "M7 4.5 11.5 9 7 13.5"}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" fill="currentColor">
      <rect x="2.25" y="1.75" width="3" height="10.5" rx="1" />
      <rect x="8.75" y="1.75" width="3" height="10.5" rx="1" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" fill="currentColor">
      <path d="M4.1 2.35c0-.78.86-1.26 1.53-.84l6.4 4.05c.63.4.63 1.32 0 1.72l-6.4 4.05c-.67.42-1.53-.06-1.53-.84V2.35Z" />
    </svg>
  );
}
