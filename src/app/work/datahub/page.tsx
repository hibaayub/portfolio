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
  title: "Building a Design System for DSRS DataHub",
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
            Building a Design System for DSRS DataHub
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
            Diagrams were visually noisy with no clear reading order and
            every team member had to reinvent the same UI patterns. The site worked, but it did not feel like one product.
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
            a standardized header with a title, and supporting description, so every landing page opens with the same rhythm.
          </Term>
          <Term name="QuickAccess">
            quick links to related pages that were consistent across all datasets.
          </Term>
          <Term name="DataAccess">
            a three-part component covering Authorized Users, Requirements, and Restrictions, replacing scattered text.
          </Term>
          <Term name="DataOverview">
            a customizable card grid showing dataset categories with an orange hover state for interactivity.
          </Term>
          <Term name="DataDetails & DataDetailsGroup">
            gray outer, white inner card system for flexible content display with scrollable schema tables to prevent endless vertical scrolling.
          </Term>
        </TermList>
      </CaseStudySection>

      <FadeIn className="mt-14 sm:mt-20">
        <ScreenshotGrid>
          <Screenshot
            src="/images/data-intro.png"
            alt="DSRS DataHub homepage after the design system, with a navy header, clear hero, and orange actions."
            sizes="(min-width: 640px) 33vw, 100vw"
          />
          <Screenshot
            src="/images/data-access.png"
            alt="Data catalog interface with searchable dataset cards and consistent metadata."
            sizes="(min-width: 640px) 33vw, 100vw"
          />
          <Screenshot
            src="/images/dataset-overview.png"
            alt="DataHub introduction documentation page with a table of contents and structured content."
            sizes="(min-width: 640px) 33vw, 100vw"
          />
        </ScreenshotGrid>
      </FadeIn>

      <CaseStudySection id="decisions" title="Design Decisions and Why">
        <Prose>
          <p>
            Early on, we used orange icons throughout the DataHub page. It felt on-brand 
            for UIUC, but when we looked at the pages, everything was orange: icons, buttons, 
            hover states, accents. Nothing stood out. We switched icons 
            to black and reserved orange strictly for buttons and interactive hover states. 
            Now orange means something and has a job.
          </p>
          <p>
            Good design systems aren't just what users see. I renamed dozens of files to 
            follow consistent conventions: PascalCase for components, camelCase for 
            utilities, kebab-case for CSS and MDX. Then I wrote a Contributing Guide so 
            future employees would know exactly where everything goes and why.
          </p>
        </Prose>
      </CaseStudySection>

      <CaseStudySection id="learned" title="What I learned">
        <Prose>
          <p>
            Standardization is a design decision. Naming a file HeroBanner.tsx instead of 
            hero-banner.tsx is the same instinct as choosing gray-on-white cards over a mix 
            of styles. A design system is about making the next page easier than the last. 
            Consistency is a team effort: the system only works if people can find the pattern,
            understand why it exists, and reuse it without asking.
          </p>
        </Prose>
        <BackLink />
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
