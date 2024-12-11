Score : $400$ points

## Problem Statement

Snuke has a large collection of cards. Each card has an integer between $1$ and $N$, inclusive, written on it.
He has $A_i$ cards with an integer $i$.

Two cards can form a pair if the absolute value of the difference of the integers written on them is at most $1$.

Snuke wants to create the maximum number of pairs from his cards, on the condition that no card should be used in multiple pairs. Find the maximum number of pairs that he can create.

## Constraints

- $1 \leq N \leq 10^5$
- $0 \leq A_i \leq 10^9 (1 \leq i \leq N)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$
> 
> :
> 
> $A_N$

## Output

Print the maximum number of pairs that Snuke can create.

```input1
4
4
0
3
2
```

```output1
4
```

For example, Snuke can create the following four pairs: $(1,1),(1,1),(3,4),(3,4)$.

```input2
8
2
0
1
6
0
8
2
1
```

```output2
9
```