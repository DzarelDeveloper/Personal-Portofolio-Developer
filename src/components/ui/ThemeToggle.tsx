import { Moon, Sun } from "lucide-react";
import type { Theme } from "../../types/portfolio";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../hooks/useTheme";
import { SegmentedControl, type SegmentedOption } from "./SegmentedControl";

const ICON_SIZE = 15;
const ICON_STROKE = 1.75;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  const options: readonly SegmentedOption<Theme>[] = [
    {
      value: "light",
      label: t("control.theme_to_light"),
      text: null,
      icon: <Sun size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    },
    {
      value: "dark",
      label: t("control.theme_to_dark"),
      text: null,
      icon: <Moon size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    },
  ];

  return (
    <SegmentedControl
      ariaLabel={t("a11y.theme_control")}
      value={theme}
      options={options}
      onChange={setTheme}
    />
  );
}
