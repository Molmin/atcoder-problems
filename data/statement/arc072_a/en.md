Score : $300$ points

## Problem Statement

You are given an integer sequence of length $N$. The $i$-th term in the sequence is $a_i$.
In one operation, you can select a term and either increment or decrement it by one.

At least how many operations are necessary to satisfy the following conditions?

- For every $i$ $(1 \leq i \leq n)$, the sum of the terms from the $1$-st through $i$-th term is not zero.
- For every $i$ $(1 \leq i \leq n-1)$, the sign of the sum of the terms from the $1$-st through $i$-th term, is different from the sign of the sum of the terms from the $1$-st through $(i+1)$-th term.

## Constraints

- $2 \leq n \leq 10^5$
- $|a_i| \leq 10^9$
- Each $a_i$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $n$
> 
> $a_1$ $a_2$ $...$ $a_n$

## Output

Print the minimum necessary count of operations.

```input1
4
1 -3 1 0
```

```output1
4
```

For example, the given sequence can be transformed into $1, -2, 2, -2$ by four operations. The sums of the first one, two, three and four terms are $1, -1, 1$ and $-1$, respectively, which satisfy the conditions.

```input2
5
3 -6 4 -5 7
```

```output2
0
```

The given sequence already satisfies the conditions.

```input3
6
-1 4 3 2 -5 4
```

```output3
8
```