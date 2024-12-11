配点 : $100$ 点

## 問題文

英小文字からなる $3$ つの単語 $s_1$, $s_2$, $s_3$ が空白区切りで与えられるので、単語の先頭の文字をつなげ、大文字にした略語を出力してください。

## 制約

- $s_1$, $s_2$, $s_3$ は英小文字からなる。
- $1 \leq |s_i| \leq 10 (1 \leq i \leq 3)$

## 入力

入力は以下の形式で標準入力から与えられる。

> $s_1$ $s_2$ $s_3$

## 出力

答えを出力せよ。

```input1
atcoder beginner contest
```

```output1
ABC
```

`atcoder` `beginner` `contest` の先頭の文字はそれぞれ`a` `b` `c`なので、`ABC`が答えになります。

```input2
resident register number
```

```output2
RRN
```

```input3
k nearest neighbor
```

```output3
KNN
```

```input4
async layered coding
```

```output4
ALC
```