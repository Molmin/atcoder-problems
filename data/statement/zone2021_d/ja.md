配点 : $300$ 点

## ストーリー

$1$ 週間後、選りすぐりのプログラマ達が集まった。みなそれぞれに MAD なスキルを持つ曲者揃いだ。
早速 UFO との直接対決を開始しよう。<br>
ずっとメッセージを送り続けているにもかかわらず放置されている UFO は心なしか少しイラついているように見える。
急いで UFO からのメッセージを解読しなければ。

## 問題文

暗号文 $S$ が与えられます。この暗号文は、以下の操作で解読することが出来ます。

- $T$ を空文字列とする。
- $i = 1, 2, \dots, |S|$ について、順番に以下を行う。 ($|S|$ は $S$ の長さを表す)-   - $S$ の $i$ 文字目が `R` のとき、$T$ を反転させる。
-   - $S$ の $i$ 文字目が `R` でないとき、その文字を $T$ の末尾に加える。
- この操作の後、$T$ の中に同じ文字が $2$ つ連続で並んでいたら、その $2$ 文字を取り除く。この操作を出来る限り続ける。 (最終的に得られる文字列は取り除く順番によらないことが証明できる)

この操作で得られる文字列 $T$ を出力してください。

## 制約

- $S$ は英小文字と `R` からなる
- $1 \leq |S| \leq 5 \times 10^5$

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$

## 出力

答えを出力せよ。

```input1
ozRnonnoe
```

```output1
zone
```

以下のように解読できます。

- 初め、$T$ は空文字列である。
- `o` を $T$ の末尾に加える。$T$ は `o` となる。
- `z` を $T$ の末尾に加える。$T$ は `oz` となる。
- $T$ を反転する。 $T$ は `zo` となる。
- `n` を $T$ の末尾に加える。$T$ は `zon` となる。
- `o` を $T$ の末尾に加える。$T$ は `zono` となる。
- `n` を $T$ の末尾に加える。$T$ は `zonon` となる。
- `n` を $T$ の末尾に加える。$T$ は `zononn` となる。
- `o` を $T$ の末尾に加える。$T$ は `zononno` となる。
- `e` を $T$ の末尾に加える。$T$ は `zononnoe` となる。
- $2$ 連続で並んでいる `n` を削除する。$T$ は `zonooe` となる。
- $2$ 連続で並んでいる `o` を削除する。$T$ は `zone` となる。

```input2
hellospaceRhellospace
```

```output2

```

空文字列が答えになる場合もあります。