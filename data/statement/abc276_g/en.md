Score : $600$ points

## Problem Statement

Find the number of sequences of integers with $N$ terms, $A=(a_1,a_2,\ldots,a_N)$, that satisfy the following conditions, modulo $998244353$.

- $0 \leq a_1 \leq a_2 \leq \ldots \leq a_N \leq M$.
- For each $i=1,2,\ldots,N-1$, the remainder when $a_i$ is divided by $3$ is different from the remainder when $a_{i+1}$ is divided by $3$.

## Constraints

- $2 \leq N \leq 10^7$
- $1 \leq M \leq 10^7$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
3 4
```

```output1
8
```

Here are the eight sequences that satisfy the conditions.

- $(0,1,2)$
- $(0,1,3)$
- $(0,2,3)$
- $(0,2,4)$
- $(1,2,3)$
- $(1,2,4)$
- $(1,3,4)$
- $(2,3,4)$

```input2
276 10000000
```

```output2
909213205
```

Be sure to find the count modulo $998244353$.