配点 : $600$ 点

## 問題文

$N$ 要素からなる $2$ つの整数列 $A_1,...,A_N$ 及び $B_1,...,B_N$ が与えられます。
以下の操作を $N-2$ 回まで ($0$ 回でもよい) 行うことで、$1$ 以上 $N$ 以下のすべての整数 $i$ に対して $A_i \leqq B_i$ となるようにできるかを判定してください。

- $1$ 以上 $N$ 以下の相異なる整数 $x$, $y$ を選び、$A_x$ の値と $A_y$ の値を入れ替える。

## 制約

- $2 \leq N \leq 10^5$
- $1 \leq A_i,B_i \leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$
> 
> $B_1$ $B_2$ $...$ $B_N$

## 出力

可能な場合は `Yes` を、不可能な場合は `No` を出力せよ。

```input1
3
1 3 2
1 2 3
```

```output1
Yes
```

$A_2$ の値と $A_3$ の値を入れ替えればよいです。

```input2
3
1 2 3
2 2 2
```

```output2
No
```

```input3
6
3 1 2 6 3 4
2 2 8 3 4 3
```

```output3
Yes
```