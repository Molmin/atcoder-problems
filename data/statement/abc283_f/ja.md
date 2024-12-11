配点 : $500$ 点

## 問題文

$(1,2,\ldots,N)$ の順列 $P=(P _ 1,P _ 2,\ldots,P _ N)$ が与えられます。

すべての $i\ (1\leq i\leq N)$ に対して、以下の値を求めてください。

- $D _ i=\displaystyle\min_{j\neq i}\left\lparen\left\lvert P _ i-P _ j\right\rvert+\left\lvert i-j\right\rvert\right\rparen$

順列とは

$(1,2,\ldots,N)$ の順列とは、$(1,2,\ldots,N)$ を並べ替えて得られる数列のことをいいます。
つまり、長さ $N$ の数列 $A$ は $i\ (1\leq i\leq N)$ がその中にちょうど $1$ 回だけ現れるとき、かつそのときに限り$(1,2,\ldots,N)$ の順列です。

## 制約

- $2 \leq N \leq 2\times10^5$
- $1 \leq P _ i \leq N\ (1\leq i\leq N)$
- $i\neq j\implies P _ i\neq P _ j$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $P _ 1$ $P _ 2$ $\ldots$ $P _ N$

## 出力

$D _ i\ (1\leq i\leq N)$ を $i$ の昇順に空白区切りで出力せよ。

```input1
4
3 2 4 1
```

```output1
2 2 3 3
```

たとえば、$i=1$ について

- $j=2$ のとき、$\left\lvert P _ i-P _ j\right\rvert=1,\left\lvert i-j\right\rvert=1$ です。
- $j=3$ のとき、$\left\lvert P _ i-P _ j\right\rvert=1,\left\lvert i-j\right\rvert=2$ です。
- $j=4$ のとき、$\left\lvert P _ i-P _ j\right\rvert=2,\left\lvert i-j\right\rvert=3$ です。

よって、$j=2$ のとき $\left\lvert P _ i-P _ j\right\rvert+\left\lvert i-j\right\rvert=2$ で最小となるので、$D _ 1=2$ です。

```input2
7
1 2 3 4 5 6 7
```

```output2
2 2 2 2 2 2 2
```

```input3
16
12 10 7 14 8 3 11 13 2 5 6 16 4 1 15 9
```

```output3
3 3 3 5 3 4 3 3 4 2 2 4 4 4 4 7
```