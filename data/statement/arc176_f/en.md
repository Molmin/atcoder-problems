Score: $1000$ points

## Problem Statement

There is a tree with $NM+1$ vertices numbered $0$ to $NM$. The $i$-th edge ($1 \le i \le NM$) connects vertices $i$ and $\max(i-N,0)$.

Initially, vertex $i$ is colored with color $i \bmod N$. You can perform the following operation zero or more times:

- Choose two vertices $u$ and $v$ connected by an edge. Repaint the color of vertex $u$ with that of vertex $v$.

Find the number, modulo $998244353$, of possible trees after the operations. Two trees are distinguished if and only if some vertex has different colors.

## Constraints

- $1 \le N, M \le 2 \times 10^5$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
3 1
```

```output1
42
```

One possible sequence of operations is as follows. Including this one, there are $42$ possible final trees.

![](https://img.atcoder.jp/arc176/star.png)

```input2
4 2
```

```output2
219100
```

```input3
20 24
```

```output3
984288778
```

```input4
123456 112233
```

```output4
764098676
```