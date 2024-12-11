Score : $625$ points

## Problem Statement

You are given a sequence $A = (A_1,\ldots,A_N)$ of length $N$. Each element of $A$ is either $-1$ or an integer between $1$ and $N$, and each integer from $1$ to $N$ is contained at most once.

A permutation $P=(P_1,\ldots,P_N)$ of $(1,\ldots,N)$ is called a **good permutation** if and only if it satisfies $A_i \neq -1 \Rightarrow P_i = A_i$. Find the sum of the squares of the inversion numbers of all good permutations, modulo $998244353$.

The inversion number of a permutation $P$ is the number of pairs of integers $(i,j)$ such that $1\leq i &lt; j \leq N$ and $P_i &gt; P_j$.

## Constraints

- $1\leq N\leq 3000$
- $A_i = -1$ or $1\leq A_i \leq N$.
- Each integer from $1$ to $N$ is contained at most once in $A$.
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ 
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
4
3 -1 2 -1
```

```output1
29
```

There are two good permutations: $P=(3,1,2,4)$ and $P=(3,4,2,1)$, with inversion numbers $2$ and $5$, respectively.

Thus, the answer is $2^2 + 5^2 = 29$.

```input2
10
-1 -1 -1 -1 -1 -1 -1 -1 -1 -1
```

```output2
952235647
```

```input3
15
-1 -1 10 -1 -1 -1 2 -1 -1 3 -1 -1 -1 -1 1
```

```output3
460544744
```

Find the sum modulo $998244353$.