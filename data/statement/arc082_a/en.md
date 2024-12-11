Score : $300$ points

## Problem Statement

You are given an integer sequence of length $N$, $a_1,a_2,...,a_N$.

For each $1 \leq i \leq N$, you have three choices: add $1$ to $a_i$, subtract $1$ from $a_i$ or do nothing.

After these operations, you select an integer $X$ and count the number of $i$ such that $a_i=X$.

Maximize this count by making optimal choices.

## Constraints

- $1 \leq N \leq 10^5$
- $0 \leq a_i&lt;10^5 (1 \leq i \leq N)$
- $a_i$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ .. $a_N$

## Output

Print the maximum possible number of $i$ such that $a_i=X$.

```input1
7
3 1 4 1 5 9 2
```

```output1
4
```

For example, turn the sequence into $2,2,3,2,6,9,2$ and select $X=2$ to obtain $4$, the maximum possible count.

```input2
10
0 1 2 3 4 5 6 7 8 9
```

```output2
3
```

```input3
1
99999
```

```output3
1
```