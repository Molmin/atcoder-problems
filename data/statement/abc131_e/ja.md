配点 : $500$ 点

## 問題文

以下の条件を満たす $N$ 頂点の無向グラフは存在するでしょうか？

- グラフは単純かつ連結である。
- 各頂点には $1, 2, ..., N$ の番号が付けられている。
- グラフの辺数を $M$ としたとき、各辺には $1, 2, ..., M$ の番号が付けられていて、辺 $i$ は頂点 $u_i$ と頂点 $v_i$ をつなぐ長さ $1$ の辺である。
- 最短距離が $2$ であるような頂点対 $(i,\ j)\ (i &lt; j)$ が、ちょうど $K$ 個存在する。

条件を満たすグラフが存在するならば $1$ つ構築してください。

## 制約

- 入力は全て整数である。
- $2 \leq N \leq 100$
- $0 \leq K \leq \frac{N(N - 1)}{2}$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$

## 出力

条件を満たすグラフが存在しなければ `-1` を出力せよ。

存在するならば、そのようなグラフを $1$ つ、以下の形式で出力せよ (記号の意味は問題文を参照せよ)。

> $M$
> 
> $u_1$ $v_1$
> 
> $:$
> 
> $u_M$ $v_M$

条件を満たすグラフが複数存在する場合、どれを出力してもよい。

```input1
5 3
```

```output1
5
4 3
1 2
3 1
4 5
2 3
```

このグラフには最短距離が $2$ であるような頂点対が $(1,\ 4),\ (2,\ 4),\ (3,\ 5)$ の $3$ 個存在します。よって条件を満たしています。

```input2
5 8
```

```output2
-1
```

条件を満たすグラフは存在しません。