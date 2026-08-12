export const datahubCaseStudy = {
  slug: "datahub",
  eyebrow: "Design System · Internship · Data Science Research Services",
  title: "From Chaos to Consistency: Building a Design System for DSRS DataHub",
  hook: "I inherited a website with no standards, no components, and no consistency. I built the foundation to fix it.",
  problem: [
    "The DSRS DataHub had grown page by page without a shared visual language. There were no documented standards, no reusable components, and no consistent way to present datasets, services, or research tools.",
    "Diagrams were visually noisy, spacing drifted from page to page, and every new intern or teammate had to reinvent the same UI patterns. The site worked — but it did not feel like one product.",
  ],
  research: [
    "I audited existing pages, mapped repeating layouts, and noted where researchers actually got stuck: finding datasets, understanding what a page was for, and trusting that two parts of the site belonged together.",
    "I looked at comparable research platforms and Illinois brand constraints, then listed the smallest set of components that could cover the majority of pages without forcing a redesign of every screen at once.",
  ],
  buildingIntro:
    "I turned the audit into a small, copyable system — components with a clear job, so the next page would be easier than the last.",
  components: [
    {
      name: "HeroBanner",
      description:
        "a standardized header with a title, supporting line, and optional actions so every landing page opens with the same rhythm.",
    },
    {
      name: "NavBar & Footer",
      description:
        "structural chrome that bookends the site, so pages feel held rather than floating.",
    },
    {
      name: "DatasetCard",
      description:
        "a consistent preview for catalog entries — title, source, and status without competing layouts.",
    },
    {
      name: "StatCard",
      description:
        "credibility metrics that can be scanned in seconds instead of buried in paragraphs.",
    },
    {
      name: "Tag / Badge",
      description:
        "shared labels for category and status, so filters and metadata read the same everywhere.",
    },
    {
      name: "PrimaryButton",
      description:
        "one clear action style. Orange is used like punctuation — not decoration.",
    },
    {
      name: "SectionHeader",
      description:
        "a shared heading treatment for long-form pages, keeping hierarchy intact as content grows.",
    },
    {
      name: "ContentGrid",
      description:
        "two- and three-column layouts with aligned gutters, so new modules snap into the same system.",
    },
  ],
  decisions: [
    "Stay in the Illinois color family without looking like every other campus page. Slate navy does the structural work. Orange is reserved for the few moments that need to pull focus. Whitespace does the rest, so dense research content can breathe.",
    "Components were designed to be copied, not customized. If a page needed a new pattern, it had to earn a place in the system first. That constraint is what made the site feel consistent once other teammates started building on top of it.",
  ],
  learned:
    "A design system is less about pretty components and more about making the next page easier than the last. Consistency is a team sport: the system only works if people can find the pattern, understand why it exists, and reuse it without asking.",
  gallery: [
    {
      src: "/images/datahub-home.png",
      alt: "DSRS DataHub homepage after the design system, with a navy header, clear hero, and orange actions.",
    },
    {
      src: "/images/datahub-catalog.png",
      alt: "Data catalog interface with searchable dataset cards and consistent metadata.",
    },
    {
      src: "/images/datahub-intro.png",
      alt: "DataHub introduction documentation page with a table of contents and structured content.",
    },
  ],
  before: [
    {
      src: "/images/datahub-before-intro.png",
      alt: "Earlier DataHub introduction page with a cluttered diagram and inconsistent layout.",
    },
    {
      src: "/images/datahub-before-home.png",
      alt: "Earlier DSRS homepage using a busy campus template and competing visual styles.",
    },
  ],
} as const;
