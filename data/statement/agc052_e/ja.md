配点 : $1500$ 点

## 問題文

`A`, `B`, `C` からなる文字列は、どの連続する $2$ 文字も異なるとき、**良い** 文字列であると呼ばれます。例えば、`ABABAB` や `ABC` は良い文字列であり、`ABBA` や `AABBCC` は良い文字列ではありません。

$2$ つの長さ $N$ の **良い** 文字列 $S, T$ が与えられます。
$1$ 回の操作で、あなたは $S$ から任意の $1$ 文字を選び、`A`, `B`, `C` のいずれかであるような別の文字に変えることができます。ただし、操作後も $S$ は **良い** 文字列でなければなりません。

$S$ を $T$ に変化させるには、最小で何回の操作が必要でしょうか。
なお、これは必ず有限回の操作で可能であることが証明できます。

## 制約

- $1\le N \le 5\cdot 10^5$
- $S$ は `A`, `B`, `C` からなる長さ $N$ の **良い** 文字列である。
- $T$ は `A`, `B`, `C` からなる長さ $N$ の **良い** 文字列である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S$
> 
> $T$

## 出力

$S$ を $T$ に変化させるために必要な最小の操作回数を出力せよ。

```input1
4
CABC
CBAC
```

```output1
6
```

$6$ 回の操作で目標を達成する例を以下に示します。

`CABC` $\to$ `BABC` $\to$ `BCBC` $\to$ `BCAC` $\to$ `ACAC` $\to$ `ABAC` $\to$ `CBAC`

この場合には、少なくとも $6$ 回の操作が必要であることが示せます。

```input2
10
ABABABABAB
BABABABABA
```

```output2
15
```