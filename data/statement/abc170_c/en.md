Score : $300$ points

## Problem Statement

Given are an integer $X$ and an integer sequence of length $N$: $p_1, \ldots, p_N$.

Among the integers not contained in the sequence $p_1, \ldots, p_N$ (not necessarily positive), find the integer nearest to $X$, that is, find the integer whose absolute difference with $X$ is the minimum. If there are multiple such integers, report the smallest such integer.

## Constraints

- $1 \leq X \leq 100$
- $0 \leq N \leq 100$
- $1 \leq p_i \leq 100$
- $p_1, \ldots, p_N$ are all distinct.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $X$ $N$
> 
> $p_1$ $...$ $p_N$

## Output

Print the answer.

```input1
6 5
4 7 10 6 5
```

```output1
8
```

Among the integers not contained in the sequence $4, 7, 10, 6, 5$, the one nearest to $6$ is $8$.

```input2
10 5
4 7 10 6 5
```

```output2
9
```

Among the integers not contained in the sequence $4, 7, 10, 6, 5$, the ones nearest to $10$ are $9$ and $11$. We should print the smaller one, $9$.

```input3
100 0
```

```output3
100
```

When $N = 0$, the second line in the input will be empty. Also, as seen here, $X$ itself can be the answer.