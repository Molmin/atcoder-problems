配点 : $200$ 点

## 問題文

長さ $N$ の数列 $A=(A_1,A_2,\dots,A_N)$ と、長さ $M$ の数列 $B=(B_1,B_2,\dots,B_M)$ が与えられます。ここで、$A,B$ のすべての要素は互いに相異なります。$A,B$ のすべての要素を昇順に並べた長さ $N+M$ の数列 $C=(C_1,C_2,\dots,C_{N+M})$ において、$A$ に現れる要素が2つ連続するかどうか判定してください。

## 制約

- $1\leq N,M \leq 100$
- $1\leq A_i,B_j \leq 200$
- $A_1, A_2, \dots, A_N, B_1, B_2, \dots, B_M$ は相異なる
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_M$

## 出力

$A$ に現れる要素が $C$ において2つ連続するならば `Yes` を、そうでないなら `No` を出力せよ。

```input1
3 2
3 2 5
4 1
```

```output1
Yes
```

$C=(1,2,3,4,5)$ です。$A$ に現れる $2,3$ が $C$ で連続しているため、`Yes` を出力します。

```input2
3 2
3 1 5
4 2
```

```output2
No
```

$C=(1,2,3,4,5)$ です。$A$ に現れる要素が $C$ で連続している箇所はないため、`No` を出力します。

```input3
1 1
1
2
```

```output3
No
```