Score : $200$ points

## Problem Statement

Find the $N$ integer sequences $A_0,\ldots,A_{N-1}$ defined as follows.

- For each $i$ $(0\leq i \leq N-1)$, the length of $A_i$ is $i+1$.
- For each $i$ and $j$ $(0\leq i \leq N-1, 0 \leq j \leq i)$, the $(j+1)$-th term of $A_i$, denoted by $a_{i,j}$, is defined as follows.-   - $a_{i,j}=1$, if $j=0$ or $j=i$.
-   - $a_{i,j} = a_{i-1,j-1} + a_{i-1,j}$, otherwise.

## Constraints

- $1 \leq N \leq 30$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print $N$ lines. The $i$-th line should contain the terms of $A_{i-1}$ separated by spaces.

```input1
3
```

```output1
1
1 1
1 2 1
```

```input2
10
```

```output2
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
1 6 15 20 15 6 1
1 7 21 35 35 21 7 1
1 8 28 56 70 56 28 8 1
1 9 36 84 126 126 84 36 9 1
```