配点 : $400$ 点

## 問題文

$K$ 個の青いボールと $N-K$ 個の赤いボールがあります。同じ色のボールは区別が不可能です。すぬけ君と高橋君はこれらのボールで遊んでいます。

まず、すぬけ君が、$N$ 個のボールを左から右に一列に並べます。

次に、高橋君は、これらのうち $K$ 個の青いボールのみを回収します。高橋君は、$1$ 回の操作で連続して並ぶ青いボールを何個でも回収することができます。高橋君は、常に $K$ 個の青いボールを回収するのにかかる操作の回数が最小になるように行動します。

$K$ 個の青いボールを回収するために高橋君がちょうど $i$ 回操作をする必要があるボールの並べ方は何通りあるでしょうか。 $1 \leq i \leq K$ をみたす $i$ それぞれについて答えを計算し、 $10^9+7$ で割った余りを答えてください。

## 制約

- $1 \leq K \leq N \leq 2000$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$

## 出力

$i$ 行目 ($1 \leq i \leq K$) に高橋君がちょうど $i$ 回操作をする必要があるボールの並べ方の総数を $10^9+7$ で割った余りを出力せよ。

```input1
5 3
```

```output1
3
6
1
```

高橋君がちょうど $1$ 回操作をする必要があるボールの並べ方は (青, 青, 青, 赤, 赤), (赤, 青, 青, 青, 赤), (赤, 赤, 青, 青, 青) の $3$ 通りです。

高橋君がちょうど $2$ 回操作をする必要があるボールの並べ方は (青, 青, 赤, 青, 赤), (青, 青, 赤, 赤, 青), (赤, 青, 青, 赤, 青), (赤, 青, 赤, 青, 青), (青, 赤, 青, 青, 赤), (青, 赤, 赤, 青, 青) の $6$ 通りです。

高橋君がちょうど $3$ 回操作をする必要があるボールの並べ方は (青, 赤, 青, 赤, 青) のみの $1$ 通りです。

```input2
2000 3
```

```output2
1998
3990006
327341989
```

並べ方の総数を $10^9+7$ で割った余りを出力することに注意してください。