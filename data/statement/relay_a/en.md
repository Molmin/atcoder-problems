Score : $100$ points

## Problem Statement

In an electric circuit, when two resistors $R_1$ and $R_2$ are connected in parallel, the equivalent resistance $R_3$ can be derived from the following formula:

- $\frac{1}{R_1} + \frac{1}{R_2} = \frac{1}{R_3}$

Given $R_1$ and $R_2$, find $R_3$.

## Constraints

- $1 \leq R_1, R_2 \leq 100$
- $R_1$ and $R_2$ are integers.

## Input

The input is given from Standard Input in the following format:

> $R_1$ $R_2$

## Output

Print the value of $R_3$.

The output is considered correct if the absolute or relative error is at most $10^{-6}$.

```input1
2 3
```

```output1
1.2000000000
```

```input2
100 99
```

```output2
49.7487437186
```