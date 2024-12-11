Score : $600$ points

## Problem Statement

Given is a permutation $P=(P_1,P_2,\ldots,P_N)$ of $1,2,\ldots,N$, and an integer $X$.

Additionally, $Q$ queries are given.
The $i$-th query is represented as a triple of numbers $(C_i,L_i,R_i)$. Each query does the following operation on the permutation $P$.

- If $C_i=1$: sort $P_{L_i},P_{L_i+1},\ldots,P_{R_i}$ in ascending order.
- If $C_i=2$: sort $P_{L_i},P_{L_i+1},\ldots,P_{R_i}$ in descending order.

In the final permutation $P$ after executing all queries in the given order, find $i$ such that $P_i=X$.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $1 \leq Q \leq 2\times 10^5$
- $1 \leq X \leq N$
- $(P_1,P_2,\ldots,P_N)$ is a permutation of $(1,2,\ldots,N)$.
- $1 \leq C_i \leq 2$
- $1 \leq L_i \leq R_i \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$ $X$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$
> 
> $C_1$ $L_1$ $R_1$
> 
> $C_2$ $L_2$ $R_2$
> 
> $\vdots$
> 
> $C_Q$ $L_Q$ $R_Q$

## Output

Print the answer.

```input1
5 2 1
1 4 5 2 3
1 3 5
2 1 3
```

```output1
3
```

Initially, the permutation is $P=[1,4,5,2,3]$.
The queries change it as follows.

- $1$-st query sorts the $3$-rd through $5$-th elements in ascending order, making $P=[1,4,2,3,5]$.
- $2$-nd query sorts the $1$-st through $3$-rd elements in descending order, making $P=[4,2,1,3,5]$.

In the final permutation, we have $P_3=1$, so $3$ should be printed.

```input2
7 3 3
7 5 3 1 2 4 6
1 1 7
2 3 6
2 5 7
```

```output2
7
```

The final permutation is $P=[1,2,6,5,7,4,3]$.