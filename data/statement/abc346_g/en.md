Score: $575$ points

## Problem Statement

You are given an integer sequence $A = (A_1, A_2, \ldots, A_N)$.

Find the number of pairs of integers $(L, R)$ that satisfy the following conditions:

- $1 \leq L \leq R \leq N$
- There is a number that appears exactly once among $A_L, A_{L + 1}, \ldots, A_R$. More precisely, there is an integer $x$ such that exactly one integer $i$ satisfies $A_i = x$ and $L \leq i \leq R$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
5
2 2 1 2 1
```

```output1
12
```

$12$ pairs of integers satisfy the conditions: $(L, R) = (1, 1), (1, 3), (1, 4), (2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (3, 5), (4, 4), (4, 5), (5, 5)$.

```input2
4
4 4 4 4
```

```output2
4
```

```input3
10
1 2 1 4 3 3 3 2 2 4
```

```output3
47
```