配点 : $100$ 点

## 問題文

高橋君は $2$ つの整数 $X, Y$ を持っています。

$X + Y$ と $X - Y$ を計算した結果、$A$ と $B$ になりました。

高橋君は計算後に $X$ と $Y$ を忘れてしまったので、$X$ と $Y$ を求めてあげてください。

## 制約

- $-100 \leq A, B \leq 100$
- 与えられる $A, B$ に対して $X + Y = A, X - Y = B$ を満たす整数 $X, Y$ が一意に存在する
- 入力は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$ $B$

## 出力

$X$ と $Y$ を出力せよ。

```input1
2 -2
```

```output1
0 2
```

$X = 0, Y = 2$ とすると $0 + 2 = 2, 0 - 2 = -2$ で辻褄が合います。

```input2
3 1
```

```output2
2 1
```