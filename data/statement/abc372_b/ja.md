配点 : $200$ 点

## 問題文

正整数 $M$ が与えられます。
以下の条件を全て満たす正整数 $N$ と非負整数列 $A=(A_1,A_2,\ldots,A_N)$ を一つ求めてください。

- $1\le N\le 20$
- $0\le A_i\le 10$ $(1\le i\le N)$
- $\displaystyle \sum_{i=1}^N 3^{A_i}=M$

ただし、制約下では条件を満たす $N$ と $A$ の組が必ず存在することが証明できます。

## 制約

- $1\le M\le 10^5$

## 入力

入力は以下の形式で標準入力から与えられる。

> $M$

## 出力

以下の形式で条件を満たす $N$ と $A$ を出力せよ。

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

なお、条件を満たす $N$ と $A$ の組が複数存在する場合は、どれを出力しても正答となる。

```input1
6
```

```output1
2
1 1
```

$N=2$ 、$A=(1,1)$ とすると $\displaystyle \sum_{i=1}^N 3^{A_i}=3+3=6$ より全ての条件を満たします。

他に $N=4$ 、 $A=(0,0,1,0)$ なども条件を満たします。

```input2
100
```

```output2
4
2 0 2 4
```

```input3
59048
```

```output3
20
0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 9 9
```

$1\le N\le 20$ という制約に注意してください。