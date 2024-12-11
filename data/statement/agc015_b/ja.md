配点 : $400$ 点

## 問題文

すけぬ君は、$N$ 階建てのビルを建てました。ビルにはエレベーターが $1$ 基あり、すべての階に止まります。

すけぬ君は、各階に上下の方向ボタンを設置しましたが、うっかりしていたため、どの階にも上向きか下向きの片方のボタンしかありません。
そのため、どの階からも上か下のどちらかにしか進むことができません。
$S_i$ が `U` のとき $i$ 階には上向きのボタンしかなく、上にしか進めないことを、`D` のとき下向きのボタンしかなく、
下にしか進めないことを表します。

ある階から目的の階へと移動したい住民は、仕方がないので必要があれば他の階を経由して目的の階へと向かうことにしました。
全ての階の順序対 $(i,j)$ についての、$i$ 階から $j$ 階へ行くときのエレベーターに乗る回数の最小値の合計を求めてください。

## 制約

- $2 \leq |S| \leq 10^5$
- $S_i$ は `U` または `D` である
- $S_1$ は `U` である
- $S_{|S|}$ は `D` である

## 入力

入力は以下の形式で標準入力から与えられる。

> $S_1S_2...S_{|S|}$

## 出力

全ての階の順序対 $(i,j)$ についての、$i$ 階から $j$ 階へ行くときのエレベーターに乗る回数の最小値の合計を出力せよ。

```input1
UUD
```

```output1
7
```

$1$ 階から $2$ 階までは、$1$ 回エレベーターに乗れば行くことができます。

$1$ 階から $3$ 階までは、$1$ 回エレベーターに乗れば行くことができます。

$2$ 階から $1$ 階までは、$2$ 回エレベーターに乗れば行くことができます。

$2$ 階から $3$ 階までは、$1$ 回エレベーターに乗れば行くことができます。

$3$ 階から $1$ 階までは、$1$ 回エレベーターに乗れば行くことができます。

$3$ 階から $2$ 階までは、$1$ 回エレベーターに乗れば行くことができます。

これらの合計は $7$ なので、$7$ を出力します。

```input2
UUDUUDUD
```

```output2
77
```