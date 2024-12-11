Score : $300$ points

## Problem Statement

How many integer sequences $A_1,A_2,\ldots,A_N$ of length $N$ satisfy all of the following conditions?

- $0 \leq A_i \leq 9$
- There exists some $i$ such that $A_i=0$ holds.
- There exists some $i$ such that $A_i=9$ holds.

The answer can be very large, so output it modulo $10^9 + 7$.

## Constraints

- $1 \leq N \leq 10^6$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer modulo $10^9 + 7$.

```input1
2
```

```output1
2
```

Two sequences $\{0,9\}$ and $\{9,0\}$ satisfy all conditions.

```input2
1
```

```output2
0
```

```input3
869121
```

```output3
2511445
```