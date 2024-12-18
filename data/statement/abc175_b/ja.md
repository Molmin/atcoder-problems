配点 : $200$ 点

## 問題文

$1, \cdots, N$ の番号がついた $N$ 本の棒があります。棒 $i (1 \leq i \leq N)$ の長さは $L_i$ です。

このうち、三角形を作ることのできるような長さの異なる $3$ 本の棒を選ぶ方法は何通りあるでしょうか。

つまり、$3$ つの整数 $1 \leq i &lt; j &lt; k \leq N$ の組であって次の $2$ つの条件の両方を満たすものの個数を求めてください。

- $L_i, L_j, L_k$ がすべて異なる
- $3$ 辺の長さが $L_i, L_j, L_k$ であるような三角形が存在する

## 制約

- $1 \leq N \leq 100$
- $1 \leq L_i \leq 10^9$
- 入力は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $L_1$ $L_2$ $\cdots$ $L_N$

## 出力

三角形を作ることのできるような、長さの異なる $3$ 本の棒を選ぶ方法の個数を出力せよ。

```input1
5
4 4 9 7 5
```

```output1
5
```

条件を満たすような $(i, j, k)$ は、$(1, 3, 4), (1, 4, 5), (2, 3, 4), (2, 4, 5), (3, 4, 5)$ の $5$ 個があります。

```input2
6
4 5 4 3 3 5
```

```output2
8
```

長さ $3, 4, 5$ の棒が $2$ 本ずつあります。$1$ つ目の条件を満たすためにはそれぞれから $1$ 本ずつ選ぶしかありません。

$3$ 辺の長さが $3, 4, 5$ の三角形は存在するので、条件を満たすような $(i, j, k)$ は $2 ^ 3 = 8$ 個あります。

```input3
10
9 4 6 1 9 6 10 6 6 8
```

```output3
39
```

```input4
2
1 1
```

```output4
0
```

$1 \leq i &lt; j &lt; k \leq N$ を満たす $(i, j, k)$ が存在しないので、$0$ を出力してください。