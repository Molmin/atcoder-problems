配点 : $300$ 点

## 問題文

整数 $A, B$ が与えられます。整数 $x, y$ を $A \leq x &lt; y \leq B$ となるように選ぶときの、$\gcd(x, y)$ の最大値を求めてください。<br>
なお、$\gcd(x, y)$ は $x$ と $y$ の最大公約数を表します。

## 制約

- $A, B$ は整数
- $1 \leq A &lt; B \leq 2 \times 10^5$

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$ $B$

## 出力

答えを出力せよ。

```input1
2 4
```

```output1
2
```

$A \leq x &lt; y \leq B$ を満たす $(x,y)$ の選び方は $(2,3), (2,4), (3,4)$ の $3$ つです。それぞれ最大公約数は $1, 2, 1$ であるので、最大値は $2$ です。

```input2
199999 200000
```

```output2
1
```

$\gcd(199999, 200000) = 1$ です。

```input3
101 139
```

```output3
34
```