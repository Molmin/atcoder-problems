配点 : $400$ 点

## 問題文

$N$ 項からなる整数列 $A = (A_1, \ldots, A_N),\,B = (B_1, \ldots, B_N),\,C = (C_1, \ldots, C_N)$ が与えられます。

あなたはそれぞれの数列を、自由に並べ替えることができます。
並べ替えた結果、$A_i &lt; B_i &lt; C_i$ を満たす $i$ の個数が最大でいくつになるかを答えてください。

## 制約

- $1\leq N\leq 10^5$
- $1\leq A_i, B_i, C_i\leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられます。

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_N$
> 
> $C_1$ $C_2$ $\ldots$ $C_N$

## 出力

答えを出力してください。

```input1
5
9 6 14 1 8
2 10 3 12 11
15 13 5 7 4
```

```output1
3
```

次のように並べ替えます：

- $A = (1,6,8,9,14)$
- $B = (3,2,10,12,11)$
- $C = (4,7,15,13,5)$

このとき $3$ つの $i$ （$i = 1, 3, 4$）に対して $A_i &lt; B_i &lt; C_i$ が成り立ちます。

```input2
1
10
20
30
```

```output2
1
```

```input3
3
1 1 1
1 1 2
2 2 2
```

```output3
0
```