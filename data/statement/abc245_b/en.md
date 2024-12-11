Score : $200$ points

## Problem Statement

You are given a sequence of length $N$ consisting of integers: $A=(A_1,\ldots,A_N)$.

Find the smallest non-negative integer not in $(A_1,\ldots,A_N)$.

## Constraints

- $1 \leq N \leq 2000$
- $0 \leq A_i \leq 2000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
8
0 3 2 6 2 1 0 0
```

```output1
4
```

The non-negative integers are $0,1,2,3,4,\ldots$.<br>
We have $0,1,2,3$ in $A$, but not $4$, so the answer is $4$.

```input2
3
2000 2000 2000
```

```output2
0
```