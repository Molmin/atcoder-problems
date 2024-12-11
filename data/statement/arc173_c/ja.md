配点 : $600$ 点

## 問題文

$1$ から $N$ までの整数からなる長さ $N$ の順列 $P=(P_1,P_2,\dots,P_N)$ が与えられます。

各 $i=1,2,\dots,N$ に対し、以下の条件をすべて満たす $2$ つの整数の組 $(l,r)$ に対する $r-l+1$ の最小値を出力してください。ただし、そのような $(l,r)$ が存在しない場合は `-1` を出力してください。

- $1 \leq l \leq i \leq r \leq N$
- $r-l+1$ は奇数
- $P$ の連続部分列 $(P_l,P_{l+1},\dots,P_r)$ の中央値は $P_i$ **ではない**

ここで、長さが $L$ （奇数）の整数列 $A$ に対して $A$ の中央値とは、 $A$ を昇順にソートして得られる数列を $A'$ として $A'$ の $\frac{L+1}{2}$ 番目の値のことを指します。

## 制約

- $3 \leq N \leq 3 \times 10^5$
- $(P_1,P_2,\dots,P_N)$ は $1$ から $N$ までの整数からなる順列
- 入力される値はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $P_1$ $P_2$ $\dots$ $P_N$

## 出力

$i=1,2,\dots,N$ に対する答えをこの順に空白区切りで出力せよ。

```input1
5
1 3 5 4 2
```

```output1
3 3 3 5 3
```

例えば $i=2$ のとき、 $(l,r)=(2,4)$ とすると $r-l+1=3$ は奇数であり、 $(P_2,P_3,P_4)=(3,5,4)$ の中央値は $4$ となり、 $P_2$ ではないため条件を満たします。よって答えは $3$ です。

一方、$i=4$ のとき、 $(l,r)=(4,4),(2,4),(3,5)$ に対して、 $(P_l,\dots,P_r)$ の中央値は常に $P_4=4$ です。$(l,r)=(1,5)$ とすると $(P_1,P_2,P_3,P_4,P_5)=(1,3,5,4,2)$ の中央値は $3$ となり、 $P_4$ ではないため条件を満たします。よって答えは $5$ です。

```input2
3
2 1 3
```

```output2
-1 3 3
```

$i=1$ のとき、条件を満たす整数の組 $(l,r)$ は存在しません。

```input3
14
7 14 6 8 10 2 9 5 4 12 11 3 13 1
```

```output3
5 3 3 7 3 3 3 5 3 3 5 3 3 3
```