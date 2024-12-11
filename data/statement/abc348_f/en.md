Score: $550$ points

## Problem Statement

There are $N$ sequences of length $M$, denoted as $A_1, A_2, \ldots, A_N$. The $i$-th sequence is represented by $M$ integers $A_{i,1}, A_{i,2}, \ldots, A_{i,M}$.

Two sequences $X$ and $Y$ of length $M$ are said to be similar if and only if the number of indices $i (1 \leq i \leq M)$ such that $X_i = Y_i$ is odd.

Find the number of pairs of integers $(i,j)$ satisfying $1 \leq i &lt; j \leq N$ such that $A_i$ and $A_j$ are similar.

## Constraints

- $1 \leq N \leq 2000$
- $1 \leq M \leq 2000$
- $1 \leq A_{i,j} \leq 999$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_{1,1}$ $A_{1,2}$ $\ldots$ $A_{1,M}$
> 
> $A_{2,1}$ $A_{2,2}$ $\ldots$ $A_{2,M}$
> 
> $\vdots$
> 
> $A_{N,1}$ $A_{N,2}$ $\ldots$ $A_{N,M}$

## Output

Print the answer as an integer.

```input1
3 3
1 2 3
1 3 4
2 3 4
```

```output1
1
```

The pair $(i,j) = (1,2)$ satisfies the condition because there is only one index $k$ such that $A_{1,k} = A_{2,k}$, which is $k=1$.

The pairs $(i,j) = (1,3), (2,3)$ do not satisfy the condition, making $(1,2)$ the only pair that does.

```input2
6 5
8 27 27 10 24
27 8 2 4 5
15 27 26 17 24
27 27 27 27 27
27 7 22 11 27
19 27 27 27 27
```

```output2
5
```