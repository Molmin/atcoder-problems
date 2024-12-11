配点 : $500$ 点

## 問題文

$N$ 頂点 $M$ 辺の単純連結無向グラフが与えられます。<br>
辺 $i$ は頂点 $A_i$ と頂点 $B_i$ を結ぶ長さ $C_i$ の辺です。

以下の条件を満たすようにいくつかの辺を削除します。削除する辺の数の最大値を求めてください。

- 辺を削除した後のグラフも連結である。
- 全ての頂点対 $(s,t)$ について、頂点 $s$ と頂点 $t$ の間の距離が削除前と削除後で変化しない。

## 注釈

単純連結無向グラフとは、単純かつ連結で辺に向きの無いグラフのことをいいます。<br>
グラフが単純であるとは、グラフが自己ループや多重辺を含まないことをいいます。<br>
グラフが連結であるとは、グラフ上の任意の $2$ 頂点 $s, t$ について $s$ から $t$ へ辺をたどって行けることをいいます。<br>
頂点 $s$ と頂点 $t$ の間の距離とは、頂点 $s$ と頂点 $t$ の間の最短路の長さのことをいいます。

## 制約

- $2 \leq N \leq 300$
- $N-1 \leq M \leq \frac{N(N-1)}{2}$
- $1 \leq A_i \lt B_i \leq N$
- $1 \leq C_i \leq 10^9$
- $i \neq j$ ならば $(A_i, B_i) \neq (A_j, B_j)$ である。
- 与えられるグラフは連結である。
- 入力はすべて整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $B_1$ $C_1$
> 
> $A_2$ $B_2$ $C_2$
> 
> $\vdots$
> 
> $A_M$ $B_M$ $C_M$

## 出力

答えを出力せよ。

```input1
3 3
1 2 2
2 3 3
1 3 6
```

```output1
1
```

辺を削除する前の全ての頂点対の距離は次の通りです。

- 頂点 $1$ と頂点 $2$ の距離は $2$
- 頂点 $1$ と頂点 $3$ の距離は $5$
- 頂点 $2$ と頂点 $3$ の距離は $3$

辺 $3$ を削除しても全ての頂点間の距離は変化しません。また、問題文の条件を満たすように $2$ 本以上の辺を削除することはできないので、答えは $1$ 本になります。

```input2
5 4
1 3 3
2 3 9
3 5 3
4 5 3
```

```output2
0
```

どの辺も削除することができません。

```input3
5 10
1 2 71
1 3 9
1 4 82
1 5 64
2 3 22
2 4 99
2 5 1
3 4 24
3 5 18
4 5 10
```

```output3
5
```