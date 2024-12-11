配点 : $500$ 点

## 問題文

$\mathrm{mex}(x_1, x_2, x_3, \dots, x_k)$ を、$x_1, x_2, x_3, \dots, x_k$ に含まれない最小の非負整数と定義します。<br>
長さ $N$ の整数列 $A = (A_1, A_2, A_3, \dots, A_N)$ が与えられます。<br>
$0 \le i \le N - M$ を満たす全ての整数 $i$ について $\mathrm{mex}(A_{i + 1}, A_{i + 2}, A_{i + 3}, \dots, A_{i + M})$ を計算したとき、この $N - M + 1$ 個の値のうちの最小値を求めてください。  

## 制約

- $1 \le M \le N \le 1.5 \times 10^6$
- $0 \le A_i \lt N$
- 入力に含まれる値は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $A_2$ $A_3$ $\cdots$ $A_N$

## 出力

答えを出力せよ。  

```input1
3 2
0 0 1
```

```output1
1
```

- $i = 0$ のとき : $\mathrm{mex}(A_{i + 1}, A_{i + 2}) = \mathrm{mex}(0, 0) = 1$
- $i = 1$ のとき : $\mathrm{mex}(A_{i + 1}, A_{i + 2}) = \mathrm{mex}(0, 1) = 2$

よって $1$ と $2$ のうちの最小値である $1$ が答えです。  

```input2
3 2
1 1 1
```

```output2
0
```

- $i = 0$ のとき : $\mathrm{mex}(A_{i + 1}, A_{i + 2}) = \mathrm{mex}(1, 1) = 0$
- $i = 1$ のとき : $\mathrm{mex}(A_{i + 1}, A_{i + 2}) = \mathrm{mex}(1, 1) = 0$

となります。  

```input3
3 2
0 1 0
```

```output3
2
```

- $i = 0$ のとき : $\mathrm{mex}(A_{i + 1}, A_{i + 2}) = \mathrm{mex}(0, 1) = 2$
- $i = 1$ のとき : $\mathrm{mex}(A_{i + 1}, A_{i + 2}) = \mathrm{mex}(1, 0) = 2$

となります。  

```input4
7 3
0 0 1 2 0 1 0
```

```output4
2
```