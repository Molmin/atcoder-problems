配点 : $1200$ 点

## 問題文

整数 $N,M,X,Y$ が与えられます。

数列 $A=(a_1,\ldots,a_N), B=(b_1,\ldots,b_N)$ の組 $(A,B)$ であって以下の条件すべてを満たすものの個数を $998244353$ で割った余りを求めてください。

- $A$ は非負整数列
- $B$ は $(0,1,\ldots,M-1)$ の部分列
- $\sum\limits_{i=1}^{N} a_i = X$
- $\sum\limits_{i=1}^{N} a_i b_i = Y$

## 制約

- $1 \leq N \leq M \leq 2 \times 10^5$
- $1 \leq X , Y \leq 2 \times 10^5$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $X$ $Y$

## 出力

答えを出力せよ。

```input1
3 4 3 4
```

```output1
5
```

条件を満たす $(A,B)$ の組は以下の $5$ 個です。  

- $A=(0,2,1), B=(0,1,2)$
- $A=(1,0,2), B=(0,1,2)$
- $A=(1,1,1), B=(0,1,3)$
- $A=(1,2,0), B=(0,2,3)$
- $A=(2,1,0), B=(1,2,3)$

```input2
1 1 1 1
```

```output2
0
```

条件を満たす $(A,B)$ の組が存在しません。

```input3
12345 67890 9876 54321
```

```output3
150392014
```

$998244353$ で割った余りを求めてください。