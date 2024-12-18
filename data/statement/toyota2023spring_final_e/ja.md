配点 : $1000$ 点

## 問題文

$0$, $1$ からなる長さ $N$ の整数列 $A=(A_1,A_2,\cdots,A_N)$ が与えられます．

今，二次元平面上の座標 $(0,0)$ の点に駒があります．
あなたはこれから，以下の操作を好きな回数繰り返します．

- 整数 $x,y$ ($1 \leq x,y \leq N$) を選び，駒の $X$, $Y$ 座標をそれぞれ $x$, $y$ ずつ増やす．
ただしここで，以下の $2$ つの条件を満たす必要がある．-   - $A_x=1$ が成立．
-   - 操作後の駒の座標を $(p,q)$ とおくとき，$q \leq p$ が成立．

最終的に駒が座標 $(N,N)$ へと至るような操作方法が何通りあるかを $998244353$ で割ったあまりを求めてください．

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $A_i \in \{0,1\}$

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## 出力

答えを出力せよ．

```input1
2
1 1
```

```output1
2
```

駒の移動方法として，以下の $2$ 通りが考えられます．

- $(0,0) \rightarrow (1,1) \rightarrow (2,2)$
- $(0,0) \rightarrow (2,2)$

```input2
1
0
```

```output2
0
```

```input3
4
1 1 0 1
```

```output3
10
```

```input4
25
1 0 1 1 0 0 0 0 1 0 0 1 0 1 1 1 0 0 1 0 0 0 1 0 0
```

```output4
934946952
```