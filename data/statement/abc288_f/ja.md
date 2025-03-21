配点 : $500$ 点

## 問題文

$10$ 進表記で $N$ 桁の正整数 $X$ が与えられます。$X$ の各桁は $0$ ではありません。<br>
$\lbrace 1,2, \ldots, N-1 \rbrace$ の部分集合 $S$ に対し、$f(S)$ を以下のように定義します。 

$X$ を $10$ 進表記したものを長さ $N$ の文字列とみなし、$i \in S$ のとき、またそのときに限り文字列の $i$ 文字目と $i + 1$ 文字目に区切りを入れることで $|S| + 1$ 個の文字列に分解する。<br>
このようにして得られた $|S|+1$ 個の文字列を $10$ 進表記された整数とみなし、$f(S)$ をこれら $|S|+1$ 個の整数の積で定める。  

$S$ としてあり得るものは空集合を含めて $2^{N-1}$ 通りありますが、これら全てに対する $f(S)$ の総和を $998244353$ で割った余りを求めてください。

## 制約

- $2 \leq N \leq 2 \times 10^5$
- $X$ は $10$ 進表記で $N$ 桁で、各桁は $0$ でない
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $X$

## 出力

答えを出力せよ。

```input1
3
234
```

```output1
418
```

$S = \emptyset$ とすると、$f(S) = 234$ です。<br>
$S = \lbrace 1 \rbrace$ とすると、$f(S) = 2 \times 34 = 68$ です。<br>
$S = \lbrace 2 \rbrace$ とすると、$f(S) = 23 \times 4 = 92$ です。<br>
$S = \lbrace 1, 2 \rbrace$ とすると、$f(S) = 2 \times 3 \times 4 = 24$ です。<br>
$234 + 68 + 92 + 24 = 418$ であるため、$418$ を出力します。

```input2
4
5915
```

```output2
17800
```

```input3
9
998244353
```

```output3
258280134
```