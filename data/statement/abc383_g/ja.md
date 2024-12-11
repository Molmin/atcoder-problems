配点 : $625$ 点

## 問題文

$N$ 個のマスが横一列に並んでいて、左から $i$ 番目のマスには整数 $A_i$ が書かれています。

また、あなたは連続するマス $K$ 個を覆えるタイルを $\lfloor \frac{N}{K}\rfloor$ 枚持っています。

$i=1,\ldots,\lfloor \frac{N}{K}\rfloor$ について以下の問題を解いてください。

- タイルを重ならずにちょうど $i$ 個置くとき、タイルで覆われたマスに書かれた数の和としてありうる値の最大値を求めよ。

## 制約

- $1\leq N\leq 2\times 10^5$
- $1\leq K \leq \min(5,N)$
- $-10^9\leq A_i\leq 10^9$
- 入力される数値は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $A_1$ $\ldots$ $A_N$

## 出力

$i=1,\ldots,\lfloor \frac{N}{K}\rfloor$ に対する問題の答えを空白区切りで一行に出力せよ。

```input1
6 2
-5 3 4 -1 6 -2
```

```output1
7 12 5
```

$i=1$ の場合、左から $2$ 番目のマスと $3$ 番目のマスをタイル $1$ 枚で覆うと、覆われたマスに書かれた数の和は $7$ となります。

$i=2$ の場合、左から $2$ 番目のマスと $3$ 番目のマスをタイル $1$ 枚で覆い、左から $4$ 番目のマスと $5$ 番目のマスをタイル $1$ 枚で覆うと、覆われたマスに書かれた数の和は $12$ となります。

```input2
20 4
-5 3 4 -1 6 -2 13 -1 13 7 6 -12 3 -5 12 -6 -3 10 -15 -5
```

```output2
32 45 57 52 22
```