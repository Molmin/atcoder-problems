配点 : $400$ 点

## 問題文

数列 $a = (a_1, a_2, a_3, \dots, a_k)$ に対して、$f(a)$ を、以下の操作を行った後の $a$ の要素の総和と定義します。  

- $i = 1, 2, 3, \dots, k$ の順に以下の操作を行う :<br>
     現在の $a$ の要素の最大値を $a_i$ に足す

長さ $N$ の数列 $A = (A_1, A_2, A_3, \dots, A_N)$ が与えられます。<br>
$1$ 以上 $N$ 以下の各整数 $k$ について、$a = (A_1, A_2, A_3, \dots, A_k)$ としたときの $f(a)$ を求めてください。  

## 制約

- $1 \le N \le 2 \times 10^5$
- $1 \le A_i \le 10^7$
- 入力に含まれる値は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $A_3$ $\dots$ $A_N$

## 出力

$N$ 行にわたって出力せよ。$k$ 行目には $a = (A_1, A_2, A_3, \dots, A_k)$ としたときの $f(a)$ を出力せよ。  

```input1
3
1 2 3
```

```output1
2
8
19
```

例えば $a = (A_1, A_2, A_3)$ のときの $f(a)$ は以下のように計算されます。  

- まず $i = 1$ として、現在の $a$ の最大値である $3$ を $a_1$ に足す。$a = (4, 2, 3)$ となる。
- 次に $i = 2$ として、現在の $a$ の最大値である $4$ を $a_2$ に足す。$a = (4, 6, 3)$ となる。
- 最後に $i = 3$ として、現在の $a$ の最大値である $6$ を $a_3$ に足す。$a = (4, 6, 9)$ となる。
- 操作後の $a$ の総和である $19$ が $f(a)$ の値である。