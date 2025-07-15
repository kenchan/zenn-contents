# Zenn Contents

このリポジトリは [Zenn.dev](https://zenn.dev) での技術記事投稿用のコンテンツ管理リポジトリです。

## セットアップ

```bash
npm install
```

## 利用可能なコマンド

### 記事管理
- `npm run preview` - Zennプレビューを起動
- `npx zenn new:article` - 新しい記事を作成
- `npx zenn new:book` - 新しい本を作成
- `npx zenn list:articles` - 記事一覧を表示

### 文章校正
- `npm run textlint` - Markdown文章の校正チェック
- `npm run textlint:fix` - 文章の自動修正

### 画像最適化
- `npm run optimize-images` - 画像をWebPに変換（再帰的検索対応）

## 画像管理について

### 画像の配置
記事用の画像は `/images/{article-slug}/` ディレクトリに配置してください。

### ファイル名規則
- 記事内の出現順に連番で命名（01.webp, 02.webp...）
- WebP形式を推奨

### 最適化ワークフロー
1. 元画像（PNG/JPG）を該当記事のディレクトリに配置
2. `npm run optimize-images` を実行してWebP変換
3. 記事内で画像を参照：`![](/images/{article-slug}/01.webp)`
4. 必要に応じて画像サイズを調整（ImageMagick使用）

### Git LFS
画像ファイルは自動的にGit LFSで管理されます。大きなファイルでもリポジトリサイズを軽量に保てます。

## ディレクトリ構成

```
.
├── articles/           # 記事ファイル
├── books/             # 本のファイル
├── images/            # 画像ファイル（Git LFS管理）
│   └── {article-slug}/ # 記事ごとの画像ディレクトリ
├── scripts/           # 自動化スクリプト
│   └── optimize-images.js
├── .gitattributes     # Git LFS設定
└── package.json
```

## 文章作成のガイドライン

このリポジトリでは textlint を使用して文章品質を保持しています：

- 技術文書として適切な表現
- 文章の長さ制限（100文字以内）
- 助詞の重複チェック
- 統一された文体（である調）

文章を作成したら `npm run textlint` でチェックし、`npm run textlint:fix` で自動修正を行ってください。

## 依存関係

- `zenn-cli` - コンテンツ管理
- `textlint` - 文章校正
- `sharp` - 画像最適化
- Git LFS - 画像ファイル管理

## 参考リンク

* [📘 Zenn CLI の使い方](https://zenn.dev/zenn/articles/zenn-cli-guide)
