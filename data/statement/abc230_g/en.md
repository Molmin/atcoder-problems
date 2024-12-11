Score : $600$ points

## Problem Statement

Given is a permutation $P=(P_1,P_2,\ldots,P_N)$ of the integers from $1$ through $N$.

Find the number of pairs of integers $(i,j)$ such that $1\leq i\leq j\leq N$ satisfying $GCD(i,j)\neq 1$ and $GCD(P_i,P_j)\neq 1$.<br>
Here, for positive integers $x$ and $y$, $GCD(x,y)$ denotes the greatest common divisor of $x$ and $y$.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $(P_1,P_2,\ldots,P_N)$ is a permutation of $(1,2,\ldots,N)$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$

## Output

Print the answer.

```input1
6
5 1 3 2 4 6
```

```output1
6
```

Six pairs $(3,3)$, $(3,6)$, $(4,4)$, $(4,6)$, $(5,5)$, $(6,6)$ satisfy the condition, so $6$ should be printed.

```input2
12
1 2 3 4 5 6 7 8 9 10 11 12
```

```output2
32
```