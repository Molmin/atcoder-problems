Score : $900$ points

## Problem Statement

How many different sequences of length $2N$, $A = (A_1, A_2, \dots, A_{2N})$, satisfy both of the following conditions?

- The sequence $A$ contains $N$ occurrences of $+1$ and $N$ occurrences of $-1$.
- There are exactly $K$ pairs of $l$ and $r$ $(1 \leq l \leq r \leq 2N)$ such that $A_l + A_{l+1} + \cdots + A_r = 0$.

## Constraints

- $1 \leq N \leq 30$
- $1 \leq K \leq N^2$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the number of different sequences that satisfy the conditions in Problem Statement.
The answer always fits into the signed $64$-bit integer type.

```input1
1 1
```

```output1
2
```

For $N = 1, K = 1$, two sequences below satisfy the conditions:

- $A = (+1, -1)$
- $A = (-1, +1)$

```input2
2 3
```

```output2
2
```

For $N = 2, K = 3$, two sequences below satisfy the conditions:

- $A = (+1, -1, -1, +1)$
- $A = (-1, +1, +1, -1)$

```input3
3 7
```

```output3
6
```

For $N = 3, K = 7$, six sequences below satisfy the conditions:

- $A = (+1, -1, +1, -1, -1, +1)$
- $A = (+1, -1, -1, +1, +1, -1)$
- $A = (+1, -1, -1, +1, -1, +1)$
- $A = (-1, +1, +1, -1, +1, -1)$
- $A = (-1, +1, +1, -1, -1, +1)$
- $A = (-1, +1, -1, +1, +1, -1)$

```input4
8 24
```

```output4
568
```

```input5
30 230
```

```output5
761128315856702
```

```input6
25 455
```

```output6
0
```

For $N = 25, K = 455$, no sequences satisfy the conditions.