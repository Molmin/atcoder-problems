Score : $600$ points

## Problem Statement

In a grid with $N$ horizontal rows and $M$ vertical columns of squares, we will write an integer between $1$ and $K$ (inclusive) on each square and define sequences $A, B$ as follows:

- for each $i=1,\dots, N$, $A_i$ is the minimum value written on a square in the $i$-th row;
- for each $j=1,\dots, M$, $B_j$ is the maximum value written on a square in the $j$-th column.

Given $N, M, K$, find the number of different pairs of sequences that can be $(A, B)$, modulo $998244353$.

## Constraints

- $1 \leq N,M,K \leq 2\times 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$

## Output

Print the number of different pairs of sequences that can be $(A, B)$, modulo $998244353$.

```input1
2 2 2
```

```output1
7
```

$(A_1,A_2,B_1,B_2)$ can be $(1,1,1,1)$, $(1,1,1,2)$, $(1,1,2,1)$, $(1,1,2,2)$, $(1,2,2,2)$, $(2,1,2,2)$, or $(2,2,2,2)$ - there are seven candidates.

```input2
1 1 100
```

```output2
100
```

```input3
31415 92653 58979
```

```output3
469486242
```