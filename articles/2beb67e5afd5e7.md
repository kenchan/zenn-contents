---
title: "wsl --mountで別のVMのディスクをマウントする"
emoji: "⛳"
type: "tech" # tech: 技術記事 / idea: アイデア
topics: [wsl2]
published: false
---

WSL2で複数のディストリビューションを使っているときや、ディストリビューションを変更するときなど、VMのディスクをマウントしたい場合があります。

Windows上では、WSL上でのファイルシステムを透過的に扱えますが、それぞれのVMは独立しているために、そのままではVM間でファイルを共有することはできません。

検索すると、sshfsを使う方法などが紹介されていますが、マウントされる側のディスクを使うVMを落としたままでよければ、WSLの機能だけで可能です。

たとえば、Ubuntuのディスクをマウントしたい場合は、以下のようなコマンドをPowerShell上で実行すると`/tmp/wsl/ubuntu`にマウントされます。

```
wsl --mount \
--vhd C:\Users\YOUR_USER_NAME\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu_YOUR_HASH\LocalState\ext4.vhdx \
--name ubuntu
```

ただし、この方法でマウントする場合は `wsl --shutdown` 等でWSL自体が終了している必要があります。`wsl --terminate <distro>` で該当のVMだけを停止させた状態ではだめでした。また、マウントしているディスクを使うVMを立ち上げることもできません。

なお、`--vhd`に指定するvhdxファイルの位置を調べる方法は、軽く調べた感じはなさそうでした。一般には`%APP_DATA%`配下に入るのでその下を検索するか、`wsl --import`で作成した場合はそのパスを覚えておくとよさそうです。
