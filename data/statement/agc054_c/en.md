Score : $800$ points

## Problem Statement

Snuke received a permutation $P=(P_1,P_2,\cdots,P_N)$ of $(1,\ 2,\ ...\ N)$ and an integer $K$.
He did some number of swaps of two adjacent elements in $P$ so that the following condition would be satisfied.

- For each $1 \leq i \leq N$, there are at most $K$ indices $j$ such that $1 \leq j&lt; i$ and $P_j &gt; P_i$.

Here, he did the **minimum** number of swaps needed to achieve this condition.

Afterward, he has forgotten the original permutation he received.
Given the permutation $P'$ after the swaps, find the number, modulo $998244353$, of permutations that the original permutation $P$ could be. 

## Constraints

- $2 \leq N \leq 5000$
- $1 \leq K \leq N-1$
- $1 \leq P'_i \leq N$
- $P'_i \neq P'_j$ ($i \neq j$)
- For each $1 \leq i \leq N$, there is at most $K$ indices $j$ such that $1 \leq j&lt; i$ and $P'_j &gt; P'_i$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P'_1$ $P'_2$ $\cdots$ $P'_N$

## Output

Print the answer.

```input1
3 1
3 1 2
```

```output1
2
```

$P$ could be one of the following two permutations.

- $P=(3,1,2)$: The minimum number of swaps needed is $0$. After zero swaps, the permutation is equal to $P'$.
- $P=(3,2,1)$: The minimum number of swaps needed is $1$: swapping $P_2$ and $P_3$ results in $P=(3,1,2)$, which satisfies the condition and is equal to $P'$.

```input2
4 3
4 3 2 1
```

```output2
1
```

```input3
5 2
4 2 1 5 3
```

```output3
3
```