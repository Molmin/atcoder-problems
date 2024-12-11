Score : $1800$ points

## Problem Statement

Given is an integer $N$.
How many permutations $(P_0,P_1,\cdots,P_{2N-1})$ of $(0,1,\cdots,2N-1)$ satisfy the following condition?

- For each $i$ $(0 \leq i \leq 2N-1)$, $N^2 \leq i^2+P_i^2 \leq (2N)^2$ holds.

Since the number can be enormous, compute it modulo $M$.

## Constraints

- $1 \leq N \leq 250$
- $2 \leq M \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the number of permutations that satisfy the condition, modulo $M$.

```input1
2 998244353
```

```output1
4
```

Four permutations satisfy the condition:

- $(2,3,0,1)$
- $(2,3,1,0)$
- $(3,2,0,1)$
- $(3,2,1,0)$

```input2
10 998244353
```

```output2
53999264
```

```input3
200 998244353
```

```output3
112633322
```