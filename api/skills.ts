import { client } from "@/lib/client";

export type SkillResponseData = {
  contents: Skill[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Skill = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  skill: string;
  skillType: string[];
};

export const getSkillList = async () => {
  const skills = await client.get<SkillResponseData>({
    endpoint: "skills",
    queries: { limit: 100, orders: "publishedAt" },
  });

  return skills;
};
