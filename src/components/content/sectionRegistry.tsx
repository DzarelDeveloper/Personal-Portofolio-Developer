import type { ReactNode } from "react";
import type { TranslationKey } from "../../i18n";
import type { DetailTarget, SectionId } from "../../types/portfolio";
import { AboutSection } from "./AboutSection";
import { CommunitySection } from "./CommunitySection";
import { ContactSection } from "./ContactSection";
import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";
import { ProjectsSection } from "./ProjectsSection";
import { RecognitionSection } from "./RecognitionSection";
import { SkillsSection } from "./SkillsSection";

/**
 * The one place a navigation id is bound to its heading copy and its body.
 * Adding a section means adding an entry here — nothing else has to know.
 */
export interface SectionDef {
  /** Label shown in the section's return bar; mirrors the navigation entry. */
  readonly navKey: TranslationKey;
  readonly headingKey: TranslationKey;
  readonly leadKey: TranslationKey;
  readonly render: (onOpenDetail?: (target: DetailTarget) => void) => ReactNode;
}

export const SECTION_REGISTRY: Readonly<Record<SectionId, SectionDef>> = {
  about: {
    navKey: "nav.about",
    headingKey: "about.heading",
    leadKey: "about.lead",
    render: () => <AboutSection />,
  },
  skills: {
    navKey: "nav.skills",
    headingKey: "skills.heading",
    leadKey: "skills.lead",
    render: () => <SkillsSection />,
  },
  education: {
    navKey: "nav.education",
    headingKey: "education.heading",
    leadKey: "education.lead",
    render: () => <EducationSection />,
  },
  contact: {
    navKey: "nav.contact",
    headingKey: "contact.heading",
    leadKey: "contact.lead",
    render: () => <ContactSection />,
  },
  projects: {
    navKey: "nav.projects",
    headingKey: "projects.heading",
    leadKey: "projects.lead",
    render: () => <ProjectsSection />,
  },
  experience: {
    navKey: "nav.experience",
    headingKey: "experience.heading",
    leadKey: "experience.lead",
    render: () => <ExperienceSection />,
  },
  recognition: {
    navKey: "nav.records",
    headingKey: "recognition.heading",
    leadKey: "recognition.lead",
    render: () => <RecognitionSection />,
  },
  achievements: {
    navKey: "nav.records",
    headingKey: "recognition.heading",
    leadKey: "recognition.lead",
    render: () => <RecognitionSection />,
  },
  certificates: {
    navKey: "nav.records",
    headingKey: "recognition.heading",
    leadKey: "recognition.lead",
    render: () => <RecognitionSection />,
  },
  community: {
    navKey: "nav.community",
    headingKey: "community.heading",
    leadKey: "community.lead",
    render: () => <CommunitySection />,
  },
};
