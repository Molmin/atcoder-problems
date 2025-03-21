配点 : $700$ 点

## 問題文

$N$ 個のマスが横一列に並んでおり，左から順に $1$ から $N$ の番号がついています．
最初，すべてのマスは白色です．

あなたは以下の $M$ 種類の操作を**好きな順序で好きな回数**行うことができます．

- $i$ 種類目の操作: マス $L_i$ からマス $R_i$ までを黒色で塗る．

マス目の状態を変化させるような操作の回数の最大値を求めてください．
なお，操作を行った結果色が変化したマスが $1$ つでもあれば，その操作はマス目の状態を変化させたとみなします．

## 制約

- $1 \leq N \leq 500$
- $1 \leq M \leq N(N+1)/2$
- $1 \leq L_i \leq R_i \leq N$
- $(L_i,R_i) \neq (L_j,R_j)$ ($i \neq j$)
- 入力される値はすべて整数．

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$ $M$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_M$ $R_M$

## 出力

答えを出力せよ．

```input1
3 3
1 3
1 1
3 3
```

```output1
3
```

以下のように操作すると，マス目の状態を変化させる操作が $3$ 回行われます．

- $2$ 種類目の操作を行う．新たにマス $1$ が黒色で塗られる．
- $3$ 種類目の操作を行う．新たにマス $3$ が黒色で塗られる．
- $1$ 種類目の操作を行う．新たにマス $2$ が黒色で塗られる．

```input2
4 3
1 2
3 4
1 4
```

```output2
2
```

```input3
5 5
4 5
1 1
2 4
1 2
2 5
```

```output3
4
```

```input4
20 15
2 4
16 19
7 13
1 15
3 18
10 11
1 10
1 7
14 16
1 16
2 17
1 17
12 14
3 17
4 10
```

```output4
11
```