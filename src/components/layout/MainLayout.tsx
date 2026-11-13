import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { useSectionRoute } from "../../hooks/useSectionRoute";
import type { SectionId } from "../../types/portfolio";
import { SECTION_REGISTRY } from "../content/sectionRegistry";
import { HomeView } from "./HomeView";
import { MobileComingSoon } from "./MobileComingSoon";
import { SectionView } from "./SectionView";
import styles from "./MainLayout.module.css";

/**
 * Owns the single interaction state of the site: whether the visitor is on the
 * home composition or inside a full-screen section. The two are separate visual
 * states — selecting a section replaces the composition rather than expanding
 * part of it — and the URL tracks the state so browser history works.
 */
export function MainLayout() {
  const { language, t } = useLanguage();
  const { section, navigate, goHome } = useSectionRoute();
  const [returnFocus, setReturnFocus] = useState<SectionId | null>(null);

  useEffect(() => {
    const title =
      section === null
        ? "Muhamad Dzarel Alghifari (DzarelDeveloper) | Software Developer in Bekasi"
        : `${t(SECTION_REGISTRY[section].headingKey)} | Muhamad Dzarel Alghifari`;
    document.title = title;

    const description =
      section === null
        ? language === "id"
          ? "Portfolio Muhamad Dzarel Alghifari (DzarelDeveloper), software developer di Bekasi, Indonesia. Lihat proyek web, keahlian software, keamanan aplikasi, pengalaman, dan kontak."
          : "Portfolio of Muhamad Dzarel Alghifari (DzarelDeveloper), a software developer in Bekasi, Indonesia. Explore web projects, software skills, application security, experience, and contact."
        : `${t(SECTION_REGISTRY[section].leadKey)} | Muhamad Dzarel Alghifari.`;

    const updateMeta = (selector: string, content: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      if (element) element.content = content;
    };

    updateMeta('meta[name="description"]', description);
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[name="twitter:title"]', title);
    updateMeta('meta[name="twitter:description"]', description);
  }, [language, section, t]);

  const handleSelect = useCallback(
    (id: SectionId) => {
      setReturnFocus(null);
      navigate(id);
    },
    [navigate],
  );

  const handleBack = useCallback(() => {
    setReturnFocus(section);
    goHome();
  }, [goHome, section]);

  return (
    <div className={styles.experience}>
      <div className={styles.desktopExperience}>
        <a className="skip-link" href="#main">
          {t("a11y.skip")}
        </a>

        <div className={styles.stage}>
          {section === null ? (
            <HomeView key="home" focusId={returnFocus} onSelect={handleSelect} />
          ) : (
            <SectionView key={section} id={section} onBack={handleBack} />
          )}
        </div>
      </div>
      <div className={styles.mobileExperience}>
        <MobileComingSoon />
      </div>
    </div>
  );
}
