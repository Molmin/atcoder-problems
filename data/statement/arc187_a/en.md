Score : $600$ points

## Problem Statement

You are given integers $N$, $K$, and a sequence $A = (A_1, \ldots, A_N)$ of length $N$.

Determine whether it is possible to make $A$ non-decreasing by performing the following operation at most $500000$ times, and if possible, provide one sequence of operations to do so.

- Choose an integer $i$ between $1$ and $N-1$, inclusive. Simultaneously replace $A_i$ with $A_{i+1} + K$, and $A_{i+1}$ with $A_i$.

## Constraints

- All input numbers are integers.
- $2 \leq N \leq 50$
- $1 \leq K \leq 50$
- $1 \leq A_i \leq 50$

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $\ldots$ $A_N$

## Output

If it is impossible to make $A$ non-decreasing within $500000$ operations, print `No`. Otherwise, print a solution in the following format, where $M$ is the number of operations $(0 \leq M \leq 500000)$, and $i_k$ is the $i$ chosen in the $k$-th operation $(1 \leq k \leq M)$:

> Yes
> 
> $M$
> 
> $i_1$ $\ldots$ $i_M$

If multiple valid solutions exist, any of them will be considered correct.

```input1
3 2
3 6 4
```

```output1
Yes
1
2
```

Let us perform the operation with $i=2$. This simultaneously replaces $A_2$ with $A_3 + 2 = 6$, and $A_3$ with $A_2 = 6$, making $A = (3,6,6)$.

Now $A$ is non-decreasing, so this output satisfies the conditions.

```input2
3 3
1 5 8
```

```output2
Yes
2
2 2
```

It is not necessary to minimize the number of operations.