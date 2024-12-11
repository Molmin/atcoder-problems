配点 : $475$ 点

## 問題文

$N$ 頂点 $M$ 辺の無向グラフ $G$ が与えられます。
$i = 1, 2, \ldots, M$ について、$i$ 番目の辺は頂点 $u_i$ と頂点 $v_i$ を結ぶ無向辺です。

$N$ 頂点のグラフは、すべての $i = 1, 2, \ldots, K$ について下記の条件が成り立つとき、**良いグラフ**と呼ばれます。

- $G$ 上で頂点 $x_i$ と頂点 $y_i$ を結ぶパスが存在しない。

与えられるグラフ $G$ は良いグラフです。

$Q$ 個の独立な質問が与えられるので、それらすべてに答えてください。
$i = 1, 2, \ldots, Q$ について、$i$ 番目の質問は

- 入力で与えられたグラフ $G$ に頂点 $p_i$ と頂点 $q_i$ を結ぶ無向辺を $1$ 本追加して得られるグラフ $G^{(i)}$ は良いグラフですか？

という質問です。

## 制約

- $2 \leq N \leq 2 \times 10^5$
- $0 \leq M \leq 2 \times 10^5$
- $1 \leq u_i, v_i \leq N$
- $1 \leq K \leq 2 \times 10^5$
- $1 \leq x_i, y_i \leq N$
- $x_i \neq y_i$
- $i \neq j \implies \lbrace x_i, y_i \rbrace \neq \lbrace x_j, y_j \rbrace$
- すべての $i = 1, 2, \ldots, K$ について次が成り立つ：頂点 $x_i$ と頂点 $y_i$ を結ぶパスは存在しない。
- $1 \leq Q \leq 2 \times 10^5$
- $1 \leq p_i, q_i \leq N$
- $p_i \neq q_i$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$
> 
> $K$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $\vdots$
> 
> $x_K$ $y_K$
> 
> $Q$
> 
> $p_1$ $q_1$
> 
> $p_2$ $q_2$
> 
> $\vdots$
> 
> $p_Q$ $q_Q$

## 出力

$Q$ 行出力せよ。
$i = 1, 2, \ldots, Q$ について、$i$ 行目には $i$ 番目の質問に対する答えを出力せよ。
具体的には、グラフ $G^{(i)}$ が良いグラフである場合は `Yes` を、良いグラフでない場合は `No` を出力せよ。

```input1
6 6
1 2
2 3
2 3
3 1
5 4
5 5
3
1 5
2 6
4 3
4
2 5
2 6
5 6
5 4
```

```output1
No
No
Yes
Yes
```

- $1$ 番目の質問に関して、グラフ $G^{(1)}$ は良いグラフではありません。なぜなら、頂点 $x_1 = 1$ と頂点 $y_1 = 5$ を結ぶパス $1 \rightarrow 2 \rightarrow 5$ を持つからです。よって、`No` と出力します。
- $2$ 番目の質問に関して、グラフ $G^{(2)}$ は良いグラフではありません。なぜなら、頂点 $x_2 = 2$ と頂点 $y_2 = 6$ を結ぶパス $2 \rightarrow 6$ を持つからです。よって、`No` と出力します。
- $3$ 番目の質問に関して、グラフ $G^{(3)}$ は良いグラフです。よって、`Yes` と出力します。
- $4$ 番目の質問に関して、グラフ $G^{(4)}$ は良いグラフです。よって、`Yes` と出力します。

この入力例のように、与えられるグラフ $G$ が自己ループや多重辺を持つ場合があることに注意してください。