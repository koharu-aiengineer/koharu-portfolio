export type WorkDetail = {
  overview: string;
  designPoints: string[];
  challenge?: string;
  implementationNotes?: string;
  roadmap?: string[];
  deliverableUrl?: string;
};

// Only slugs with a full write-up appear here; other Works from lib/works.ts
// fall back to a "coming soon" state on the detail page until added.
export const WORK_DETAILS: Partial<Record<string, WorkDetail>> = {
  "rag-system": {
    overview:
      "社員50名規模の架空IT企業からの依頼を想定した、フルスタックRAGシステムの構築案件。社内のPDFドキュメントを検索・要約できるAIアシスタントを、要件定義から実装まで一貫して担当しました。",
    designPoints: [
      "Vector DBはpgvectorを採用 — PostgreSQL拡張機能としてSupabaseにそのまま組み込めるため、専用のベクトルDBサービスを別途契約する必要がなく、構成がシンプルでコストも抑えられる",
      "PDF取り込み時の日本語(CJK)フォント文字化け対応",
      "チャンク分割・類似検索のしきい値調整",
    ],
    challenge:
      "専門のシステム担当者がいない小規模企業という前提のもと、運用負荷が低い構成が求められました。",
    implementationNotes:
      "出典の明示、確信度チェックによる二段構えのハルシネーション対策を実装しました。",
  },
  "snap-translate": {
    overview:
      "画像内のテキストをOCRで読み取り、その場で翻訳できるWebアプリです。撮影・スクリーンショットした画像から、瞬時に翻訳結果を確認できます。",
    designPoints: [
      "OCR処理はクライアントサイド(Tesseract.js)で実行 — サーバーを立てずに済むため、運用コストがかからない構成",
      "翻訳はDeepL APIを採用 — 無料枠と価格面のバランスの良さが理由",
      "精度を担保できる範囲として、対応言語は英語のみに限定",
    ],
    implementationNotes:
      "OCRの画像読み取り精度に限界があったため、認識結果をそのまま翻訳するだけでなく、テキストを手入力で修正・入力できる欄を設置し、精度不足を補える設計にしました。",
    deliverableUrl: "https://github.com/koharu-aiengineer/snap-translate",
  },
  "ec-cs-chatbot": {
    overview:
      "D2Cブランド(架空のクライアント想定)からの依頼で、ECサイトにAIカスタマーサポートチャットを導入する案件です。2週間のMVP期間という制約の中で、要件の優先順位を判断しながら設計しました。",
    challenge:
      "問い合わせフォームのみの対応で返信に1〜2日かかり、離脱が発生していることが課題でした。ECサイトはShopifyを利用し、月間問い合わせは約500件(在庫確認30%・商品質問25%・配送状況20%・返品15%・その他10%)。オペレーターは2名体制(フルタイム1名+パート1名、営業時間10〜18時)で、時間外はAIのみで対応する必要がありました。依頼内容は「AI自動応答+エスカレーション+分析レポート」の3機能でしたが、2週間のMVP期間では全て実現するのは現実的ではなく、AI自動応答を優先して実装する判断をしました。",
    designPoints: [
      "AIはOpenAI API(gpt-4o-mini)を採用し、対応範囲外の質問はsystem promptでOUT_OF_SCOPE判定 — 人が対応すべき問い合わせを自動で切り分け",
      "FAQ回答データはSupabaseのテーブルで管理し、更新しやすい構成に",
      "WebhookサーバーはVercel Serverless Functionsで完結させ、追加のサーバー管理コストをかけない構成",
      "オーナーへの通知は、専用の管理画面を作る代わりにLINE個人アカウントへのメッセージ転送で実現し、開発コストを抑えつつ即座に気づける形にした",
    ],
  },
  "tech-learning-assistant": {
    overview:
      "クイズ・フラッシュカード機能を備えた、技術学習用のAIチャットボットです。エンジニア向けのツールとして親しみやすいVSCodeダークテーマを採用しています。",
    designPoints: [
      "UIはVSCodeのダークテーマを模したデザインを採用 — エンジニアにとって見慣れた・親しみやすいツールとして受け入れられやすいことを意識",
      "データの永続化はlocalStorageを使用 — バックエンド(サーバー)を別途用意するコストをかけずに済む構成",
      "Bolt + Cursor + Dify APIを組み合わせて構築",
    ],
  },
  "ai-jitan-studio": {
    overview:
      "新米ママ向けに、AI活用による時短・決断疲れの軽減をテーマにしたコンテンツを配信するバーチャルAIスタジオです。「さやか」というペルソナを軸に、note.comでの記事配信とAIエージェント基盤の構築を並行して進めています。現在も開発中のプロジェクトです。",
    designPoints: [
      "ミオ・ハル・ナオ・ノア・リンという5つの役割を持つAIエージェント基盤を構築中",
      "ピクセルアート調のブラウザダッシュボードで、エージェントの動きをビジュアルに確認できる仕組みを開発中",
      "コンテンツはnote.comで配信し、SNS投稿と連動",
    ],
    roadmap: [
      "「社長」キャラクタースプライトの実装",
      "エージェント基盤とダッシュボードの完成に向けて開発継続中",
    ],
  },
  "portfolio-site": {
    overview:
      "このポートフォリオサイト自体も、Next.js + Claude Codeで制作した案件です。",
    designPoints: [
      "Framer Motionによるスクロール連動アニメーション、浮遊図形の演出を実装",
      "ラベンダー×クリームの配色、丸みのあるフォント(M PLUS Rounded 1c)で親しみやすさを意識したデザイン設計",
      "Claude Codeと対話しながら、UI/UXの細部(視認性・世界観の統一)を繰り返し調整",
    ],
  },
};
