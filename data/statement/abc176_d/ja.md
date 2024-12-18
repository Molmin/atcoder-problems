配点 : $400$ 点

## 問題文

縦 $H$ マス、横 $W$ マスの $H\times W$ マスからなる迷路があります。

上から $i$ 行目、左から $j$ 列目のマス $(i,j)$ は、$S_{ij}$ が `#` のとき壁であり、`.`のとき道です。

マス $(C_h,C_w)$ に魔法使いがいます。魔法使いは次の $2$ 種類の方法で移動することができます。

- 移動A：現在いるマスと上下左右に隣接する道のマスへ歩いて移動する。
- 移動B：現在いるマスを中心とする $5\times 5$ の範囲内にある道のマスへワープ魔法で移動する。

どちらの行動でも、迷路の外へ移動することはできません。

マス $(D_h,D_w)$ まで移動するには、ワープ魔法を最低で何度使う必要があるでしょうか。

## 制約

- $1 \leq H,W \leq 10^3$
- $1 \leq C_h,D_h \leq H$
- $1 \leq C_w,D_w \leq W$
- $S_{ij}$ は `#` か `.`
- $S_{C_h C_w}$ と $S_{D_h D_w}$ は `.`
- $(C_h,C_w) \neq (D_h,D_w)$

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$
> 
> $C_h$ $C_w$
> 
> $D_h$ $D_w$
> 
> $S_{11}\ldots S_{1W}$
> 
> $\vdots$
> 
> $S_{H1}\ldots S_{HW}$

## 出力

ワープ魔法を使う最小回数を出力せよ。$(D_h,D_w)$ に到達不可能な場合、かわりに `-1` と出力せよ。

```input1
4 4
1 1
4 4
..#.
..#.
.#..
.#..
```

```output1
1
```

例えば $(2,2)$ まで歩いて移動し、$(2,2)$ から $(4,4)$ へワープ魔法で移動することで、ワープ魔法の使用回数を $1$ 回にできます。

歩いて斜めに移動することはできません。

```input2
4 4
1 4
4 1
.##.
####
####
.##.
```

```output2
-1
```

現在地から動くことができません。

```input3
4 4
2 2
3 3
....
....
....
....
```

```output3
0
```

ワープ魔法を使う必要はありません。

```input4
4 5
1 2
2 5
#.###
####.
#..##
#..##
```

```output4
2
```