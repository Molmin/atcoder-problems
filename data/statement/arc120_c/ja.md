配点 : $500$ 点

## 問題文

長さ $N$ の数列 $A = (A_1, A_2, A_3, \dots, A_N), B = (B_1, B_2, B_3, \dots, B_N)$ が与えられます。<br>
以下の操作を繰り返す ($1$ 回も行わなくてもよい) ことで $A$ を $B$ に一致させることが可能かを判定してください。また、可能なら、$A$ を $B$ に一致させるのに必要な最小の操作回数を求めてください。  

- $1 \le i \lt N$ を満たす整数 $i$ を選び、以下のことを順に行う  -   - $A_i$ と $A_{i + 1}$ を入れ替える
-   - $A_i$ に $1$ を足す
-   - $A_{i + 1}$ から $1$ を引く

## 制約

- $2 \le N \le 2 \times 10^5$
- $0 \le A_i \le 10^9$
- $0 \le B_i \le 10^9$
- 入力に含まれる値は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $A_3$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $B_3$ $\dots$ $B_N$

## 出力

$A$ を $B$ に一致させることが不可能なら `-1` を出力せよ。<br>
可能なら、そのために必要な最小の操作回数を出力せよ。  

```input1
3
3 1 4
6 2 0
```

```output1
2
```

以下のように操作すると、$2$ 回の操作で $A$ を $B$ に一致させることができます。  

- まず、$i = 2$ として操作する。$A = (3, 5, 0)$ となる。
- 次に、$i = 1$ として操作する。$A = (6, 2, 0)$ となる。

$1$ 回以下の操作で目的を達成することはできません。  

```input2
3
1 1 1
1 1 2
```

```output2
-1
```

この場合、$A$ を $B$ に一致させることは不可能です。  

```input3
5
5 4 1 3 2
5 4 1 3 2
```

```output3
0
```

$1$ 回も操作をしなくても $A$ が $B$ に一致している可能性があります。  

```input4
6
8 5 4 7 4 5
10 5 6 7 4 1
```

```output4
7
```