Score : $300$ points

## Problem Statement

We have a sequence of length $N$: $A=(a_1,\ldots,a_N)$. Additionally, you are given an integer $K$.

You can perform the following operation zero or more times.

- Choose an integer $i$ such that $1 \leq i \leq N-K$, then swap the values of $a_i$ and $a_{i+K}$.

Determine whether it is possible to sort $A$ in ascending order.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq N-1$
- $1 \leq a_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $a_1$ $\ldots$ $a_N$

## Output

If it is possible to sort $A$ in ascending order, print `Yes`; otherwise, print `No`.

```input1
5 2
3 4 1 3 4
```

```output1
Yes
```

The following sequence of operations sorts $A$ in ascending order.

- Choose $i=1$ to swap the values of $a_1$ and $a_3$. $A$ is now $(1,4,3,3,4)$.
- Choose $i=2$ to swap the values of $a_2$ and $a_4$. $A$ is now $(1,3,3,4,4)$.

```input2
5 3
3 4 1 3 4
```

```output2
No
```

```input3
7 5
1 2 3 4 5 5 10
```

```output3
Yes
```

No operations may be needed.