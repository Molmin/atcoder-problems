配点 : $500$ 点

## 問題文

すぬけ君は、誕生日プレゼントに三角形をもらいました。
三頂点の座標は $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$ でした。

すぬけ君は、三角形の内部に半径の等しい二つの円を、重ならないように描きたいです (二円が点で接していてもいいです)。
円の半径の最大値を求めてください。

## 制約

- $0 \leq x_i, y_i \leq 1000$
- 座標は整数である。
- 三点は同一直線上に無い。

## 入力

入力は以下の形式で標準入力から与えられる。

> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $x_3$ $y_3$

## 出力

円の半径の最大値を出力せよ。
絶対誤差または相対誤差が $10^{-9}$ 以下で無ければならない。

```input1
0 0
1 1
2 0
```

```output1
0.292893218813
```

```input2
3 1
1 5
4 9
```

```output2
0.889055514217
```