配点 : $800$ 点

## 問題文

長さ $2n$ の整数列 $X=(X_1,X_2,\dots,X_{2n})$ のうち、すべての $i=1,2,\dots,n$ に対し $X_{2i-1}=X_{2i}$ が成り立つものを **良い数列** と呼びます。

長さ $2N$ の整数列 $A=(A_1,A_2,\dots,A_{2N})$ があります。この整数列は各整数 $i=1,2,\dots,N$ をちょうど $2$ 個ずつ含みます。

$A$ に対して「隣接する $2$ 項の値を入れ替える」という操作を $0$ 回以上行うことで、 $A$ を **良い数列** にしたいです。

$A$ を **良い数列** にするのに必要な最小の操作回数を $K$ としたとき、 $A$ に対し操作を $K$ 回行うことで得られる **良い数列** のうち、辞書式順序で最小のものを求めてください。

 数列の辞書順とは？

数列 $S = (S_1,S_2,\ldots,S_{|S|})$ が数列 $T = (T_1,T_2,\ldots,T_{|T|})$ より**辞書順で小さい**とは、下記の 1. と 2. のどちらかが成り立つことを言います。
ここで、$|S|, |T|$ はそれぞれ $S, T$ の長さを表します。

1. $|S| \lt |T|$ かつ $(S_1,S_2,\ldots,S_{|S|}) = (T_1,T_2,\ldots,T_{|S|})$。
2. ある整数 $1 \leq i \leq \min\lbrace |S|, |T| \rbrace$ が存在して、下記の $2$ つがともに成り立つ。
1.    - $(S_1,S_2,\ldots,S_{i-1}) = (T_1,T_2,\ldots,T_{i-1})$
2.    - $S_i$ が $T_i$ より（数として）小さい。

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq N$
- 各整数 $i=1,2,\dots,N$ は $A$ にちょうど $2$ 個ずつ含まれる
- 入力される値はすべて整数

## 入力

入力は以下の形式で標準入力から与えられます。

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_{2N}$

## 出力

$A$ に対し操作を $K$ 回行うことで得られる **良い数列** のうち、辞書式順序で最小のものを空白区切りで出力してください。

```input1
3
3 2 1 2 3 1
```

```output1
2 2 3 3 1 1
```

例えば $(3,2,1,2,3,1) \rightarrow (3,2,1,3,2,1) \rightarrow (3,2,3,1,2,1) \rightarrow (3,3,2,1,2,1) \rightarrow (3,3,2,2,1,1)$ というように $4$ 回の操作で $A$ を **良い数列** にすることができ、これが最小の操作回数です。 $4$ 回の操作では他に $A=(2,2,3,3,1,1)$ とすることもできるので、答えは $(2,2,3,3,1,1)$ となります。

```input2
3
1 1 2 2 3 3
```

```output2
1 1 2 2 3 3
```

```input3
15
15 12 11 10 5 11 13 2 6 14 3 6 5 14 10 15 1 2 13 9 7 4 9 1 3 8 12 4 8 7
```

```output3
11 11 5 5 6 6 10 10 14 14 15 15 2 2 12 12 13 13 1 1 3 3 9 9 4 4 7 7 8 8
```