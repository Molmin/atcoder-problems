配点 : $600$ 点

## 問題文

$N$ 頂点の木があり、$i$ 番目の辺は頂点 $u_i$ と頂点 $v_i$ を結んでいます。
また、頂点 $i$ には整数 $a_i$ が書かれています。
$1$ 以上 $N$ 以下のすべての整数 $k$ に対して、次の問題を解いてください。

- 頂点 $1$ から頂点 $k$ までの最短パス上の頂点に書かれている整数を頂点 $1$ に近い方から順に並べた数列の最長増加部分列の長さはいくつか。

なお、長さ $L$ の数列 $A$ の最長増加部分列とは、$1 \leq i_1 &lt; i_2 &lt; ... &lt; i_M \leq L$ かつ
$A_{i_1} &lt; A_{i_2} &lt; ... &lt; A_{i_M}$ を満たす部分列 $A_{i_1} , A_{i_2} , ... , A_{i_M}$ の中で 最も $M$ が大きいものをいいます。

## 制約

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq a_i \leq 10^9$
- $1 \leq u_i , v_i \leq N$
- $u_i \neq v_i$
- 与えられるグラフは木である。
- 入力はすべて整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $:$
> 
> $u_{N-1}$ $v_{N-1}$

## 出力

$N$ 行出力せよ。$k$ 行目には、頂点 $1$ から頂点 $k$ までの最短パス上の頂点に書かれている整数を頂点 $1$ に近い方から順に並べた数列の最長増加部分列の長さを出力せよ。

```input1
10
1 2 5 3 4 6 7 3 2 4
1 2
2 3
3 4
4 5
3 6
6 7
1 8
8 9
9 10
```

```output1
1
2
3
3
4
4
5
2
2
3
```

例えば、頂点 $1$ から頂点 $5$ までの最短パス上の頂点に書かれている整数を頂点 $1$ に近い方から順に並べた数列 $A$ は $1,2,5,3,4$ です。この数列の最長増加部分列は $A_1$ , $A_2$ , $A_4$ , $A_5$ であり、この長さは $4$ です。