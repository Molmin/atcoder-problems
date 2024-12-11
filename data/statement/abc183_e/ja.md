配点 : $500$ 点

## 問題文

縦 $H$ マス、横 $W$ マスのグリッドがあります。
上から $i$ 行目、左から $j$ 列目のマス $(i,j)$ は、$S_{ij}$ が `#` のとき壁であり、`.` のとき道です。

マス $(1,1)$ にチェスのクイーンの駒が置いてあります。
クイーンの駒は、今いる位置から右・下・右下方向に伸びる直線上にあり、壁を飛び越えずに到達できる道のマスに $1$ 手で移動することができます。

クイーンの駒がマス $(1,1)$ からマス $(H,W)$ まで移動する方法は何通りありますか？ $\bmod (10^9+7)$ で求めてください。

ただし、移動する方法が異なるとは、ある $i$ が存在して、$i$ 手目の移動の後にクイーンの駒があるマスの位置が異なることを指します。

## 制約

- $2 \leq H,W \leq 2000$
- $S_{ij}$ は `#` か `.`
- $S_{11}$ と $S_{HW}$ は `.`

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$
> 
> $S_{11}\ldots S_{1W}$
> 
> $\vdots$
> 
> $S_{H1}\ldots S_{HW}$

## 出力

クイーンの駒がマス $(1,1)$ から $(H,W)$ まで移動する方法の数を $\mod (10^9+7)$ で出力せよ。

```input1
3 3
...
.#.
...
```

```output1
10
```

移動方法として次の $10$ 通りが考えられます。

- $(1,1)\to (1,2)\to (1,3)\to (2,3)\to (3,3)$
- $(1,1)\to (1,2)\to (1,3)\to (3,3)$
- $(1,1)\to (1,2)\to (2,3)\to (3,3)$
- $(1,1)\to (1,3)\to (2,3)\to (3,3)$
- $(1,1)\to (1,3)\to (3,3)$
- $(1,1)\to (2,1)\to (3,1)\to (3,2)\to (3,3)$
- $(1,1)\to (2,1)\to (3,1)\to (3,3)$
- $(1,1)\to (2,1)\to (3,2)\to (3,3)$
- $(1,1)\to (3,1)\to (3,2)\to (3,3)$
- $(1,1)\to (3,1)\to (3,3)$

```input2
4 4
...#
....
..#.
....
```

```output2
84
```

$(1,1)$ からは $1$ 手で $(1,2),(1,3),(2,1),(2,2),(3,1),(4,1)$ のいずれかへ移動することが出来ます。

$(4,4)$ への移動経路として、例えば $(1,1)\to (3,1)\to (3,2)\to (4,3)\to (4,4)$ などがあります。

```input3
8 10
..........
..........
..........
..........
..........
..........
..........
..........
```

```output3
13701937
```

移動方法の数を $\bmod (10^9+7)$ で求めてください。