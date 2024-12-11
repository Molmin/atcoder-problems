配点 : $350$ 点

## 問題文

AtCoder社のオフィスは $H$ 行 $W$ 列のマス目で表されます。上から $i$ 行目、左から $j$ 列目のマスを $(i, j)$ と表します。

各マスの状態は文字 $S_{i,j}$ で表され、 $S_{i,j}$ が `#` のときそのマスは壁、`.` のときそのマスは床、`H` のときそのマスは加湿器が置かれた床です。

あるマスは、ある加湿器から壁を通らず上下左右に $D$ 回以下の移動で辿り着ける場合加湿されます。ここで、加湿器が置かれた床のマスは必ず加湿されていることに注意してください。

加湿されている床のマスの個数を求めてください。

## 制約

- $1 \leq H \leq 1000$
- $1 \leq W \leq 1000$
- $0 \leq D \leq H\times W$
- $S_{i,j}$ は `#` または `.` または `H` である $(1 \leq i \leq H, 1 \leq j \leq W)$
- 入力される数値は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$ $D$
> 
> $S_{1,1}$$S_{1,2}$$\cdots$$S_{1,W}$
> 
> $S_{2,1}$$S_{2,2}$$\cdots$$S_{2,W}$
> 
> $\vdots$
> 
> $S_{H,1}$$S_{H,2}$$\cdots$$S_{H,W}$

## 出力

答えを出力せよ。

```input1
3 4 1
H...
#..H
.#.#
```

```output1
5
```

マス $(1,1),(1,2),(1,4),(2,3),(2,4)$ の $5$ つのマスが加湿されています。

```input2
5 6 2
##...H
H.....
..H.#.
.HH...
.###..
```

```output2
21
```

```input3
1 6 3
...#..
```

```output3
0
```

加湿されるマスが存在しない場合もあります。