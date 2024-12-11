配点 : $400$ 点

## 問題文

長さ $N$ の数列 $A=(A_1,A_2,\ldots,A_N)$ と、整数 $K$ が与えられます。  

$A$ の連続部分列のうち、要素の和が $K$ になるものはいくつありますか？<br>
すなわち、以下の条件を全て満たす整数の組 $(l,r)$ はいくつありますか？

- $1\leq l\leq r\leq N$
- $\displaystyle\sum_{i=l}^{r}A_i = K$

## 制約

- $1\leq N \leq 2\times 10^5$
- $|A_i| \leq 10^9$
- $|K| \leq 10^{15}$
- 入力に含まれる値は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## 出力

答えを出力せよ。  

```input1
6 5
8 -3 5 7 0 -4
```

```output1
3
```

$(l,r)=(1,2),(3,3),(2,6)$ の $3$ 組が条件を満たします。

```input2
2 -1000000000000000
1000000000 -1000000000
```

```output2
0
```

条件を満たす $(l,r)$ の組が $1$ つも存在しないこともあります。