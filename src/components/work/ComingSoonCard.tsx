import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

export function ComingSoonCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-dashed border-ink/20 bg-white/60 p-6 sm:p-8">
      <Tag tone="muted">{project.tags.join(" · ")}</Tag>
      <h3 className="mt-6 text-2xl font-bold tracking-tight text-ink">
        {project.title}
      </h3>
      <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
        <span className="h-2 w-2 rounded-full bg-[#E8A317]" aria-hidden="true" />
        Coming soon
      </p>
    </article>
  );
}
