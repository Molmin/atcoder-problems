配点 : $200$ 点

## 問題文

高橋くんは、 $N$ 問のクイズに答えます。<br>
高橋くんの持っている点数ははじめ $X$ 点で、クイズに正解すると $1$ 点増え、不正解だと $1$ 点減ります。<br>
ただし、持っている点数が $0$ 点のときに不正解となった場合は点数は減りません。  

高橋くんのクイズの結果が文字列 $S$ で与えられます。<br>
$S$ の左から $i$ 番目の文字が `o` のとき、 $i$ 問目が正解だったことを、 `x` のとき、 $i$ 問目が不正解だったことを表します。<br>
高橋くんの最終的な点数はいくつでしょうか？

## 制約

- $1 \le N \le 2 \times 10^5$
- $0 \le X \le 2 \times 10^5$
- $S$ は `o` と `x` からなる長さ $N$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $X$
> 
> $S$

## 出力

高橋くんの最終的な点数を出力せよ。

```input1
3 0
xox
```

```output1
0
```

はじめ、高橋くんの点数は $0$ です。<br>
$1$ 問目は不正解ですが、点数が $0$ なので減りません。<br>
$2$ 問目は正解なので、点数が増えて $1$ になります。<br>
$3$ 問目は不正解なので、点数が減って $0$ になります。
高橋くんの最終的な点数は $0$ なので、$0$ を出力します。

```input2
20 199999
oooooooooxoooooooooo
```

```output2
200017
```

```input3
20 10
xxxxxxxxxxxxxxxxxxxx
```

```output3
0
```