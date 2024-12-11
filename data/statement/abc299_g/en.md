Score : $600$ points

## Problem Statement

We have a sequence $A$ of length $N$ consisting of integers between $1$ and $M$. Here, every integer from $1$ to $M$ appears at least once in $A$.

Among the length-$M$ subsequences of $A$ where each of $1, \ldots, M$ appears once, find the lexicographically smallest one.

## Constraints

- $1 \leq M \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq M$
- Every integer between $1$ and $M$, inclusive, appears at least once in $A$.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Let $B_1, \ldots, B_M$ be the sought subsequence, and print it in the following format:

> $B_1$ $B_2$ $\ldots$ $B_M$

```input1
4 3
2 3 1 3
```

```output1
2 1 3
```

The length-$3$ subsequences of $A$ where each of $1, 2, 3$ appears once are $(2, 3, 1)$ and $(2, 1, 3)$. The lexicographically smaller among them is $(2, 1, 3)$.

```input2
4 4
2 3 1 4
```

```output2
2 3 1 4
```

```input3
20 10
6 3 8 5 8 10 9 3 6 1 8 3 3 7 4 7 2 7 8 5
```

```output3
3 5 8 10 9 6 1 4 2 7
```