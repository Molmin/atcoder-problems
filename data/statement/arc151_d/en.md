Score : $700$ points

## Problem Statement

You are given an integer sequence $A = (A_0, A_1, \ldots, A_{2^N-1})$ of length $2^N$.

Additionally, $Q$ queries are given.
For each $i = 1, 2, \ldots, Q$, the $i$-th query is represented by two integers $X_i$ and $Y_i$ and asks you to perform the operation below.

For each $j = 0, 1, 2, \ldots, 2^N-1$ in this order, do the following.

1. First, let $b_{N-1}b_{N-2}\ldots b_0$ be the binary representation of $j$ with $N$ digits. Additionally, let $j'$ be the integer represented by the binary representation $b_{N-1}b_{N-2}\ldots b_0$ after flipping the bit $b_{X_i}$ (changing $0$ to $1$ and $1$ to $0$).
2. Then, if $b_{X_i} = Y_i$, add the value of $A_j$ to $A_{j'}$.

Print each element of $A$, modulo $998244353$, after processing all the queries in the order they are given in the input.

 What is binary representation with $N$ digits?

The binary representation of an non-negative integer $X$ ($0 \leq X &lt; 2^N$) with $N$ digits is the unique sequence $b_{N-1}b_{N-2}\ldots b_0$ of length $N$ consisting of $0$ and $1$ that satisfies:

- $\sum_{i = 0}^{N-1} b_i \cdot 2^i = X$.

## Constraints

- $1 \leq N \leq 18$
- $1 \leq Q \leq 2 \times 10^5$
- $0 \leq A_i \lt 998244353$
- $0 \leq X_i \leq N-1$
- $Y_i \in \lbrace 0, 1\rbrace$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $A_0$ $A_1$ $\ldots$ $A_{2^N-1}$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_Q$ $Y_Q$

## Output

For each $i = 0, 1, \ldots, 2^N-1$, print the remainder $A'_i$ when dividing $A_i$ after processing all the queries by $998244353$, separated by spaces, in the following format:

> $A'_0$ $A'_1$ $\ldots$ $A'_{2^N-1}$

```input1
2 2
0 1 2 3
1 1
0 0
```

```output1
2 6 2 5
```

The first query asks you to do the following.

- For $j = 0$, we have $b_1b_0 = 00$ and $j' = 2$. Since $b_1 \neq 1$, skip the addition.
- For $j = 1$, we have $b_1b_0 = 01$ and $j' = 3$. Since $b_1 \neq 1$, skip the addition.
- For $j = 2$, we have $b_1b_0 = 10$ and $j' = 0$. Since $b_1 = 1$, add the value of $A_2$ to $A_0$. Now we have $A = (2, 1, 2, 3)$.
- For $j = 3$, we have $b_1b_0 = 11$ and $j' = 1$. Since $b_1 = 1$, add the value of $A_3$ to $A_1$. Now we have $A = (2, 4, 2, 3)$.

The second query asks you to do the following.

- For $j = 0$, we have $b_1b_0 = 00$ and $j' = 1$. Since $b_0 = 0$, add the value of $A_0$ to $A_1$. Now we have $A = (2, 6, 2, 3)$.
- For $j = 1$, we have $b_1b_0 = 01$ and $j' = 0$. Since $b_0 \neq 0$, skip the addition.
- For $j = 2$, we have $b_1b_0 = 10$ and $j' = 3$. Since $b_0 = 0$, add the value of $A_2$ to $A_3$. Now we have $A = (2, 6, 2, 5)$.
- For $j = 3$, we have $b_1b_0 = 11$ and $j' = 2$. Since $b_0 \neq 0$, skip the addition.

Thus, $A$ will be $(2, 6, 2, 5)$ after processing all the queries.

```input2
3 10
606248357 338306877 919152167 981537317 808873985 845549408 680941783 921035119
1 1
0 0
0 0
0 0
0 1
0 1
0 1
2 0
2 0
2 0
```

```output2
246895115 904824001 157201385 744260759 973709546 964549010 61683812 205420980
```