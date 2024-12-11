Score : $500$ points

## Problem Statement

You are given a sequence of length $M$ consisting of integers between $1$ and $N-1$, inclusive: $A=(A_1,A_2,\dots,A_M)$.
Answer the following question for $i=1, 2, \dots, M$.

- There is a sequence $B=(B_1,B_2,\dots,B_N)$. Initially, we have $B_j=j$ for each $j$. Let us perform the following operation for $k=1, 2, \dots, i-1, i+1, \dots, M$ in this order (in other words, for integers $k$ between $1$ and $M$ except $i$ in ascending order).-   - Swap the values of $B_{A_k}$ and $B_{A_k+1}$.
- After all the operations, let $S_i$ be the value of $j$ such that $B_j=1$. Find $S_i$.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $1 \leq M \leq 2\times 10^5$
- $1 \leq A_i \leq N-1\ (1\leq i \leq M)$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_M$

## Output

Print $M$ lines.
The $i$-th line $(1\leq i \leq M)$ should contain the value $S_i$ as an integer.

```input1
5 4
1 2 3 2
```

```output1
1
3
2
4
```

For $i = 2$, the operations change $B$ as follows.

- Initially, $B = (1,2,3,4,5)$.
- Perform the operation for $k=1$. That is, swap the values of $B_1$ and $B_2$, making $B = (2,1,3,4,5)$.
- Perform the operation for $k=3$. That is, swap the values of $B_3$ and $B_4$, making $B = (2,1,4,3,5)$.
- Perform the operation for $k=4$. That is, swap the values of $B_2$ and $B_3$, making $B = (2,4,1,3,5)$.

After all the operations, we have $B_3=1$, so $S_2 = 3$.

Similarly, we have the following.

- For $i=1$: performing the operation for $k=2,3,4$ in this order makes $B=(1,4,3,2,5)$, so $S_1=1$.
- For $i=3$: performing the operation for $k=1,2,4$ in this order makes $B=(2,1,3,4,5)$, so $S_3=2$.
- For $i=4$: performing the operation for $k=1,2,3$ in this order makes $B=(2,3,4,1,5)$, so $S_4=4$.

```input2
3 3
2 2 2
```

```output2
1
1
1
```

```input3
10 10
1 1 1 9 4 4 2 1 3 3
```

```output3
2
2
2
3
3
3
1
3
4
4
```