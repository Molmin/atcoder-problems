Score : $600$ points

## Problem Statement

Below, a permutation of $(1,2,\ldots,N)$ is simply called a permutation.

For two permutations $A=(A_1,A_2,\ldots,A_N),B=(B_1,B_2,\ldots,B_N)$, let us define their **similarity** as the number of integers $i$ between $1$ and $N-1$ such that:

- $(A_{i+1}-A_i)(B_{i+1}-B_i) &gt; 0$.

Find the number, modulo a prime number $P$, of pairs of permutations $(A,B)$ whose similarity is $K$.

## Constraints

- $2\leq N \leq 100$
- $0\leq K \leq N-1$
- $10^8 \leq P \leq 10^9$
- $P$ is a prime number.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$ $P$

## Output

Print the answer.

```input1
3 1 282282277
```

```output1
16
```

For instance, below is a pair of permutations that satisfies the condition.

- $A=(1,2,3)$
- $B=(1,3,2)$

Here, we have $(A_2 - A_1)(B_2 -B_1) &gt; 0$ and $(A_3 - A_2)(B_3 -B_2) &lt; 0$, so the similarity of $A$ and $B$ is $1$.

```input2
50 25 998244353
```

```output2
131276976
```

Print the number modulo $P$.