import { HOME_WORK_SLUGS } from "./constants";

export type WorkStatus = "completed" | "in-progress";

// Optional per-image alt text and caption. When omitted, alt falls back to
// the work title (main) / "{title} サブ画像N" (subs) and no caption is shown.
export type WorkImageMeta = {
  alt: string;
  caption?: string;
};

export type WorkImages = {
  main: string;
  subs: string[];
  mainMeta?: WorkImageMeta;
  subsMeta?: WorkImageMeta[];
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

// Author new works here in any order — display order is derived below
// (pickup picks first, in-progress works always last), so this list never
// needs manual reordering as HOME_WORK_SLUGS or statuses change.
const ALL_WORKS: Work[] = [
  {
    slug: "ai-invoice-ocr",
    title: "AI請求書OCR自動仕訳システム",
    summary:
      "請求書・領収書をアップロードすると、AIが読み取り・勘定科目の自動分類・信頼度判定・月次集計までを自動で行うシステム",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google Apps Script",
      "Google Sheets API",
      "Google Drive API",
      "OpenAI API",
      "Vercel",
    ],
    status: "completed",
    images: workImages("ai-invoice-ocr", 5),
  },
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
    slug: "todo-calendar",
    title: "営業ToDoカレンダー",
    summary:
      "営業の予定を週カレンダーで管理し、Googleカレンダーへ自動同期するタスク管理アプリ。商談ごとの「見込み度」を色分けして記録でき、データはスプレッドシートに保存、週次・月次のCSV出力にも対応している点が特徴",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "FullCalendar",
      "Google Calendar API",
      "Google Sheets API",
      "Google OAuth",
      "Bolt",
    ],
    status: "completed",
    images: workImages("todo-calendar", 3),
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
    title: "美容室向けLINE自動応答Bot",
    summary:
      "個人経営の美容室向けに、LINEで届くよくある質問へAIが自動で答え、答えられない内容はオーナーへ通知するLINE Bot。管理画面からFAQやメニューの更新、お知らせ配信もできる",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "LINE Messaging API",
      "OpenAI API",
      "Supabase",
      "Vercel",
    ],
    status: "completed",
    images: {
      ...workImages("ec-cs-chatbot", 4),
      mainMeta: {
        alt: "LINEのトーク画面で、料金の質問にBotが自動で返信している様子",
        caption: "LINEトーク画面:よくある質問にAIが自動で返信",
      },
      subsMeta: [
        {
          alt: "回答できない質問を受けて、オーナーのLINEに未回答の質問が通知されている画面",
          caption: "回答できない質問は、オーナーのLINEへ通知",
        },
        { alt: "管理画面のFAQ管理画面", caption: "FAQ管理画面" },
        {
          alt: "管理画面の会話ログ画面。対応済み・未対応の会話が一覧表示されている",
          caption: "会話ログ画面",
        },
        { alt: "管理画面のお知らせ一斉配信画面", caption: "お知らせ一斉配信画面" },
      ],
    },
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
    slug: "shift-scheduler",
    title: "AIシフト自動生成システム",
    summary:
      "休み希望・雇用形態別ルール・必要人数を踏まえ、店舗スタッフのシフト表を自動生成するWebシステム。LLMを使わず、制約充足問題として独自アルゴリズムで解いている点が特徴",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Google Sheets API",
      "Google OAuth",
      "Vitest",
      "Vercel",
    ],
    status: "completed",
    images: workImages("shift-scheduler", 3),
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

// HOME_WORK_SLUGS as a plain string[] so .indexOf() accepts any slug,
// not just the literal union TypeScript would otherwise require.
const PICKUP_SLUGS: readonly string[] = HOME_WORK_SLUGS;

function pickupRank(slug: string): number {
  const index = PICKUP_SLUGS.indexOf(slug);
  return index === -1 ? Number.POSITIVE_INFINITY : index;
}

// Display order used everywhere (Works list, home marquee): pickup works
// lead (in HOME_WORK_SLUGS order), then the rest of the completed works in
// their authored order, then in-progress works last. Array.prototype.sort
// is stable, so ties (equal rank) keep their ALL_WORKS order.
export const WORKS: Work[] = [...ALL_WORKS].sort((a, b) => {
  const statusRank = (w: Work) => (w.status === "in-progress" ? 1 : 0);
  const statusDiff = statusRank(a) - statusRank(b);
  if (statusDiff !== 0) return statusDiff;
  return pickupRank(a.slug) - pickupRank(b.slug);
});
