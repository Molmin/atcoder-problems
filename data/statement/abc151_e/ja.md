配点 : $500$ 点

## 問題文

有限個の整数からなる集合 $X$ に対し $f(X)=\max X - \min X$ と定義します。

$N$ 個の整数 $A_1,...,A_N$ が与えられます。

このうち $K$ 個を選び、それらからなる集合を $S$ とします。同じ値であっても添字が異なる要素を区別すると、そのような選び方は ${}_N C_K$ 通りありますが、その全てについての $f(S)$ の合計を求めてください。

答えは非常に大きくなる可能性があるので、$\bmod 10^9+7$ で出力してください。

## 制約

- $1 \leq N \leq 10^5$
- $1 \leq K \leq N$
- $|A_i| \leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $A_1$ $...$ $A_N$

## 出力

答えを $\bmod 10^9+7$ で出力せよ。

```input1
4 2
1 1 3 4
```

```output1
11
```

$S$ の選び方は $\{1,1\},\{1,3\},\{1,4\},\{1,3\},\{1,4\},\{3,4\}$ の $6$ 通りあり (ふたつの $1$ は区別します)、$f(S)$ はそれぞれ $0,2,3,2,3,1$ となるので、合計は $11$ です。

```input2
6 3
10 10 10 -10 -10 -10
```

```output2
360
```

$S$ の選び方は $20$ 通りあり、そのうち $18$ 通りで $f(S)=20$、$2$ 通りで $f(S)=0$ となります。

```input3
3 1
1 1 1
```

```output3
0
```

```input4
10 6
1000000000 1000000000 1000000000 1000000000 1000000000 0 0 0 0 0
```

```output4
999998537
```

合計は $\bmod 10^9+7$ で出力してください。