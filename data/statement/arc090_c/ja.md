配点 : $700$ 点

## 問題文

$N$ 頂点 $M$ 辺からなるグラフがあり、このグラフの上に高橋くんと青木くんがいます。

グラフの $i$ 番目の辺は頂点 $U_i$ と頂点 $V_i$ を結んでいます。
この辺を通るのにかかる時間は、通る人 (高橋くんまたは青木くん) によらず、また通る方向によらず、$D_i$ 分です。

高橋くんは頂点 $S$ を、青木くんは頂点 $T$ を同時に出発し、それぞれ頂点 $T$ および頂点 $S$ へ最短の時間で移動します。
二人の最短路の選び方の組であって、移動の途中で二人が (辺または頂点上で) 出会うことのないようなものの個数を $10^9 + 7$ で割ったあまりを求めてください。

## 制約

- $1 \leq N \leq 100,000$
- $1 \leq M \leq 200,000$
- $1 \leq S, T \leq N$
- $S \neq T$
- $1 \leq U_i, V_i \leq N$ ($1 \leq i \leq M$)
- $1 \leq D_i \leq 10^9$ ($1 \leq i \leq M$)
- $i \neq j$ のとき、$(U_i, V_i) \neq (U_j, V_j)$ かつ $(U_i, V_i) \neq (V_j, U_j)$
- $U_i \neq V_i$ ($1 \leq i \leq M$)
- $D_i$ は整数である
- 与えられるグラフは連結である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $S$ $T$
> 
> $U_1$ $V_1$ $D_1$
> 
> $U_2$ $V_2$ $D_2$
> 
> $:$
> 
> $U_M$ $V_M$ $D_M$

## 出力

答えを出力せよ。

```input1
4 4
1 3
1 2 1
2 3 1
3 4 1
4 1 1
```

```output1
2
```

条件を満たす最短路の選び方は以下の 2 通りあります。

- 高橋くんが頂点 $1 \rightarrow 2 \rightarrow 3$ という経路で、青木くんが頂点 $3 \rightarrow 4 \rightarrow 1$ という経路で移動する。
- 高橋くんが頂点 $1 \rightarrow 4 \rightarrow 3$ という経路で、青木くんが頂点 $3 \rightarrow 2 \rightarrow 1$ という経路で移動する。

```input2
3 3
1 3
1 2 1
2 3 1
3 1 2
```

```output2
2
```

```input3
3 3
1 3
1 2 1
2 3 1
3 1 2
```

```output3
2
```

```input4
8 13
4 2
7 3 9
6 2 3
1 6 4
7 6 9
3 8 9
1 2 2
2 8 12
8 6 9
2 5 5
4 2 18
5 3 7
5 1 515371567
4 8 6
```

```output4
6
```