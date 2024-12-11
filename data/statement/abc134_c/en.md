Score : $300$ points

## Problem Statement

You are given a sequence of length $N$: $A_1, A_2, ..., A_N$.
For each integer $i$ between $1$ and $N$ (inclusive), answer the following question:

- Find the maximum value among the $N-1$ elements other than $A_i$ in the sequence.

## Constraints

- $2 \leq N \leq 200000$
- $1 \leq A_i \leq 200000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$
> 
> $:$
> 
> $A_N$

## Output

Print $N$ lines. The $i$-th line ($1 \leq i \leq N$) should contain the maximum value among the $N-1$ elements other than $A_i$ in the sequence.

```input1
3
1
4
3
```

```output1
4
3
4
```

- The maximum value among the two elements other than $A_1$, that is, $A_2 = 4$ and $A_3 = 3$, is $4$.
- The maximum value among the two elements other than $A_2$, that is, $A_1 = 1$ and $A_3 = 3$, is $3$.
- The maximum value among the two elements other than $A_3$, that is, $A_1 = 1$ and $A_2 = 4$, is $4$.

```input2
2
5
5
```

```output2
5
5
```