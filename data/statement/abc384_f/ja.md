配点 : $500$ 点

## 問題文

正整数 $x$ に対して $f(x)$ を「 $x$ が偶数である間 $x$ を $2$ で割り続けたときの、最終的な $x$ の値」として定義します。例えば $f(4)=f(2)=f(1)=1$ 、 $f(12)=f(6)=f(3)=3$ です。

長さ $N$ の整数列 $A=(A_1,A_2,\ldots, A_N)$ が与えられるので、 $\displaystyle \sum_{i=1}^N \sum_{j=i}^N f(A_i+A_j)$ を求めてください。

## 制約

- $1\le N\le 2\times 10^5$
- $1\le A_i\le 10^7$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## 出力

答えを出力せよ。

```input1
2
4 8
```

```output1
5
```

$f(A_1+A_1)=f(8)=1$ 、 $f(A_1+A_2)=f(12)=3$ 、 $f(A_2+A_2)=f(16)=1$ です。したがって、 $1+3+1=5$ を出力してください。

```input2
3
51 44 63
```

```output2
384
```

```input3
8
577752 258461 183221 889769 278633 577212 392309 326001
```

```output3
20241214
```