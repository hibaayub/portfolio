import type { Metadata } from "next";
import { CaseStudyArticle } from "@/components/case-study/CaseStudyArticle";
import { datahubCaseStudy } from "@/data/datahub";

export const metadata: Metadata = {
  title: datahubCaseStudy.title,
  description: datahubCaseStudy.hook,
};

export default function DatahubCaseStudyPage() {
  return <CaseStudyArticle />;
}
