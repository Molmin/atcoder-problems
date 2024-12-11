Score : $400$ points

## Problem Statement

You are given integers $N$ and $M$.

Consider a sequence $a$ of length $N$ consisting of positive integers such that $a_1 + a_2 + ... + a_N$ = $M$. Find the maximum possible value of the greatest common divisor of $a_1, a_2, ..., a_N$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^5$
- $N \leq M \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the maximum possible value of the greatest common divisor of a sequence $a_1, a_2, ..., a_N$ that satisfies the condition.

```input1
3 14
```

```output1
2
```

Consider the sequence $(a_1, a_2, a_3) = (2, 4, 8)$. Their greatest common divisor is $2$, and this is the maximum value.

```input2
10 123
```

```output2
3
```

```input3
100000 1000000000
```

```output3
10000
```