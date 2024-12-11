配点 : $300$ 点

## 問題文

それぞれ $N$ 個、$M$ 個の正整数からなる $2$ つの数列 $A=(A_1,A_2, \ldots ,A_N)$ と $B=(B_1, \ldots ,B_M)$ が与えられます。

それぞれの数列から $1$ つずつ要素を選んだときの $2$ つの値の差の最小値、すなわち、 $\displaystyle \min_{ 1\leq i\leq N}\displaystyle\min_{1\leq j\leq M} \lvert A_i-B_j\rvert$ を求めてください。

## 制約

- $1 \leq N,M \leq 2\times 10^5$
- $1 \leq A_i \leq 10^9$
- $1 \leq B_i \leq 10^9$
- 入力は全て整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_M$

## 出力

答えを出力せよ。

```input1
2 2
1 6
4 9
```

```output1
2
```

それぞれの数列から $1$ つずつ要素を選んだときの $2$ つの値の差としてあり得るのは、 
$\lvert 1-4\rvert=3$ 、 
$\lvert 1-9\rvert=8$ 、 
$\lvert 6-4\rvert=2$ 、 
$\lvert 6-9\rvert=3$ 
の $4$ つです。
この中で最小である $2$ を出力します。

```input2
1 1
10
10
```

```output2
0
```

```input3
6 8
82 76 82 82 71 70
17 39 67 2 45 35 22 24
```

```output3
3
```