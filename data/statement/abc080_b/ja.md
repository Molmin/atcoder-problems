配点 : $200$ 点

## 問題文

整数 $X$ を十進法で表したときの各桁の数字の和を $f(X)$ としたとき、$X$ が $f(X)$ で割り切れる場合、$X$ はハーシャッド数です。

整数 $N$ が与えられるので、ハーシャッド数かどうか判定してください。

## 制約

- $1 \leq N \leq 10^8$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

$N$ がハージャッド数ならば `Yes` を、そうでなければ `No` を出力せよ。

```input1
12
```

```output1
Yes
```

$f(12)=1+2=3$ より、$12$ は $3$ で割り切れるので $12$ はハーシャッド数です。

```input2
57
```

```output2
No
```

$f(57)=5+7=12$ より、$57$ は $12$ で割り切れないので $57$ はハーシャッド数ではありません。

```input3
148
```

```output3
No
```