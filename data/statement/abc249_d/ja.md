配点 : $400$ 点

## 問題文

長さ $N$ の整数列 $A = (A_1, \dots, A_N)$ が与えられます。

以下の条件を全て満たす整数の組 $(i, j, k)$ の総数を求めてください。

- $1 \leq i, j, k \leq N$
- $\frac{A_i}{A_j} = A_k$

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 2 \times 10^5 \, (1 \leq i \leq N)$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## 出力

答えを出力せよ。

```input1
3
6 2 3
```

```output1
2
```

$(i, j, k) = (1, 2, 3), (1, 3, 2)$ が条件を満たします。

```input2
1
2
```

```output2
0
```

```input3
10
1 3 2 4 6 8 2 2 3 7
```

```output3
62
```