Score : $400$ points

## Problem Statement

Takahashi had a pair of two positive integers not exceeding $N$, $(a,b)$, which he has forgotten.
He remembers that the remainder of $a$ divided by $b$ was greater than or equal to $K$.
Find the number of possible pairs that he may have had.

## Constraints

- $1 \leq N \leq 10^5$
- $0 \leq K \leq N-1$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the number of possible pairs that he may have had.

```input1
5 2
```

```output1
7
```

There are seven possible pairs: $(2,3),(5,3),(2,4),(3,4),(2,5),(3,5)$ and $(4,5)$.

```input2
10 0
```

```output2
100
```

```input3
31415 9265
```

```output3
287927211
```