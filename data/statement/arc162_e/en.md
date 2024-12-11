Score : $700$ points

## Problem Statement

You are given a sequence of length $N$ consisting of integers from $1$ to $N$, $A=(A_1,A_2,\ldots,A_N)$.

Find the number, modulo $998244353$, of sequences of length $N$ consisting of integers from $1$ to $N$, $B=(B_1,B_2,\ldots,B_N)$, that satisfy the following conditions for all $i=1,2,\ldots,N$.

- The number of occurrences of $i$ in $B$ is at most $A_i$.
- The number of occurrences of $B_i$ in $B$ is at most $A_i$.

## Constraints

- $1 \leq N \leq 500$
- $1 \leq A_i \leq N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
3
1 2 3
```

```output1
10
```

The following $10$ sequences satisfy the conditions:

- $(1,2,2)$
- $(1,2,3)$
- $(1,3,2)$
- $(1,3,3)$
- $(2,1,3)$
- $(2,3,1)$
- $(2,3,3)$
- $(3,1,2)$
- $(3,2,1)$
- $(3,2,2)$

```input2
4
4 4 4 4
```

```output2
256
```

All sequences of length $4$ consisting of integers from $1$ to $4$ satisfy the conditions, and there are $4^4=256$ such sequences.

```input3
5
1 1 1 1 1
```

```output3
120
```

All permutations of $(1,2,3,4,5)$ satisfy the conditions, and there are $5!=120$ such sequences.

```input4
14
6 5 14 3 6 7 3 11 11 2 3 7 8 10
```

```output4
628377683
```

Be sure to print the number modulo $998244353$.