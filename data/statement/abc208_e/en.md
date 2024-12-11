Score : $500$ points

## Problem Statement

For how many positive integers at most $N$ is the product of the digits at most $K$?

## Constraints

- $1 \leq N \leq 10^{18}$
- $1 \leq K \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the number of integers satisfying the condition.

```input1
13 2
```

```output1
5
```

Out of the positive integers at most $13$, there are five such that the product of the digits is at most $2$: $1$, $2$, $10$, $11$, and $12$.

```input2
100 80
```

```output2
99
```

Out of the positive integers at most $100$, all but $99$ satisfy the condition.

```input3
1000000000000000000 1000000000
```

```output3
841103275147365677
```

Note that the answer may not fit into a $32$-bit integer.