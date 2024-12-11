配点 : $400$ 点

## 問題文

整数 $A$, $B$, $N$ が与えられます。

$N$ 以下の非負整数 $x$ に対する $floor(Ax/B) - A \times floor(x/B)$ の最大値を求めてください。

ただし、$floor(t)$ とは、実数 $t$ 以下の最大の整数のことを表します。

## 制約

- $1 \leq A \leq 10^{6}$
- $1 \leq B \leq 10^{12}$
- $1 \leq N \leq 10^{12}$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$ $B$ $N$

## 出力

$N$ 以下の非負整数 $x$ に対する $floor(Ax/B) - A \times floor(x/B)$ の最大値を整数として出力せよ。

```input1
5 7 4
```

```output1
2
```

$x=3$ のとき、$floor(Ax/B)-A \times floor(x/B) = floor(15/7) - 5 \times floor(3/7) = 2$ となり、これが最大です。

```input2
11 10 9
```

```output2
9
```