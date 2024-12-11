Score : $600$ points

## Problem Statement

There are $N$ balls numbered $1$ through $N$.  Ball $i$ is painted in Color $a_i$.  

For a permutation $P = (P_1, P_2, \dots, P_N)$ of $(1, 2, \dots, N)$, let us define $C(P)$ as follows:

- The number of pairs of adjacent balls with different colors when Balls $P_1, P_2, \dots, P_N$ are lined up in a row in this order.

Let $S_N$ be the set of all permutations of $(1, 2, \dots, N)$.  Also, let us define $F(k)$ by:

 

$\displaystyle F(k) = \left(\sum_{P \in S_N}C(P)^k \right) \bmod 998244353$.

Enumerate $F(1), F(2), \dots, F(M)$.

## Constraints

- $2 \leq N \leq 2.5 \times 10^5$
- $1 \leq M \leq 2.5 \times 10^5$
- $1 \leq a_i \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $a_2$ $\dots$ $a_N$

## Output

Print the answers in the following format:

> $F(1)$ $F(2)$ $\dots$ $F(M)$

```input1
3 4
1 1 2
```

```output1
8 12 20 36
```

Here is the list of all possible pairs of $(P, C(P))$.

- If $P=(1,2,3)$, then $C(P) = 1$.
- If $P=(1,3,2)$, then $C(P) = 2$.
- If $P=(2,1,3)$, then $C(P) = 1$.
- If $P=(2,3,1)$, then $C(P) = 2$.
- If $P=(3,1,2)$, then $C(P) = 1$.
- If $P=(3,2,1)$, then $C(P) = 1$.

We may obtain the answers by assigning these values into $F(k)$.  For instance, $F(1) = 1^1 + 2^1 + 1^1 + 2^1 + 1^1 + 1^1 = 8$.

```input2
2 1
1 1
```

```output2
0
```

```input3
10 5
3 1 4 1 5 9 2 6 5 3
```

```output3
30481920 257886720 199419134 838462446 196874334
```