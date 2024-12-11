Score: $100$ points

## Problem Statement

You are given positive integers $N$ and $K$, and a sequence of length $N$, $A=(A_1,A_2,\ldots,A_N)$.

Extract all elements of $A$ that are multiples of $K$, divide them by $K$, and print the quotients.

## Constraints

- $1\leq N,K\leq 100$
- $1\leq A_1 &lt; A_2 &lt; \ldots &lt; A_N \leq 100$
- $A$ has at least one multiple of $K$.
- All given numbers are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Divide all elements of $A$ that are multiples of $K$ and print the quotients in ascending order with spaces in between.

```input1
5 2
2 5 6 7 10
```

```output1
1 3 5
```

The multiples of $2$ among the elements in $A$ are $2$, $6$, and $10$. Divide them by $2$ to get $1$, $3$, and $5$, and print them in ascending order with spaces in between.

```input2
3 1
3 4 7
```

```output2
3 4 7
```

```input3
5 10
50 51 54 60 65
```

```output3
5 6
```