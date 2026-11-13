import type { LucideIcon } from "lucide-react";
import {
  Award,
  Briefcase,
  Cpu,
  Folder,
  GraduationCap,
  Mail,
  User,
  Users,
} from "lucide-react";
import type { TranslationKey } from "../i18n";
import type { LeftSectionId, RightSectionId } from "../types/portfolio";

/**
 * Navigation model. Icons are decorative (`aria-hidden`); the accessible name
 * always comes from the translated label.
 */

export interface NavEntry<Id extends string> {
  readonly id: Id;
  readonly labelKey: TranslationKey;
  readonly icon: LucideIcon;
}

export const PERSONAL_SECTIONS: readonly NavEntry<LeftSectionId>[] = [
  { id: "about", labelKey: "nav.about", icon: User },
  { id: "skills", labelKey: "nav.skills", icon: Cpu },
  { id: "education", labelKey: "nav.education", icon: GraduationCap },
  { id: "contact", labelKey: "nav.contact", icon: Mail },
];

export const PROFESSIONAL_SECTIONS: readonly NavEntry<RightSectionId>[] = [
  { id: "projects", labelKey: "nav.projects", icon: Folder },
  { id: "experience", labelKey: "nav.experience", icon: Briefcase },
  { id: "recognition", labelKey: "nav.records", icon: Award },
  { id: "community", labelKey: "nav.community", icon: Users },
];
