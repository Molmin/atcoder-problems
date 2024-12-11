配点 : $300$ 点

## 問題文

二次元平面上に高橋君がいます。高橋君は原点から移動を $N$ 回行いました。  

$N$ 回の移動は長さ $N$ の文字列で表され、意味は次の通りです。

- $i$ 回目の高橋君の移動後の座標は、移動前の座標を $(x,y)$ として、-   - $S$ の $i$ 文字目が `R` であるとき $(x+1,y)$
-   - $S$ の $i$ 文字目が `L` であるとき $(x-1,y)$
-   - $S$ の $i$ 文字目が `U` であるとき $(x,y+1)$
-   - $S$ の $i$ 文字目が `D` であるとき $(x,y-1)$

$N$ 回の移動 (始点と終点を含む) で、高橋君が同じ座標にいたことがあるかどうかを判定してください。

## 制約

- $1 \leq N \leq 2\times 10^5$
- $N$ は整数
- $S$ は `R`, `L`, `U`, `D` のみからなる長さ $N$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S$

## 出力

$N$ 回の移動 (始点と終点を含む) で、高橋君が同じ座標にいたことがあれば `Yes`、なければ `No` と出力せよ。

```input1
5
RLURU
```

```output1
Yes
```

高橋君のいる座標は $(0,0)\to (1,0)\to (0,0)\to (0,1)\to (1,1)\to (1,2)$ と変化します。

```input2
20
URDDLLUUURRRDDDDLLLL
```

```output2
No
```