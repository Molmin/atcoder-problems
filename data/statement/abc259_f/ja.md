配点 : $500$ 点

## 問題文

$N$ 頂点の木が与えられます。
$i = 1, 2, \ldots, N-1$ について、$i$ 番目の辺は頂点 $u_i$ と頂点 $v_i$ を結ぶ重み $w_i$ の辺です。

$N-1$ 本の辺のうちのいくつか（ $0$ 本または $N-1$ 本すべてでも良い）を選ぶことを考えます。
ただし、$i = 1, 2, \ldots, N$ について、頂点 $i$ に接続する辺は $d_i$ 本までしか選べません。
選ぶ辺の重みの総和としてあり得る最大値を求めてください。

## 制約

- $2 \leq N \leq 3 \times 10^5$
- $1 \leq u_i, v_i \leq N$
- $-10^9 \leq w_i \leq 10^9$
- $d_i$ は頂点 $i$ の次数以下の非負整数
- 与えられるグラフは木である
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $d_1$ $d_2$ $\ldots$ $d_N$
> 
> $u_1$ $v_1$ $w_1$
> 
> $u_2$ $v_2$ $w_2$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$ $w_{N-1}$

## 出力

答えを出力せよ。

```input1
7
1 2 1 0 2 1 1
1 2 8
2 3 9
2 4 10
2 5 -3
5 6 8
5 7 3
```

```output1
28
```

$1, 2, 5, 6$ 番目の辺を選ぶと、選ぶ辺の重みは $8 + 9 + 8 + 3 = 28$ となります。これがあり得る最大値です。

```input2
20
0 2 0 1 2 1 0 0 3 0 1 1 1 1 0 0 3 0 1 2
4 9 583
4 6 -431
5 9 325
17 6 131
17 2 -520
2 16 696
5 7 662
17 15 845
7 8 307
13 7 849
9 19 242
20 6 909
7 11 -775
17 18 557
14 20 95
18 10 646
4 3 -168
1 3 -917
11 12 30
```

```output2
2184
```