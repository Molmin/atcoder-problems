配点 : $300$ 点

## 問題文

$N$ 個の箱が横一列に並んでいます。
最初、左から $i$ 番目の箱には $a_i$ 個のキャンディが入っています。

すぬけ君は次の操作を好きな回数だけ行うことができます。

- キャンディが $1$ 個以上入っている箱をひとつ選び、その箱のキャンディを $1$ 個食べる。

すぬけ君の目標は次の通りです。

- どの隣り合う $2$ つの箱を見ても、それらの箱に入っているキャンディの個数の総和が $x$ 以下である。

目標を達成するために必要な操作回数の最小値を求めてください。

## 制約

- $2 \leq N \leq 10^5$
- $0 \leq a_i \leq 10^9$
- $0 \leq x \leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $x$
> 
> $a_1$ $a_2$ $...$ $a_N$

## 出力

目標を達成するために必要な操作回数の最小値を出力せよ。

```input1
3 3
2 2 2
```

```output1
1
```

$2$ 番目の箱のキャンディを $1$ 個食べればよいです。
すると、各箱のキャンディの個数は $(2, 1, 2)$ となります。

```input2
6 1
1 6 1 2 0 4
```

```output2
11
```

たとえば、$2$ 番目の箱のキャンディを $6$ 個食べ、$4$ 番目の箱のキャンディを $2$ 個食べ、$6$ 番目の箱のキャンディを $3$ 個食べればよいです。

すると、各箱キャンディの個数は $(1, 0, 1, 0, 0, 1)$ となります。

```input3
5 9
3 1 4 1 5
```

```output3
0
```

最初から目標が達成されているので、操作を行う必要はありません。

```input4
2 0
5 5
```

```output4
10
```

すべてのキャンディを食べなければなりません。