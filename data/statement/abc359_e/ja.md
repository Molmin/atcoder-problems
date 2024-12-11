配点 : $500$ 点

## ストーリー

長い水槽があり、高さの異なる板が等間隔に配置されています。
高橋くんは、この水槽の端へ水を注いでいったとき、板で区切られたそれぞれの領域に水が到達する時刻が知りたいです。

## 問題文

長さ $N$ の正整数列 $H=(H _ 1,H _ 2,\dotsc,H _ N)$ が与えられます。

長さ $N+1$ の非負整数列 $A=(A _ 0,A _ 1,\dotsc,A _ N)$ があります。
はじめ、$A _ 0=A _ 1=\dotsb=A _ N=0$ です。

$A$ に対して、次の操作を繰り返します。

1. $A _ 0$ の値を $1$ 増やす。
2. $i=1,2,\ldots,N$ に対して、この順に次の操作を行う。1.    - $A _ {i-1}\gt A _ i$ かつ $A _ {i-1}\gt H _ i$ のとき、$A _ {i-1}$ の値を $1$ 減らし、$A _ i$ の値を $1$ 増やす。

$i=1,2,\ldots,N$ のそれぞれに対して、初めて $A _ i &gt; 0$ が成り立つのは何回目の操作の後か求めてください。

## 制約

- $1\leq N\leq2\times10 ^ 5$
- $1\leq H _ i\leq10 ^ 9\ (1\leq i\leq N)$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $H _ 1$ $H _ 2$ $\dotsc$ $H _ N$

## 出力

$i=1,2,\ldots,N$ に対する答えを、空白を区切りとして $1$ 行に出力せよ。

```input1
5
3 1 4 1 5
```

```output1
4 5 13 14 26
```

はじめ $5$ 回の操作では以下のようになります。

それぞれの行が一回の操作に対応し、左端が $1$ 番の操作を、それ以外が $2$ 番の操作に対応します。

![](https://img.atcoder.jp/abc359/570466412318b9902952c408a421be0c.png)

この図から、$A _ 1\gt0$ が初めて成り立つのは $4$ 回目の操作の後、$A _ 2\gt0$ が初めて成り立つのは $5$ 回目の操作の後です。

同様にして、$A _ 3,A _ 4,A _ 5$ に対する答えは $13,14,26$ です。

よって、`4 5 13 14 26` を出力してください。

```input2
6
1000000000 1000000000 1000000000 1000000000 1000000000 1000000000
```

```output2
1000000001 2000000001 3000000001 4000000001 5000000001 6000000001
```

出力すべき値が $32\operatorname{bit}$ 整数に収まらない場合があることに注意してください。

```input3
15
748 169 586 329 972 529 432 519 408 587 138 249 656 114 632
```

```output3
749 918 1921 2250 4861 5390 5822 6428 6836 7796 7934 8294 10109 10223 11373
```