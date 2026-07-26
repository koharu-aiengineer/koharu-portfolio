export type WorkStatus = "completed" | "in-progress";

export type WorkImages = {
  main: string;
  subs: string[];
};

export type Work = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  status: WorkStatus;
  images: WorkImages;
};

function workImages(slug: string, subCount: number): WorkImages {
  return {
    main: `/images/works/${slug}-main.png`,
    subs: Array.from(
      { length: subCount },
      (_, i) => `/images/works/${slug}-sub0${i + 1}.png`,
    ),
  };
}

export const WORKS: Work[] = [
  {
    slug: "rag-system",
    title: "AI社内ドキュメント検索システム",
    summary:
      "架空IT企業向けに、PDF検索・ハルシネーション対策まで含めたフルスタックRAGシステムを構築",
    tags: ["RAG", "pgvector", "Supabase", "PDF処理"],
    status: "completed",
    images: workImages("rag-system", 1),
  },
  {
    slug: "snap-translate",
    title: "画像OCR翻訳アプリ",
    summary: "ブラウザ内でOCR処理から翻訳まで完結する、画像テキスト翻訳Webアプリ",
    tags: ["Next.js", "DeepL API", "Tesseract.js"],
    status: "completed",
    images: workImages("snap-translate", 1),
  },
  {
    slug: "ec-cs-chatbot",
    title: "ECサポートAIチャットボット",
    summary:
      "D2Cブランドのお問い合わせ対応を、AI自動応答とエスカレーションで効率化するMVP設計",
    tags: ["Shopify連携", "OpenAI API", "Supabase", "Vercel"],
    status: "completed",
    images: workImages("ec-cs-chatbot", 3),
  },
  {
    slug: "tech-learning-assistant",
    title: "技術学習AIアシスタント",
    summary:
      "クイズ・フラッシュカード機能を備えた、VSCodeダークテーマの技術学習チャットボット",
    tags: ["Bolt", "Dify", "localStorage"],
    status: "completed",
    images: workImages("tech-learning-assistant", 3),
  },
  {
    slug: "ai-jitan-studio",
    title: "新米ママ向けAI時短スタジオ",
    summary:
      "新米ママ向けに、AIエージェント基盤とコンテンツ配信を組み合わせたバーチャルスタジオ",
    tags: ["AIエージェント", "note.com", "ダッシュボード"],
    status: "in-progress",
    images: workImages("ai-jitan-studio", 1),
  },
  {
    slug: "portfolio-site",
    title: "このポートフォリオサイト",
    summary:
      "このポートフォリオサイト自体も、Next.js + Claude Codeで制作しました。デザイン・実装・細部の調整まで一貫して手がけています。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Claude Code"],
    status: "in-progress",
    images: workImages("portfolio-site", 0),
  },
];
