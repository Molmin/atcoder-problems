Score : $600$ points

## Problem Statement

You are given an integer sequence $A=(A_1,A_2,\cdots,A_N)$ of length $N$.

You will perform the following operation exactly once:

- Choose a non-empty subsequence of $A$ (not necessarily contiguous) and replace it with its cumulative sums.
More precisely, first choose a sequence of indices $(i_1,i_2,\cdots,i_k)$ such that $1 \leq i_1 &lt; i_2 &lt; \cdots &lt; i_k \leq N$.
The length of the sequence $k$ ($1 \leq k \leq N$) can be chosen freely.
Then, for each $j$ ($1 \leq j \leq k$), replace the value of $A_{i_j}$ with $\sum_{1 \leq x \leq j} A_{i_x}$.
This replacement is done simultaneously for all chosen indices.

Find, modulo $10^9+7$, the number of possible sequences $A$ after the operation.

## Constraints

- $1 \leq N \leq 100$
- $-10 \leq A_i \leq 10$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
3
1 1 2
```

```output1
4
```

The possible sequences $A$ after the operation are as follows:

- $A=(1,1,2)$: This can be achieved with $k=1$ and $(i_1)=(1)$.
- $A=(1,2,2)$: This can be achieved with $k=2$ and $(i_1,i_2)=(1,2)$.
- $A=(1,1,3)$: This can be achieved with $k=2$ and $(i_1,i_2)=(1,3)$.
- $A=(1,2,4)$: This can be achieved with $k=3$ and $(i_1,i_2,i_3)=(1,2,3)$.

```input2
4
1 -1 1 -1
```

```output2
8
```

```input3
5
0 0 0 0 0
```

```output3
1
```

```input4
40
2 -2 1 3 -3 -1 -2 -3 0 -1 -2 0 -3 0 0 2 0 -1 2 -2 -2 -1 3 -2 -2 -2 2 3 2 -3 0 -2 2 1 3 0 -1 0 -2 -3
```

```output4
420429545
```