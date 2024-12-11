配点 : $600$ 点

## 問題文

$2$ 次元平面上の $N$ 個の点があり、$i$ 番目の点の座標は $(x_i, y_i)$ です。

以下の操作を行える限り繰り返します。

- 座標 $(a, b), (a, d), (c, b), (c, d)$ のうちちょうど $3$ 箇所に点が存在するような整数 $a, b, c, d (a \neq c, b \neq d)$ を選び、残りの $1$ 箇所に点を追加する。

この操作は有限回しか行なうことができないことが証明できます。操作回数の最大値を求めてください。

## 制約

- $1 \leq N \leq 10^5$
- $1 \leq x_i, y_i \leq 10^5$
- $x_i \neq x_j$ または $y_i \neq y_j (i \neq j)$
- 入力は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $x_1$ $y_1$
> 
> $:$
> 
> $x_N$ $y_N$

## 出力

操作回数の最大値を出力せよ。

```input1
3
1 1
5 1
5 5
```

```output1
1
```

$a = 1, b = 1, c = 5, d = 5$ とすると $(1, 5)$ に点を追加することができます。これ以上操作を行うことはできないので、操作回数の最大値は $1$ 回です。

```input2
2
10 10
20 20
```

```output2
0
```

$2$ 点しか点がないので操作を $1$ 回も行うことができません。

```input3
9
1 1
2 1
3 1
4 1
5 1
1 2
1 3
1 4
1 5
```

```output3
16
```

$a = 1, b = 1, c = i, d = j (2 \leq i,j \leq 5)$ の全てに対して操作を行うことができ、それ以上操作を行うことはできないので、操作回数の最大値は $16$ 回です。