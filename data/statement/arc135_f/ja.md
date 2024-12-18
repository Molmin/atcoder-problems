配点 : $1000$ 点

## 問題文

整数 $N$ が与えられます。整数列 $A = (1, 2, \ldots, N)$ に対して、次の操作をちょうど $K$ 回行います：

- 操作を行う時点での $A$ の項数を $n$ とする。$1\leq i \leq n$ かつ $i\equiv 1\pmod{3}$ となるすべての $i$ に対して、$A$ の $i$ 番目の項を削除する。この操作はすべての $i$ について同時に行う。

$K$ 回の操作後の $A$ の項の総和を $998244353$ で割った余りを求めてください。

## 制約

- $1\leq N\leq 10^{14}$
- $1\leq K\leq 100$

## 入力

入力は以下の形式で標準入力から与えられます。

> $N$ $K$

## 出力

$K$ 回の操作後の $A$ の項の総和を $998244353$ で割った余りを出力してください。

```input1
10 2
```

```output1
25
```

- はじめ、$A = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)$ です。
- $1$ 回目の操作を行うと、$A = (2, 3, 5, 6, 8, 9)$ となります。
- $2$ 回目の操作を行うと、$A = (3, 5, 8, 9)$ となります。
- このとき $A$ の項の総和は $3 + 5 + 8 + 9 = 25$ です。

```input2
10 10
```

```output2
0
```

- $2$ 回目の操作を行うと、$A = (3, 5, 8, 9)$ となります（入力例 1 と同様です）。
- $3$ 回目の操作を行うと、$A = (5, 8)$ となります。
- $4$ 回目の操作を行うと、$A = (8)$ となります。
- $5$ 回目の操作を行うと、$A$ は空になります。
- $6$ 回目以降の操作では、$A$ は空のままで、その項の総和は $0$ です。

```input3
10000 10
```

```output3
862816
```