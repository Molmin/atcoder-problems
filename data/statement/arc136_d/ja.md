配点 : $600$ 点

## 問題文

長さ $N$ の整数列 $A=(A_1,A_2,\cdots,A_N)$ が与えられます．

整数の組 $(i,j)$ ($1 \leq i &lt; j \leq N$) であって，$A_i+A_j$ を筆算で計算する際に繰り上がりが発生しないものの個数を求めてください．

## 制約

- $2 \leq N \leq 10^6$
- $0 \leq A_i \leq 10^6-1$
- 入力される値はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## 出力

答えを出力せよ．

```input1
4
4 8 12 90
```

```output1
3
```

数えるべき組 $(i,j)$ は，$(1,3),(1,4),(2,4)$ の $3$ つです．

例えば，$A_1+A_3=4+12$ を計算する際には繰り上がりが発生しないので，$(i,j)=(1,3)$ は数えます．
反対に，$A_3+A_4=12+90$ を計算する際には繰り上がりが発生するので，$(i,j)=(3,4)$ は数えません．

```input2
20
313923 246114 271842 371982 284858 10674 532090 593483 185123 364245 665161 241644 604914 645577 410849 387586 732231 952593 249651 36908
```

```output2
6
```

```input3
5
1 1 1 1 1
```

```output3
10
```