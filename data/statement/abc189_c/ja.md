配点 : $300$ 点

## 問題文

高橋君の前に $N$ 枚の皿が一列に並べられており、左から $i$ 番目の皿には $A_i$ 個のみかんが置かれています。

高橋君は次の $3$ つの条件を全て満たすような整数の組 $(l,r,x)$ を $1$ つ選びます。

- $1\leq l \leq r \leq N$
- $1 \le x$
- $l$ 以上 $r$ 以下の全ての整数 $i$ について、$x \le A_i$

その後、高橋君は $l$ 番目から $r$ 番目まで (両端を含む) の全ての皿からみかんを $x$ 個ずつ取って食べます。

整数の組 $(l,r,x)$ を適切に選んだとき、高橋君は最大で何個のみかんを食べることができますか。

## 制約

- 入力は全て整数
- $1 \leq N \leq 10^4$
- $1 \leq A_i \leq 10^5$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## 出力

高橋君が食べることのできるみかんの個数の最大値を出力せよ。

```input1
6
2 4 4 9 4 9
```

```output1
20
```

$(l,r,x)=(2,6,4)$ としたとき、$20$ 個のみかんを食べることができます。

```input2
6
200 4 4 9 4 9
```

```output2
200
```

$(l,r,x)=(1,1,200)$ としたとき、$200$ 個のみかんを食べることができます。