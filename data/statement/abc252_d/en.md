Score : $400$ points

## Problem Statement

You are given a sequence of length $N$: $A=(A_1,A_2,\ldots,A_N)$.<br>
Find the number of triples $(i,j,k)$ that satisfy both of the following conditions.

- $1\leq i \lt j \lt k \leq N$
- $A_i$, $A_j$, and $A_k$ are distinct.

## Constraints

- $3 \leq N \leq 2\times 10^5$
- $1 \leq A_i \leq 2\times 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
4
3 1 4 1
```

```output1
2
```

The two triples $(i,j,k)$ satisfying the conditions are $(1,2,3)$ and $(1,3,4)$.

```input2
10
99999 99998 99997 99996 99995 99994 99993 99992 99991 99990
```

```output2
120
```

```input3
15
3 1 4 1 5 9 2 6 5 3 5 8 9 7 9
```

```output3
355
```