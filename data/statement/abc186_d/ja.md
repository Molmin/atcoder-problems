配点 : $400$ 点

## 問題文

$N$ 個の整数 $A_1,\ldots,A_N$ が与えられます。

$1\leq i &lt; j \leq N$ を満たす全ての $i,j$ の組についての $|A_i-A_j|$ の和を求めてください。

すなわち、$\displaystyle{\sum_{i=1}^{N-1}\sum_{j=i+1}^{N} |A_i-A_j|}$ を求めてください。

## 制約

- $2 \leq N \leq 2 \times 10^5$
- $|A_i|\leq 10^8$
- $A_i$ は整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## 出力

答えを出力せよ。

```input1
3
5 1 2
```

```output1
8
```

$|5-1|+|5-2|+|1-2|=8$ です。

```input2
5
31 41 59 26 53
```

```output2
176
```