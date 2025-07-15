# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイドラインを提供します。

## リポジトリの概要

これは Zenn.dev（日本の技術コンテンツプラットフォーム）で技術記事や本を執筆・公開するための Zenn コンテンツリポジトリです。コンテンツは YAML フロントマターを含む Markdown 形式で記述されます。

## 必須コマンド

### コンテンツ管理
- `npm run preview` - 記事/本をブラウザでローカルプレビュー
- `npx zenn new:article` - 生成されたスラッグで新しい記事を作成
- `npx zenn new:book` - 新しい本を作成
- `npx zenn list:articles` - すべての記事とそのメタデータを一覧表示

### 文章校正
- `npm run textlint` - Markdown文章の校正チェック
- `npm run textlint:fix` - 文章の自動修正

### 画像最適化
- `npm run optimize-images` - 画像をWebPに変換（再帰的検索対応）

## 記事の構造

記事には必ず YAML フロントマターを含める必要があります：
```yaml
---
title: "記事のタイトル"
emoji: "⛳"
type: "tech" # tech: 技術記事 / idea: アイデア記事
topics: [topic1, topic2] # 最大5つのトピック
published: true # ドラフトの場合は false
---
```

## プロジェクト構造

- `/articles/` - 個別の記事 Markdown ファイル（一意のスラッグで命名）
- `/books/` - 本のコンテンツディレクトリ
- `/images/` - 画像ファイル（Git LFSで管理）
  - `/images/{article-slug}/` - 記事ごとの画像ディレクトリ
  - 画像は連番（01.webp, 02.webp...）で命名
- `/scripts/` - 自動化スクリプト
  - `optimize-images.js` - 画像最適化スクリプト

## 重要事項

- 記事は生成されたスラッグをファイル名として使用（例：`2beb67e5afd5e7.md`）
- コンテンツは Zenn.dev プラットフォームと同期される
- Git コミットは通常日本語のコミットメッセージを使用
- 画像ファイルは Git LFS で管理される

## コンテンツ編集ガイドライン

### 重要：textlintの使用について
**ファイルを編集した後は、必ずtextlint-mcpを実行し、その指摘は必ず修正すること**

記事（.mdファイル）を作成・編集した後は、以下のコマンドを必ず実行：
```
mcp__textlint__getLintFixedFileContent
```

これにより：
- 日本語の文章表現が改善される
- 技術文書として適切な表記に統一される
- Zenn.devでの公開に適した形式になる

**重要**: textlintの指摘事項は必ず全て修正すること。ただし、.textlintrc.jsonの編集は、ユーザーから明確な指示があった場合のみ行う。

### 画像管理ガイドライン

1. **画像の配置**: 記事用の画像は `/images/{article-slug}/` ディレクトリに配置
2. **ファイル名**: 記事内の出現順に連番で命名（01.webp, 02.webp...）
3. **最適化**: `npm run optimize-images` でWebP変換を実行
4. **Git LFS**: 画像ファイルは自動的にGit LFSで管理される

### 画像最適化ワークフロー

1. 元画像（PNG/JPG）を該当記事のディレクトリに配置
2. `npm run optimize-images` を実行してWebP変換
3. 記事内で画像を参照：`![](/images/{article-slug}/01.webp)`
4. 必要に応じて画像サイズを調整（ImageMagick使用）

## 依存関係

- `zenn-cli` - コンテンツ管理
- `textlint` - 文章校正
- `sharp` - 画像最適化
- Git LFS - 画像ファイル管理
