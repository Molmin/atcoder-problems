Score : $500$ points

## Problem Statement

You are given an integer sequence $A=(A_1,A_2,\dots,A_N)$ of length $N$.

You can rearrange $A$ freely. Find the maximum value that $\sum_{i=1}^{N-1} ((A_{i+1} - A_i) \bmod K)$ can take after rearranging.

Here, $x \bmod K$ denotes the integer $y$ such that $0 \le y &lt; K$ and $x - y$ is a multiple of $K$. For example, $-3 \bmod 8 = 5$, and $9 \bmod 6 = 3$.

## Constraints

- $2 \le N \le 2 \times 10^5$
- $1 \le K \le 10^9$
- $0 \le A_i &lt; K$

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
3 4
0 1 2
```

```output1
6
```

One optimal solution is to rearrange $A$ into $(2,1,0)$ to achieve $(1 - 2) \bmod 4 + (0 - 1) \bmod 4 = 3 + 3 = 6$.

```input2
7 123
11 34 56 0 32 100 78
```

```output2
638
```