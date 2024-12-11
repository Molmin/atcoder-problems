配点 : $700$ 点

## 問題文

あるコンテストの開催に向けて $N$ 問の問題が提案されました。はじめ、問題 $i$ のスコアは整数 $A_i$ です。

これから、$M$ 人のジャッジが好きな問題に投票します。各ジャッジは、他のジャッジとは独立にちょうど $V$ 問を選び、それらの問題のスコアを $1$ ずつ上げます。

$M$ 人のジャッジ全員が投票を行ったあと、$N$ 問の問題がスコアの降順に並べられ、最初の $P$ 問がコンテストの問題セットに採用されます。
同スコアの問題間の順序は、ジャッジ長が任意に決定します。

$N$ 問のうち、問題セットに採用される可能性を持つ問題は何問あるでしょうか？

## 制約

- $2 \le N \le 10^5$
- $1 \le M \le 10^9$
- $1 \le V \le N - 1$
- $1 \le P \le N - 1$
- $0 \le A_i \le 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $V$ $P$
> 
> $A_1$ $A_2$ $...$ $A_N$

## 出力

問題セットに採用される可能性を持つ問題の数を出力せよ。

```input1
6 1 2 2
2 1 1 3 0 2
```

```output1
5
```

$1$ 人しかいないジャッジが問題 $2,5$ に投票した場合、各問のスコアは $2$ $2$ $1$ $3$ $1$ $2$ となり、問題 $4$、そして問題 $1,2,6$ のうちの $1$ 問が採用されます。

ジャッジが問題 $3,4$ に投票した場合、各問のスコアは $2$ $1$ $2$ $4$ $0$ $2$ となり、問題 $4$、そして問題 $1,3,6$ のうちの $1$ 問が採用されます。

よって、問題 $1,2,3,4,6$ には採用される可能性があります。一方で、問題 $5$ には採用される可能性はありません。

```input2
6 1 5 2
2 1 1 3 0 2
```

```output2
3
```

採用される可能性があるのは問題 $1,4,6$ のみです。

```input3
10 4 8 5
7 2 3 6 1 6 5 4 6 5
```

```output3
8
```