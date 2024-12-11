Score : $575$ points

## Problem Statement

You are given permutations $P = (P_1, P_2, \ldots, P_N)$ and $A = (A_1, A_2, \ldots, A_N)$ of $(1,2,\ldots,N)$.

You can perform the following operation any number of times, possibly zero:

- replace $A_i$ with $A_{P_i}$ **simultaneously** for all $i=1,2,\ldots,N$.

Print the lexicographically smallest $A$ that can be obtained.

What is lexicographical order?

 For sequences of length $N$, $A = (A_1, A_2, \ldots, A_N)$ and $B = (B_1, B_2, \ldots, B_N)$, $A$ is lexicographically smaller than $B$ if and only if:

- there exists an integer $i\ (1\leq i\leq N)$ such that $A_i &lt; B_i$, and $A_j = B_j$ for all $1\leq j &lt; i$.

## Constraints

- $1\leq N\leq2\times10^5$
- $1\leq P_i\leq N\ (1\leq i\leq N)$
- $P_i\neq P_j\ (1\leq i&lt;j\leq N)$
- $1\leq A_i\leq N\ (1\leq i\leq N)$
- $A_i\neq A_j\ (1\leq i&lt;j\leq N)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Let $(A_1, A_2, \ldots, A_N)$ be the lexicographically smallest $A$ that can be obtained. Print $A_1, A_2, \ldots, A_N$ in this order, separated by spaces, in one line.

```input1
6
3 1 5 6 2 4
4 3 1 6 2 5
```

```output1
1 4 2 5 3 6
```

Initially, $A = (4, 3, 1, 6, 2, 5)$.

Repeating the operation yields the following.

- $A = (1, 4, 2, 5, 3, 6)$
- $A = (2, 1, 3, 6, 4, 5)$
- $A = (3, 2, 4, 5, 1, 6)$
- $A = (4, 3, 1, 6, 2, 5)$

After this, $A$ will revert to the original state every four operations.

Therefore, print the lexicographically smallest among these, which is `1 4 2 5 3 6`.

```input2
8
3 5 8 7 2 6 1 4
1 2 3 4 5 6 7 8
```

```output2
1 2 3 4 5 6 7 8
```

You may choose to perform no operations.

```input3
26
24 14 4 20 15 19 16 11 23 22 12 18 21 3 6 8 26 2 25 7 13 1 5 9 17 10
15 3 10 1 13 19 22 24 20 4 14 23 7 26 25 18 11 6 9 12 2 21 5 16 8 17
```

```output3
4 1 22 18 20 13 14 6 15 11 3 26 2 12 5 23 9 10 25 24 7 17 16 21 19 8
```