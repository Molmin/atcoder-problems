配点 : $600$ 点

## 問題文

頂点に $1$ から $N$ の番号がついた $N$ 頂点の根付き木 $T$ があります。頂点 $1$ が根で、頂点 $i$ $(2 \leq i \leq N)$ の親は頂点 $P_i$ です。  

$T$ の頂点集合 $V = \lbrace 1, 2,\dots, N\rbrace$ の空でない部分集合 $S$ のうち、次の条件を満たすものを **良い頂点集合** と呼びます。  

- $S$ に含まれる任意の異なる頂点の組 $(u, v)$ について、$u$ が $v$ の祖先でない。

$K = 1, 2, \dots, N$ について、 (良い頂点集合のうち、頂点数が $K$ であるものの個数) $\text{mod }998244353$ を求めてください。

## 制約

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq P_i \lt i$
- 入力される値はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $P_2$ $P_3$ $\dots$ $P_N$

## 出力

$N$ 行出力せよ。$i$ 行目には $K = i$ の時の答えを出力せよ。

```input1
4
1 2 1
```

```output1
4
2
0
0
```

$1 \leq K \leq N$ について、サイズが $K$ である良い頂点集合を列挙すると次のようになります。 

- $K=1$ : $\lbrace 1 \rbrace, \lbrace 2 \rbrace, \lbrace 3 \rbrace, \lbrace 4 \rbrace$
- $K=2$ : $\lbrace 2, 4 \rbrace, \lbrace 3, 4 \rbrace$
- $K=3,4$ : 良い頂点集合は存在しない

```input2
6
1 1 2 2 5
```

```output2
6
6
2
0
0
0
```

```input3
6
1 1 1 1 1
```

```output3
6
10
10
5
1
0
```

```input4
10
1 2 1 2 1 1 2 6 9
```

```output4
10
30
47
38
16
3
0
0
0
0
```