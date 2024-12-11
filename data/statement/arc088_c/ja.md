配点 : $800$ 点

## 問題文

英小文字からなる文字列 $S$ が与えられます。
隣り合う $2$ つの文字を入れ替える操作を繰り返して $S$ を回文にできるかどうか判定し、できる場合は操作の最小回数を求めてください。

## 制約

- $1 \leq |S| \leq 2 \times 10^5$
- $S$ は英小文字からなる

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$

## 出力

回文にできない場合、`-1` を出力せよ。そうでない場合、操作の最小回数を出力せよ。

```input1
eel
```

```output1
1
```

以下の操作で、$S$ を回文にすることができます。

- $2$ 文字目と $3$ 文字目を入れ替える。新しい $S$ は `ele` となる。

```input2
ataatmma
```

```output2
4
```

以下の操作で、$S$ を回文にすることができます。

- $5$ 文字目と $6$ 文字目を入れ替える。新しい $S$ は `ataamtma` となる。
- $4$ 文字目と $5$ 文字目を入れ替える。新しい $S$ は `atamatma` となる。
- $3$ 文字目と $4$ 文字目を入れ替える。新しい $S$ は `atmaatma` となる。
- $2$ 文字目と $3$ 文字目を入れ替える。新しい $S$ は `amtaatma` となる。

```input3
snuke
```

```output3
-1
```

$S$ を回文にすることはできません。