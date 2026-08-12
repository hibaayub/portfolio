type TagProps = {
  children: string;
  tone?: "light" | "muted" | "pink" | "navy";
};

export function Tag({ children, tone = "light" }: TagProps) {
  const styles = {
    light: "bg-white/15 text-white",
    muted: "bg-ink/5 text-ink/70",
    pink: "bg-pink text-white",
    navy: "bg-navy text-white",
  }[tone];

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium tracking-wide ${styles}`}
    >
      {children}
    </span>
  );
}
