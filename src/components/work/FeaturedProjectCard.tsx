import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import { featuredProject } from "@/data/projects";

export function FeaturedProjectCard() {
  return (
    <Link
      href={featuredProject.href ?? "/work/datahub"}
      aria-label={`Read case study: ${featuredProject.title}`}
      className="group block overflow-hidden rounded-2xl bg-navy p-6 text-white shadow-[0_8px_30px_rgba(27,54,93,0.18)] transition duration-300 hover:-translate-y-0.5 sm:p-10"
    >
      <Tag tone="light">{featuredProject.tags.join(" · ")}</Tag>
      <h2 className="mt-8 text-3xl font-bold tracking-tight sm:text-5xl">
        {featuredProject.title}
      </h2>
      <p className="mt-3 text-base text-white/80 sm:text-lg">
        {featuredProject.client}
      </p>
      <p className="mt-4 max-w-xl text-sm text-white/75 sm:text-base">
        {featuredProject.description}
      </p>
      <p className="mt-8 inline-flex items-center gap-1 text-sm font-medium">
        Read case study
        <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
          ↗
        </span>
      </p>
    </Link>
  );
}
