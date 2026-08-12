import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center sm:py-32">
      <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">That page doesn&apos;t exist yet.</p>
      <Link href="/" className="mt-8 inline-block font-medium text-pink">
        Back home
      </Link>
    </Container>
  );
}
