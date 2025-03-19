Score : $500$ points

## Problem Statement

There is an empty array $A$. For $i = 1,2,\ldots,N$, perform the following operation in order:

- Insert the number $i$ into $A$ so that it becomes the $P_i$-th element from the beginning.-   - More precisely, replace $A$ with the concatenation of the first $P_i-1$ elements of $A$, then $i$, then the remaining elements of $A$ starting from the $P_i$-th element, in this order.

Output the final array $A$ after all operations have been completed.

## Constraints

- $1 \leq N \leq 5\times 10^5$
- $1 \leq P_i \leq i$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$

## Output

Let the final array be $A = (A_1, A_2, \ldots, A_N)$.
Print $A_1, A_2, \ldots, A_N$ in this order, separated by spaces.

```input1
4
1 1 2 1
```

```output1
4 2 3 1
```

The operations are performed as follows:

- Insert the number $1$ so that it becomes the 1st element of $A$. Now, $A = (1)$.
- Insert the number $2$ so that it becomes the 1st element of $A$. Now, $A = (2, 1)$.
- Insert the number $3$ so that it becomes the 2nd element of $A$. Now, $A = (2, 3, 1)$.
- Insert the number $4$ so that it becomes the 1st element of $A$. Now, $A = (4, 2, 3, 1)$.

```input2
5
1 2 3 4 5
```

```output2
1 2 3 4 5
```