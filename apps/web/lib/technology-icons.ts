import type { TechnologyId } from "@/lib/i18n";

type StackIconName =
  | "typescript"
  | "nodejs"
  | "nestjs"
  | "postgresql"
  | "redis"
  | "docker"
  | "git"
  | "github"
  | "claude"
  | "openai"
  | "turborepo"
  | "zod";

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
} as const satisfies Partial<Record<TechnologyId, StackIconName>>;
