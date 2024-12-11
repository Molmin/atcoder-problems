Score : $200$ points

## Problem Statement

You are given positive integers $A$ and $B$.

Find the $K$-th largest positive integer that divides both $A$ and $B$.

The input guarantees that there exists such a number.

## Constraints

- All values in input are integers.
- $1 \leq A, B \leq 100$
- The $K$-th largest positive integer that divides both $A$ and $B$ exists.
- $K \geq 1$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $K$

## Output

Print the $K$-th largest positive integer that divides both $A$ and $B$.

```input1
8 12 2
```

```output1
2
```

Three positive integers divides both $8$ and $12$: $1, 2$ and $4$.
Among them, the second largest is $2$.

```input2
100 50 4
```

```output2
5
```

```input3
1 1 1
```

```output3
1
```