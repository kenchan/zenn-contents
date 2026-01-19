---
title: "開発環境現状確認 2026"
emoji: "💻"
type: "tech"
topics: ["開発環境", "wsl2", "gentoo", "fish", "neovim"]
published: false
---

2026年1月時点での開発環境を記録しておく。

## OS

仕事でもプライベートでも Windows + WSL2 を使っている。WSL2 の中では [Gentoo Linux](https://wiki.gentoo.org/wiki/Gentoo_in_WSL) を動かしている。

昨年末から WSL2 用の stage4 ファイルが公開されるようになり、インストールが簡単になった。ただし、systemd 用の場合は `systemd-firstboot` が waiting になってしまう問題がある。wsl.conf にブートオプションを渡すといいと書いてあるが、私の環境ではうまくいかなかった。結局 systemd-firstboot を disable にして対処している。

セットアップの一部は https://github.com/kenchan/wsl-setup にまとめている。

[wsl2-ssh-agent](https://github.com/mame/wsl2-ssh-agent) を使って、Windows 側の SSH エージェントを WSL2 から使えるようにしている。SSH エージェントは 1Password のものを使っている。

## AI

[Claude Max](https://claude.ai/) を契約している。コーディングには Claude Code、その他の作業では Claude Desktop を使っている。

Google One を家族で契約しているので AI Pro プランを利用中。[Gemini](https://gemini.google.com/) も使える。OpenAI は新しいモデルが出たときだけたまに試している。

## キーボード・マウス

[Kinesis Advantage 360](https://kinesis-ergo.com/keyboards/advantage360/) を使っている。分離型のエルゴノミクスキーボードで、手首の負担が少ない。ファームウェアのアップデートは Kinesis Clique というツールでやっている。

キーリマップのソフトは入れていないが、CapsLock を Ctrl にするだけ、[Ctrl2Cap](https://learn.microsoft.com/ja-jp/sysinternals/downloads/ctrl2cap) でやっている。

ポインティングデバイスは [Kensington SlimBlade Pro](https://www.kensington.com/ja-jp/p/products/electronic-control-solutions/trackball-products/slimblade-pro-trackball/) を使っている。

## 日本語入力

[CorvusSKK](https://github.com/nathancorvussolis/corvusskk) を使っている。

SKK は慣れると手放せなくなる。ただ、ターミナルエミュレータとの相性問題があり、日本語入力周りでトラブルが起きやすい。

## エディタ

[Neovim](https://neovim.io/) を使っている。プラグイン管理は [lazy.nvim](https://github.com/folke/lazy.nvim) で行っていて、設定は `lua/plugins/` 以下でプラグインごとにファイルを分けて管理している。

## シェル

[fish](https://fishshell.com/) を使っている。bash や zsh と違ってデフォルトでいい感じになっているのが気に入っている。

プロンプトは [Starship](https://starship.rs/) でカスタマイズしている。Git ブランチや Ruby のバージョンを表示していて、特に [mise](https://mise.jdx.dev/) 管理下のツールバージョンがすぐわかり便利。

## ターミナル

[Windows Terminal](https://github.com/microsoft/terminal) を使っている。なんだかんだ Windows では描画が一番安定している。

SKK を使っていると、ターミナルエミュレータによっては日本語入力でかなり困ることがある。Windows Terminal でも完璧ではないものの、他よりはまし。安定性を優先して Windows Terminal に落ち着いた。

ターミナルマルチプレクサは [zellij](https://zellij.dev/) に移行した。長年 tmux を使っていたのでまだ慣れていないが、感想は[開発環境更新 2026, 建設ビジネス を読んだ - HsbtDiary(2026-01-08)](https://www.hsbt.org/diary/20260108.html)と概ね同じ。

## フォント

[UDEV Gothic NF](https://github.com/yuru7/udev-gothic) を使っている。BIZ UD ゴシックと JetBrains Mono を合成したプログラミング向けフォントで、日本語と英語が見やすい。0 が斜線になっているのが好き。NF（Nerd Font）版なのでターミナルやエディタでアイコン表示もできる。

## 開発ツール・言語処理系の管理

なるべく portage（Gentoo のパッケージ管理）で管理したいが、対応していないもの、複数バージョンを同時に入れたいもの、とにかく最新を使いたいものは [mise](https://mise.jdx.dev/) で管理している。

## Git関連ツール

[ghq](https://github.com/x-motemen/ghq) でリポジトリを管理している。`ghq get` でローカルに持ってきて、[fzf](https://github.com/junegunn/fzf)と組み合わせてディレクトリ移動している。

[gh-dash](https://github.com/dlvhdr/gh-dash) は CLI でのレビュー効率がかなり良くなった。PR や issue の一覧をターミナル上で確認できて、そのままレビューに入れる。

## dotfiles管理

[chezmoi](https://www.chezmoi.io/) で管理している。2026 年 1 月 5 日に thoughtbot/rcm から移行した。

rcm は便利だったが、`rcup`、`rcdn`、`mkrc` などそれぞれのコマンドが独立していて、たまに忘れてしまうことがあった。chezmoi はすべてサブコマンドになったのでわかりやすい。

dotfilesは https://github.com/kenchan/dotfiles で公開している。

## ブラウザ

仕事用は Google Chrome、プライベート用は [Brave](https://brave.com/) を使っている。

ブラウザ x AI は [Claude in Chrome](https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn?hl=ja) 拡張機能を使っている。

## ランチャー

[Raycast](https://www.raycast.com/) の Windows 版を使っている。最近リリースされたばかりだが、すぐに移行した。

それまでは PowerToys に付属しているコマンドパレット（PowerToys Run）を長らく使っていた。クリップボードのヒストリーも Raycast に備わっているので、PowerToys 自体を今は削除している。

## パスワードマネージャ

[1Password](https://1password.com/) を使っている。CLI も活用していて、`op run` 等を使ってローカルファイルシステム上に秘匿情報が入らないようにしている。

環境変数に入れたい API キーやトークンなども 1Password に保存しておいて、`op run` 経由で渡すことで、.env ファイルに平文で書かなくて済む。

## メモ・ノート

[Obsidian](https://obsidian.md/) を使っている。特に工夫はしていなくて、せいぜい daily note の設定くらい。

良く使っているプラグインはこれくらい。

- [2Hop Links Plus](https://github.com/L7Cy/obsidian-2hop-links-plus) - 2 ホップ先の関連ノートをカード形式で表示。Scrapbox ライクな関連ページの発見
- [Calendar](https://github.com/liamcain/obsidian-calendar-plugin) - daily notes をカレンダー UI で表示
- [Kindle Highlights](https://github.com/hadynz/obsidian-kindle-plugin) - Kindle のハイライトを同期
- [Natural Language Dates](https://github.com/argenos/nldates-obsidian) - 自然言語で日付リンクを作成
- [Outliner](https://github.com/vslinko/obsidian-outliner) - リストの入れ替え操作が簡単にできる

Obsidian Sync の初期ユーザーなのだが、今でも当時のディスカウント価格で更新できてる。ありがたい。

## まとめ

最近の代表的な変化は、Raycast と Claude（Desktop 含む）を中心にしたことくらいだろうか。
