配点 : $400$ 点

## 問題文

長さ $N$ の整数列 $A$ が与えられます。$A$ の空でない部分列 $B$ は $2^N - 1$ 個あります。これらについて $\max\left(B\right) \times \min\left(B\right)$ の値を計算し、その総和を答えてください。

ただし、答えは非常に大きくなる場合があるので、 $998244353$ で割った余りを答えてください。

## 制約

- 入力は全て整数
- $1 \leq N \leq 2 \times 10^5$
- $0 \leq A_i \leq 998244352$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## 出力

答えを出力せよ。

```input1
3
2 4 3
```

```output1
63
```

$B$ として、以下の $7$ つが考えられます。

- $B = \left(2\right)$ : $\max\left(B\right) \times \min\left(B\right) = 4$
- $B = \left(4\right)$ : $\max\left(B\right) \times \min\left(B\right) = 16$
- $B = \left(3\right)$ : $\max\left(B\right) \times \min\left(B\right) = 9$
- $B = \left(2, 4\right)$ : $\max\left(B\right) \times \min\left(B\right) = 8$
- $B = \left(2, 3\right)$ : $\max\left(B\right) \times \min\left(B\right) = 6$
- $B = \left(4, 3\right)$ : $\max\left(B\right) \times \min\left(B\right) = 12$
- $B = \left(2, 4, 3\right)$ : $\max\left(B\right) \times \min\left(B\right) = 8$

以上の $7$ つの値を足した値 $63$ が答えです。

```input2
1
10
```

```output2
100
```

```input3
7
853983 14095 543053 143209 4324 524361 45154
```

```output3
206521341
```