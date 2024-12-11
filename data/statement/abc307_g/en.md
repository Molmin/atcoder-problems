Score : $550$ points

## Problem Statement

You are given an integer sequence of length $N$: $A=(A_1,A_2,\ldots,A_N)$.

Takahashi can perform the following two operations any number of times, possibly zero, in any order.

- Choose an integer $i$ such that $1\leq i\leq N-1$, and decrease $A_i$ by $1$ and increase $A_{i+1}$ by $1$.
- Choose an integer $i$ such that $1\leq i\leq N-1$, and increase $A_i$ by $1$ and decrease $A_{i+1}$ by $1$.

Find the minimum number of operations required to make the sequence $A$ satisfy the following condition:

- $\lvert A_i-A_j\rvert\leq 1$ for any pair $(i,j)$ of integers between $1$ and $N$, inclusive.

## Constraints

- $2 \leq N \leq 5000$
- $\lvert A_i \rvert \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print a single line containing the minimum number of operations required to make the sequence $A$ satisfy the condition in the problem statement.

```input1
3
2 7 6
```

```output1
4
```

You can make $A$ satisfy the condition with four operations as follows.

- Choose $i=1$, and increase $A_1$ by $1$ and decrease $A_2$ by $1$, making $A=(3,6,6)$.
- Choose $i=1$, and increase $A_1$ by $1$ and decrease $A_2$ by $1$, making $A=(4,5,6)$.
- Choose $i=2$, and increase $A_2$ by $1$ and decrease $A_3$ by $1$, making $A=(4,6,5)$.
- Choose $i=1$, and increase $A_1$ by $1$ and decrease $A_2$ by $1$, making $A=(5,5,5)$.

This is the minimum number of operations required, so print $4$.

```input2
3
-2 -5 -2
```

```output2
2
```

You can make $A$ satisfy the condition with two operations as follows:

- Choose $i=1$, and decrease $A_1$ by $1$ and increase $A_2$ by $1$, making $A=(-3,-4,-2)$.
- Choose $i=2$, and increase $A_2$ by $1$ and decrease $A_3$ by $1$, making $A=(-3,-3,-3)$.

This is the minimum number of operations required, so print $2$.

```input3
5
1 1 1 1 -7
```

```output3
13
```

By performing the operations appropriately, with $13$ operations you can make $A=(0,0,-1,-1,-1)$, which satisfies the condition in the problem statement.
It is impossible to satisfy it with $12$ or fewer operations, so print $13$.