Score: $475$ points

## Problem Statement

You are given a sequence $A=(A_1,\ldots,A_N)$ of length $N$. The elements of $A$ are distinct.

Process $Q$ queries in the order they are given. Each query is of one of the following two types:

- `1 x y` : Insert $y$ immediately after the element $x$ in $A$. It is guaranteed that $x$ exists in $A$ when this query is given.
- `2 x` : Remove the element $x$ from $A$. It is guaranteed that $x$ exists in $A$ when this query is given.

It is guaranteed that after processing each query, $A$ will not be empty, and its elements will be distinct.

Print $A$ after processing all the queries.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $1 \leq Q \leq 2\times 10^5$
- $1 \leq A_i \leq 10^9$
- $A_i \neq A_j$
- For queries of the first type, $1 \leq x,y \leq 10^9$.
- When a query of the first type is given, $x$ exists in $A$.
- For queries of the second type, $1 \leq x \leq 10^9$.
- When a query of the second type is given, $x$ exists in $A$.
- After processing each query, $A$ is not empty, and its elements are distinct.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ 
> 
> $A_1$ $\ldots$ $A_N$
> 
> $Q$
> 
> $\mathrm{Query}_1$
> 
> $\vdots$ 
> 
> $\mathrm{Query}_Q$

Here, $\mathrm{Query}_i$ represents the $i$-th query and is given in one of the following formats:

> $1$ $x$ $y$

> $2$ $x$

## Output

Let $A=(A_1,\ldots,A_K)$ be the sequence after processing all the queries. Print $A_1,\ldots,A_K$ in this order, separated by spaces.

```input1
4
2 1 4 3
4
2 1
1 4 5
2 2
1 5 1
```

```output1
4 5 1 3
```

The queries are processed as follows:

- Initially, $A=(2,1,4,3)$.
- The first query removes $1$, making $A=(2,4,3)$.
- The second query inserts $5$ immediately after $4$, making $A=(2,4,5,3)$.
- The third query removes $2$, making $A=(4,5,3)$.
- The fourth query inserts $1$ immediately after $5$, making $A=(4,5,1,3)$.

```input2
6
3 1 4 5 9 2
7
2 5
1 3 5
1 9 7
2 9
2 3
1 2 3
2 4
```

```output2
5 1 7 2 3
```