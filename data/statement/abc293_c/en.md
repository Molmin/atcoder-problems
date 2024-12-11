Score : $300$ points

## Problem Statement

There is a grid with $H$ horizontal rows and $W$ vertical columns.
For two integers $i$ and $j$ such that $1 \leq i \leq H$ and $1 \leq j \leq W$,
the square at the $i$-th row from the top and $j$-th column from the left (which we denote by $(i, j)$) has an integer $A_{i, j}$ written on it.

Takahashi is currently at $(1,1)$.
From now on, he repeats moving to an adjacent square to the right of or below his current square until he reaches $(H, W)$.
When he makes a move, he is not allowed to go outside the grid.

Takahashi will be happy if the integers written on the squares he visits (including initial $(1, 1)$ and final $(H, W)$) are distinct.
Find the number of his possible paths that make him happy.

## Constraints

- $2 \leq H, W \leq 10$
- $1 \leq A_{i, j} \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $A_{1, 1}$ $A_{1, 2}$ $\ldots$ $A_{1, W}$
> 
> $A_{2, 1}$ $A_{2, 2}$ $\ldots$ $A_{2, W}$
> 
> $\vdots$
> 
> $A_{H, 1}$ $A_{H, 2}$ $\ldots$ $A_{H, W}$

## Output

Print the answer.

```input1
3 3
3 2 2
2 1 3
1 5 4
```

```output1
3
```

There are six possible paths:

- $(1, 1) \rightarrow (1, 2) \rightarrow (1, 3) \rightarrow (2, 3) \rightarrow (3, 3)$: the integers written on the squares he visits are $3, 2, 2, 3, 4$, so he **will not** be happy.
- $(1, 1) \rightarrow (1, 2) \rightarrow (2, 2) \rightarrow (2, 3) \rightarrow (3, 3)$: the integers written on the squares he visits are $3, 2, 1, 3, 4$, so he **will not** be happy.
- $(1, 1) \rightarrow (1, 2) \rightarrow (2, 2) \rightarrow (3, 2) \rightarrow (3, 3)$: the integers written on the squares he visits are $3, 2, 1, 5, 4$, so he **will** be happy.
- $(1, 1) \rightarrow (2, 1) \rightarrow (2, 2) \rightarrow (2, 3) \rightarrow (3, 3)$: the integers written on the squares he visits are $3, 2, 1, 3, 4$, so he **will not** be happy.
- $(1, 1) \rightarrow (2, 1) \rightarrow (2, 2) \rightarrow (3, 2) \rightarrow (3, 3)$: the integers written on the squares he visits are $3, 2, 1, 5, 4$, so he **will** be happy.
- $(1, 1) \rightarrow (2, 1) \rightarrow (3, 1) \rightarrow (3, 2) \rightarrow (3, 3)$: the integers written on the squares he visits are $3, 2, 1, 5, 4$, so he **will** be happy.

Thus, the third, fifth, and sixth paths described above make him happy.

```input2
10 10
1 2 3 4 5 6 7 8 9 10
11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 30
31 32 33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48 49 50
51 52 53 54 55 56 57 58 59 60
61 62 63 64 65 66 67 68 69 70
71 72 73 74 75 76 77 78 79 80
81 82 83 84 85 86 87 88 89 90
91 92 93 94 95 96 97 98 99 100
```

```output2
48620
```

In this example, every possible path makes him happy.