配点 : $525$ 点

## 問題文

座標平面上に高橋君と荷物があります。

高橋君は現在 $(X_A,Y_A)$ におり、荷物は $(X_B,Y_B)$ にあります。
高橋君は荷物を $(X_C,Y_C)$ まで運びたいです。

高橋君は $(x,y)$ にいるとき、$1$ 回の行動で次のいずれかの動きをすることができます。

- $(x+1,y)$ に移動する。移動前の時点で荷物が $(x+1,y)$ にあった時、荷物を $(x+2,y)$ に移動させる。
- $(x-1,y)$ に移動する。移動前の時点で荷物が $(x-1,y)$ にあった時、荷物を $(x-2,y)$ に移動させる。
- $(x,y+1)$ に移動する。移動前の時点で荷物が $(x,y+1)$ にあった時、荷物を $(x,y+2)$ に移動させる。
- $(x,y-1)$ に移動する。移動前の時点で荷物が $(x,y-1)$ にあった時、荷物を $(x,y-2)$ に移動させる。

荷物を $(X_C,Y_C)$ に移動させるまでに必要な最小の行動回数を求めてください。

## 制約

- $-10^{17}\leq X_A,Y_A,X_B,Y_B,X_C,Y_C\leq 10^{17}$
- $(X_A,Y_A)\neq (X_B,Y_B)$
- $(X_B,Y_B)\neq (X_C,Y_C)$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $X_A$ $Y_A$ $X_B$ $Y_B$ $X_C$ $Y_C$

## 出力

荷物を $(X_C,Y_C)$ に移動させるまでに必要な最小の行動回数を出力せよ。

```input1
1 2 3 3 0 5
```

```output1
9
```

高橋君は次のように行動することで $9$ 回で荷物を $(0,5)$ に運ぶことができます。

- $(2,2)$ へ移動する。
- $(3,2)$ へ移動する。
- $(3,3)$ へ移動する。荷物は $(3,4)$ に移動する。
- $(3,4)$ へ移動する。荷物は $(3,5)$ に移動する。
- $(4,4)$ へ移動する。
- $(4,5)$ へ移動する。
- $(3,5)$ へ移動する。荷物は $(2,5)$ に移動する。
- $(2,5)$ へ移動する。荷物は $(1,5)$ に移動する。
- $(1,5)$ へ移動する。荷物は $(0,5)$ に移動する。

$8$ 回以下で荷物を $(0,5)$ に運ぶことができないので、$9$ を出力します。

```input2
0 0 1 0 -1 0
```

```output2
6
```

```input3
-100000000000000000 -100000000000000000 100000000000000000 100000000000000000 -100000000000000000 -100000000000000000
```

```output3
800000000000000003
```