Score : $400$ points

## Problem Statement

There are $N$ buildings, Building $1$, Building $2$, $\ldots$, Building $N$, arranged in a line in this order. The height of Building $i$ $(1 \leq i \leq N)$ is $H_i$.

For each $i = 1, 2, \ldots, N$, find the number of integers $j$ $(i &lt; j \leq N)$ satisfying the following condition:

- There is no building taller than Building $j$ between Buildings $i$ and $j$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq H_i \leq N$
- $H_i\neq H_j\ (i\neq j)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $H_1$ $H_2$ $\ldots$ $H_N$

## Output

For each $i = 1, 2, \ldots, N$, let $c_i$ be the number of $j$ satisfying the condition. Print $c_1, c_2, \ldots, c_N$ in order, separated by spaces.

```input1
5
2 1 4 3 5
```

```output1
3 2 2 1 0
```

For $i=1$, the integers $j$ satisfying the condition are $2$, $3$, and $5$: there are three. (Between Buildings $1$ and $4$, there is a building taller than Building $4$, which is Building $3$, so $j=4$ does not satisfy the condition.) Therefore, the first number in the output is $3$.

```input2
4
1 2 3 4
```

```output2
3 2 1 0
```

```input3
10
1 9 6 5 2 7 10 4 8 3
```

```output3
2 3 3 3 2 1 2 1 1 0
```