import { getSkillList } from "@/api/skills";
import { getCompanyLList } from "@/api/company";
import { ProfilePageComponent } from "@/components/profile-page";

export const dynamic = "force-static";

export default async function Page() {
  const [skills, companies] = await Promise.all([
    getSkillList(),
    getCompanyLList(),
  ]);

  return (
    <ProfilePageComponent
      skillList={skills.contents}
      companyList={companies.contents}
    />
  );
}
