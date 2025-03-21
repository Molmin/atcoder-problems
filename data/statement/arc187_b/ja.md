配点 : $600$ 点

## 問題文

長さ $N$ の数列 $A=(A_1,\ldots,A_N)$ に対し，$f(A)$ を以下で定義します．

- 頂点に $1$ から $N$ の番号がついた $N$ 頂点 $0$ 辺のグラフを用意する．$1\leq i &lt; j\leq N$ を満たす全ての整数組 $(i,j)$ に対し，$A_i\leq A_j$ ならば頂点 $i$ と頂点 $j$ を双方向に結ぶ辺を張る．最終的に得られるグラフの連結成分数を $f(A)$ と定める．

長さ $N$ の数列 $B=(B_1,\ldots,B_N)$ が与えられます． $B$ の各要素は $-1$ または $1$ 以上 $M$ 以下の整数です．

$B$ の要素のうち，$-1$ を全て $1$ 以上 $M$ 以下の整数に置き換えて得られる数列 $B'$ は，$B$ に含まれる $-1$ の個数を $q$ とすると $M^q$ 通りあります．

考えられる $B'$ 全てに対する $f(B')$ の総和を $998244353$ で割ったあまりを求めてください．

## 制約

- 入力される数値は全て整数
- $2 \leq N \leq 2000$
- $1\leq M\leq 2000$
- $B_i$ は $-1$ または $1$ 以上 $M$ 以下の整数

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$ $M$
> 
> $B_1$ $\ldots$ $B_N$

## 出力

答えを出力せよ．

```input1
3 3
2 -1 1
```

```output1
6
```

$B'$ として考えられるのは $(2,1,1),(2,2,1),(2,3,1)$ の $3$ 個です．

$B'=(2,1,1)$ のとき，頂点 $2$ と頂点 $3$ の間にのみ辺が張られるので，連結成分数は $2$ です．よって $f(B')=2$ です．

同様に，$B'=(2,2,1)$ のとき $f(B')=2$， $B'=(2,3,1)$ のとき $f(B')=2$ なので答えは $2+2+2=6$ となります．

```input2
10 8
-1 7 -1 -1 -1 2 -1 1 -1 2
```

```output2
329785
```

```input3
11 12
-1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
```

```output3
529513150
```

総和を $998244353$ で割ったあまりを求めることに注意してください．