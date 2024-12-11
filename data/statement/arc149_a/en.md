Score : $300$ points

## Problem Statement

You are given positive integers $N$ and $M$. Find the maximum positive integer $X$ that satisfies all of the following conditions.

- $X$ is a positive integer less than $10^N$, and all digits in the decimal representation of $X$ are the same.
- $X$ is a multiple of $M$.

If no positive integer $X$ satisfies the conditions, print `-1`.

## Constraints

- $1\leq N\leq 10^5$
- $1\leq M\leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the maximum positive integer $X$ that satisfies all of the conditions, or `-1` if no such positive integer $X$ exists.

```input1
7 12
```

```output1
888888
```

Four positive integers $X$ satisfy the conditions: $444, 888, 444444, 888888$. The answer is the maximum of them, which is $888888$.

```input2
9 12
```

```output2
888888888
```

Six positive integers $X$ satisfy the conditions: $444, 888, 444444, 888888, 444444444, 888888888$.

```input3
1 3
```

```output3
9
```

Three positive integers $X$ satisfy the conditions: $3, 6, 9$.

```input4
1000 25
```

```output4
-1
```

No positive integers $X$ satisfy the conditions.

```input5
30 1
```

```output5
999999999999999999999999999999
```