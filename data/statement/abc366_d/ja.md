配点 : $400$ 点

## 問題文

正整数 $N$ と、 $1 \leq x,y,z \leq N$ を満たす整数の組 $(x,y,z)$ に対して、整数 $A_{x,y,z}$ が与えられます。

次の形式の $Q$ 個のクエリが与えられるので、それぞれに答えてください。

$i$ 個目 $(1 \leq i \leq Q)$ のクエリでは $1 \leq Lx_i \leq Rx_i \leq N, 1 \leq Ly_i \leq Ry_i \leq N,1 \leq Lz_i \leq Rz_i \leq N$ をすべて満たす整数の組 $(Lx_i, Rx_i, Ly_i, Ry_i, Lz_i, Rz_i)$ が与えられるので、

$\displaystyle{\sum_{x=Lx_i}^{Rx_i} \sum_{y=Ly_i}^{Ry_i} \sum_{z=Lz_i}^{Rz_i} A_{x,y,z}}$

を求めてください。

## 制約

- $1 \leq N \leq 100$
- $1 \leq Q \leq 2 \times 10^{5}$
- $0 \leq A_{x,y,z} \leq 999 (1 \leq x,y,z \leq N)$
- $1 \leq Lx_i \leq Rx_i \leq N$ $(1 \leq i \leq Q)$
- $1 \leq Ly_i \leq Ry_i \leq N$ $(1 \leq i \leq Q)$
- $1 \leq Lz_i \leq Rz_i \leq N$ $(1 \leq i \leq Q)$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_{1,1,1}$ $A_{1,1,2}$ $\ldots$ $A_{1,1,N}$
> 
> $A_{1,2,1}$ $A_{1,2,2}$ $\ldots$ $A_{1,2,N}$
> 
> $\vdots$
> 
> $A_{1,N,1}$ $A_{1,N,2}$ $\ldots$ $A_{1,N,N}$
> 
> $A_{2,1,1}$ $A_{2,1,2}$ $\ldots$ $A_{2,1,N}$
> 
> $A_{2,2,1}$ $A_{2,2,2}$ $\ldots$ $A_{2,2,N}$
> 
> $\vdots$
> 
> $A_{2,N,1}$ $A_{2,N,2}$ $\ldots$ $A_{2,N,N}$
> 
> $\vdots$
> 
> $A_{N,1,1}$ $A_{N,1,2}$ $\ldots$ $A_{N,1,N}$
> 
> $A_{N,2,1}$ $A_{N,2,2}$ $\ldots$ $A_{N,2,N}$
> 
> $\vdots$
> 
> $A_{N,N,1}$ $A_{N,N,2}$ $\ldots$ $A_{N,N,N}$
> 
> $Q$
> 
> $Lx_1$ $Rx_1$ $Ly_1$ $Ry_1$ $Lz_1$ $Rz_1$
> 
> $Lx_2$ $Rx_2$ $Ly_2$ $Ry_2$ $Lz_2$ $Rz_2$
> 
> $\vdots$
> 
> $Lx_Q$ $Rx_Q$ $Ly_Q$ $Ry_Q$ $Lz_Q$ $Rz_Q$

## 出力

$Q$ 行出力せよ。
$i$ 行目には $i$ 個目のクエリに対する答えを出力せよ。

```input1
2
1 2
3 4
5 6
7 8
2
1 2 2 2 1 1
2 2 1 2 1 2
```

```output1
10
26
```

$1$ 個目のクエリについて、求めるべき値は $A_{1,2,1}+A_{2,2,1}=3+7=10$ です。よって、$10$ を出力します。

$2$ 個目のクエリについて、求めるべき値は $A_{2,1,1}+A_{2,1,2}+A_{2,2,1}+A_{2,2,2}=5+6+7+8=26$ です。よって、$26$ を出力します。

```input2
3
733 857 714
956 208 257
123 719 648
840 881 245
245 112 746
306 942 694
58 870 849
13 208 789
687 906 783
8
3 3 3 3 1 1
1 3 2 3 3 3
2 2 2 3 1 1
1 3 1 1 1 1
2 3 2 3 2 3
1 2 1 1 1 2
3 3 2 2 1 3
1 2 2 3 2 3
```

```output2
687
3917
551
1631
5180
3311
1010
4326
```