Score : $300$ points

## Problem Statement

Given is a number sequence of length $N$: $p_1, ..., p_N$.

For each $i=1, 2, ..., N$, find the minimum non-negative integer that is not equal to any of the numbers $p_1, ..., p_i$.

## Constraints

- $1 \leq N \leq 200,000$
- $0 \leq p_i \leq 200,000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $p_1$ $...$ $p_N$

## Output

Print $N$ lines in total.

The $i$-th line ($1 \leq i \leq N$) should contain the minimum non-negative integer that is not equal to any of the numbers $p_1, ..., p_i$.

```input1
4
1 1 0 2
```

```output1
0
0
2
3
```

- The minimum non-negative integer that is not equal to $p_1=1$ is $0$.
- The minimum non-negative integer that is not equal to any of $p_1=1, p_2=1$ is $0$.
- The minimum non-negative integer that is not equal to any of $p_1=1, p_2=1, p_3=0$ is $2$.
- The minimum non-negative integer that is not equal to any of $p_1=1, p_2=1, p_3=0, p_4=2$ is $3$.

```input2
10
5 4 3 2 1 0 7 7 6 6
```

```output2
0
0
0
0
0
6
6
6
8
8
```