---
title: "開発環境現状確認 2026"
emoji: "💻"
type: "tech"
topics: ["開発環境", "wsl2", "gentoo", "fish", "neovim"]
published: false
---

2026年1月時点での開発環境を記録しておく。

## OS

仕事でもプライベートでも Windows + WSL2 を使っている。WSL2の中では [Gentoo Linux](https://wiki.gentoo.org/wiki/Gentoo_in_WSL) を動かしている。

昨年末からWSL2用のstage4ファイルが公開されるようになり、インストールが簡単になった。ただし、systemd用の場合は `systemd-firstboot` がwaitingになってしまう問題がある。wsl.confにブートオプションを渡すといいと書いてあるが、私の環境ではうまくいかなかった。結局systemd-firstbootをdisableにして対処している。

セットアップの一部は https://github.com/kenchan/wsl-setup にまとめている。

[wsl2-ssh-agent](https://github.com/mame/wsl2-ssh-agent) を使って、Windows側のSSHエージェントをWSL2から使えるようにしている。SSHエージェントは[1Password](https://1password.com/)のものを使っている。

## AI

[Claude Max](https://claude.ai/) を契約している。コーディングには [Claude Code](https://docs.anthropic.com/en/docs/claude-code)、その他の作業では [Claude Desktop](https://claude.ai/download) を使っている。

Google Oneを家族で契約しているので AI Proプランを利用中。[Gemini](https://gemini.google.com/) も使える。OpenAIは新しいモデルが出たときだけたまに試している。

## キーボード・マウス

[Kinesis Advantage 360](https://kinesis-ergo.com/keyboards/advantage360/) を使っている。分離型のエルゴノミクスキーボードで、手首の負担が少ない。ファームウェアのアップデートは Kinesis Clique というツールでやっている。

CapsLockをCtrlにするだけ、[Ctrl2Cap](https://learn.microsoft.com/ja-jp/sysinternals/downloads/ctrl2cap) でやっている。シンプルで安定している。

ポインティングデバイスは [Kensington SlimBlade Pro](https://www.kensington.com/ja-jp/p/products/electronic-control-solutions/trackball-products/slimblade-pro-trackball/) を使っている。

## 日本語入力

SKK を使っている。Windowsでは [CorvusSKK](https://github.com/nathancorvussolis/corvusskk) を使用。

SKKは慣れると手放せなくなる。ただ、ターミナルエミュレータとの相性問題があり、日本語入力周りでトラブルが起きやすい。SKKとの相性が比較的良いWindows Terminalを選んでいる。

## エディタ

[Neovim](https://neovim.io/) を使っている。プラグイン管理は [lazy.nvim](https://github.com/folke/lazy.nvim) で行っていて、設定は `lua/plugins/` 以下でプラグインごとにファイルを分けて管理している。

## シェル

[fish](https://fishshell.com/) を使っている。bashやzshと違ってデフォルトでいい感じになっているのが気に入っている。

プロンプトは [Starship](https://starship.rs/) でカスタマイズしている。GitブランチやRubyのバージョンを表示していて、特に[mise](https://mise.jdx.dev/)管理下のツールバージョンがすぐわかり便利。

## ターミナル

[Windows Terminal](https://github.com/microsoft/terminal) を使っている。なんだかんだWindowsでは描画が一番安定している。

SKKを使っていると、ターミナルエミュレータによっては日本語入力でかなり困ることがある。Windows Terminalでも完璧ではないものの、他よりはまし。安定性を優先してWindows Terminalに落ち着いた。

ターミナルマルチプレクサは [zellij](https://zellij.dev/) に移行した。長年 tmux を使っていたが、最近zellijに乗り換えた。まだ慣れていない。特に選択してEnterで実行してしまうのは違和感がある。ただ選択するだけならTABなので、これも慣れの問題だろう。セッションの永続化とペイン分割は手放せないので、使い続けていくつもり。

## フォント

[UDEV Gothic NF](https://github.com/yuru7/udev-gothic) を使っている。BIZ UDゴシックとJetBrains Monoを合成したプログラミング向けフォントで、日本語と英語が見やすい。0が斜線になっているのが好き。NF（Nerd Font）版なのでターミナルやエディタでアイコン表示もできる。

## 開発ツール・言語処理系の管理

なるべく portage（Gentooのパッケージ管理）で管理したいが、対応していないもの、複数バージョンを同時に入れたいもの、とにかく最新を使いたいものは [mise](https://mise.jdx.dev/) で管理している。

## Git関連ツール

[ghq](https://github.com/x-motemen/ghq) でリポジトリを管理している。`ghq get` でローカルに持ってきて、[fzf](https://github.com/junegunn/fzf)と組み合わせてディレクトリ移動している。

[gh-dash](https://github.com/dlvhdr/gh-dash) はCLIでのレビュー効率がかなり良くなった。PRやissueの一覧をターミナル上で確認できて、そのままレビューに入れる。

## dotfiles管理

[chezmoi](https://www.chezmoi.io/) で管理している。2026年1月5日にthoughtbot/rcmから移行した。

rcmは便利だったが、`rcup`、`rcdn`、`mkrc` などそれぞれのコマンドが独立していて、たまに忘れてしまうことがあった。chezmoiはすべてサブコマンドになったのでわかりやすい。

dotfilesは https://github.com/kenchan/dotfiles で公開している。

## ブラウザ

仕事用は [Chrome](https://www.google.com/chrome/)、プライベート用は [Brave](https://brave.com/) を使っている。用途でブラウザを分けることでアカウントの切り替えが不要になるし、仕事とプライベートの境界も明確になる。

AI関連では [Claude in Chrome](https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn?hl=ja) 拡張機能を使っている。

## ランチャー

[Raycast](https://www.raycast.com/) のWindows版を使っている。最近リリースされたばかりだが、すぐに移行した。

それまではPowerToysに付属しているコマンドパレット（PowerToys Run）を長らく使っていたが、Raycastに移行。クリップボードのヒストリーもRaycastに備わっているので、PowerToys自体を今は削除している。

## パスワードマネージャ

[1Password](https://1password.com/) を使っている。CLIも活用していて、`op run` 等を使ってローカルファイルシステム上に秘匿情報が入らないようにしている。

環境変数に入れたいAPIキーやトークンなども1Passwordに保存しておいて、`op run` 経由で渡すことで、.envファイルに平文で書かなくて済む。

## メモ・ノート

[Obsidian](https://obsidian.md/) を使っている。特に工夫はしていなくて、せいぜいdaily noteの設定くらい。

良く使っているプラグインはこれくらい。

- [2Hop Links Plus](https://github.com/L7Cy/obsidian-2hop-links-plus) - 2ホップ先の関連ノートをカード形式で表示。Scrapboxライクな関連ページの発見
- [Calendar](https://github.com/liamcain/obsidian-calendar-plugin) - daily notesをカレンダーUIで表示
- [Kindle Highlights](https://github.com/hadynz/obsidian-kindle-plugin) - Kindleのハイライトを同期
- [Natural Language Dates](https://github.com/argenos/nldates-obsidian) - 自然言語で日付リンクを作成
- [Outliner](https://github.com/vslinko/obsidian-outliner) - リストの入れ替え操作が簡単にできる

複数デバイスのSyncは、出たときからObsidian Syncを契約していたので、今でも当時のディスカウント価格で更新できてる。ありがたい。

## まとめ

最近の代表的な変化は、Raycast と Claude（Desktop含む）を中心にしたこと。
