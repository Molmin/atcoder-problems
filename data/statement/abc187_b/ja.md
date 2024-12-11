配点 : $200$ 点

## 問題文

$xy$ 平面上に $1, 2, \dots, N$ の番号が付けられた $N$ 個の点があります。点 $i$ は $(x_i, y_i)$ にあり、$N$ 個の点の $x$ 座標は互いに異なります。  

以下の条件を満たす整数の組 $(i, j)\ (i &lt; j)$ の個数を求めてください。

- 点 $i$ と点 $j$ を通る直線の傾きが $-1$ 以上 $1$ 以下である。

## 制約

- 入力は全て整数
- $1 \le N \le 10^3$
- $|x_i|, |y_i| \le 10^3$
- $i \neq j$ ならば $x_i \neq x_j$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $x_1$ $y_1$
> 
> $\vdots$
> 
> $x_N$ $y_N$

## 出力

答えを出力せよ。

```input1
3
0 0
1 2
2 1
```

```output1
2
```

$(0, 0)$ と $(1, 2)$ を通る直線の傾きは $2$、
$(0, 0)$ と $(2, 1)$ を通る直線の傾きは $\frac{1}{2}$、
$(1, 2)$ と $(2, 1)$ を通る直線の傾きは $-1$ です。

```input2
1
-691 273
```

```output2
0
```

```input3
10
-31 -35
8 -36
22 64
5 73
-14 8
18 -58
-41 -85
1 -88
-21 -85
-11 82
```

```output3
11
```