配点 : $600$ 点

## 問題文

長さが $N$ の非負整数列 $A$ があります。

長さが $N$ で、和が $M$ 以下である任意の非負整数列 $B$ について、$\prod _{i = 1} ^N \dbinom{B_i}{A_i}$ の値を計算し、その総和を $10^9 + 7$ で割った余りを出力してください。

ここで $\dbinom{B_i}{A_i}$ は、$B_i$ 個のものの中から $A_i$ 個のものを選ぶ場合の数（二項係数）であり、$B_i &lt; A_i$ のときは $0$ です。

## 制約

- 入力は全て整数
- $1 \leq N \leq 2000$
- $1 \leq M \leq 10^9$
- $0 \leq A_i \leq 2000$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## 出力

$\prod _{i = 1} ^N \dbinom{B_i}{A_i}$ の総和を $10^9 + 7$ で割った余りを出力せよ。

```input1
3 5
1 2 1
```

```output1
8
```

$\prod _{i = 1} ^N \dbinom{B_i}{A_i}$ が $1$ 以上となるような数列 $B$ の定め方は、以下の $4$ 通りです。

- <p>$B = 1, 2, 1$ とする。このとき $\prod _{i = 1} ^N \dbinom{B_i}{A_i} = \dbinom{1}{1} \times \dbinom{2}{2} \times \dbinom{1}{1} = 1$ である</p>
- <p>$B = 2, 2, 1$ とする。このとき $\prod _{i = 1} ^N \dbinom{B_i}{A_i} = \dbinom{2}{1} \times \dbinom{2}{2} \times \dbinom{1}{1} = 2$ である</p>
- <p>$B = 1, 3, 1$ とする。このとき $\prod _{i = 1} ^N \dbinom{B_i}{A_i} = \dbinom{1}{1} \times \dbinom{3}{2} \times \dbinom{1}{1} = 3$ である</p>
- <p>$B = 1, 2, 2$ とする。このとき $\prod _{i = 1} ^N \dbinom{B_i}{A_i} = \dbinom{1}{1} \times \dbinom{2}{2} \times \dbinom{2}{1} = 2$ である</p>

よって答えは $1 + 2 + 3 + 2 = 8$ です。

```input2
10 998244353
31 41 59 26 53 58 97 93 23 84
```

```output2
642612171
```