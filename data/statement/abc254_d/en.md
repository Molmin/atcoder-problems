Score : $400$ points

## Problem Statement

You are given an integer $N$. Find the number of pairs $(i,j)$ of positive integers at most $N$ that satisfy the following condition:

- $i \times j$ is a square number.

## Constraints

- $1 \le N \le 2 \times 10^5$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
4
```

```output1
6
```

The six pairs $(1,1),(1,4),(2,2),(3,3),(4,1),(4,4)$ satisfy the condition.

On the other hand, $(2,3)$ does not, since $2 \times 3 =6$ is not a square number.

```input2
254
```

```output2
896
```