配点 : $400$ 点

## 問題文

高橋くんは $N$ 個の品物を $1$ 個ずつ順番に買う予定です。

$i$ 番目に買う品物の値段は $A_i$ 円です。

高橋くんは $M$ 枚の割引券を持っています。

品物を買う際に割引券を好きな枚数使うことができます。

$X$ 円の品物を買う際に $Y$ 枚の割引券を使った場合、その品物を $\frac{X}{2^Y}$ 円(小数点以下切り捨て)で買うことができます。

最小で何円あれば全ての品物を買うことができるでしょうか。

## 制約

- 入力は全て整数である。
- $1 \leq N, M \leq 10^5$
- $1 \leq A_i \leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $A_2$ $...$ $A_N$

## 出力

全ての品物を買うのに必要なお金の最小値を出力せよ。

```input1
3 3
2 13 8
```

```output1
9
```

以下のように割引券を使えば、合計 $9$ 円で全ての商品を買うことができます。

- $1$ 番目に買う品物には割引券を使わず、$2$ 円で買います。
- $2$ 番目に買う品物には $2$ 枚の割引券を使い、$3$ 円で買います。
- $3$ 番目に買う品物には $1$ 枚の割引券を使い、$4$ 円で買います。

```input2
4 4
1 9 3 5
```

```output2
6
```

```input3
1 100000
1000000000
```

```output3
0
```

$1000000000$ 円の品物を買う際に $100000$ 枚の割引券を使うと $0$ 円で買うことができます。

```input4
10 1
1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000
```

```output4
9500000000
```