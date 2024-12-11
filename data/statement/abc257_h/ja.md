配点 : $600$ 点

## 問題文

$6$ 面サイコロ専門店「さいころや」には、$N$ 個のサイコロが売られています。 $i$ 番目のサイコロに書かれている目は $A_{i,1},A_{i,2},\ldots,A_{i,6}$ であり、価格は $C_i$ です。

高橋君はこの中からちょうど $K$ 個のサイコロを選んで購入します。

現在「さいころや」ではキャンペーンが行われており、購入した $K$ 個のサイコロをそれぞれ一度ずつ振り、出た目の総和の二乗のお金を貰えます。なお、どの目が出るかは一様ランダムであり、各サイコロについて独立です。

買う $K$ 個のサイコロを適切に決めることで、$($キャンペーンで貰えるお金 $)-($ 購入した $K$ 個のサイコロの価格の合計$)$ の期待値を最大化し、最大化した際の期待値を $\bmod 998244353$ で求めてください。

期待値 $\bmod 998244353$ の定義

この問題で求める期待値は必ず有理数になることが証明できます。
また、この問題の制約下では、求める期待値を既約分数 $\frac{y}{x}$ で表したときに $x$ が $998244353$ で割り切れないことが保証されます。

このとき $xz \equiv y \pmod{998244353}$ を満たすような $0$ 以上 $998244352$ 以下の整数 $z$ が一意に定まります。この $z$ を答えてください。

## 制約

- $1 \leq N \leq 1000$
- $1 \leq K \leq N$
- $1 \leq C_i \leq 10^5$
- $1 \leq A_{i,j} \leq 10^5$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $C_1$ $C_2$ $\ldots$ $C_N$
> 
> $A_{1,1}$ $A_{1,2}$ $\ldots$ $A_{1,6}$
> 
> $\vdots$
> 
> $A_{N,1}$ $A_{N,2}$ $\ldots$ $A_{N,6}$

## 出力

答えを出力せよ。

```input1
3 2
1 2 3
1 1 1 1 1 1
2 2 2 2 2 2
3 3 3 3 3 3
```

```output1
20
```

$2$ 番目のサイコロと $3$ 番目のサイコロを買うことにすると、$($キャンペーンで貰えるお金 $)-($ 購入した $K$ 個のサイコロの価格の合計$)$ の期待値は $(2 + 3)^2 - (2 + 3) = 20$ となります。これが期待値の最大値です。

```input2
10 5
2 5 6 5 2 1 7 9 7 2
5 5 2 4 7 6
2 2 8 7 7 9
8 1 9 6 10 8
8 6 10 3 3 9
1 10 5 8 1 10
7 8 4 8 6 5
1 10 2 5 1 7
7 4 1 4 5 4
5 10 1 5 1 2
5 1 2 3 6 2
```

```output2
1014
```