import type { Metadata } from "next";
import { BackLink } from "@/components/case-study/BackLink";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { Eyebrow } from "@/components/case-study/Eyebrow";
import { Prose } from "@/components/case-study/Prose";
import { Screenshot, ScreenshotGrid } from "@/components/case-study/ScreenshotGrid";
import { Term, TermList } from "@/components/case-study/TermList";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "From Chaos to Consistency: Building a Design System for DSRS DataHub",
  description:
    "Building a design system for the DSRS DataHub at the University of Illinois — from an inconsistent site to a shared set of reusable components.",
};

export default function DatahubCaseStudyPage() {
  return (
    <CaseStudyLayout>
      <FadeIn>
        <header>
          <Eyebrow>
            Design System · Internship · Data Science Research Services
          </Eyebrow>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            From Chaos to Consistency: Building a Design System for DSRS DataHub
          </h1>
        </header>
      </FadeIn>

      <CaseStudySection id="problem" title="The Problem">
        <Prose>
          <p>
            The DSRS DataHub had grown page by page without a shared visual
            language. There were no documented standards, no reusable
            components, and no consistent way to present datasets, services, or
            research tools.
          </p>
          <p>
            Diagrams were visually noisy, spacing drifted from page to page, and
            every new intern or teammate had to reinvent the same UI patterns.
            The site worked — but it did not feel like one product.
          </p>
        </Prose>
      </CaseStudySection>

      <CaseStudySection id="research" title="Research">
        <Prose>
          <p>
            I audited existing pages, mapped repeating layouts, and noted where
            researchers actually got stuck: finding datasets, understanding what
            a page was for, and trusting that two parts of the site belonged
            together.
          </p>
          <p>
            I looked at comparable research platforms and Illinois brand
            constraints, then listed the smallest set of components that could
            cover the majority of pages without forcing a redesign of every
            screen at once.
          </p>
        </Prose>
      </CaseStudySection>

      <CaseStudySection id="building" title="Building">
        <Prose>
          <p>
            I turned the audit into a small, copyable system — components with a
            clear job, so the next page would be easier than the last.
          </p>
        </Prose>
        <TermList>
          <Term name="HeroBanner">
            a standardized header with a title, supporting line, and optional
            actions so every landing page opens with the same rhythm.
          </Term>
          <Term name="NavBar & Footer">
            structural chrome that bookends the site, so pages feel held rather
            than floating.
          </Term>
          <Term name="DatasetCard">
            a consistent preview for catalog entries — title, source, and status
            without competing layouts.
          </Term>
          <Term name="StatCard">
            credibility metrics that can be scanned in seconds instead of buried
            in paragraphs.
          </Term>
          <Term name="Tag / Badge">
            shared labels for category and status, so filters and metadata read
            the same everywhere.
          </Term>
          <Term name="PrimaryButton">
            one clear action style. Orange is used like punctuation — not
            decoration.
          </Term>
          <Term name="SectionHeader">
            a shared heading treatment for long-form pages, keeping hierarchy
            intact as content grows.
          </Term>
          <Term name="ContentGrid">
            two- and three-column layouts with aligned gutters, so new modules
            snap into the same system.
          </Term>
        </TermList>
      </CaseStudySection>

      <FadeIn className="mt-14 sm:mt-20">
        <ScreenshotGrid>
          <Screenshot
            src="/images/datahub-home.png"
            alt="DSRS DataHub homepage after the design system, with a navy header, clear hero, and orange actions."
            sizes="(min-width: 640px) 33vw, 100vw"
          />
          <Screenshot
            src="/images/datahub-catalog.png"
            alt="Data catalog interface with searchable dataset cards and consistent metadata."
            sizes="(min-width: 640px) 33vw, 100vw"
          />
          <Screenshot
            src="/images/datahub-intro.png"
            alt="DataHub introduction documentation page with a table of contents and structured content."
            sizes="(min-width: 640px) 33vw, 100vw"
          />
        </ScreenshotGrid>
      </FadeIn>

      <CaseStudySection id="decisions" title="Design Decisions and Why">
        <Prose>
          <p>
            Stay in the Illinois color family without looking like every other
            campus page. Slate navy does the structural work. Orange is reserved
            for the few moments that need to pull focus. Whitespace does the
            rest, so dense research content can breathe.
          </p>
          <p>
            Components were designed to be copied, not customized. If a page
            needed a new pattern, it had to earn a place in the system first.
            That constraint is what made the site feel consistent once other
            teammates started building on top of it.
          </p>
        </Prose>
      </CaseStudySection>

      <CaseStudySection id="learned" title="What I learned">
        <Prose>
          <p>
            A design system is less about pretty components and more about
            making the next page easier than the last. Consistency is a team
            sport: the system only works if people can find the pattern,
            understand why it exists, and reuse it without asking.
          </p>
        </Prose>
        <BackLink />
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
