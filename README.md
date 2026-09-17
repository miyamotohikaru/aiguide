# はじめてのAIガイド

ターミナルを使わずに作ったサイトを、公開してみんなが使えるようにするまでの道案内。

- 本番: https://hajimete-aiguide.vercel.app
- 公開のしかた / スラッシュコマンド一覧 / 用語集 / プロンプト集

## 開発

```
npm ci
npm run dev   # http://localhost:3015
```

## 道具

- `node tools/make-images.mjs` … ファビコン（余白ゼロ）と OGP 画像を焼く
- `node tools/overflow.mjs <パス> [幅]` … 画面からはみ出す要素を探す

## データ

- `src/data/setup.ts` … 公開手順（ボタン名は各社公式ドキュメントで確認、2026-09）
- `src/data/commands.ts` … スラッシュコマンド（https://code.claude.com/docs/en/commands と照合）
- `src/data/words.ts` … 用語集
- `src/data/prompts.ts` … プロンプト集
