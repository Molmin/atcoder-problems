Score : $400$ points

## Problem Statement

Given are a string $X$ consisting of `0` through `9`, and an integer $M$.

Let $d$ be the greatest digit in $X$.

How many different integers not greater than $M$ can be obtained by choosing an integer $n$ not less than $d+1$ and seeing $X$ as a base-$n$ number?

## Constraints

- $X$ consists of `0` through `9`.
- The length of $X$ is between $1$ and $60$ (inclusive).
- $X$ does not begin with a `0`.
- $1 \leq M \leq 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $X$
> 
> $M$

## Output

Print the answer.

```input1
22
10
```

```output1
2
```

The greatest digit in $X$ is `2`.

- By seeing $X$ as a base-$3$ number, we get $8$.
- By seeing $X$ as a base-$4$ number, we get $10$.

These two values are the only ones that we can obtain and are not greater than $10$.

```input2
999
1500
```

```output2
3
```

The greatest digit in $X$ is `9`.

- By seeing $X$ as a base-$10$ number, we get $999$.
- By seeing $X$ as a base-$11$ number, we get $1197$.
- By seeing $X$ as a base-$12$ number, we get $1413$.

These three values are the only ones that we can obtain and are not greater than $1500$.

```input3
100000000000000000000000000000000000000000000000000000000000
1000000000000000000
```

```output3
1
```

By seeing $X$ as a base-$2$ number, we get $576460752303423488$, which is the only value that we can obtain and are not greater than $1000000000000000000$.