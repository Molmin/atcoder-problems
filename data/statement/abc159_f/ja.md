配点 : $600$ 点

## 問題文

長さ $N$ の整数列 $A_1$, $A_2$, $\ldots$, $A_N$ と正の整数 $S$ が与えられます。<br>
$1\leq L \leq R \leq N$ をみたす整数 $(L, R)$ の組について、$f(L, R)$ を以下のように定めます。<br>

- $L \leq x_1 &lt; x_2 &lt; \cdots &lt; x_k \leq R$ かつ $A_{x_1}+A_{x_2}+\cdots +A_{x_k} = S$ を満たすような整数列 $(x_1, x_2, \ldots , x_k)$ の個数

$1\leq L \leq R\leq N$ を満たす整数 $(L, R)$ の組すべてに対する $f(L, R)$ の和を求めてください。ただし、答えは非常に大きくなることがあるので、$998244353$ で割ったあまりを出力してください。

## 制約

- 入力は全て整数である。
- $1 \leq N \leq 3000$
- $1 \leq S \leq 3000$
- $1 \leq A_i \leq 3000$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $S$
> 
> $A_1$ $A_2$ $...$ $A_N$

## 出力

$f(L, R)$ の和を $998244353$ で割ったあまりを出力せよ。

```input1
3 4
2 2 4
```

```output1
5
```

それぞれ以下のように計算できて、その和は $5$ です。

- $f(1,1) = 0$
- $f(1,2) = 1$ ($(1, 2)$ の $1$ つ)
- $f(1,3) = 2$ ($(1, 2)$ と $(3)$ の $2$ つ)
- $f(2,2) = 0$
- $f(2,3) = 1$ ($(3)$ の $1$ つ)
- $f(3,3) = 1$ ($(3)$ の $1$ つ)

```input2
5 8
9 9 9 9 9
```

```output2
0
```

```input3
10 10
3 1 4 1 5 9 2 6 5 3
```

```output3
152
```