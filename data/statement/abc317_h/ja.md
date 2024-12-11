配点 : $650$ 点

## 問題文

頂点に $1$ から $N$ までの番号がついた $N$ 頂点の有向グラフがあります。グラフに多重辺は存在しませんが自己ループは存在する可能性があります。また、グラフに含まれる全ての辺は次の条件を満たします。    

- 辺が頂点 $s$ から頂点 $t$ に向けて張られているとする。このとき $s, t$ は $0 \leq t - s\leq 2$ と $t = 1$ の少なくとも一方を満たす。

グラフの辺の有無は長さ $N$ の数列 $A,B,C,D$ によって表されます。$A, B, C, D$ の各要素は次の意味を持ちます。(以下では $A$ の $n$ 番目の要素を $A_n$ と表します。$B_n, C_n, D_n$ も同様です)

- $A_n$ は頂点 $n$ から頂点 $n$ に向けて辺が張られていたら $1$ 、そうでなければ $0$
- $B_n$ は頂点 $n$ から頂点 $n+1$ に向けて辺が張られていたら $1$ 、そうでなければ $0$ (ただし $B_N = 0$)
- $C_n$ は頂点 $n$ から頂点 $n+2$ に向けて辺が張られていたら $1$ 、そうでなければ $0$ (ただし $C_{N-1} = C_N = 0$)
- $D_n$ は頂点 $n$ から頂点 $1$ に向けて辺が張られていたら $1$ 、そうでなければ $0$ (ただし $D_1 = A_1$)

与えられたグラフにおいて、頂点 $1$ が始点、頂点 $N$ が終点であり $K$ 辺からなる walk の個数を $998244353$ で割った余りを求めてください。  

ここで「頂点 $1$ が始点、頂点 $N$ が終点であり $K$ 辺からなる walk 」とは、頂点の列 $v_0 = 1, v_1, \dots, v_K = N$ であって、各 $i$ $(0 \leq i \lt K)$ について頂点 $v_i$ から頂点 $v_{i + 1}$ へ向かう辺があるものを言います。2 つの walk は列として異なる時に別々に数えます。

## 制約

- $2 \leq N \leq 5 \times 10^4$
- $1 \leq K \leq 5 \times 10^5$
- $A_i, B_i, C_i, D_i \in \lbrace 0, 1 \rbrace$
- $A_1 = D_1$
- $B_N = C_{N-1} = C_N = 0$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_N$
> 
> $C_1$ $C_2$ $\dots$ $C_N$
> 
> $D_1$ $D_2$ $\dots$ $D_N$

## 出力

頂点 $1$ が始点、頂点 $N$ が終点であり $K$ 辺からなる walk の個数を $998244353$ で割った余りを出力せよ。

```input1
3 3
1 0 1
1 1 0
1 0 0
1 0 1
```

```output1
6
```

与えられるグラフを図示すると次のようになります。

![image](https://img.atcoder.jp/abc317/2106e1b4faaa87d208ed3e3a275cda1b.jpg)

条件を満たす walk は次の $6$ 個です。

- $1, 1, 1, 3$
- $1, 1, 2, 3$
- $1, 1, 3, 3$
- $1, 2, 3, 3$
- $1, 3, 1, 3$
- $1, 3, 3, 3$

```input2
4 6
1 1 1 1
1 1 1 0
1 1 0 0
1 0 0 0
```

```output2
50
```

```input3
10 500000
0 1 0 1 0 0 0 0 1 1
1 1 1 0 1 1 1 0 1 0
0 0 1 1 0 0 1 1 0 0
0 1 1 1 1 1 0 1 1 0
```

```output3
866263864
```