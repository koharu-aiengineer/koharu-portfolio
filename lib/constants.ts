export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
] as const;

export const SITE_NAME = "koharu";
export const CATCHCOPY = "AIと一緒に、つくる人。";
export const INTRO_LINES = [
  "はじめまして、koharuです。",
  "Next.jsとAI APIを組み合わせて、企業の問い合わせ対応や社内ドキュメント検索など、日々の業務を助けるツールをつくっています。",
] as const;

export const HOME_WORK_SLUGS = ["rag-system", "shift-scheduler", "ai-invoice-ocr"] as const;

export const ABOUT_TEASER =
  "お世話になっている方の勧めをきっかけに、AIエンジニアの道へ。Next.jsやAI連携を軸に、フルスタック開発に取り組んでいます。";

// TODO: replace with the real contact address before publishing.
export const CONTACT_EMAIL = "contact@example.com";

export const CONTACT_GREETING = "ご覧いただき、ありがとうございます";
export const CONTACT_GUIDE = "下記のメールアドレスにお気軽にご連絡ください";

export const CAREER_LINES = [
  "お世話になっている方に勧めてもらったのがきっかけで、AIエンジニアという道を知りました。",
  "初心者の方でもAIを使ってさまざまなシステム設計をしている姿を見て、「こんなこともできるんだ」と感じたのが、今につながっています。",
  "現在は、体系立ったカリキュラムに取り組みながら、フルスタック開発・AI連携・コンテンツ制作を横断して、模擬案件と実案件の両方に取り組んでいます。",
] as const;

export const VALUES = [
  {
    title: "優先順位をすり合わせる",
    body: "依頼をそのまま受け取るのではなく、限られた期間の中で「まず何を優先して形にするか」をすり合わせることを大切にしています。",
  },
  {
    title: "早めに相談する",
    body: "進め方に迷う場面では、作り切ってしまう前に早めに相談し、方向性がずれないようにすることを意識しています。",
  },
] as const;

export const FEELINGS_LINES = [
  "作ってみたいと思ったものが、実際に動いた瞬間の達成感が好きです。",
  "まだ挑戦したことのない技術やシステムにも、前向きに取り組んでいきたいと思っています。",
] as const;

export const SKILLS = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Vercel",
  "OpenAI API",
  "Dify",
  "DeepL API",
  "Google Apps Script (GAS)",
  "Claude Code",
] as const;

export const FEATURED_SKILLS = ["Next.js", "TypeScript", "OpenAI API", "Supabase"] as const;
