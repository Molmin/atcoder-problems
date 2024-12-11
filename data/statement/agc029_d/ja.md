配点 : $800$ 点

## 問題文

高橋君と青木君は $H$ 行 $W$ 列のマス目を使ってゲームをします。
このマス目上には $N$ 個の障害物があり、$i$ 番目の障害物は $(X_i,Y_i)$ にあります。
ただし、$i$ 行 $j$ 列目 $(1 \leq i \leq H, 1 \leq j \leq W)$ にあるマスを $(i,j)$ で表すことにします。
また、どの障害物も $(1,1)$ にはなく、$(1,1)$ には $1$ つの駒が置いてあります。

そこで、高橋君と青木君は高橋君から始めて、交互に以下の行動のいずれかを行います。

- 駒を隣り合うマスに動かす。
  ただし、駒の位置を $(x,y)$ としたとき、高橋君は $(x+1,y)$ にのみ、青木君は $(x,y+1)$ にのみ駒を動かすことができる。
  また、動かすことのできるマスが存在しない、もしくは、動かす予定のマス目に障害物がある場合はこの行動をとることはできない。
- 駒を動かさず、マス目を元の状態のまま行動を終える。

$2$ 回連続で駒が動かされなかった場合、そこでゲームを終了します。

高橋君はできるだけ多くの回数の行動 (駒を動かさないのも含む) を行ってゲームを終えたいですが、
青木君はできるだけ少ない回数の行動を行ってゲームを終えたいです。
このとき、高橋君が行うことになる行動の回数は何回か求めてください。

## 制約

- $1 \leq H,W \leq 2\times 10^5$
- $0 \leq N \leq 2\times 10^5$
- $1 \leq X_i \leq H$
- $1 \leq Y_i \leq W$
- $i \neq j$ のとき $(X_i,Y_i) \neq (X_j,Y_j)$
- $(X_i,Y_i) \neq (1,1)$
- $X_i,Y_i$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$ $N$
> 
> $X_1$ $Y_1$
> 
> $:$
> 
> $X_N$ $Y_N$

## 出力

高橋君が行うことになる行動の回数を出力せよ。

```input1
3 3 1
3 2
```

```output1
2
```

ゲームの一例は以下のようになります。

- 高橋君が駒を (2,1) に動かす。
- 青木君が駒を動かさない。
- 高橋君が駒を (3,1) に動かす。
- 青木君が駒を動かさない。
- 高橋君が駒を動かさない。

この場合は高橋君は $3$ 回の行動を行いますが、
両者が最適に行動すれば $2$ 回しか高橋君は行動せずにゲームが終了します。

```input2
10 10 14
4 3
2 2
7 3
9 10
7 7
8 1
10 10
5 4
3 4
2 8
6 4
4 4
5 8
9 2
```

```output2
6
```

```input3
100000 100000 0
```

```output3
100000
```