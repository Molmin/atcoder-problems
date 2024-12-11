Score : $400$ points

## Problem Statement

Given are integers $N$ and $K$.
How many quadruples of integers $(a,b,c,d)$ satisfy both of the following conditions?

- $1 \leq a,b,c,d \leq N$
- $a+b-c-d=K$

## Constraints

- $1 \leq N \leq 10^5$
- $-2(N-1) \leq K \leq 2(N-1)$
- All numbers in input are integers.

## Input

Input is given from standard input in the following format:

> $N$ $K$

## Output

Print the answer.

```input1
2 1
```

```output1
4
```

Four quadruples below satisfy the conditions:

- $(a,b,c,d)=(2,1,1,1)$
- $(a,b,c,d)=(1,2,1,1)$
- $(a,b,c,d)=(2,2,2,1)$
- $(a,b,c,d)=(2,2,1,2)$

```input2
2525 -425
```

```output2
10314607400
```