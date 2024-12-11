配点 : $400$ 点

## 問題文

すぬけ君は最初、ビスケットを $1$ 枚持っており、日本円は持っていません。
すぬけ君は、以下の操作を好きな順に合計ちょうど $K$ 回行います。

- 持っているビスケットを叩き、$1$ 枚増やす
- ビスケット $A$ 枚を $1$ 円に交換する
- $1$ 円をビスケット $B$ 枚に交換する

$K$ 回の操作の後、すぬけ君が持っているビスケットの枚数の最大値を求めてください。

## 制約

- $1 \leq K,A,B \leq 10^9$
- $K,A,B$ は整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $K$ $A$ $B$

## 出力

$K$ 回の操作の後、すぬけ君が持っているビスケットの枚数の最大値を出力せよ。

```input1
4 2 6
```

```output1
7
```

以下のように操作を行うと、$K$ 回の操作の後、すぬけ君の持っているビスケットの枚数は最大になります。

- ビスケットを叩く。すぬけ君は、ビスケット $2$ 枚と $0$ 円を持っている。
- ビスケット $2$ 枚を $1$ 円に交換する。すぬけ君は、ビスケット $0$ 枚と $1$ 円を持っている。
- ビスケットを叩く。すぬけ君は、ビスケット $1$ 枚と $1$ 円を持っている。
- $1$ 円をビスケット $6$ 枚に交換する。すぬけ君は、ビスケット $7$ 枚と $0$ 円を持っている。

```input2
7 3 4
```

```output2
8
```

```input3
314159265 35897932 384626433
```

```output3
48518828981938099
```