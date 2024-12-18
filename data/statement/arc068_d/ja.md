配点 : $1200$ 点

## 問題文

すぬけくんは $N$ 枚のカードとデック(両端キュー)で遊ぶことにしました。
カードには $1,2,3...,N$ の数が書かれており、デックははじめ空です。

すぬけくんは $1,2,3,...,N$ が書かれたカードをこの順に、それぞれデックの先頭あるいは末尾に挿入します。
その後、すぬけくんはデックの先頭あるいは末尾からカードを取り出して食べる、という操作を $N$ 回行います。

食べたカードに書かれていた数を食べた順番に並べて数列を作ることにします。このようにして作ることが可能な数列のうち、$K$ 番目の要素が $1$ であるようなものの個数を $10^{9} + 7$ で割った余りを求めなさい。

## 制約

- $1 \leq K \leq N \leq 2{,}000$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$

## 出力

答えを出力せよ。

```input1
2 1
```

```output1
1
```

条件を満たす並びは $1,2$ の $1$ 通りです。例えば以下のようにして、この並びを構成することが可能です。

- $1,2$ のどちらもカードの山の一番下に挿入する
- カードの山の一番上からカードを取り出して食べることを $2$ 回行う

```input2
17 2
```

```output2
262144
```

```input3
2000 1000
```

```output3
674286644
```