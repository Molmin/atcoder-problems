Score : $700$ points

## Problem Statement

Consider a directed graph $G$ with $N$ vertices numbered $1$ to $N$ that satisfies all of the following conditions.

- <p>$G$ is a tournament. In other words, $G$ has no multi-edges or self-loops, and for any two vertices $u,v$ of $G$, exactly one of the edges $u \rightarrow v$ and $v \rightarrow u$ exists.</p>
- <p>Among the edges of $G$, exactly $M$ are directed from a vertex with a smaller number to a vertex with a larger number.</p>

Find the total number of strongly connected components over all such directed graphs $G$, modulo $998244353$.

## Constraints

- $1 \le N \le 30$
- $0 \le M \le \frac{N(N-1)}{2}$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
3 1
```

```output1
7
```

Below are the three directed graphs $G$ that satisfy the conditions. The numbers of their strongly connected components are $3,1,3$ from left to right, so the answer is $7$.

![](https://img.atcoder.jp/arc163/ee8acabc2a7d48164b3cc568e88f0840.png)

```input2
6 2
```

```output2
300
```

```input3
25 156
```

```output3
902739687
```