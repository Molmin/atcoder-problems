Score : $600$ points

## Problem Statement

The score of a permutation $P=(P_1,P_2,\ldots,P_{2N})$ of $(1,2,\ldots,2N)$ is defined as follows:

Consider dividing $P$ into two (not necessarily contiguous) subsequences $A = (A_1,A_2,\ldots,A_N)$ and $B = (B_1,B_2,\ldots,B_N)$. The score of $P$ is the maximum possible value of $\displaystyle\sum_{i=1}^{N}A_i B_i$ in such a division.

Let $M$ be the maximum among the scores of all permutations of $(1,2,\ldots,2N)$.
Find the number, modulo $998244353$, of permutations of $(1,2,\ldots,2N)$ with the score of $M$.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
2
```

```output1
16
```

The maximum among the scores of the $24$ possible permutations, $M$, is $14$, and there are $16$ permutations with the score of $14$.

For instance, the permutation $(1,2,3,4)$ achieves $\sum _{i=1}^{N}A_i B_i = 14$ in the division $A=(1,3), B=(2,4)$.

```input2
10000
```

```output2
391163238
```

Print the count modulo $998244353$.