配点 : $475$ 点

## 問題文

長さ $N$ の数列 $A=(A_1,A_2,\dots,A_N)$ が与えられます。各 $k=1,2,\dots,N$ について、$A$ の長さ $k$ の（連続するとは限らない）部分列であって等差数列であるようなものの個数を $998244353$ で割ったあまりを求めてください。ただし、$2$ つの部分列が列として同じでも、取り出す位置が異なるならば区別するものとします。

部分列とは
数列 $A$ の部分列とは、$A$ の要素を $0$ 個以上選んで削除し、残った要素を元の順序を保って並べた数列のことを指します。

## 制約

- $1 \leq N \leq 80$
- $1 \leq A_i \leq 10^9$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## 出力

$k=1,2,\dots,N$ に対する答えを、この順に空白区切りで一行で出力せよ。

```input1
5
1 2 3 2 3
```

```output1
5 10 3 0 0
```

- 長さ $1$ の部分列は全部で $5$ 個あり、これらはすべて長さ $1$ の等差数列です。
- 長さ $2$ の部分列は全部で $10$ 個あり、これらはすべて長さ $2$ の等差数列です。
- 長さ $3$ の部分列であって等差数列であるものは、$(A_1,A_2,A_3),(A_1,A_2,A_5),(A_1,A_4,A_5)$ の $3$ つです。
- 長さ $4$ 以上の部分列であって等差数列であるものは存在しません。

```input2
4
1 2 3 4
```

```output2
4 6 2 1
```

```input3
1
100
```

```output3
1
```