配点 : $600$ 点

## 問題文

長さ $N$ の整数列 $A=(A_1,A_2,\cdots,A_N)$ が与えられます．

あなたは，以下の操作を好きな回数繰り返すことができます．

- 整数 $i$ ($1 \leq i \leq N$) を選び，$A_{i-1},A_i,A_{i+1}$ にそれぞれ $-1,2,-1$ を足す．
ただしここで，$A_0$ は $A_N$ を指すものとし，また $A_{N+1}$ は $A_1$ を指すものとする．

$A$ のすべての要素を $0$ にすることが可能かどうか判定し，また可能な場合は必要な最小の操作回数を求めてください．

## 制約

- $3 \leq N \leq 200000$
- $-100 \leq A_i \leq 100$
- 入力される値はすべて整数である

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## 出力

$A$ のすべての要素を $0$ にすることが不可能なら，`-1` と出力せよ．
可能ならば，必要な最小の操作回数を出力せよ．

```input1
4
3 0 -1 -2
```

```output1
5
```

以下のように $5$ 回操作すればよいです．

- $i=2$ を選んで操作する．$A=(2,2,-2,-2)$ になる．
- $i=3$ を選んで操作する．$A=(2,1,0,-3)$ になる．
- $i=3$ を選んで操作する．$A=(2,0,2,-4)$ になる．
- $i=4$ を選んで操作する．$A=(1,0,1,-2)$ になる．
- $i=4$ を選んで操作する．$A=(0,0,0,0)$ になる．

```input2
3
1 0 -2
```

```output2
-1
```

```input3
4
1 -1 1 -1
```

```output3
-1
```

```input4
10
-28 -3 90 -90 77 49 -31 48 -28 -84
```

```output4
962
```