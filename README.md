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
- `npm run optimize-images` - 画像の最適化（AVIF、WebP、JPEG対応）

## 画像最適化について

`npm run optimize-images` コマンドを実行すると：

1. **最新フォーマット対応**: AVIF（最高圧縮率）、WebP（高圧縮率）、JPEG（フォールバック）
2. **レスポンシブ対応**: Mobile(320px)、Tablet(768px)、Desktop(1200px)、Large(1920px)
3. **自動HTML生成**: `<picture>` タグを使用したレスポンシブ画像のHTMLコード例を生成

### 使用方法

1. `images/` ディレクトリに画像ファイルを配置
2. `npm run optimize-images` を実行
3. `images/optimized/` に最適化された画像が生成される
4. `picture-examples.html` で使用方法を確認

## ディレクトリ構成

```
.
├── articles/           # 記事ファイル
├── books/             # 本のファイル
├── images/            # 画像ファイル
│   └── optimized/     # 最適化された画像
├── scripts/           # 自動化スクリプト
│   └── optimize-images.js
└── package.json
```

## 文章作成のガイドライン

このリポジトリでは textlint を使用して文章品質を保持しています：

- 技術文書として適切な表現
- 文章の長さ制限（100文字以内）
- 助詞の重複チェック
- 統一された文体（である調）

文章を作成したら `npm run textlint` でチェックし、`npm run textlint:fix` で自動修正を行ってください。

## 参考リンク

* [📘 Zenn CLI の使い方](https://zenn.dev/zenn/articles/zenn-cli-guide)