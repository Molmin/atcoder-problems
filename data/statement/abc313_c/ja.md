配点 : $400$ 点

## 問題文

整数列 $A=(A_1,A_2,\dots,A_N)$ があります。
あなたは次の操作を好きな回数（$0$ 回でもよい）行うことができます。

- $1\leq i,j \leq N$ を満たす整数 $i,j$ を選ぶ。$A_i$ を $1$ 減らし、$A_j$ を $1$ 増やす。

$A$ の最小値と最大値の差を $1$ 以下にするために必要な最小の操作回数を求めてください。 

## 制約

- $1\leq N \leq 2\times 10^5$
- $1\leq A_i \leq 10^9$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## 出力

答えを整数として出力せよ。

```input1
4
4 7 3 7
```

```output1
3
```

以下のように $3$ 回の操作を行うことで、$A$ の最小値と最大値の差を $1$ 以下にすることができます。

- $i=2,j=3$ として操作を行う。$A=(4,6,4,7)$ になる。
- $i=4,j=1$ として操作を行う。$A=(5,6,4,6)$ になる。
- $i=4,j=3$ として操作を行う。$A=(5,6,5,5)$ になる。

$3$ 回未満の操作で $A$ の最小値と最大値の差を $1$ 以下にすることはできません。よって答えは $3$ です。

```input2
1
313
```

```output2
0
```

```input3
10
999999997 999999999 4 3 2 4 999999990 8 999999991 999999993
```

```output3
2499999974
```