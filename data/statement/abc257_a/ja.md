配点 : $100$ 点

## 問題文

`A` を $N$ 個、`B` を $N$ 個、…、`Z` を $N$ 個この順に繋げて得られる文字列の先頭から $X$ 番目の文字を求めてください。

## 制約

- $1 \leq N \leq 100$
- $1 \leq X \leq N\times 26$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $X$

## 出力

答えを出力せよ。

```input1
1 3
```

```output1
C
```

得られる文字列は `ABCDEFGHIJKLMNOPQRSTUVWXYZ` です。先頭から $3$ 番目の文字は `C` です。

```input2
2 12
```

```output2
F
```

得られる文字列は `AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ` です。先頭から $12$ 番目の文字は `F` です。