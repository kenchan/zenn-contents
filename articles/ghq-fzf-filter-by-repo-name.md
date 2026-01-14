---
title: "fzfとghqで「user/repo」だけを絞り込み対象にする"
emoji: "🔍"
type: "tech"
topics: ["ghq", "fzf", "fish", "cli", "shell"]
published: true
---

## 課題

ghqとfzfを組み合わせてリポジトリを選択する際、デフォルトではパス全体が検索対象になります。

```
github.com/kenchan/dotfiles
github.com/other-user/dotfiles
gitlab.com/kenchan/dotfiles
```

このため、ドメイン部分（`github.com`、`gitlab.com`）に含まれる一般的な文字列(`git`や`com`等)で検索すると、意図しないマッチが大量に発生します。

ユーザー名やリポジトリ名で絞り込みたいのに、ドメインの文字列が邪魔をしている状態です。

## 解決方法

fzfの`--delimiter`と`--nth`オプションを使うことで、表示されている文字列の中から検索対象を限定できます。

```bash
ghq list -p | fzf --delimiter=/ --nth=-2,-1
```

### オプションの説明

- `--delimiter=/`: パスをスラッシュで分割
- `--nth=-2,-1`: 後ろから2番目と1番目のフィールド（organization/repository）だけを検索対象に

これにより、`kenchan/dotfiles`の部分だけが検索対象になります。

### 注意事項

この設定は、ghqのroot配下が`host/org/repo`の3階層構造を前提としています。2階層構造（`host/repo`）の場合は`--nth=-1`を使用してください。

## 実装例

### エイリアスで設定

シェルのエイリアスや関数として設定する方法です。

**Bash/Zsh:**
```bash
alias repo='cd $(ghq list -p | fzf --delimiter=/ --nth=-2,-1)'
```

**Fish:**
```fish
alias repo='cd (ghq list -p | fzf --delimiter=/ --nth=-2,-1)'
```

### fish-ghqプラグインで設定

[decors/fish-ghq](https://github.com/decors/fish-ghq)を使っている場合、環境変数で設定できます。

config.fish:

```fish
set -g GHQ_SELECTOR_OPTS "--delimiter=/" "--nth=-2,-1"
```

これで`Ctrl+G`を押した際のリポジトリ選択時に自動的に適用されます。fish-ghqは内部で`ghq list -p`を実行しているため、フルパスに対してこの設定が適用されます。

注意: 複数のオプションを設定する場合、各オプションを個別の文字列として指定します。`"--delimiter=/ --nth=-2,-1"`のように1つの文字列にすると、単一のオプションとして扱われ正しく動作しません。

## まとめ

fzfの`--delimiter`と`--nth`オプションを使うことで、ghqのリポジトリ選択をより効率的に行えます。シンプルな設定ですが、日々の開発体験が大きく向上します。

このテクニックは他のfzfを使う場面でも応用できるので、覚えておくと便利です。
