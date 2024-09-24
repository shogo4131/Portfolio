import { client } from "@/lib/client";

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
  const skills = await client.getList<Skill[]>({
    endpoint: "skills",
    queries: { limit: 100, orders: "publishedAt" },
  });

  return skills;
};
