配点 : $450$ 点

## 問題文

$N$ 頂点からなる重み付き無向グラフ $G$ があります。
$G$ の各頂点には $1$ から $N$ までの番号が付けられています。
最初、$G$ には辺が $1$ 本も存在しません。

今から、$M$ 回の操作を行うことによって $G$ に辺を追加していきます。
$i\ (1\leq i\leq M)$ 回目の操作は以下の通りです。

- $K_i$ 頂点からなる頂点の部分集合 $S_i=\lbrace A_{i,1},A_{i,2},\dots,A_{i,K_i}\rbrace$ が与えられる。
$u,v\in S_i$ かつ $u&lt;v$ を満たす全ての $u,v$ について、頂点 $u$ と頂点 $v$ の間に重み $C_i$ の辺を追加する。

$M$ 回の操作を全て行ったとき $G$ が連結になるか判定し、連結になるならば $G$ の最小全域木に含まれる辺の重みの総和を求めてください。

## 制約

- $2\leq N \leq 2\times 10^5$
- $1\leq M \leq 2\times 10^5$
- $2\leq K_i \leq N$
- $\displaystyle \sum_{i=1}^{M} K_i \leq 4\times 10^5$
- $1\leq A_{i,1} &lt; A_{i,2} &lt; \dots &lt; A_{i,K_i}\leq N$
- $1\leq C_i\leq 10^9$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $K_1$ $C_1$
> 
> $A_{1,1}$ $A_{1,2}$ $\dots$ $A_{1,K_1}$
> 
> $K_2$ $C_2$
> 
> $A_{2,1}$ $A_{2,2}$ $\dots$ $A_{2,K_2}$
> 
> $\vdots$
> 
> $K_M$ $C_M$
> 
> $A_{M,1}$ $A_{M,2}$ $\dots$ $A_{M,K_M}$

## 出力

$M$ 回の操作を全て行ったとき $G$ が連結にならないならば `-1` を、連結になるならば $G$ の最小全域木に含まれる辺の重みの総和を出力せよ。

```input1
4 3
3 3
1 2 3
2 2
1 2
3 4
1 3 4
```

```output1
9
```

![](https://img.atcoder.jp/abc352/b54e4b0cfe2f7e5974a2b95be370953a.png)

左の図は $M$ 回の操作を全て行ったあとの $G$ を、右の図はその最小全域木の $1$ つを表しています（辺の横に書かれた数はその辺の重みを示します）。

最小全域木に含まれる辺の重みの総和は $3+2+4=9$ です。

```input2
3 2
2 1
1 2
2 1
1 2
```

```output2
-1
```

$M$ 回の操作を全て行っても $G$ は連結になりません。

```input3
10 5
6 158260522
1 3 6 8 9 10
10 877914575
1 2 3 4 5 6 7 8 9 10
4 602436426
2 6 7 9
6 24979445
2 3 4 5 8 10
4 861648772
2 4 8 9
```

```output3
1202115217
```