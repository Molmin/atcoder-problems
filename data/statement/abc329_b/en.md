Score : $200$ points

## Problem Statement

You are given $N$ integers $A_1, A_2, \ldots, A_N$. Find the largest among those integers that are not the largest.

The constraints of this problem guarantee that the answer exists.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq A_i \leq 100$
- It is not the case that all $A_1, A_2, \ldots, A_N$ are equal.
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
2 1 3 3 2
```

```output1
2
```

The largest integer among $2,1,3,3,2$ is $3$.

The integers that are not $3$ among $2,1,3,3,2$ are $2,1,2$, among which the largest is $2$.

```input2
4
4 3 2 1
```

```output2
3
```

```input3
8
22 22 18 16 22 18 18 22
```

```output3
18
```