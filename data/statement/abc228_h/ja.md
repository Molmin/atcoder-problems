配点 : $600$ 点

## 問題文

長さ $N$ の整数列 $A = (A_1, \dots, A_N)$ および $C = (C_1, \dots, C_N)$ が与えられます。

あなたは以下の操作を好きな回数（$0$ 回でもよい）行うことができます。

- $1 \leq i \leq N$ を満たす整数 $i$ を選び、$A_i$ の値を $1$ 増やす。このとき、$C_i$ 円の費用を支払う。

好きな回数の操作を行ったあと、$A$ の要素の種類数を $K$ として、$K \times X$ 円を支払わなければなりません。

支払う金額の合計は最小で何円ですか？

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq X \leq 10^6$
- $1 \leq A_i, C_i \leq 10^6 \, (1 \leq i \leq N)$
- 入力は全て整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $X$
> 
> $A_1$ $C_1$
> 
> $\vdots$
> 
> $A_N$ $C_N$

## 出力

答えを表す数値を出力せよ。

```input1
3 5
3 2
2 4
4 3
```

```output1
12
```

$A_1$ に $1$ 加算すると $A$ の要素の種類数は $2$ になり、支払う金額の合計は $C_1 + 2 \times X = 12$ 円となります。支払う金額をこれより少なくすることはできません。

```input2
1 1
1 1
```

```output2
1
```

```input3
7 7
3 2
1 7
4 1
1 8
5 2
9 8
2 1
```

```output3
29
```