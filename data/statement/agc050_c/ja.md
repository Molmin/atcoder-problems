配点 : $1000$ 点

## 問題文

左右に無限に続くマスの列があります。
これを用いて、あなたとすぬけ君は以下のゲームをプレイします。

- 審判が、`B` と `S` からなる「ターン文字列」$t$ を作り、二人に見せる。
- まず、すぬけ君がマスのうち $1$ つの上に立つ。
- そして、各 $i = 1, ..., |t|$ について、この順番に以下が行われる。-   - $t$ の $i$ 文字目が `B` のとき、あなたのターンである。あなたは、他のブロックやすぬけ君を含まないマスを $1$ つ選び、ブロックを置く。設置後、すぬけ君の両隣のマスにともにブロックが置かれている場合、あなたの勝利でゲームが終了する。
-   - $t$ の $i$ 文字目が `S` のとき、すぬけ君のターンである。すぬけ君は、隣の空きマスに移動するか、何もしない。
- この時点でゲームが終了していない場合、すぬけ君の勝利でゲームが終了する。

`B`, `S`, `?` からなる文字列 $s$ が与えられます。
$s$ に含まれる `?` の個数が $Q$ であるとき、`?` をそれぞれ `B` または `S` で置き換えてターン文字列とする方法は $2^Q$ 通り存在します。
これらの $2^Q$ 個のターン文字列のうち、両プレイヤーが最適に行動したときにあなたが勝利するようなものは何個あるでしょうか。
この答えを $998,244,353$ で割った余りを求めてください。

## 制約

- $1 \leq |s| \leq 10^6$
- $s$ は `B`, `S`, `?` からなる。

## 入力

入力は標準入力から以下の形式で与えられる。

> $s$

## 出力

答えを出力せよ。

```input1
BSSBS
```

```output1
0
```

$1, 4$ ターン目があなたのターンで、$2, 3, 5$ ターン目がすぬけ君のターンです。
この場合、両者が最適に行動するとすぬけ君が勝つことがわかります。

```input2
?S?B????S????????B??????B??S??
```

```output2
16777197
```