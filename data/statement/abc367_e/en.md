Score : $450$ points

## Problem Statement

You are given a sequence $X$ of length $N$ where each element is between $1$ and $N$, inclusive, and a sequence $A$ of length $N$.<br>
Print the result of performing the following operation $K$ times on $A$.

- Replace $A$ with $B$ such that $B_i = A_{X_i}$.

## Constraints

- All input values are integers.
- $1 \le N \le 2 \times 10^5$
- $0 \le K \le 10^{18}$
- $1 \le X_i \le N$
- $1 \le A_i \le 2 \times 10^5$

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $X_1$ $X_2$ $\dots$ $X_N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Let $A'$ be the sequence $A$ after the operations. Print it in the following format:

> $A'_1$ $A'_2$ $\dots$ $A'_N$

```input1
7 3
5 2 6 3 1 4 6
1 2 3 5 7 9 11
```

```output1
7 2 3 5 1 9 3
```

In this input, $X=(5,2,6,3,1,4,6)$ and the initial sequence is $A=(1,2,3,5,7,9,11)$.

- After one operation, the sequence is $(7,2,9,3,1,5,9)$.
- After two operations, the sequence is $(1,2,5,9,7,3,5)$.
- After three operations, the sequence is $(7,2,3,5,1,9,3)$.

```input2
4 0
3 4 1 2
4 3 2 1
```

```output2
4 3 2 1
```

There may be cases where no operations are performed.

```input3
9 1000000000000000000
3 7 8 5 9 3 7 4 2
9 9 8 2 4 4 3 5 3
```

```output3
3 3 3 3 3 3 3 3 3
```