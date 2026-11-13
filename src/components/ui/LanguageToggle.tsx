import { LANGUAGE_LABEL_KEY, LANGUAGES } from "../../i18n";
import type { Language } from "../../types/portfolio";
import { useLanguage } from "../../hooks/useLanguage";
import { SegmentedControl, type SegmentedOption } from "./SegmentedControl";

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const options: readonly SegmentedOption<Language>[] = LANGUAGES.map(
    (code) => ({
      value: code,
      label: t(LANGUAGE_LABEL_KEY[code]),
      text: code.toUpperCase(),
      icon: null,
    }),
  );

  return (
    <SegmentedControl
      ariaLabel={t("control.language_switch")}
      value={language}
      options={options}
      onChange={setLanguage}
    />
  );
}
