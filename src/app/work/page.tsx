import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ComingSoonCard } from "@/components/work/ComingSoonCard";
import { FeaturedProjectCard } from "@/components/work/FeaturedProjectCard";
import { WorkIntro } from "@/components/work/WorkIntro";
import { upcomingProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A collection of projects focused on accessibility, fairness, and intentional design.",
};

export default function WorkPage() {
  return (
    <>
      <WorkIntro />
      <Container className="pb-24 sm:pb-32">
        <FadeIn>
          <FeaturedProjectCard />
        </FadeIn>
        <FadeIn delay={0.1} className="mt-6 grid gap-6 md:grid-cols-2">
          {upcomingProjects.map((project) => (
            <ComingSoonCard key={project.slug} project={project} />
          ))}
        </FadeIn>
      </Container>
    </>
  );
}
