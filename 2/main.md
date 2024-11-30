# RaspberryPi4を自宅サーバーにした話

# やりたいこと・なった時
「RasberryPiあるしなんかするか！」
「一旦サーバーにするか」
てな感じです。
メインPC(Win11)からSSH出来ればいいです。
# 必要な物
- PC(Winオススメ)
- RasberryPi
- SDカード
- 電源
- やる気
# 準備
まずWindowsで[公式イメージャー](https://raspberrypi.com/software)を使ってRaspberryPi OSを書き込みます。ちなみに私の準備したSDカードはクソ早32GBです。(少なっ)
書き込み時間は私のPCで数十分でした。(測れやボケ)
はい。準備終わり！
# RasberryPi動作
## 起動
当たり前のように起動させます。起動させたら初期設定します。SSH有効にして日本語入力でも入れますか。IPアドレス出してメモる。
<details><summary>日本語入力</summary>
日本語入力はiBusとMozcを使いました。

```
sudo apt update
sudo apt install ibus-mozc -y
```
</details>

# SSH接続
早速接続ですね。cmd開いて以下コマンドを入力。

```bash:Windows側コマンドプロンプト
#ssh [ユーザー名]@[IPアドレス]
ssh admin@192.168.3.10
```
でパスワード打って接続。
終わりです。(クソ記事)

# 参考
[Windows10からRaspberryPiにカンタンSSH接続 - Qiita](https://qiita.com/c60evaporator/items/2384416f1122ae124f50)