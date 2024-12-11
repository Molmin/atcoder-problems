配点 : $400$ 点

## 問題文

`110` を $10^{10}$ 個連結した文字列を $S$ とします（たとえば `110` を $3$ 個連結した文字列は `110110110` です）。

長さ $N$ の文字列 $T$ があります。

$S$ に $T$ が連続する部分文字列としていくつ含まれるかを求めてください。

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $T$ は `0`, `1` からなる長さ $N$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $T$

## 出力

$S$ に $T$ が連続する部分文字列としていくつ含まれるかを出力せよ。

```input1
4
1011
```

```output1
9999999999
```

$S$ は長いので、`110` を $3$ 個連結した `110110110` に `1011` がいくつ含まれるかを考えます。
すると、

- <p>$1$ `1011` $0110$</p>
- <p>$1101$ `1011` $0$</p>

の $2$ 箇所に、`1011` が連続する部分文字列として含まれています。

```input2
22
1011011011011011011011
```

```output2
9999999993
```