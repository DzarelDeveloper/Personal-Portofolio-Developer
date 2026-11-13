import type { TranslationKey } from "../i18n";

export type SkillSide = "left" | "right";

export interface SkillTechnology {
  readonly id: string;
  readonly label: TranslationKey;
  readonly description: TranslationKey;
  readonly x: number;
  readonly y: number;
}

export interface SkillBranch {
  readonly id: string;
  readonly label: TranslationKey;
  readonly description: TranslationKey;
  readonly status: "demonstrated" | "focus" | "exploring" | "unverified";
  readonly side: SkillSide;
  readonly x: number;
  readonly y: number;
  readonly technologyRailX: number;
  readonly technologies: readonly SkillTechnology[];
}

export const skillBranches: readonly SkillBranch[] = [
  {
    id: "frontend",
    label: "skills.branch.frontend",
    description: "skills.branch.frontend.description",
    status: "demonstrated",
    side: "left",
    x: 500,
    y: 170,
    technologyRailX: 360,
    technologies: [
      {
        id: "react",
        label: "skills.tech.react",
        description: "skills.tech.react.description",
        x: 130,
        y: 70,
      },
      {
        id: "nextjs",
        label: "skills.tech.nextjs",
        description: "skills.tech.nextjs.description",
        x: 130,
        y: 110,
      },
      {
        id: "typescript",
        label: "skills.tech.typescript",
        description: "skills.tech.typescript.description",
        x: 130,
        y: 150,
      },
      {
        id: "javascript",
        label: "skills.tech.javascript",
        description: "skills.tech.javascript.description",
        x: 130,
        y: 190,
      },
      {
        id: "html",
        label: "skills.tech.html",
        description: "skills.tech.html.description",
        x: 130,
        y: 230,
      },
      {
        id: "css",
        label: "skills.tech.css",
        description: "skills.tech.css.description",
        x: 130,
        y: 270,
      },
      {
        id: "vite",
        label: "skills.tech.vite",
        description: "skills.tech.vite.description",
        x: 130,
        y: 310,
      },
      {
        id: "react-router",
        label: "skills.tech.react_router",
        description: "skills.tech.react_router.description",
        x: 130,
        y: 350,
      },
    ],
  },
  {
    id: "backend",
    label: "skills.branch.backend",
    description: "skills.branch.backend.description",
    status: "demonstrated",
    side: "left",
    x: 500,
    y: 390,
    technologyRailX: 375,
    technologies: [
      {
        id: "nodejs",
        label: "skills.tech.nodejs",
        description: "skills.tech.nodejs.description",
        x: 300,
        y: 310,
      },
      {
        id: "php",
        label: "skills.tech.php",
        description: "skills.tech.php.description",
        x: 300,
        y: 355,
      },
      {
        id: "python",
        label: "skills.tech.python",
        description: "skills.tech.python.description",
        x: 300,
        y: 400,
      },
      {
        id: "fastapi",
        label: "skills.tech.fastapi",
        description: "skills.tech.fastapi.description",
        x: 300,
        y: 445,
      },
      {
        id: "rest-api",
        label: "skills.tech.rest_api",
        description: "skills.tech.rest_api.description",
        x: 300,
        y: 490,
      },
      {
        id: "websockets",
        label: "skills.tech.websockets",
        description: "skills.tech.websockets.description",
        x: 300,
        y: 535,
      },
      {
        id: "jwt",
        label: "skills.tech.jwt",
        description: "skills.tech.jwt.description",
        x: 300,
        y: 580,
      },
    ],
  },
  {
    id: "database",
    label: "skills.branch.database",
    description: "skills.branch.database.description",
    status: "demonstrated",
    side: "left",
    x: 500,
    y: 600,
    technologyRailX: 305,
    technologies: [
      {
        id: "mysql",
        label: "skills.tech.mysql",
        description: "skills.tech.mysql.description",
        x: 130,
        y: 440,
      },
      {
        id: "mariadb",
        label: "skills.tech.mariadb",
        description: "skills.tech.mariadb.description",
        x: 130,
        y: 485,
      },
      {
        id: "sqlite",
        label: "skills.tech.sqlite",
        description: "skills.tech.sqlite.description",
        x: 130,
        y: 530,
      },
      {
        id: "sqlalchemy",
        label: "skills.tech.sqlalchemy",
        description: "skills.tech.sqlalchemy.description",
        x: 130,
        y: 575,
      },
    ],
  },
  {
    id: "application-security",
    label: "skills.branch.security",
    description: "skills.branch.security.description",
    status: "focus",
    side: "right",
    x: 1100,
    y: 210,
    technologyRailX: 1250,
    technologies: [
      {
        id: "secure-development",
        label: "skills.tech.secure_development",
        description: "skills.tech.secure_development.description",
        x: 1400,
        y: 145,
      },
      {
        id: "input-validation",
        label: "skills.tech.input_validation",
        description: "skills.tech.input_validation.description",
        x: 1400,
        y: 195,
      },
      {
        id: "data-protection",
        label: "skills.tech.data_protection",
        description: "skills.tech.data_protection.description",
        x: 1400,
        y: 245,
      },
    ],
  },
  {
    id: "ai",
    label: "skills.branch.ai",
    description: "skills.branch.ai.description",
    status: "exploring",
    side: "right",
    x: 1100,
    y: 500,
    technologyRailX: 1270,
    technologies: [
      {
        id: "artificial-intelligence",
        label: "skills.tech.artificial_intelligence",
        description: "skills.tech.artificial_intelligence.description",
        x: 1400,
        y: 335,
      },
      {
        id: "machine-learning",
        label: "skills.tech.machine_learning",
        description: "skills.tech.machine_learning.description",
        x: 1400,
        y: 375,
      },
      {
        id: "computer-vision",
        label: "skills.tech.computer_vision",
        description: "skills.tech.computer_vision.description",
        x: 1400,
        y: 415,
      },
      {
        id: "face-recognition",
        label: "skills.tech.face_recognition",
        description: "skills.tech.face_recognition.description",
        x: 1400,
        y: 455,
      },
      {
        id: "onnx-runtime",
        label: "skills.tech.onnx_runtime",
        description: "skills.tech.onnx_runtime.description",
        x: 1400,
        y: 495,
      },
      {
        id: "insightface",
        label: "skills.tech.insightface",
        description: "skills.tech.insightface.description",
        x: 1400,
        y: 535,
      },
      {
        id: "opencv",
        label: "skills.tech.opencv",
        description: "skills.tech.opencv.description",
        x: 1400,
        y: 575,
      },
      {
        id: "llm-apis",
        label: "skills.tech.llm_apis",
        description: "skills.tech.llm_apis.description",
        x: 1400,
        y: 615,
      },
    ],
  },
];
