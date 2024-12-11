Score : $700$ points

## Problem Statement

You are given a positive integer $N$. There is an empty set $S$, and you can perform the following operation any number of times:

- Choose any positive integer $x$. For each of $x$, $2x$, and $3x$, add it to $S$ if it is not already in $S$.

Find the minimum number of operations required to satisfy $\{1, 2, \dots, N\} \subseteq S$.

## Constraints

- $1 \leq N \leq 10^{9}$

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the answer in one line.

```input1
7
```

```output1
4
```

Choosing $1$, $2$, $5$, and $7$ yields $S = \{1, 2, 3, 4, 5, 6, 7, 10, 14, 15, 21\}$, which satisfies the condition. It is impossible to satisfy the condition with three or fewer operations.

```input2
25
```

```output2
14
```