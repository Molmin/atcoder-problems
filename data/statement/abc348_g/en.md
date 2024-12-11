Score: $650$ points

## Problem Statement

You are given two integer sequences $A$ and $B$ of length $N$. For $k = 1, 2, \ldots, N$, solve the following problem:

- Consider choosing $k$ distinct integers between $1$ and $N$, inclusive. Let $S$ be the set of chosen integers. Find the maximum value of $\displaystyle (\sum_{i \in S} A_i) - \max_{i \in S} B_i$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $-10^9 \leq A_i \leq 10^9$
- $-2 \times 10^{14} \leq B_i \leq 2 \times 10^{14}$

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
> $A_N$ $B_N$

## Output

Print $N$ lines. The $i$-th line should contain the answer to the problem for $k=i$.

```input1
3
4 1
5 6
3 2
```

```output1
3
5
6
```

The following choices are optimal.

- $k = 1$: $S = \{1\}$
- $k = 2$: $S = \{1, 3\}$
- $k = 3$: $S = \{1, 2, 3\}$

```input2
2
0 1
0 1
```

```output2
-1
-1
```

```input3
6
9 7
2 4
7 1
-1000 0
3 4
8 5
```

```output3
6
10
17
20
22
-978
```