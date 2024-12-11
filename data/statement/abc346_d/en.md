Score: $400$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of `0` and `1`.

A string $T$ of length $N$ consisting of `0` and `1` is a **good string** if and only if it satisfies the following condition:

- There is exactly one integer $i$ such that $1 \leq i \leq N - 1$ and the $i$-th and $(i + 1)$-th characters of $T$ are the same.

For each $i = 1,2,\ldots, N$, you can choose whether or not to perform the following operation once:

- If the $i$-th character of $S$ is `0`, replace it with `1`, and vice versa. The cost of this operation, if performed, is $C_i$.

Find the minimum total cost required to make $S$ a good string.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $S$ is a string of length $N$ consisting of `0` and `1`.
- $1 \leq C_i \leq 10^9$
- $N$ and $C_i$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $C_1$ $C_2$ $\ldots$ $C_N$

## Output

Print the answer.

```input1
5
00011
3 9 2 6 4
```

```output1
7
```

Performing the operation for $i = 1, 5$ and not performing it for $i = 2, 3, 4$ makes $S =$ `10010`, which is a good string. The cost incurred in this case is $7$, and it is impossible to make $S$ a good string for less than $7$, so print $7$.

```input2
4
1001
1 2 3 4
```

```output2
0
```

```input3
11
11111100111
512298012 821282085 543342199 868532399 690830957 973970164 928915367 954764623 923012648 540375785 925723427
```

```output3
2286846953
```