Score : $1200$ points

## Problem Statement

You are given two strings $S$ and $T$ of length $N$ consisting of `A` and `B`. Let $s_i$ denote the $i$-th character of $S$.

You can perform the following operation on $S$ any number of times, possibly zero:

- Choose an integer pair $(i, j)$ satisfying the following conditions:-   - $1 \leq i &amp;lt; j \leq N$
-   - $s_i = s_j =$ `A`
-   - $s_{i+1} = s_{i+2} = \ldots = s_{j-1} =$ `B`
- Then, simultaneously replace each of $s_i, s_{i+1}, \ldots, s_j$ with the other character (`A` becomes `B`, and `B` becomes `A`).

Determine the minimum number of operations required to make $S$ equal to $T$. If it is impossible, print `-1`.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $S$ and $T$ are strings of length $N$ consisting of `A` and `B`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $T$

## Output

If it is possible to make $S$ equal to $T$, print the minimum number of operations required; otherwise, output `-1`.

```input1
5
AAABA
BAAAB
```

```output1
2
```

You can make $S$ equal to $T$ in two operations as follows:

1. Perform the operation with $(i, j) = (2, 3)$. $S$ becomes `ABBBA`.
2. Perform the operation with $(i, j) = (1, 5)$. $S$ becomes `BAAAB`.

It is impossible to make $S$ equal to $T$ in fewer than two operations, so the answer is `2`.

```input2
1
A
B
```

```output2
-1
```

It is impossible to make $S$ equal to $T$. Note that you must choose $(i, j)$ with $i &lt; j$.

```input3
1
A
A
```

```output3
0
```

Without any operation, $S$ is already equal to $T$.

```input4
10
AAABBABAAB
BBABBAAABB
```

```output4
7
```