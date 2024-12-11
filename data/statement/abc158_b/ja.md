配点 : $200$ 点

## 問題文

高橋君は青と赤の $2$ 色のボールを持っており、これらを一列に並べようとしています。

初め、列にボールはありません。

根気のある高橋君は、次の操作を $10^{100}$ 回繰り返します。

- 列の末尾に、$A$ 個の青いボールを加える。その後、列の末尾に $B$ 個の赤いボールを加える。

こうしてできる列の先頭から $N$ 個のボールのうち、青いボールの個数はいくつでしょうか。

## 制約

- $1 \leq N \leq 10^{18}$
- $A, B \geq 0$
- $0 &lt; A + B \leq 10^{18}$
- 入力は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $A$ $B$

## 出力

列の先頭から $N$ 個のボールのうち、青いボールの個数を出力せよ。

```input1
8 3 4
```

```output1
4
```

青いボールを`b`、赤いボールを `r`で表すと、列の先頭から $8$ 個のボールは `bbbrrrrb` であるので、このうち青いボールは $4$ 個です。

```input2
8 0 4
```

```output2
0
```

そもそも赤いボールしか並んでいません。

```input3
6 2 4
```

```output3
2
```

`bbrrrr` のうち青いボールは $2$ 個です。