Score : $400$ points

## Problem Statement

We have $2N$ balls. Each ball has a color represented by an integer between $1$ and $N$ (inclusive). For each of the $N$ colors, there are exactly two balls of that color.

These balls are contained in $M$ cylinders placed perpendicularly to the floor. Initially, the $i$-th cylinder $(1 \leq i \leq M)$ contains $k_i$ balls, the $j$-th of which from the top $(1 \leq j \leq k_i)$ has the color $a_{i, j}$.

Your objective is to empty all $M$ cylinders by repeating the following operation.

- Choose two different non-empty cylinders and remove the topmost ball from each of them. Here, the two balls removed must be of the same color.

Determine whether the objective is achievable.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $2 \leq M \leq 2 \times 10^5$
- $1 \leq k_i\ (1 \leq i \leq M)$
- $1 \leq a_{i,j} \leq N\ (1 \leq i \leq M,1 \leq j \leq k_i)$
- $\sum_{i=1}^{M} k_i = 2N$
- For every $x\ (1 \leq x \leq N)$, there exists exactly two pairs of integers $(i,j)$ such that $1 \leq i \leq M$, $1 \leq j \leq k_i$, and $a_{i,j}=x$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $k_1$
> 
> $a_{1,1}$ $a_{1,2}$ $\ldots$ $a_{1,k_1}$
> 
> $k_2$
> 
> $a_{2,1}$ $a_{2,2}$ $\ldots$ $a_{2,k_2}$
> 
> $\hspace{2.1cm}\vdots$
> 
> $k_M$
> 
> $a_{M,1}$ $a_{M,2}$ $\ldots$ $a_{M,k_M}$

## Output

If the objective is achievable, print `Yes`; otherwise, print `No`.

```input1
2 2
2
1 2
2
1 2
```

```output1
Yes
```

The objective can be achieved as follows.

1. Choose the first and second cylinders to remove the topmost ball from each of them, which is allowed since the removed balls have the same color: $1$.
2. Choose the first and second cylinders to remove the topmost ball from each of them, which is allowed since the removed balls have the same color: $2$.

```input2
2 2
2
1 2
2
2 1
```

```output2
No
```

No operation can be done at all, which means it is impossible to achieve the objective of emptying the $M$ cylinders.