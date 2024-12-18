配点 : $525$ 点

## 問題文

整数 $X, Y$ が与えられます。$X, Y$ は $X \neq 0$ と $Y \neq 0$ の少なくとも一方を満たします。<br>
次の条件を全て満たす整数の組 $(A, B)$ を発見してください。そのような整数の組が存在しない場合はそれを報告してください。

- $-10^{18} \leq A, B \leq 10^{18}$
- $xy$ 平面上の点 $(0, 0), (X, Y), (A, B)$ を頂点とする三角形の面積は $1$

## 制約

- $-10^{17} \leq X, Y \leq 10^{17}$
- $(X, Y) \neq (0, 0)$
- $X, Y$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $X$ $Y$

## 出力

条件を満たす整数の組 $(A, B)$ が存在する場合は以下の形式で出力せよ。

> $A$ $B$

条件を満たす整数の組 $(A, B)$ が存在しない場合は `-1` を出力せよ。

```input1
3 5
```

```output1
1 1
```

点 $(0, 0), (3, 5), (1, 1)$ を頂点とする三角形の面積は $1$ です。よって $(A, B) = (1, 1)$ は条件を満たします。

```input2
-2 0
```

```output2
0 1
```

```input3
8752654402832944 -6857065241301125
```

```output3
-1
```