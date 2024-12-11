配点 : $200$ 点

## 問題文

無限に長いピアノの鍵盤があります。
この鍵盤内の連続する区間であって、白鍵 $W$ 個と黒鍵 $B$ 個からなるものは存在しますか？

文字列 `wbwbwwbwbwbw` を無限に繰り返してできる文字列を $S$ とおきます。

$S$ の部分文字列であって、$W$ 個の `w` と $B$ 個の `b` からなるものは存在しますか？ 

$S$ の部分文字列とは
$S$ の部分文字列とは、ある $2$ つの正整数 $l,r\ (l\leq r)$ に対して、$S$ の $l$ 文字目、$l+1$ 文字目、$\dots$、$r$ 文字目をこの順に繋げてできる文字列のことをいいます。

## 制約

- $W,B$ は整数
- $0\leq W,B \leq 100$
- $W+B \geq 1$

## 入力

入力は以下の形式で標準入力から与えられる。

> $W$ $B$

## 出力

$S$ の部分文字列であって、$W$ 個の `w` と $B$ 個の `b` からなるものが存在するならば `Yes` を、存在しないならば `No` を出力せよ。

```input1
3 2
```

```output1
Yes
```

$S$ の最初の $15$ 文字は `wbwbwwbwbwbwwbw` であり、$S$ の $11$ 文字目から $15$ 文字目までを取り出してできる文字列 `bwwbw` は $3$ 個の `w` と $2$ 個の `b` からなる部分文字列の一例です。

```input2
3 0
```

```output2
No
```

$3$ 個の `w` と $0$ 個の `b` からなる文字列は `www` のみですが、これは $S$ の部分文字列ではありません。

```input3
92 66
```

```output3
Yes
```