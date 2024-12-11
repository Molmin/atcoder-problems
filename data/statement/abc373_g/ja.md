配点 : $600$ 点

## 問題文

$2$ 次元平面上に $P_1,P_2,\ldots,P_N, Q_1,Q_2,\ldots,Q_N$ の $2N$ 個の点があります。
$P_i$ の座標は $(A_i,B_i)$、$Q_i$ の座標は $(C_i,D_i)$ です。
同一直線上に異なる $3$ 点が存在することはありません。

$(1,2,\ldots,N)$ の順列であるような数列 $R=(R_1,R_2,\ldots,R_N)$ であって以下の条件を満たすような $R$ が存在するか判定し、存在する場合は $1$ つ求めてください。

- $1$ 以上 $N$ 以下のすべての整数 $i$ について 線分 $i$ を $P_i$ と $Q_{R_i}$ を端点とする線分としたとき、どの線分 $i$ と線分 $j$ $(1 \leq i &lt; j \leq N)$ も互いに交差しない。

## 制約

- $1 \leq N \leq 300$
- $0 \leq A_i,B_i,C_i,D_i \leq 5000$ $(1 \leq i \leq N)$
- $(A_i,B_i) \neq (A_j,B_j)$ $(1 \leq i &lt; j \leq N)$
- $(C_i,D_i) \neq (C_j,D_j)$ $(1 \leq i &lt; j \leq N)$
- $(A_i,B_i) \neq (C_j,D_j)$ $(1 \leq i,j \leq N)$
- 同一直線上に異なる $3$ 点が存在することはない
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$ 
> 
> $A_N$ $B_N$
> 
> $C_1$ $D_1$
> 
> $C_2$ $D_2$
> 
> $\vdots$
> 
> $C_N$ $D_N$

## 出力

条件を満たす $R$ が存在しない場合は `-1` と出力せよ。

存在する場合は $R_1,R_2,\ldots,R_N$ を空白区切りで出力せよ。答えが複数存在する場合はどれを出力してもかまわない。

```input1
3
0 0
2 4
4 2
0 2
2 0
4 4
```

```output1
2 1 3
```

以下の図のように点が並んでいます。
![](https://img.atcoder.jp/abc373/G-sample.png)
$R=(2,1,3)$ とすることで $3$ 本の線分は互いに交差しません。また、 $R$ を $(1,2,3),(1,3,2),(2,3,1),(3,1,2)$ のいずれにしても正しい答えとなります。

```input2
8
59 85
60 57
72 12
3 27
16 58
41 94
77 64
97 20
32 37
7 2
57 94
35 70
38 60
97 100
5 76
38 8
```

```output2
3 5 8 2 7 4 6 1
```