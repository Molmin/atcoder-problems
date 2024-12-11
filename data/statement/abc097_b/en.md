Score : $200$ points

## Problem Statement

You are given a positive integer $X$.
Find the largest *perfect power* that is at most $X$.
Here, a perfect power is an integer that can be represented as $b^p$, where $b$ is an integer not less than $1$ and $p$ is an integer not less than $2$.

## Constraints

- $1$ $\leq$ $X$ $\leq$ $1000$
- $X$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $X$

## Output

Print the largest perfect power that is at most $X$.

```input1
10
```

```output1
9
```

There are four perfect powers that are at most $10$: $1$, $4$, $8$ and $9$.
We should print the largest among them, $9$.

```input2
1
```

```output2
1
```

```input3
999
```

```output3
961
```