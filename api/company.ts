import { client } from "@/lib/client";

export type CompanyResponseData = {
  contents: Company[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Company = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  companyName: string;
  occupation: string;
  content: string;
  startDate: string;
  endDate?: string;
};

export const getCompanyLList = async () => {
  const contents = await client.get<CompanyResponseData>({
    endpoint: "companies",
    queries: { limit: 100 },
  });

  return contents;
};
