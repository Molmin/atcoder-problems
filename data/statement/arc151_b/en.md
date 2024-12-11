Score : $500$ points

## Problem Statement

You are given a permutation $P = (P_1, P_2, \ldots, P_N)$ of $(1, 2, \ldots, N)$.

Print the number of integer sequences $A = (A_1, A_2, \ldots, A_N)$ of length $N$ that satisfy both of the conditions below, modulo $998244353$.

- $1 \leq A_i \leq M$ for every $i = 1, 2, \ldots, N$.
- The integer sequence $A$ is lexicographically smaller than the integer sequence $(A_{P_1}, A_{P_2}, \ldots, A_{P_N})$.

 What is lexicographical order?

An integer sequence $X = (X_1,X_2,\ldots,X_N)$ is ** lexicographically smaller** than an integer sequence $Y = (Y_1,Y_2,\ldots,Y_N)$ when there is an integer $1 \leq i \leq N$ that satisfies both of the conditions below.

- For all integers $j$ ($1 \leq j \leq i-1$), $X_j=Y_j$.
- $X_i &lt; Y_i$

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq 10^9$
- $1 \leq P_i \leq N$
- $i \neq j \implies P_i \neq P_j$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$

## Output

Print the number of integer sequences $A$ of length $N$ that satisfy both of the conditions in the Problem Statement, modulo $998244353$.

```input1
4 2
4 1 3 2
```

```output1
6
```

Six integer sequences $A$ satisfy both of the conditions: $(1, 1, 1, 2)$, $(1, 1, 2, 2)$, $(1, 2, 1, 2)$, $(1, 2, 2, 2)$, $(2, 1, 1, 2)$, and $(2, 1, 2, 2)$.<br>
For instance, when $A = (1, 1, 1, 2)$, we have $(A_{P_1}, A_{P_2}, A_{P_3}, A_{P_4}) = (2, 1, 1, 1)$, which is lexicographically larger than $A$.

```input2
1 1
1
```

```output2
0
```

```input3
20 100000
11 15 3 20 17 6 1 9 5 19 10 16 7 8 12 2 18 14 4 13
```

```output3
55365742
```