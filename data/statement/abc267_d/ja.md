配点 : $400$ 点

## 問題文

長さ $N$ の整数列 $A=(A_1,A_2,\dots,A_N)$ が与えられます。

長さ $M$ の $A$ の部分列(連続でなくてもよい) $B=(B_1,B_2,\dots,B_M)$ に対する、$\displaystyle \sum_{i=1}^{M} i \times B_i$ の最大値を求めてください。

## 注記

数列の**部分列**とは、数列から $0$ 個以上の要素を取り除いた後、残りの要素を元の順序で連結して得られる数列のことをいいます。

例えば、$(10,30)$ は $(10,20,30)$ の部分列ですが、$(20,10)$ は $(10,20,30)$ の部分列ではありません。

## 制約

- $1 \le M \le N \le 2000$
- $- 2 \times 10^5 \le A_i \le 2 \times 10^5$
- 入力は全て整数。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## 出力

答えを出力せよ。

```input1
4 2
5 4 -1 8
```

```output1
21
```

$B=(A_1,A_4)$ とした場合、$\displaystyle \sum_{i=1}^{M} i \times B_i = 1 \times 5 + 2 \times 8 = 21$ となります。$22$ 以上の値を達成することはできないため、解は $21$ です。

```input2
10 4
-3 1 -4 1 -5 9 -2 6 -5 3
```

```output2
54
```