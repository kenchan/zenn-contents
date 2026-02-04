---
name: new-article
description: Zennの新しい記事を作成するワークフロー
disable-model-invocation: true
---

# Zenn記事作成ワークフロー

以下のステップで記事を作成してください。

## 1. 環境準備

```bash
npm install
```

を実行して依存関係を最新化してください。

## 2. ヒアリング

ユーザーに以下を確認してください：

- 記事のトピック・内容
- タイトル案
- Publicationに紐付けるか（する場合はpublication_name）
- 公開状態（下書き or 公開）

## 3. ブランチ作成

`article/<記事の内容を表す短い名前>` 形式でブランチを作成してください。

## 4. 記事ファイル作成

```bash
npx zenn new:article --publication-name <name> --published true
```

ヒアリング結果に応じてオプションを指定してください。Publicationに紐付けない場合は `--publication-name` を省略します。

## 5. プレビュー起動

```bash
npm run preview
```

をバックグラウンドで実行してください。プレビューは http://localhost:8000 で確認できます。

## 6. 執筆

記事の内容を書いてください。参考URLがあればWebFetchで内容を確認してください。

## 7. textlintチェック

textlint MCPの `getLintFixedFileContent` を使って文章をチェック・修正してください。指摘事項は必ず修正してください。

## 8. レビュー・修正

ユーザーと対話しながら内容を調整してください。

## 9. topicsの確認

topicsの妥当性と存在をZenn APIで確認してください：

```bash
curl -s "https://zenn.dev/api/search?q=<keyword>&source=topics" | jq '.topics[] | {name, display_name, taggings_count}'
```

存在するトピックを使うと、読者に見つけてもらいやすくなります。必要に応じてtopicsを修正してください。

## 10. コミット・PR作成

変更をコミットしてPRを作成してください。

## 11. CI確認・マージ

PRのCIでtextlintがpassすることを確認してください。失敗した場合は修正してください。CIが通ったらPRをマージしてください。

## 12. クリーンアップ

mainブランチに戻ってリモートを更新し、ローカルの作業ブランチを削除してください。
