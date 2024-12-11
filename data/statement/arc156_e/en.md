Score : $800$ points

## Problem Statement

Find the number, modulo $998244353$, of **good sequences** of length $N$ whose elements are integers between $0$ and $M$, inclusive, and whose sum is at most $K$.

Here, a length-$N$ sequence $X=(X_1,X_2,\ldots,X_N)$ is said to be good if and only if there is a graph $G$ that satisfies all of the following conditions.

- $G$ is a graph with $N$ vertices numbered $1$ to $N$ without self-loops. (It may have multi-edges.)
- For each $i\ (1\leq i \leq N)$, the degree of vertex $i$ is $X_i$.
- For each $i\ (1\leq i \leq N)$, no edge connects vertex $i$ and vertex $i+1$. Here, vertex $N+1$ means vertex $1$.

## Constraints

- $4 \leq N \leq 3000$
- $0 \leq M \leq 3000$
- $0\leq K \leq NM$
- All numbers in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$

## Output

Print the answer.

```input1
4 1 2
```

```output1
3
```

The following three sequences are good.

- $(0,0,0,0)$
- $(0,1,0,1)$
- $(1,0,1,0)$

```input2
10 0 0
```

```output2
1
```

```input3
314 159 26535
```

```output3
248950743
```

Print the count modulo $998244353$.