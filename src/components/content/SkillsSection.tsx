import { useState, type KeyboardEvent } from "react";
import {
  skillBranches,
  type SkillBranch,
  type SkillTechnology,
} from "../../data/skills";
import { useLanguage } from "../../hooks/useLanguage";
import styles from "./SkillsSection.module.css";

const ROOT = { x: 800, y: 350 };
const LEFT_SPINE = 630;
const RIGHT_SPINE = 970;

function getStatusKey(status: SkillBranch["status"]) {
  return `skills.status.${status}` as const;
}

function activateFromKeyboard(
  event: KeyboardEvent<SVGGElement>,
  activate: () => void,
) {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  activate();
}

export function SkillsSection() {
  const { t } = useLanguage();
  const [selectedBranchId, setSelectedBranchId] = useState<string | null>(null);
  const [selectedTechnologyId, setSelectedTechnologyId] = useState<
    string | null
  >(null);

  const selectedBranch =
    skillBranches.find((branch) => branch.id === selectedBranchId) ?? null;
  const selectedTechnology =
    selectedBranch?.technologies.find(
      (technology) => technology.id === selectedTechnologyId,
    ) ?? null;

  const selectBranch = (branch: SkillBranch) => {
    setSelectedBranchId(branch.id);
    setSelectedTechnologyId(null);
  };

  const reset = () => {
    setSelectedBranchId(null);
    setSelectedTechnologyId(null);
  };

  const toggleBranch = (branch: SkillBranch) => {
    if (selectedBranchId === branch.id) {
      reset();
      return;
    }

    selectBranch(branch);
  };

  const selectTechnology = (branch: SkillBranch, technology: SkillTechnology) => {
    setSelectedBranchId(branch.id);
    setSelectedTechnologyId(technology.id);
  };

  const branchIsDimmed = (branch: SkillBranch) =>
    selectedBranch !== null && selectedBranch.id !== branch.id;

  return (
    <div className={styles.experience}>
      <header className={styles.intro}>
        <h1 className={styles.title}>{t("skills.heading")}</h1>
        <p className={styles.subtitle}>{t("skills.lead")}</p>
      </header>

      <div className={styles.mapLayout}>
        <div className={styles.visualColumn}>
          <svg
            className={styles.map}
            viewBox="0 0 1600 680"
            role="group"
            aria-label={t("skills.globe_label")}
          >
            <path
              className={styles.spine}
              d={`M ${ROOT.x - 90} ${ROOT.y} H ${LEFT_SPINE} M ${LEFT_SPINE} 170 V 600`}
              aria-hidden="true"
            />
            <path
              className={styles.spine}
              d={`M ${ROOT.x + 90} ${ROOT.y} H ${RIGHT_SPINE} M ${RIGHT_SPINE} 210 V 500`}
              aria-hidden="true"
            />

            {skillBranches.map((branch, branchIndex) => {
              const dimmed = branchIsDimmed(branch);
              const active = selectedBranch?.id === branch.id;
              const spine = branch.side === "left" ? LEFT_SPINE : RIGHT_SPINE;

              return (
                <g
                  key={`${branch.id}-connections`}
                  className={dimmed ? styles.dimmed : undefined}
                  aria-hidden="true"
                >
                  <path
                    className={`${styles.connection} ${active ? styles.connectionActive : ""}`}
                    d={`M ${spine} ${ROOT.y} V ${branch.y} H ${branch.x}`}
                    pathLength={1}
                    style={{ animationDelay: `${1650 + branchIndex * 180}ms` }}
                  />
                  {active
                    ? branch.technologies.map((technology, technologyIndex) => (
                        <path
                          key={technology.id}
                          className={`${styles.connection} ${styles.connectionActive}`}
                          d={`M ${branch.x} ${branch.y} H ${branch.technologyRailX} V ${technology.y} H ${technology.x}`}
                          pathLength={1}
                          style={{
                            animationDelay: `${technologyIndex * 80}ms`,
                          }}
                        />
                      ))
                    : null}
                </g>
              );
            })}

            <g
              className={styles.rootNode}
              role="button"
              aria-pressed={selectedBranch === null}
              aria-label={t("skills.root_label")}
              onClick={reset}
              onKeyDown={(event) => activateFromKeyboard(event, reset)}
              tabIndex={0}
            >
              <title>{t("skills.root_label")}</title>
              <rect
                className={styles.rootFrame}
                x={ROOT.x - 90}
                y={ROOT.y - 30}
                width="180"
                height="60"
              />
              <line
                className={styles.rootRule}
                x1={ROOT.x - 90}
                y1={ROOT.y - 30}
                x2={ROOT.x - 90}
                y2={ROOT.y + 30}
              />
              <text className={styles.rootWord} x={ROOT.x} y={ROOT.y - 4}>
                SOFTWARE
              </text>
              <text className={styles.rootWord} x={ROOT.x} y={ROOT.y + 15}>
                DEVELOPER
              </text>
            </g>

            {skillBranches.map((branch, branchIndex) => {
              const active = selectedBranch?.id === branch.id;
              const dimmed = branchIsDimmed(branch);
              const direction = branch.side === "left" ? -1 : 1;

              return (
                <g key={branch.id}>
                  <g
                    className={`${styles.branchNode} ${active ? styles.branchNodeActive : ""} ${dimmed ? styles.dimmed : ""}`}
                    role="button"
                    tabIndex={0}
                    aria-label={`${t(branch.label)}. ${t(getStatusKey(branch.status))}`}
                    aria-pressed={active}
                    onClick={() => toggleBranch(branch)}
                    onKeyDown={(event) =>
                      activateFromKeyboard(event, () => toggleBranch(branch))
                    }
                    style={{ animationDelay: `${2050 + branchIndex * 180}ms` }}
                  >
                    <title>
                      {t(branch.label)} — {t(getStatusKey(branch.status))}.{" "}
                      {t(branch.description)}
                    </title>
                    <circle
                      className={styles.hitArea}
                      cx={branch.x}
                      cy={branch.y}
                      r="24"
                    />
                    <circle
                      className={styles.branchDot}
                      cx={branch.x}
                      cy={branch.y}
                      r="5"
                    />
                    <text
                      className={styles.branchLabel}
                      x={branch.x}
                      y={branch.y + 32}
                      textAnchor="middle"
                    >
                      {t(branch.label)}
                    </text>
                  </g>

                  {active
                    ? branch.technologies.map((technology, technologyIndex) => {
                        const technologyActive =
                          selectedTechnologyId === technology.id;
                        return (
                          <g
                            key={technology.id}
                            className={`${styles.technologyNode} ${technologyActive ? styles.technologyNodeActive : ""}`}
                            role="button"
                            tabIndex={0}
                            aria-label={`${t(technology.label)}. ${t(technology.description)}`}
                            aria-pressed={technologyActive}
                            onClick={() => selectTechnology(branch, technology)}
                            onKeyDown={(event) =>
                              activateFromKeyboard(event, () =>
                                selectTechnology(branch, technology),
                              )
                            }
                            style={{
                              animationDelay: `${technologyIndex * 90}ms`,
                            }}
                          >
                            <title>
                              {t(technology.label)} —{" "}
                              {t(technology.description)}
                            </title>
                            <circle
                              className={styles.hitArea}
                              cx={technology.x}
                              cy={technology.y}
                              r="17"
                            />
                            <circle
                              className={styles.technologyDot}
                              cx={technology.x}
                              cy={technology.y}
                              r="3"
                            />
                            <text
                              className={styles.technologyLabel}
                              x={technology.x + direction * 12}
                              y={technology.y + 4}
                              textAnchor={
                                branch.side === "left" ? "end" : "start"
                              }
                            >
                              {t(technology.label)}
                            </text>
                          </g>
                        );
                      })
                    : null}
                </g>
              );
            })}
          </svg>

          <nav
            className={styles.mobileBranches}
            aria-label={t("skills.branch_label")}
          >
            {skillBranches.map((branch) => {
              const active = selectedBranch?.id === branch.id;
              return (
                <div key={branch.id}>
                  <button
                    type="button"
                    className={styles.mobileBranch}
                    data-active={active || undefined}
                    aria-pressed={active}
                    onClick={() => toggleBranch(branch)}
                  >
                    <span className={styles.mobileBranchDot} aria-hidden="true" />
                    <span>{t(branch.label)}</span>
                    <span className={styles.mobileStatus}>
                      {t(getStatusKey(branch.status))}
                    </span>
                  </button>
                  {active ? (
                    <div className={styles.mobileBranchDetail}>
                      <p className={styles.mobileDescription}>
                        {selectedTechnology
                          ? t(selectedTechnology.description)
                          : t(branch.description)}
                      </p>
                      {branch.technologies.length > 0 ? (
                        <ul className={styles.mobileTechnologies}>
                          {branch.technologies.map((technology) => (
                            <li key={technology.id}>
                              <button
                                type="button"
                                className={styles.mobileTechnology}
                                data-active={
                                  selectedTechnologyId === technology.id ||
                                  undefined
                                }
                                onClick={() =>
                                  selectTechnology(branch, technology)
                                }
                                aria-label={`${t(technology.label)}. ${t(technology.description)}`}
                                aria-pressed={
                                  selectedTechnologyId === technology.id
                                }
                                title={t(technology.description)}
                              >
                                {t(technology.label)}
                              </button>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      <p className={styles.selectionNote} aria-live="polite">
        {selectedTechnology
          ? `${t(selectedTechnology.label)} — ${t(selectedTechnology.description)}`
          : selectedBranch
            ? t(selectedBranch.description)
            : t("skills.scope_note")}
      </p>
    </div>
  );
}
