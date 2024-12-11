Score : $300$ points

## Problem Statement

Given is an integer $N$. How many integers between $1$ and $N$ (inclusive) are unrepresentable as $a^b$, where $a$ and $b$ are integers not less than $2$?

## Constraints

- $N$ is an integer.
- $1 \leq N \leq 10^{10}$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
8
```

```output1
6
```

$4$ and $8$ are representable as $a^b$: we have $2^2 = 4$ and $2^3 = 8$.<br>
On the other hand, $1$, $2$, $3$, $5$, $6$, and $7$ are unrepresentable as $a^b$ using integers $a$ and $b$ not less than $2$, so the answer is $6$.

```input2
100000
```

```output2
99634
```