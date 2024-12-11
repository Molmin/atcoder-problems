配点 : $400$ 点

## 問題文

$A$ 個の `a` と $B$ 個の `b` からなる長さ $A + B$ の文字列のうち、辞書順で $K$ 番目のものを求めてください。

## 制約

- $1 \leq A, B \leq 30$
- $A$ 個の `a` と $B$ 個の `b` からなる長さ $A + B$ の文字列の総数を $S$ 個とおいたとき、$1 \leq K \leq S$
- 入力は全て整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$ $B$ $K$

## 出力

答えを出力せよ。

```input1
2 2 4
```

```output1
baab
```

$2$ 個の `a` と $2$ 個の `b` からなる文字列を辞書順に並べると、`aabb`、`abab`、`abba`、`baab`、`baba`、`bbaa` となります。
よって、$4$ 番目である `baab` を出力します。

```input2
30 30 118264581564861424
```

```output2
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

$K$ の値は $32$ bit 整数に収まらないことがあります。