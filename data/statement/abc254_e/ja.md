配点 : $500$ 点

## 問題文

$N$ 頂点 $M$ 辺の単純無向グラフがあり、各頂点には $1,\ldots,N$ と番号が付けられています。 $i=1,\ldots,M$ に対し、 $i$ 番目の辺は頂点 $a_i$ と頂点 $b_i$ を結びます。また、**各頂点の次数は $3$ 以下です。**

$i=1,\ldots,Q$ に対し、次のクエリに答えてください。

- 頂点 $x_i$ との距離が $k_i$ 以下であるような頂点の番号の総和を求めよ。

## 制約

- $1 \leq N \leq 1.5 \times 10^5$
- $0 \leq M \leq \min (\frac{N(N-1)}{2},\frac{3N}{2})$
- $1 \leq a_i \lt b_i \leq N$
- $i\neq j$ ならば $(a_i,b_i) \neq (a_j,b_j)$
- 与えられるグラフの各頂点の次数は $3$ 以下
- $1 \leq Q \leq 1.5 \times 10^5$
- $1 \leq x_i \leq N$
- $0 \leq k_i \leq 3$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $a_1$ $b_1$
> 
> $\vdots$
> 
> $a_M$ $b_M$
> 
> $Q$
> 
> $x_1$ $k_1$
> 
> $\vdots$
> 
> $x_Q$ $k_Q$

## 出力

$Q$ 行出力せよ。 $i$ 行目には $i$ 番目のクエリへの答えを出力せよ。

```input1
6 5
2 3
3 4
3 5
5 6
2 6
7
1 1
2 2
2 0
2 3
4 1
6 0
4 3
```

```output1
1
20
2
20
7
6
20
```

$1$ 番目のクエリでは、頂点 $1$ との距離が $1$ 以下であるような頂点は頂点 $1$ のみなので $1$ が答えです。<br>
$2$ 番目のクエリでは、頂点 $2$ との距離が $2$ 以下であるような頂点は頂点 $2,3,4,5,6$ なのでこれらの総和の $20$ が答えになります。<br>
$3$ 番目以降のクエリも同様にして答えを求められます。