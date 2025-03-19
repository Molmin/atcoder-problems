Score : $400$ points

## Problem Statement

You are given an integer sequence of length $N$: $(A_1, A_2, \ldots, A_N)$. There is also a sequence $S$, which is initially empty.

For each $i = 1, 2, \ldots, N$ in this order, you perform exactly one of the following two operations:

- Append $A_i$ as an element to the end of $S$.
- Delete the last element of $S$. You cannot choose this operation if $S$ is empty.

Print the maximum possible value of the sum of the elements of $S$ after all operations.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $-10^9 \leq A_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
6
3 -1 -4 5 -9 2
```

```output1
8
```

Starting from the initial state where $S$ is an empty sequence, consider the following operations:

- For $i = 1$, append $A_1 = 3$ to the end of $S$. Now, $S = (3)$.
- For $i = 2$, append $A_2 = -1$ to the end of $S$. Now, $S = (3, -1)$.
- For $i = 3$, delete the last element of $S$. Now, $S = (3)$.
- For $i = 4$, append $A_4 = 5$ to the end of $S$. Now, $S = (3, 5)$.
- For $i = 5$, append $A_5 = -9$ to the end of $S$. Now, $S = (3, 5, -9)$.
- For $i = 6$, delete the last element of $S$. Now, $S = (3, 5)$.

Here, the sum of the elements of $S$ after all operations is $3 + 5 = 8$, which is the maximum possible value.

```input2
1
-1
```

```output2
-1
```

Note that if $S$ is empty, you must choose to append an element.

```input3
20
-14 74 -48 38 -51 43 5 37 -39 -29 80 -44 -55 59 17 89 -37 -68 38 -16
```

```output3
369
```