配点 : $900$ 点

## 問題文

ある円環上に $N$ 個の頂点が並んでいます．
頂点には時計回りに $1$ から $N$ の番号がついており，頂点 $i$ には整数 $A_i$ が書かれています．
ここで，$A_i$ は $1,2,3,4$ のいずれかです．
また $A$ は $1,2,3,4$ をそれぞれ $1$ つ以上含みます．

これらの $N$ 個の頂点を結ぶ辺を $N-1$ 本追加し，木を作ることを考えます．
ただしこの時，以下の条件を満たす必要があります．

- <p>頂点 $x,y$ が直接辺で結ばれているならば，$|A_x-A_y|=1$ である．</p>
- <p>追加した辺を線分として描いた時，どの $2$ つも端点以外で交わらない．</p>

例えば，以下の図は条件を満たす木の例です．

![figure1](https://img.atcoder.jp/agc058/8ed6a07d693053455f589dff2d9dccfa.png)

条件を満たすような木を作ることが可能かどうか判定してください．

$1$ つの入力ファイルにつき，$T$ 個のテストケースを解いてください．

## 制約

- $1 \leq T \leq 75000$
- $4 \leq N \leq 300000$
- $1 \leq A_i \leq 4$
- $A$ は $1,2,3,4$ をそれぞれ $1$ つ以上含む
- $1$ つの入力ファイルにつき，$N$ の総和は $300000$ を超えない
- 入力はすべて整数である

## 入力

入力は以下の形式で標準入力から与えられる．

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

各ケースは以下の形式で与えられる．

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## 出力

各ケースに対し，条件を満たす木を作ることができるならば `Yes` を，できないならば `No` を出力せよ．

```input1
3
4
1 2 3 4
4
1 3 4 2
4
1 4 2 3
```

```output1
Yes
Yes
No
```

```input2
3
8
4 2 3 4 1 2 2 1
8
3 2 2 3 1 3 3 4
8
2 3 3 2 1 4 1 4
```

```output2
Yes
Yes
No
```

最初のテストケースは，問題文中の図に対応しています．