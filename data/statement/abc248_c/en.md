Score : $300$ points

## Problem Statement

How many integer sequences of length $N$, $A=(A_1, \ldots, A_N)$, satisfy all of the conditions below?

- <p>$1\le A_i \le M$ $(1 \le i \le N)$</p>
- <p>$\displaystyle\sum _{i=1}^N A_i \leq K$</p>

Since the count can get enormous, find it modulo $998244353$.

## Constraints

- $1 \leq N, M \leq 50$
- $N \leq K \leq NM$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$

## Output

Print the answer.

```input1
2 3 4
```

```output1
6
```

The following six sequences satisfy the conditions.

- $(1,1)$
- $(1,2)$
- $(1,3)$
- $(2,1)$
- $(2,2)$
- $(3,1)$

```input2
31 41 592
```

```output2
798416518
```

Be sure to print the count modulo $998244353$.