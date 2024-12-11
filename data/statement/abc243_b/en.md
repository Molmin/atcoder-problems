Score : $200$ points

## Problem Statement

You are given integer sequences, each of length $N$: $A = (A_1, A_2, \dots, A_N)$ and $B = (B_1, B_2, \dots, B_N)$.<br>
All elements of $A$ are different. All elements of $B$ are different, too.

Print the following two values.

1. The number of integers contained in both $A$ and $B$, appearing at the same position in the two sequences. In other words, the number of integers $i$ such that $A_i = B_i$.
2. The number of integers contained in both $A$ and $B$, appearing at different positions in the two sequences. In other words, the number of pairs of integers $(i, j)$ such that $A_i = B_j$ and $i \neq j$.

## Constraints

- $1 \leq N \leq 1000$
- $1 \leq A_i \leq 10^9$
- $1 \leq B_i \leq 10^9$
- $A_1, A_2, \dots, A_N$ are all different.
- $B_1, B_2, \dots, B_N$ are all different.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_N$

## Output

Print the answers in two lines: the answer to`1.` in the first line, and the answer to`2.` in the second line.

```input1
4
1 3 5 2
2 3 1 4
```

```output1
1
2
```

There is one integer contained in both $A$ and $B$, appearing at the same position in the two sequences: $A_2 = B_2 = 3$.<br>
There are two integers contained in both $A$ and $B$, appearing at different positions in the two sequences: $A_1 = B_3 = 1$ and $A_4 = B_1 = 2$.

```input2
3
1 2 3
4 5 6
```

```output2
0
0
```

In both `1.` and `2.`, no integer satisfies the condition.

```input3
7
4 8 1 7 9 5 6
3 5 1 7 8 2 6
```

```output3
3
2
```