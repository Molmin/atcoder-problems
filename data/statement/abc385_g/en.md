Score : $600$ points

## Problem Statement

For a permutation $P=(P_1,P_2,\dots,P_N)$ of $(1,2,\dots,N)$, define integers $L(P)$ and $R(P)$ as follows:

- Consider $N$ buildings arranged in a row from left to right, with the height of the $i$-th building from the left being $P_i$. Then $L(P)$ is the number of buildings visible when viewed from the left, and $R(P)$ is the number of buildings visible when viewed from the right.<br>More formally, $L(P)$ is the count of indices $i$ such that $P_j &lt; P_i$ for all $j &lt; i$, and $R(P)$ is the count of indices $i$ such that $P_i &gt; P_j$ for all $j &gt; i$.

You are given integers $N$ and $K$. Find, modulo $998244353$, the count of all permutations $P$ of $(1,2,\dots,N)$ such that $L(P)-R(P)=K$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $|K| \leq N-1$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the answer.

```input1
3 -1
```

```output1
1
```

- $P=(1,2,3)$: $L(P)-R(P)=3-1=2$.
- $P=(1,3,2)$: $L(P)-R(P)=2-2=0$.
- $P=(2,1,3)$: $L(P)-R(P)=2-1=1$.
- $P=(2,3,1)$: $L(P)-R(P)=2-2=0$.
- $P=(3,1,2)$: $L(P)-R(P)=1-2=-1$.
- $P=(3,2,1)$: $L(P)-R(P)=1-3=-2$.

Therefore, the number of permutations $P$ with $L(P)-R(P)=-1$ is $1$.

```input2
1 0
```

```output2
1
```

```input3
2024 385
```

```output3
576300012
```

Print the count modulo $998244353$.