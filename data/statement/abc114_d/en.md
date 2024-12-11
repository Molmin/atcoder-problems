Score : $400$ points

## Problem Statement

You are given an integer $N$. Among the divisors of $N!$ $(= 1 \times 2 \times ... \times N)$, how many *Shichi-Go numbers* (literally "Seven-Five numbers") are there?

Here, a Shichi-Go number is a positive integer that has exactly $75$ divisors.

## Note

When a positive integer $A$ divides a positive integer $B$, $A$ is said to a *divisor* of $B$.
For example, $6$ has four divisors: $1, 2, 3$ and $6$.

## Constraints

- $1 \leq N \leq 100$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the number of the Shichi-Go numbers that are divisors of $N!$.

```input1
9
```

```output1
0
```

There are no Shichi-Go numbers among the divisors of $9! = 1 \times 2 \times ... \times 9 = 362880$.

```input2
10
```

```output2
1
```

There is one Shichi-Go number among the divisors of $10! = 3628800$: $32400$.

```input3
100
```

```output3
543
```