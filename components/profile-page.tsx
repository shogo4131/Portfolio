'use client'

import { useState } from 'react'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { MessageCircle } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ProfilePageComponent() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleAccordion = (value: string) => {
    setOpenItems(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  const skills = {
    フロントエンド: ['HTML5', 'CSS3', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS', "MUI", "Chakkura UI", "Mantine", "Storybook", "E2E", "VRT"],
    バックエンド: ['Node.js', 'Express', "Java", "Ruby", 'Ruby on Rails', 'GraphQL', 'REST API'],
    データベース: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    インフラ: ['AWS', 'Docker', 'Vercel', 'CI/CD'],
    ツール: ['Git', 'GitHub', "SVN", 'Jira', 'Trello', "Confluence", "Notion"],
    エディター: ['VS Code', 'Cursor', 'Eclipse'],
    その他: ['Agile/Scrum', 'UI/UX Design',]
  }

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
          <img
            src="/profile.jpg"
            alt="プロフィール写真"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-3xl mx-auto p-8 space-y-8">
          <div className="text-center mt-4">
            <h1 className="text-2xl font-semibold mb-4">Shogo</h1>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Zenn">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.984c.205-.001.379-.118.381-.353z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Speakerdeck">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M10.025 13.875H4.687a4.688 4.688 0 0 1 0-9.375h6.227a.938.938 0 0 1 0 1.875H4.687a2.813 2.813 0 0 0 0 5.625h5.338a.938.938 0 0 1 0 1.875zm9.288-4.688h-5.338a.938.938 0 0 1 0-1.875h5.338a2.813 2.813 0 0 0 0-5.625h-6.227a.938.938 0 0 1 0-1.875h6.227a4.688 4.688 0 0 1 0 9.375zm-3.163 9.704L12.9 22.142a.937.937 0 0 1-1.325 0L8.325 18.89a.938.938 0 0 1 1.325-1.325l1.913 1.913V8.25a.938.938 0 0 1 1.875 0v11.228l1.913-1.913a.938.938 0 0 1 1.325 1.325z"/>
                </svg>
              </a>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">出身・趣味</h2>
            <div className="bg-gray-800 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">出身</h3>
                <p>兵庫県出身。大学時代は関西で過ごし、就職を機に東京へ上京しました。</p>
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
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">得意なこと</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>フロントエンド開発 (React, Next.js)</li>
              <li>UI/UXデザイン</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">スキル</h2>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-xl font-medium mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">大事な価値観</h2>
            <p>あとで</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">現在行っている取り組み</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>エンジニア交流会 & 勉強会の主催</li>
              <li>技術ブログの執筆</li>
              <li>フロントエンド品質向上の取り組み</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">副業でご支援できる内容</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Webアプリケーションの設計・開発
                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                  <li>React, Vue.js, Next.jsを使用したフロントエンド開発</li>
                  <li>Node.js, Expressを使用したバックエンド開発</li>
                  <li>RESTful APIの設計と実装</li>
                </ul>
              </li>
              <li>パフォーマンス最適化
                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                  <li>既存Webサイト・アプリケーションの速度改善</li>
                  <li>SEO対策とアクセシビリティの向上</li>
                </ul>
              </li>
              <li>技術コンサルティング
                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                  <li>最適な技術スタックの選定支援</li>
                  <li>アーキテクチャ設計のレビューと改善提案</li>
                </ul>
              </li>
              <li>チーム支援・メンタリング
                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                  <li>コードレビューとベストプラクティスの共有</li>
                  <li>若手エンジニアの育成支援</li>
                </ul>
              </li>
            </ul>
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
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">職務経歴</h2>
            <Accordion type="multiple" value={openItems} className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger onClick={() => toggleAccordion('item-1')} className="text-left">
                  <div>
                    <h3 className="text-xl font-medium">株式会社テックイノベーション</h3>
                    <p className="text-gray-400">シニアフロントエンドエンジニア (2020年4月 - 現在)</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300 mt-2">
                    大規模なWebアプリケーションのフロントエンド開発をリード。React、TypeScript、GraphQLを使用したプロジェクトで、パフォーマンス最適化とアクセシビリティの向上に貢献。チーム内でのコードレビューやメンタリングも担当。
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger onClick={() => toggleAccordion('item-2')} className="text-left">
                  <div>
                    <h3 className="text-xl font-medium">グローバルウェブ株式会社</h3>
                    <p className="text-gray-400">ウェブデベロッパー (2018年7月 - 2020年3月)</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300 mt-2">
                    Vue.jsとLaravelを使用した中規模Webアプリケーションの開発に従事。フロントエンドとバックエンドの両方を担当し、RESTful APIの設計と実装、データベース設計も行った。アジャイル開発手法を採用したプロジェクトで、迅速な開発サイクルを実現。
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">お問い合わせ</h2>
            <div className="flex items-center justify-center space-x-2">
              <MessageCircle className="text-blue-400" size={24} />
              <p className="text-lg">TwitterのDMでお気軽にご連絡ください！</p>
            </div>
            <div className="mt-4 text-center">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
              >
                <FaTwitter className="mr-2" />
                Twitter DMを送る
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p>&copy; 2023 エンジニア名前. All rights reserved.</p>
          <p className="mt-2">
            Built with React and Tailwind CSS. Hosted on Vercel.
          </p>
        </div>
      </footer>
    </div>
  )
}