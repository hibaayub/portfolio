import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <Container className="flex flex-col items-start justify-between gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <a
          href={site.linkedin}
          className="font-medium text-ink transition-colors hover:text-pink"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </Container>
    </footer>
  );
}
