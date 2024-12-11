Score: $250$ points

## Problem Statement

You are given three sequences $A=(A_1,\ldots,A_N)$, $B=(B_1,\ldots,B_M)$, and $C=(C_1,\ldots,C_L)$.

Additionally, a sequence $X=(X_1,\ldots,X_Q)$ is given. For each $i=1,\ldots,Q$, solve the following problem:

Problem: Is it possible to select one element from each of $A$, $B$, and $C$ so that their sum is $X_i$?

## Constraints

- $1 \leq N,M,L \leq 100$
- $0 \leq A_i, B_i ,C_i \leq 10^8$
- $1 \leq Q \leq 2\times 10^5$
- $0 \leq X_i \leq 3\times 10^8$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$
> 
> $M$
> 
> $B_1$ $\ldots$ $B_M$
> 
> $L$ 
> 
> $C_1$ $\ldots$ $C_L$
> 
> $Q$
> 
> $X_1$ $\ldots$ $X_Q$

## Output

Print $Q$ lines.
The $i$-th line should contain `Yes` if it is possible to select one element from each of $A$, $B$, and $C$ so that their sum is $X_i$, and `No` otherwise.

```input1
3
1 2 3
2
2 4
6
1 2 4 8 16 32
4
1 5 10 50
```

```output1
No
Yes
Yes
No
```

- It is impossible to select one element from each of $A$, $B$, and $C$ so that their sum is $1$.
- Selecting $1$, $2$, and $2$ from $A$, $B$, and $C$, respectively, makes the sum $5$.
- Selecting $2$, $4$, and $4$ from $A$, $B$, and $C$, respectively, makes the sum $10$.
- It is impossible to select one element from each of $A$, $B$, and $C$ so that their sum is $50$.