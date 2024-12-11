Score : $700$ points

## Problem Statement

Takahashi throws $N$ dice, each having $K$ sides with all integers from $1$ to $K$. The dice are NOT pairwise distinguishable.
For each $i=2,3,...,2K$, find the following value modulo $998244353$:

- The number of combinations of $N$ sides shown by the dice such that the sum of no two different sides is $i$.

Note that the dice are NOT distinguishable, that is, two combinations are considered different when there exists an integer $k$ such that the number of dice showing $k$ is different in those two.

## Constraints

- $1 \leq K \leq 2000$
- $2 \leq N \leq 2000$
- $K$ and $N$ are integers.

## Input

Input is given from Standard Input in the following format:

> $K$ $N$

## Output

Print $2K-1$ integers. The $t$-th of them $(1\leq t\leq 2K-1)$ should be the answer for $i=t+1$.

```input1
3 3
```

```output1
7
7
4
7
7
```

- For $i=2$, the combinations $(1,2,2),(1,2,3),(1,3,3),(2,2,2),(2,2,3),(2,3,3),(3,3,3)$ satisfy the condition, so the answer is $7$.
- For $i=3$, the combinations $(1,1,1),(1,1,3),(1,3,3),(2,2,2),(2,2,3),(2,3,3),(3,3,3)$ satisfy the condition, so the answer is $7$.
- For $i=4$, the combinations $(1,1,1),(1,1,2),(2,3,3),(3,3,3)$ satisfy the condition, so the answer is $4$.

```input2
4 5
```

```output2
36
36
20
20
20
36
36
```

```input3
6 1000
```

```output3
149393349
149393349
668669001
668669001
4000002
4000002
4000002
668669001
668669001
149393349
149393349
```