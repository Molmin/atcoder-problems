配点 : $200$ 点

## 問題文

   #nck {
      width: 30px;
      height: auto;
   }

縦 $H$ 行、横 $W$ 列のマス目に区切られた盤面があります。
はじめ、駒が左上隅のマスに置かれていました。
シックはこの駒を $1$ マスずつ上下左右に動かし、右下隅のマスに移動させました。
このとき、駒が同じマスを複数回通った可能性もあります（左上隅や右下隅のマスも含む）。

縦横に並んだ文字 $a_{ij}$ ($1 \leq i \leq H$, $1 \leq j \leq W$) が与えられます。
$a_{ij}$ が `#` のとき、駒が移動する過程で $i$ 行 $j$ 列目のマスを一度以上通ったことを表します（左上隅や右下隅のマスは必ず通ったものとして扱います）。
$a_{ij}$ が `.` のとき、駒が $i$ 行 $j$ 列目のマスを一度も通らなかったことを表します。
移動する過程で、駒が常に右または下に動いていた可能性があるか判定してください。

## 制約

- $2 \leq H, W \leq 8$
- $a_{i,j}$ は `#` または `.` である。
- 問題文および $a$ で与えられる情報と整合するような駒の動き方が存在する。

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$
> 
> $A_{11}A_{12}$$...$$A_{1W}$
> 
> $:$
> 
> $A_{H1}A_{H2}$$...$$A_{HW}$

## 出力

移動する過程で、駒が常に右または下に動いていた可能性があれば `Possible` 、なければ `Impossible` と出力せよ。

```input1
4 5
##...
.##..
..##.
...##
```

```output1
Possible
```

右、下、右、下、右、下、右と駒が動くと、通るマスが与えられた情報と合致します。

```input2
5 3
###
..#
###
#..
###
```

```output2
Impossible
```

```input3
4 5
##...
.###.
.###.
...##
```

```output3
Impossible
```