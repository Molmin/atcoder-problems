配点: $500$ 点

## 問題文

かつて存在した高橋王国には $N$ 個の都市があり、いくつかの都市の組は道路で双方向に結ばれていました。
道路の構造は以下のようであったことがわかっています。

- 都市間の移動は道路を通ってのみ行われ、どの都市からどの都市へも必要なら他の都市を経由することで移動できるようになっていた。
- 道路の長さは道路によって異なっていたかもしれないが、全て正整数であった。

考古学者のすぬけ君は、高橋王国の遺跡で整数からなる $N \times N$ の表 $A$ を発見しました。
すぬけ君は、この表は高橋王国における都市間の道路に沿った最短距離を表した表ではないかと考えました。

すべての $u, v$ について、$A$ の $u$ 行目 $v$ 列目の整数 $A_{u, v}$ が都市 $u$ から都市 $v$ への最短経路の長さとなるような
道路の構造が存在するかどうか判定してください。
さらに、存在する場合、そのような道路の構造のうち、存在する道路の長さの和が最小となるようなものについて、その和を求めてください。

## 制約

- $1 \leq N \leq 300$
- $i \neq j$ のとき、$1 \leq A_{i, j} = A_{j, i} \leq 10^9$
- $A_{i, i} = 0$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_{1, 1}$ $A_{1, 2}$ $...$ $A_{1, N}$
> 
> $A_{2, 1}$ $A_{2, 2}$ $...$ $A_{2, N}$
> 
> $...$
> 
> $A_{N, 1}$ $A_{N, 2}$ $...$ $A_{N, N}$

## 出力

条件を満たす道路の構造が存在しない場合、`-1` と出力せよ。
存在する場合、道路の長さの和の最小値を出力せよ。

```input1
3
0 1 3
1 0 2
3 2 0
```

```output1
3
```

条件を満たす道路の構造は以下のとおりです。

- 都市 $1$ と都市 $2$ の間は長さ $1$ の道路によって結ばれている。
- 都市 $2$ と都市 $3$ の間は長さ $2$ の道路によって結ばれている。
- 都市 $3$ と都市 $1$ の間は道路で結ばれていない。

```input2
3
0 1 3
1 0 1
3 1 0
```

```output2
-1
```

都市 $1$ から都市 $2$ へ、および都市 $2$ から都市 $3$ へそれぞれ距離 $1$ で移動できることから、
都市 $1$ から都市 $3$ へは都市 $2$ を経由することで距離 $2$ で移動できることがわかります。
一方、都市 $1$ と都市 $3$ の間の最短距離は $3$ でなければなりません。

よって条件を満たす道路の構造は存在しないことがわかります。

```input3
5
0 21 18 11 28
21 0 13 10 26
18 13 0 23 13
11 10 23 0 17
28 26 13 17 0
```

```output3
82
```

```input4
3
0 1000000000 1000000000
1000000000 0 1000000000
1000000000 1000000000 0
```

```output4
3000000000
```