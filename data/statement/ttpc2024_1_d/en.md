Score: $100$ points

## Problem Statement

You are given non-negative integers $A$, $B$, and $C$. Define a sequence of non-negative integers $X = (X_1, X_2, \dots)$ as follows:

- $X_1 = A$
- $X_2 = B$
- $X_{i+2} = (X_i \oplus X_{i+1}) + C\ \ (i=1,2,\dots)$

Here, $\oplus$ represents the bitwise XOR operation.

You are also given a positive integer $N$. Calculate $X_N \bmod 998244353$.

## Constraints

- All input values are integers.
- $0 \leq A, B, C &lt; 2^{20}$
- $1 \leq N \leq 10^{18}$

## Input

The input is given from Standard Input in the following format:

> $A$ $B$ $C$ $N$

## Output

Output $X_N \bmod 998244353$.

```input1
1 2 3 4
```

```output1
7
```

$X = (1, 2, 6, 7, \dots)$. Here, $X_4 = 7$ is the answer.

```input2
123 456 789 123456789
```

```output2
567982455
```

```input3
0 0 0 1000000000000000000
```

```output3
0
```