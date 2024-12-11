Score : $500$ points

## Problem Statement

A permutation $P=(P_1,P_2,\ldots,P_N)$ of $(1,2,\ldots,N)$ is given.

Determine whether it is possible to rearrange $P$ in ascending order by performing the following operation at most $2\times 10^3$ times, and if possible, show one such sequence of operations.

- Choose integers $i$ and $j$ such that $1\leq i \leq N-1,0 \leq j \leq N-2$. Let $Q = (Q_1, Q_2,\ldots,Q_{N-2})$ be the sequence obtained by removing $(P_i,P_{i+1})$ from $P$. Replace $P$ with $(Q_1,\ldots,Q_j, P_i, P_{i+1}, Q_{j+1},\ldots,Q_{N-2})$.

## Constraints

- $2 \leq N \leq 10^3$
- $P$ is a permutation of $(1,2,\ldots,N)$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$

## Output

If $P$ cannot be rearranged in ascending order within $2\times 10^3$ operations, print `No`. If it can be rearranged in ascending order, let $M\ (0 \leq M \leq 2\times 10^3)$ be the number of operations, and $i_k,j_k$ be the chosen $i,j$ for the $k$-th operation $(1\leq k \leq M)$, and print them in the following format:

> Yes
> 
> $M$
> 
> $i_1$ $j_1$
> 
> $i_2$ $j_2$
> 
> $\vdots$
> 
> $i_M$ $j_M$

If there are multiple solutions, any of them will be considered correct.

```input1
5
1 4 2 3 5
```

```output1
Yes
1
3 1
```

Perform the operation with $i=3,j=1$.

Then, $Q=(P_1,P_2,P_5)=(1,4,5)$, so you get $P=(Q_1,P_3,P_4,Q_2,Q_3) = (1,2,3,4,5)$.

Thus, $P$ can be rearranged in ascending order with one operation.

```input2
2
2 1
```

```output2
No
```

It can be proved that $P$ cannot be rearranged in ascending order within $2\times 10^3$ operations.

```input3
4
3 4 1 2
```

```output3
Yes
3
3 0
1 2
3 0
```

There is no need to minimize the number of operations.