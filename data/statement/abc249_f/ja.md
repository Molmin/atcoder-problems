配点 : $500$ 点

## 問題文

高橋君は整数 $x$ を持っています。はじめ、$x = 0$ です。

$N$ 個の操作があります。$i \, (1 \leq i \leq N)$ 個目の操作は整数 $t_i, y_i$ を用いて以下のように表されます。

- $t_i = 1$ のとき、$x$ を $y_i$ で置き換える。
- $t_i = 2$ のとき、$x$ を $x + y_i$ で置き換える。

高橋君は $0$ 個以上 $K$ 個以下の好きな個数の操作を無視することができます。残った操作を一度ずつ順序を変えずに行ったとき、最終的な $x$ の値としてあり得る最大値を求めてください。

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq K \leq N$
- $t_i \in \{1,2\} \, (1 \leq i \leq N)$
- $|y_i| \leq 10^9 \, (1 \leq i \leq N)$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $t_1$ $y_1$
> 
> $\vdots$
> 
> $t_N$ $y_N$

## 出力

答えを出力せよ。

```input1
5 1
2 4
2 -3
1 2
2 1
2 -3
```

```output1
3
```

$5$ 個目の操作を無視すると、$x$ は $0 \rightarrow 4 \rightarrow 1 \rightarrow 2 \rightarrow 3$ と変化し、最終的な $x$ の値は $3$ となります。これが最大です。

```input2
1 0
2 -1000000000
```

```output2
-1000000000
```

```input3
10 3
2 3
2 -1
1 4
2 -1
2 5
2 -9
2 2
1 -6
2 5
2 -3
```

```output3
15
```