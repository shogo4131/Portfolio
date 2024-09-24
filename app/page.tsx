import { getSkillList } from "@/api/skills";
import { ProfilePageComponent } from "@/components/profile-page";

export default async function Page() {
  const data = await getSkillList();

  return <ProfilePageComponent skillList={data} />;
}
