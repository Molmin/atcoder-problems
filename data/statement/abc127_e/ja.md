配点 : $500$ 点

## 問題文

$N$ 行 $M$ 列のマス目があり、上から $i$ 行目、左から $j$ 列目のマスを $(i, j)$ で表します。

このうち $K$ マスに駒を $1$ つずつ置きます。

$K$ 個の駒がそれぞれ $(x_1, y_1), (x_2, y_2), ..., (x_K, y_K)$ に置かれているとき、この配置のコストは

$\sum_{i=1}^{K-1} \sum_{j=i+1}^K (|x_i - x_j| + |y_i - y_j|)$

と計算されます。

駒の全ての配置のコストの総和を計算してください。この値は非常に大きくなることがあるので、$10^9+7$ で割った余りを出力してください。

ただし、$2$ つの駒の配置が異なるとは、片方の配置では駒があるがもう一方では駒が無いようなマスが存在する場合を表します。

## 制約

- $2 \leq N \times M \leq 2 \times 10^5$
- $2 \leq K \leq N \times M$
- 入力は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $K$

## 出力

駒の全ての配置のコストの総和を $10^9+7$ で割った余りを出力せよ。

```input1
2 2 2
```

```output1
8
```

駒の配置としては、以下の $6$ 通りが考えられます。

- $((1,1),(1,2))$, コストは $|1-1|+|1-2| = 1$
- $((1,1),(2,1))$, コストは $|1-2|+|1-1| = 1$
- $((1,1),(2,2))$, コストは $|1-2|+|1-2| = 2$
- $((1,2),(2,1))$, コストは $|1-2|+|2-1| = 2$
- $((1,2),(2,2))$, コストは $|1-2|+|2-2| = 1$
- $((2,1),(2,2))$, コストは $|2-2|+|1-2| = 1$

これらの総和は $8$ です。

```input2
4 5 4
```

```output2
87210
```

```input3
100 100 5000
```

```output3
817260251
```

総和を $10^9+7$ で割った余りを出力することに注意してください。