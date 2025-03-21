配点 : $1700$ 点

## 問題文

国際ユークリッドの互除法オリンピックの主催者であるけぬすくんは、
オリンピックをより面白くするため、$2$ 数のペアに対してユークリッドの互除法を走らせたとき、反復回数ができるだけ大きくなるようなペアを探しています。

$Q$ 個のクエリが与えられます。$i$ 個目のクエリは、$2$ つの整数 $X_i,Y_i$ で表され、
$1 \leq x \leq X_i, 1 \leq y \leq Y_i$ なるような $(x,y)$ のペアの中での、ユークリッドの互除法の反復回数の最大値と、その最大値をとるペアの個数を $10^9+7$ で割ったあまりを求めるクエリです。

全てのクエリに答えてください。ただし、ユークリッドの互除法の反復回数とは、任意の非負整数 $a,b$ に対し、

- $(a,b)$ と $(b,a)$ の反復回数は等しい
- $(0,a)$ の反復回数は $0$
- $a &gt; 0$ かつ $a \leq b$ なら、整数 $p,q$ $(0 \leq q &lt; a)$ を用いて $b$ を $b=pa+q$ と一意的に表したとき、$(q,a)$ の反復回数に $1$ を加えた値が $(a,b)$ の反復回数となる

を満たすように定義されます。

## 制約

- $1 \leq Q \leq 3 \times 10^5$
- $1 \leq X_i,Y_i \leq 10^{18}(1 \leq i \leq Q)$

## 入力

入力は以下の形式で標準入力から与えられる。

> $Q$
> 
> $X_1$ $Y_1$
> 
> $:$
> 
> $X_Q$ $Y_Q$

## 出力

各クエリに対し、ユークリッドの互除法の反復回数の最大値と、最大値を取るペアの個数を $10^9+7$ で割ったあまりを空白区切りで出力せよ。

```input1
3
4 4
6 10
12 11
```

```output1
2 4
4 1
4 7
```

$1$ つ目のクエリでは、$(2,3),(3,2),(3,4),(4,3)$ のユークリッドの互除法の反復回数が $2$ 回です。$3$ 回以上反復が必要な組はありません。

$2$ つ目のクエリでは、$(5,8)$ のユークリッドの互除法の反復回数が $4$ 回です。

$3$ つ目のクエリでは、$(5,8),(8,5),(7,11),(8,11),(11,7),(11,8),(12,7)$ のユークリッドの互除法の反復回数が $4$ 回です。

```input2
10
1 1
2 2
5 1000000000000000000
7 3
1 334334334334334334
23847657 23458792534
111111111 111111111
7 7
4 19
9 10
```

```output2
1 1
1 4
4 600000013
3 1
1 993994017
35 37447
38 2
3 6
3 9
4 2
```