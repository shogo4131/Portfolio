"use client";

import { useState } from "react";
import { FaTwitter, FaGithub, FaSpeakerDeck } from "react-icons/fa";
import { Mail, MessageCircle } from "lucide-react";
import { SiZenn } from "react-icons/si";
import { GrDocumentNotes } from "react-icons/gr";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Skill } from "@/api/skills";
import { Company } from "@/api/company";
import { dateFormat } from "@/lib/utils";

type Props = {
  skillList: Skill[];
  companyList: Company[];
};

export function ProfilePageComponent({ skillList, companyList }: Props) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleAccordion = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const skills = skillList.reduce(
    (acc: { [key: string]: string[] }, { skill, skillType }) => {
      skillType.map((type) => {
        acc[type] = acc[type] ? [...acc[type], skill] : [skill];
      });
      return acc;
    },
    {}
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <header className="relative h-64 mb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/background.jpg')",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center" />
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
          <Image
            src="/profile.webp"
            alt="プロフィール写真"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-8 pb-8 space-y-8">
          <div className="text-center mt-4">
            <h1 className="text-2xl font-semibold mb-4">Shogo</h1>
            <div className="flex justify-center space-x-4">
              <a
                href="https://x.com/react_nextjs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://github.com/shogo4131"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://zenn.dev/react_uncle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Zenn"
              >
                <SiZenn size={24} />
              </a>
              <a
                href="https://speakerdeck.com/shogo4131"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Speakerdeck"
              >
                <FaSpeakerDeck size={24} />
              </a>
              <a
                href="https://note.com/react_nextjs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="note"
              >
                <GrDocumentNotes size={24} />
              </a>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              出身・趣味
            </h2>
            <div className="bg-gray-800 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">出身</h3>
                <p>
                  兵庫県出身。大学時代は関西で過ごし、就職を機に東京へ上京しました。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">趣味</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>ランニング（陸上競技）</li>
                  <li>ウェイトトレーニング（フリーウェイト）</li>
                  <li>温泉、サウナ （天然温泉掛け流しが好き）</li>
                  <li>HADO（ルーキーズ大会で22チーム中2位で準優勝）</li>
                  <li>グルメ（高い寿司、焼肉が好き）</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              得意なこと
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>フロントエンド開発 (React, Next.js)</li>
              <li>フロントエンド設計・テスト</li>
              <li>UI/UXデザイン</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              スキル
            </h2>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-xl font-medium mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              大事な価値観
            </h2>
            <p>
              何事もポジティブに捉えることを大切にしています。仕事を含めた全ての物事には、必ず自分が成長できる機会があると信じています。否定的に考えると、その成長のチャンスを自ら閉ざしてしまうことになります。そのため、どんなこともまずは肯定的に受け止め、毎日一歩でも前進し、自分を成長させることを心がけています。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              現在行っている取り組み
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                エンジニア交流会 & 勉強会の主催
                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                  <li className="text-gray-400 hover:text-white">
                    <a
                      href="https://devguil.connpass.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Developers Guild
                    </a>
                  </li>
                </ul>
              </li>
              <li>技術ブログの執筆</li>
              <li>フロントエンド品質向上の取り組み</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              副業でご支援できる内容
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                ソースコードの品質改善
                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                  <li>
                    フロントエンドテスト (Integration Test, E2E Test, VRT)の導入
                  </li>
                  <li>ソースコードのリファクタリング</li>
                  <li>ライブラリの刷新 など</li>
                </ul>
              </li>
              <li>
                パフォーマンス改善
                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                  <li>既存Webサイト・アプリケーションの速度改善</li>
                  <li>SEO対策とアクセシビリティの向上</li>
                </ul>
              </li>
              <li>
                技術コンサルティング
                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                  <li>最適な技術スタックの選定支援</li>
                  <li>アーキテクチャ設計のレビューと改善提案</li>
                </ul>
              </li>
              <li>
                チーム支援・メンタリング
                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                  <li>コードレビューとベストプラクティスの共有</li>
                  <li>フロントエンドエンジニアの育成支援</li>
                </ul>
              </li>
              <li>
                採用
                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                  <li>技術ブログの執筆</li>
                  <li>自社での勉強会講師 等</li>
                </ul>
              </li>
            </ul>
            <p className="mt-4 text-sm">
              ※納期がある機能開発は時間の都合上対応できません
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">資格</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>AWS Certified Cloud Practitioner</li>
              <li>日本漢字能力検定 2級</li>
              <li>温泉ソムリエ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              職務経歴
            </h2>
            <Accordion type="multiple" value={openItems} className="space-y-4">
              {companyList.map((company) => (
                <AccordionItem value={company.id} key={company.id}>
                  <AccordionTrigger
                    onClick={() => toggleAccordion(company.id)}
                    className="text-left"
                  >
                    <div>
                      <h3 className="text-xl font-medium">
                        {company.companyName} (
                        {company.isEmployee ? "正社員" : "業務委託"})
                      </h3>
                      <p className="text-gray-400">
                        {company.occupation} (
                        {`${dateFormat(company.startDate)} - ${
                          company.endDate ? dateFormat(company.endDate) : "現在"
                        }`}
                        )
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-300 mt-2 whitespace-pre-line break-words">
                      {company.content}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              お問い合わせ
            </h2>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex items-center space-x-2">
                <MessageCircle className="text-blue-400" size={24} />
                <p className="text-lg">
                  TwitterのDM、メールでお気軽にご連絡ください！
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-blue-400" size={24} />
                <p className="text-lg">メール: shogo.tech@gmail.com</p>
              </div>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://twitter.com/messages/compose?recipient_id=YOUR_TWITTER_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
                >
                  <FaTwitter className="mr-2" />
                  Twitter DMを送る
                </a>
                <a
                  href="mailto:shogo.tech@gmail.com"
                  className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition duration-300"
                >
                  <Mail className="mr-2" size={18} />
                  メールを送る
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p>&copy; 2024 Shogo Portfolio</p>
        </div>
      </footer>
    </div>
  );
}
