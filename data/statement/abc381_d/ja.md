配点 : $425$ 点

## 問題文

正整数からなる（空でも良い）数列 $X=(X_1,X_2,\ldots)$ が以下の $3$ つの条件をすべてみたすとき、かつそのときに限り、$X$ を **1122 数列** と呼びます。<br>
（1122 数列の定義はF問題と共通です。）

- $\lvert X \rvert$ は偶数である。ここで、$\lvert X \rvert$ は $X$ の長さを表す。
- $1\leq i\leq \frac{\lvert X \rvert}{2}$ をみたす整数 $i$ について、$X_{2i-1}$ と $X_{2i}$ は等しい。
- 各正整数は $X$ に現れないか、ちょうど $2$ 回現れるかのどちらかである。すなわち、$X$ に含まれる正整数は $X$ にちょうど $2$ 回ずつ登場する。

正整数からなる長さ $N$ の数列 $A=(A_1,A_2,\ldots,A_N)$ が与えられるので、$A$ の **連続する部分列** であって、1122 数列であるようなもののうち最長のものの長さを出力してください。

## 制約

- $1\leq N \leq 2\times 10^5$
- $1\leq A_i \leq N$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## 出力

$A$ の連続する部分列であって、1122 数列であるようなもののうち最長のものの長さを出力せよ。

```input1
8
2 3 1 1 2 2 1 1
```

```output1
4
```

例えば $A$ の $3$ 項目から $6$ 項目までの連続部分列をとると $(1,1,2,2)$ となりますが、これは長さが $4$ の 1122 数列となっています。<br>
これより長い部分列であって、1122 数列の条件をみたすようなものは存在しないため、$4$ を出力します。

```input2
3
1 2 2
```

```output2
2
```

```input3
1
1
```

```output3
0
```

項数が $0$ の列も 1122 数列の条件をみたしていることに注意してください。