Score : $1000$ points

## Problem Statement

There are $N$ buildings under construction arranged in a row, numbered $1, 2, \ldots, N$ from left to right.

Given is an integer sequence $X$ of length $N$. The height of Building $i$, $H_i$, can be one of the integers between $1$ and $X_i$ (inclusive).

For each $i$ such that $1 \leq i \leq N$, let us define $P_i$ as follows:

- If there is an integer $j (1 \leq j &lt; i)$ such that $H_j &gt; H_i$, $P_i$ is the maximum such $j$. Otherwise, $P_i$ is $-1$.

Considering all possible combinations of the buildings' heights, find the number of integer sequences that $P$ can be, modulo $1000000007$.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq X_i \leq 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $X_2$ $\cdots$ $X_N$

## Output

Print the number of integer sequences that $P$ can be when all possible combinations of the buildings' heights are considered, modulo $1000000007$.

```input1
3
3 2 1
```

```output1
4
```

We have six candidates for $H$, as follows:

- $H = (1, 1, 1)$, for which $P$ is $(-1, -1, -1)$;
- $H = (1, 2, 1)$, for which $P$ is $(-1, -1, 2)$;
- $H = (2, 1, 1)$, for which $P$ is $(-1, 1, 1)$;
- $H = (2, 2, 1)$, for which $P$ is $(-1, -1, 2)$;
- $H = (3, 1, 1)$, for which $P$ is $(-1, 1, 1)$;
- $H = (3, 2, 1)$, for which $P$ is $(-1, 1, 2)$.

Thus, there are four integer sequences that $P$ can be: $(-1, -1, -1), (-1, -1, 2), (-1, 1, 1)$, and $(-1, 1, 2)$.

```input2
3
1 1 2
```

```output2
1
```

We have two candidates for $H$, as follows:

- $H = (1, 1, 1)$, for which $P$ is $(-1, -1, -1)$;
- $H = (1, 1, 2)$, for which $P$ is $(-1, -1, -1)$.

Thus, there is one integer sequence that $P$ can be.

```input3
5
2 2 2 2 2
```

```output3
16
```

```input4
13
3 1 4 1 5 9 2 6 5 3 5 8 9
```

```output4
31155
```