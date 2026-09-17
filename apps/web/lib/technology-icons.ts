import type { TechnologyId } from "@/lib/i18n";

export const technologyIconNames = {
  typescript: "typescript",
  nodejs: "nodejs",
  nestjs: "nestjs",
  postgresql: "postgresql",
  redis: "redis",
  docker: "docker",
  git: "git",
  github: "github",
  claude: "claude",
  openai: "openai",
  turborepo: "turborepo",
  zod: "zod",
} as const satisfies Record<TechnologyId, string>;
