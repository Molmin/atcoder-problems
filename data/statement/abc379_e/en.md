Score : $475$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of digits from `1` through `9`.

For each pair of integers $(i,j) \ (1\leq i\leq j\leq N)$, define $f(i, j)$ as the value obtained by interpreting the substring of $S$ from the $i$-th through the $j$-th character as a decimal integer. Find $\displaystyle \sum_{i=1}^N \sum_{j=i}^N f(i, j)$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $N$ is an integer.
- $S$ is a string of length $N$ consisting of digits from `1` through `9`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
3
379
```

```output1
514
```

The answer is $f(1,1) + f(1,2) + f(1,3) + f(2,2) + f(2,3) + f(3,3) = 3 + 37 + 379 + 7 + 79 + 9 = 514$.

```input2
30
314159265358979323846264338327
```

```output2
369673254065355789035427227741
```