Score : $600$ points

## Problem Statement

You are given two sequences of integers of length $N$: $A = (A_1, A_2, \ldots, A_N)$ and $B = (B_1, B_2, \ldots, B_N)$.

Print the number of pairs of integers $(l, r)$ that satisfy $1 \leq l \leq r \leq N$ and the following condition.

- $\min\lbrace A_l, A_{l+1}, \ldots, A_r \rbrace + (B_l + B_{l+1} + \cdots + B_r) \leq S$

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq S \leq 3 \times 10^{14}$
- $0 \leq A_i \leq 10^{14}$
- $0 \leq B_i \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $S$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_N$

## Output

Print the answer.

```input1
4 15
9 2 6 5
3 5 8 9
```

```output1
6
```

The following six pairs of integers $(l, r)$ satisfy $1 \leq l \leq r \leq N$ and the condition in the problem statement: $(1, 1)$, $(1, 2)$, $(2, 2)$, $(2, 3)$, $(3, 3)$, and $(4, 4)$.

```input2
15 100
39 9 36 94 40 26 12 26 28 66 73 85 62 5 20
0 0 7 7 0 5 5 0 7 9 9 4 2 5 2
```

```output2
119
```