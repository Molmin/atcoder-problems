配点 : $200$ 点

## 問題文

$xy$ 平面上に、同一直線上にない $3$ 点 $A(x_A,y_A), B(x_B,y_B),C(x_C,y_C)$ があります。三角形 $ABC$ が直角三角形であるかどうか判定してください。

## 制約

- $-1000\leq x_A,y_A,x_B,y_B,x_C,y_C\leq 1000$
- $3$ 点 $A,B,C$ は同一直線上にない
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $x_A$ $y_A$
> 
> $x_B$ $y_B$
> 
> $x_C$ $y_C$

## 出力

三角形 $ABC$ が直角三角形であるならば `Yes` を、そうでないならば `No` を出力せよ。

```input1
0 0
4 0
0 3
```

```output1
Yes
```

三角形 $ABC$ は直角三角形です。

![](https://img.atcoder.jp/abc362/3f4a68afd7a43d159b7e7ef4cee6c646.png)

```input2
-4 3
2 1
3 4
```

```output2
Yes
```

三角形 $ABC$ は直角三角形です。

![](https://img.atcoder.jp/abc362/092af99ccc22b9235a87bc2b5f53bfa3.png)

```input3
2 4
-3 2
1 -2
```

```output3
No
```

三角形 $ABC$ は直角三角形ではありません。

![](https://img.atcoder.jp/abc362/f7fbb440279967aee94ef846562d4b0e.png)