Score : $200$ points

## Problem Statement

You are given a sequence of $26$ integers $P=(P_1,P_2, \ldots ,P_{26})$ consisting of integers from $1$ through $26$. It is guaranteed that all elements in $P$ are distinct.

Print a string $S$ of length $26$ that satisfies the following condition.

- For every $i$ $(1 \leq i \leq 26)$, the $i$-th character of $S$ is the lowercase English letter that comes $P_i$-th in alphabetical order.

## Constraints

- $1 \leq P_i \leq 26$
- $P_i \neq P_j$ $(i \neq j)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $P_1$ $P_2$ $\ldots$ $P_{26}$

## Output

Print the string $S$.

```input1
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
```

```output1
abcdefghijklmnopqrstuvwxyz
```

```input2
2 1 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
```

```output2
bacdefghijklmnopqrstuvwxyz
```

```input3
5 11 12 16 25 17 18 1 7 10 4 23 20 3 2 24 26 19 14 9 6 22 8 13 15 21
```

```output3
eklpyqragjdwtcbxzsnifvhmou
```