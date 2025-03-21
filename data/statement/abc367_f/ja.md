配点 : $500$ 点

## 問題文

長さ $N$ の正整数列 $A=(A_1,A_2,\ldots,A_N), B=(B_1,B_2,\ldots,B_N)$ が与えられます。

$Q$ 個のクエリが与えられるので順に処理してください。$i$ 番目のクエリは以下で説明されます。

- 正整数 $l_i,r_i,L_i,R_i$ が与えられる。数列 $(A_{l_i},A_{l_i+1},\ldots,A_{r_i})$ を並び替えることで $(B_{L_i},B_{L_i+1},\ldots,B_{R_i})$ に一致させることができるならば `Yes` を、できないならば `No` を出力せよ。

## 制約

- $1\leq N,Q\leq 2\times 10^5$
- $1\leq A_i,B_i\leq N$
- $1\leq l_i \leq r_i\leq N$
- $1\leq L_i \leq R_i\leq N$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $Q$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_N$
> 
> $l_1$ $r_1$ $L_1$ $R_1$
> 
> $l_2$ $r_2$ $L_2$ $R_2$
> 
> $\vdots$
> 
> $l_Q$ $r_Q$ $L_Q$ $R_Q$

## 出力

$Q$ 行出力せよ。$i$ 行目には $i$ 番目のクエリの答えを出力せよ。

```input1
5 4
1 2 3 2 4
2 3 1 4 2
1 3 1 3
1 2 3 5
1 4 2 5
1 5 1 5
```

```output1
Yes
No
No
Yes
```

- $1$ 番目のクエリについて、$(1,2,3)$ を並び替えることで $(2,3,1)$ に一致させることができます。よって `Yes` を出力します。
- $2$ 番目のクエリについて、$(1,2)$ をどのように並び替えても $(1,4,2)$ に一致させることができません。よって `No` を出力します。
- $3$ 番目のクエリについて、$(1,2,3,2)$ をどのように並び替えても $(3,1,4,2)$ に一致させることができません。よって `No` を出力します。
- $4$ 番目のクエリについて、$(1,2,3,2,4)$ を並び替えることで $(2,3,1,4,2)$ に一致させることができます。よって `Yes` を出力します。

```input2
4 4
4 4 4 4
4 4 4 4
1 2 2 3
3 3 1 1
1 3 1 4
1 4 2 3
```

```output2
Yes
Yes
No
No
```