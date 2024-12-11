Score : $200$ points

## Problem Statement

Find the sum of the integers between $1$ and $N$ (inclusive), whose sum of digits written in base $10$ is between $A$ and $B$ (inclusive).

## Constraints

- $1 \leq N \leq 10^4$
- $1 \leq A \leq B \leq 36$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $A$ $B$

## Output

Print the sum of the integers between $1$ and $N$ (inclusive), whose sum of digits written in base $10$ is between $A$ and $B$ (inclusive).

```input1
20 2 5
```

```output1
84
```

Among the integers not greater than $20$, the ones whose sums of digits are between $2$ and $5$, are: $2,3,4,5,11,12,13,14$ and $20$. We should print the sum of these, $84$.

```input2
10 1 2
```

```output2
13
```

```input3
100 4 16
```

```output3
4554
```