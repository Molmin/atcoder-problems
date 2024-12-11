Score: $600$ points

## Problem Statement

For a permutation $P = (P_1, P_2, \dots, P_N)$ of $(1, 2, \dots, N)$, we define $F(P)$ by the following procedure:

- There is a sequence $B = (1, 2, \dots, N)$.<br>
    As long as there is an integer $i$ such that $B_i \lt P_{B_i}$, perform the following operation:
    -   - Let $j$ be the smallest integer $i$ that satisfies $B_i \lt P_{B_i}$. Then, replace $B_j$ with $P_{B_j}$.

    Define $F(P)$ as the $B$ at the end of this process. (It can be proved that the process terminates after a finite number of steps.)

You are given a sequence $A = (A_1, A_2, \dots, A_N)$ of length $N$. How many permutations $P$ of $(1,2,\dots,N)$ satisfy $F(P) = A$? Find the count modulo $998244353$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the number, modulo $998244353$, of permutations $P$ that satisfy $F(P) = A$.

```input1
4
3 3 3 4
```

```output1
1
```

For example, if $P = (2, 3, 1, 4)$, then $F(P)$ is determined to be $(3, 3, 3, 4)$ by the following steps:

- Initially, $B = (1, 2, 3, 4)$.
- The smallest integer $i$ such that $B_i \lt P_{B_i}$ is $1$. Replace $B_1$ with $P_{B_1} = 2$, making $B = (2, 2, 3, 4)$.
- The smallest integer $i$ such that $B_i \lt P_{B_i}$ is $1$. Replace $B_1$ with $P_{B_1} = 3$, making $B = (3, 2, 3, 4)$.
- The smallest integer $i$ such that $B_i \lt P_{B_i}$ is $2$. Replace $B_2$ with $P_{B_2} = 3$, making $B = (3, 3, 3, 4)$.
- There are no more $i$ that satisfy $B_i \lt P_{B_i}$, so the process ends. The current $B = (3, 3, 3, 4)$ is defined as $F(P)$.

There is only one permutation $P$ such that $F(P) = A$, which is $(2, 3, 1, 4)$.

```input2
4
2 2 4 3
```

```output2
0
```

```input3
8
6 6 8 4 5 6 8 8
```

```output3
18
```