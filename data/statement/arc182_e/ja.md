配点 : $800$ 点

## 問題文

正整数 $N,M,K$ と非負整数 $C$ と長さ $N$ の整数列 $A=(A_1,A_2,\ldots,A_N)$ が与えられます。

$\displaystyle \sum_{k=0}^{K-1}\min_{1\le i\le N}\lbrace(Ck+A_i)\ \mathrm{mod}\ M \rbrace$ を求めてください。

## 制約

- $1\le N\le 10^5$
- $1\le M\le 10^9$
- $0\le C &lt; M$
- $1\le K\le 10^9$
- $0\le A_i &lt; M$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $C$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## 出力

答えを出力せよ。

```input1
2 5 3 3
1 3
```

```output1
4
```

$k=0$ なら $\lbrace(3k+1)\ \mathrm{mod}\ 5 \rbrace=1$ 、 $\lbrace(3k+3)\ \mathrm{mod}\ 5 \rbrace=3$ となるので、 $\displaystyle \min_{1\le i\le N}\lbrace(Ck+A_i)\ \mathrm{mod}\ M \rbrace=1$ です。

$k=1$ なら $\lbrace(3k+1)\ \mathrm{mod}\ 5 \rbrace=4$ 、 $\lbrace(3k+3)\ \mathrm{mod}\ 5 \rbrace=1$ となるので、 $\displaystyle \min_{1\le i\le N}\lbrace(Ck+A_i)\ \mathrm{mod}\ M \rbrace=1$ です。

$k=2$ なら $\lbrace(3k+1)\ \mathrm{mod}\ 5 \rbrace=2$ 、 $\lbrace(3k+3)\ \mathrm{mod}\ 5 \rbrace=4$ となるので、 $\displaystyle \min_{1\le i\le N}\lbrace(Ck+A_i)\ \mathrm{mod}\ M \rbrace=2$ です。

よって、答えは $1+1+2=4$ となります。したがって、 $4$ を出力してください。

```input2
5 4 3 182
0 3 2 1 2
```

```output2
0
```

```input3
5 718 651 193855
3 532 44 109 58
```

```output3
29484897
```