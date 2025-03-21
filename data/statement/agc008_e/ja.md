配点 : $1400$ 点

## 問題文

長さ $N$ の数列 $a$ が与えられます。
$1$ から $N$ までの整数の順列 $p$ であって、次の条件を満たすものは何通りでしょうか？
$10^9 + 7$ で割った余りを求めてください。

- 各 $1 \leq i \leq N$ について、$p_i = a_i$ または $p_{p_i} = a_i$ の少なくとも一方が成り立つ。

## 制約

- $1 \leq N \leq 10^5$
- $a_i$ は整数である。
- $1 \leq a_i \leq N$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## 出力

条件を満たす順列 $p$ の個数を $10^9 + 7$ で割った余りを出力せよ。

```input1
3
1 2 3
```

```output1
4
```

次の $4$ 通りです。

- $(1, 2, 3)$
- $(1, 3, 2)$
- $(3, 2, 1)$
- $(2, 1, 3)$

たとえば $(1, 3, 2)$ は、$p_1 = 1$, $p_{p_2} = 2$, $p_{p_3} = 3$ となっています。

```input2
2
1 1
```

```output2
1
```

次の $1$ 通りです。

- $(2, 1)$

```input3
3
2 1 1
```

```output3
2
```

次の $2$ 通りです。

- $(2, 3, 1)$
- $(3, 1, 2)$

```input4
3
1 1 1
```

```output4
0
```

```input5
13
2 1 4 3 6 7 5 9 10 8 8 9 11
```

```output5
6
```