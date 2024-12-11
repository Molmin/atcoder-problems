配点 : $1500$ 点

## 問題文

以下の条件を満たす $N$ 角形を一つ構成してください:

- 多角形は単純である。 (ノートを見てください)
- 多角形の各辺は座標軸に平行である。
- 多角形の頂点の座標は $0$ 以上 $10^9$ 以下の整数である。
- 多角形の頂点は反時計回りに $1$ から $N$ まで番号がつけられている。
- $i$ 番目の頂点の内角は $a_i$ 度である。

解が複数通り考えられる場合は、どれを出力してもかまいません。

## ノート

全ての辺が正の長さを持ち、どの二つの辺も (隣接する辺が頂点で接するのを除いて) 共通部分を持たないとき、多角形は単純であるという。

## 制約

- $3 \leq N \leq 1000$
- $a_i$ は $90$ または $270$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$
> 
> :
> 
> $a_N$

## 出力

解が存在する場合は、以下の形式で出力せよ:

> $x_1$ $y_1$
> 
> :
> 
> $x_N$ $y_N$

ここで $(x_i, y_i)$ は $i$ 番目の頂点の座標である。

解が存在しない場合は、 `-1` と出力せよ。

```input1
8
90
90
270
90
90
90
270
90
```

```output1
0 0
2 0
2 1
3 1
3 2
1 2
1 1
0 1
```

```input2
3
90
90
90
```

```output2
-1
```