export type ProjectStatus = "published" | "coming-soon";

export type Project = {
  slug: string;
  number: string;
  title: string;
  client: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  href?: string;
};

export const featuredProject: Project = {
  slug: "datahub",
  number: "01",
  title: "Website Redesign",
  client: "Data Science Research Services",
  description:
    "Building a design system for the DSRS DataHub at the University of Illinois.",
  tags: ["Design System", "Internship"],
  status: "published",
  href: "/work/datahub",
};

export const upcomingProjects: Project[] = [
  {
    slug: "campus-orgs",
    number: "02",
    title: "Campus Orgs App",
    client: "Personal",
    description: "Helping students discover and join campus organizations.",
    tags: ["UX Research", "Product Design"],
    status: "coming-soon",
  },
  {
    slug: "morning-brief",
    number: "03",
    title: "My Morning Brief",
    client: "Personal",
    description: "An AI agent that gathers a calm, useful start to the day.",
    tags: ["AI Agent", "Work in Progress"],
    status: "coming-soon",
  },
];

export const projects = [featuredProject, ...upcomingProjects];
