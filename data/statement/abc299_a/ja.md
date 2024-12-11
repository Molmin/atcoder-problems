配点 : $100$ 点

## 問題文

$3$ 種類の文字 `.` `|` `*` からなる、長さ $N$ の文字列 $S$ が与えられます。
$S$ には `|` がちょうど $2$ つ、`*` がちょうど $1$ つ含まれます。

$2$ つの `|` で囲まれた部分の中に `*` が含まれるか判定してください。
含まれている場合 `in` と、含まれていない場合 `out` と出力してください。

より厳密には、`*` より前にある文字のいずれかが `|` であり、かつ、`*` より後ろにある文字のいずれかが `|` であるか判定してください。

## 制約

- $3\leq N\leq 100$
- $N$ は整数
- $S$ は `.` `|` `*` からなる長さ $N$ の文字列
- $S$ に `|` はちょうど $2$ 個含まれる
- $S$ に `*` はちょうど $1$ 個含まれる

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S$

## 出力

$2$ つの `|` に囲まれた部分の中に `*` が含まれている場合 `in` と、含まれていない場合 `out` と $1$ 行に出力せよ。

```input1
10
.|..*...|.
```

```output1
in
```

$2$ つの `|` に囲まれた部分は `|..*...|` です。
この中に `*` が含まれているため、`in` と出力してください。

```input2
10
.|..|.*...
```

```output2
out
```

$2$ つの `|` に囲まれた部分は `|..|` です。
この中に `*` は含まれていないため、`out` と出力してください。

```input3
3
|*|
```

```output3
in
```