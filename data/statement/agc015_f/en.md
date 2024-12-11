Score : $1700$ points

## Problem Statement

Kenus, the organizer of *International Euclidean Olympiad*, is seeking a pair of two integers that requires many steps to find its greatest common divisor using the Euclidean algorithm.

You are given $Q$ queries. The $i$-th query is represented as a pair of two integers $X_i$ and $Y_i$, and asks you the following: among all pairs of two integers $(x,y)$ such that $1 \leq x \leq X_i$ and $1 \leq y \leq Y_i$, find the maximum *Euclidean step count* (defined below), and how many pairs have the maximum step count, modulo $10^9+7$.

Process all the queries. Here, the Euclidean step count of a pair of two non-negative integers $(a,b)$ is defined as follows:

- $(a,b)$ and $(b,a)$ have the same Euclidean step count.
- $(0,a)$ has a Euclidean step count of $0$.
- If $a &gt; 0$ and $a \leq b$, let $p$ and $q$ be a unique pair of integers such that $b=pa+q$ and $0 \leq q &lt; a$. Then, the Euclidean step count of $(a,b)$ is the Euclidean step count of $(q,a)$ plus $1$.

## Constraints

- $1 \leq Q \leq 3 \times 10^5$
- $1 \leq X_i,Y_i \leq 10^{18}(1 \leq i \leq Q)$

## Input

The input is given from Standard Input in the following format:

> $Q$
> 
> $X_1$ $Y_1$
> 
> $:$
> 
> $X_Q$ $Y_Q$

## Output

For each query, print the maximum Euclidean step count, and the number of the pairs that have the maximum step count, modulo $10^9+7$, with a space in between.

```input1
3
4 4
6 10
12 11
```

```output1
2 4
4 1
4 7
```

In the first query, $(2,3)$, $(3,2)$, $(3,4)$ and $(4,3)$ have a Euclidean step count of $2$. No pairs have a step count of more than $2$.

In the second query, $(5,8)$ has a Euclidean step count of $4$.

In the third query, $(5,8)$, $(8,5)$, $(7,11)$, $(8,11)$, $(11,7)$, $(11,8)$, $(12,7)$ have a Euclidean step count of $4$.

```input2
10
1 1
2 2
5 1000000000000000000
7 3
1 334334334334334334
23847657 23458792534
111111111 111111111
7 7
4 19
9 10
```

```output2
1 1
1 4
4 600000013
3 1
1 993994017
35 37447
38 2
3 6
3 9
4 2
```