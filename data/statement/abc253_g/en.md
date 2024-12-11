Score : $600$ points

## Problem Statement

For an integer $N$ greater than or equal to $2$, there are $\frac{N(N - 1)}{2}$ pairs of integers $(x, y)$ such that $1 \leq x \lt y \leq N$.

Consider the sequence of these pairs sorted in the increasing lexicographical order.  Let $(x_1, y_1), \dots, (x_{R - L + 1}, y_{R - L + 1})$ be its $L$-th, $(L+1)$-th, $\ldots$, and $R$-th elements, respectively.  On a sequence $A = (1, \dots, N)$, We will perform the following operation for $i = 1, \dots, R-L+1$ in this order:

- Swap $A_{x_i}$ and $A_{y_i}$.

Find the final $A$ after all the operations.

We say that $(a, b)$ is smaller than $(c, d)$ in the lexicographical order if and only if one of the following holds:

- $a \lt c$
- $a = c$ and $b \lt d$

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq L \leq R \leq \frac{N(N-1)}{2}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $L$ $R$

## Output

Print the terms of $A$ after all the operations in one line, separated by spaces.

```input1
5 3 6
```

```output1
5 1 2 3 4
```

Consider the sequence of pairs of integers such that $1 \leq x \lt y \leq N$ sorted in the increasing lexicographical order.  Its $3$-rd, $4$-th, $5$-th, and $6$-th elements are $(1, 4), (1, 5), (2, 3), (2, 4)$, respectively.

Corresponding to these pairs, $A$ transitions as follows.

$(1, 2, 3, 4, 5) \rightarrow (4, 2, 3, 1, 5) \rightarrow (5, 2, 3, 1, 4) \rightarrow (5, 3, 2, 1, 4) \rightarrow (5, 1, 2, 3, 4)$

```input2
10 12 36
```

```output2
1 10 9 8 7 4 3 2 5 6
```