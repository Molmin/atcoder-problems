配点 : $300$ 点

## 問題文

高橋君は $7$ が嫌いです。

$1$ 以上 $N$ 以下の整数のうち、$10$ 進法で表しても $8$ 進法で表しても $7$ を含まないような数はいくつありますか？

## 制約

- $1 \leq N \leq 10^5$
- $N$ は整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

答えを整数で出力せよ。

```input1
20
```

```output1
17
```

$1$ 以上 $20$ 以下の整数のうち、$10$ 進法で表したときに $7$ を含む数は $7,17$、$8$ 進法で表したときに $7$ を含む数は $7,15$ です。

よって、$7,15,17$ 以外の $17$ 個の数が条件を満たします。

```input2
100000
```

```output2
30555
```