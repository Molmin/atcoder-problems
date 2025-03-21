配点 : $600$ 点

## 問題文

一直線上に $N$ 個の点があり、順に $1$ から $N$ までの番号がついています。

高橋君はこれらの点を頂点として無向グラフを作ることにしました。
はじめはグラフに辺はないですが、$M$ 回の操作によって辺を追加します。
$i$ 回目の操作では次のように辺を追加します。

- $1$ 以上 $N$ 以下の整数 $L_i$, $R_i$ 及び正整数 $C_i$ を用いる。
  $L_i \leq s &lt; t \leq R_i$ なる整数の組 $(s,t)$ すべてに対し、頂点 $s$ と頂点 $t$ の間に長さ $C_i$ の辺を追加する。

ただし、$L_1,...,L_M$, $R_1,...,R_M$, $C_1,...,C_M$ はすべて入力で与えられます。

高橋君は最終的に得られたグラフ上で最短路問題を解きたいです。得られたグラフ上での頂点 $1$ から頂点 $N$ までの最短路の長さを求めてください。

## 制約

- $2 \leq N \leq 10^5$
- $1 \leq M \leq 10^5$
- $1 \leq L_i &lt; R_i \leq N$
- $1 \leq C_i \leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $L_1$ $R_1$ $C_1$
> 
> $:$
> 
> $L_M$ $R_M$ $C_M$

## 出力

頂点 $1$ から頂点 $N$ までの最短路の長さを出力せよ。
ただし、最短路が存在しない場合は `-1` を出力せよ。

```input1
4 3
1 3 2
2 4 3
1 4 6
```

```output1
5
```

頂点 $1$ と頂点 $2$ の間に長さ $2$ の辺があり、頂点 $2$ と頂点 $4$ の間に長さ $3$ の辺があるので、頂点 $1$ と頂点 $4$ の間に長さ $5$ のパスが存在します。

```input2
4 2
1 2 1
3 4 2
```

```output2
-1
```

```input3
10 7
1 5 18
3 4 8
1 3 5
4 7 10
5 9 8
6 10 5
8 10 3
```

```output3
28
```