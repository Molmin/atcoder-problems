配点 : $300$ 点

## 問題文

すぬけ君は $1$ から $N$ の番号がついた $N$ 枚のカードを持っています。
それぞれのカードには整数が書かれており、カード $i$ には $a_i$ が書かれています。

すぬけ君は以下の手続きを行います。

1. すぬけ君が持っているカードに書かれた数の最大値を $X$、最小値を $x$ とする。
2. $X = x$ なら手続きを終了する。そうでなければ $X$ が書かれたカードを全て $X-x$ が書かれたカードに変え、$1$ へ戻る。

この問題の制約下で、いずれ手続きが終了することが証明できます。手続き終了後のすぬけ君が持っているカードに書かれた唯一の数を求めてください。

## 制約

- 与えられる入力は全て整数
- $1 \leq N \leq 10^{5}$
- $1 \leq a_i \leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $a_2$ $\cdots$ $a_N$

## 出力

手続き終了後のすぬけ君が持っているカードに書かれた唯一の数を出力せよ。

```input1
3
2 6 6
```

```output1
2
```

- 手続き開始時点では、すぬけ君が持っているカードに書かれた数は $(2,6,6)$ です。-   - $x=2,X=6$ なので、$6$ と書かれたカードを全て $4$ が書かれたカードに書き換えます。
- すぬけ君が持っているカードに書かれた数は $(2,4,4)$ になっています。-   - $x=2,X=4$ なので、$4$ と書かれたカードを全て $2$ が書かれたカードに書き換えます。
- すぬけ君が持っているカードに書かれた数は $(2,2,2)$ になっています。-   - $x=2,X=2$ なので手続きを終了します。

```input2
15
546 3192 1932 630 2100 4116 3906 3234 1302 1806 3528 3780 252 1008 588
```

```output2
42
```