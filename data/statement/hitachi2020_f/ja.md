配点 : $1100$ 点

## 問題文

$1$ から $N$ までの番号がつけられた $N$ 個の頂点を持つ木 $G$ があります。
$G$ の $i$ 番目の辺は頂点 $a_i$ と頂点 $b_i$ を結んでいます。

$G$ に $0$ 本以上の辺を追加することを考えます。
追加後のグラフを $H$ とします。

以下の $4$ つの条件を満たす $H$ の個数を $998244353$ で割ったあまりを求めてください。

- $H$ に多重辺は存在しない
- $H$ に自己ループは存在しない
- $G$ の直径と $H$ の直径は等しい
- $H$ に辺が存在しない任意の頂点対について、$H$ にその頂点対間を結ぶ辺を追加すると、直径が短くなる

## 制約

- $3 \le N \le 2 \times 10^5$
- $1 \le a_i, b_i \le N$
- 入力で与えられるグラフは木

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $b_1$
> 
> $\vdots$
> 
> $a_{N-1}$ $b_{N-1}$

## 出力

答えを出力せよ。

```input1
6
1 6
2 1
5 2
3 4
2 3
```

```output1
3
```

例えば、$G$ に辺 $(1, 5), (3, 5)$ を追加したグラフは問題文中の $4$ つの条件を満たします。

```input2
3
1 2
2 3
```

```output2
1
```

$H$ として考えられるグラフは、$G$ のみです。

```input3
9
1 2
2 3
4 2
1 7
6 1
2 5
5 9
6 8
```

```output3
27
```

```input4
19
2 4
15 8
1 16
1 3
12 19
1 18
7 11
11 15
12 9
1 6
7 14
18 2
13 12
13 5
16 13
7 1
11 10
7 17
```

```output4
78732
```