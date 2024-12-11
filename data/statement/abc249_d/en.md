Score : $400$ points

## Problem Statement

You are given an integer sequence $A = (A_1, \dots, A_N)$ of length $N$.

Find the number of triplets of integers $(i, j, k)$ satisfying all of the conditions below.

- $1 \leq i, j, k \leq N$
- $\frac{A_i}{A_j} = A_k$

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 2 \times 10^5 \, (1 \leq i \leq N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
3
6 2 3
```

```output1
2
```

$(i, j, k) = (1, 2, 3), (1, 3, 2)$ satisfy the conditions.

```input2
1
2
```

```output2
0
```

```input3
10
1 3 2 4 6 8 2 2 3 7
```

```output3
62
```