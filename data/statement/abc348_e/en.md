Score: $475$ points

## Problem Statement

You are given a tree with $N$ vertices. The vertices are numbered $1$ to $N$, and the $i$-th edge connects vertices $A_i$ and $B_i$.

You are also given a sequence of positive integers $C = (C_1, C_2, \ldots ,C_N)$ of length $N$. Let $d(a, b)$ be the number of edges between vertices $a$ and $b$, and for $x = 1, 2, \ldots, N$, let $\displaystyle f(x) = \sum_{i=1}^{N} (C_i \times d(x, i))$. Find $\displaystyle \min_{1 \leq v \leq N} f(v)$.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i, B_i \leq N$
- The given graph is a tree.
- $1 \leq C_i \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_{N - 1}$ $B_{N - 1}$
> 
> $C_1$ $C_2$ $\cdots$ $C_N$

## Output

Print the answer in one line.

```input1
4
1 2
1 3
2 4
1 1 1 2
```

```output1
5
```

For example, consider calculating $f(1)$. We have $d(1, 1) = 0, d(1, 2) = 1, d(1, 3) = 1, d(1, 4) = 2$.<br>
Thus, $f(1) = 0 \times 1 + 1 \times 1 + 1 \times 1 + 2 \times 2 = 6$.

Similarly, $f(2) = 5, f(3) = 9, f(4) = 6$. Since $f(2)$ is the minimum, print `5`.

```input2
2
2 1
1 1000000000
```

```output2
1
```

$f(2) = 1$, which is the minimum.

```input3
7
7 3
2 5
2 4
3 1
3 6
2 1
2 7 6 9 3 4 6
```

```output3
56
```