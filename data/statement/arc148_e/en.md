Score : $800$ points

## Problem Statement

You are given a sequence of length $N$, $A = (A_1, ..., A_N)$, and an integer $K$.<br>
How many permutations of $A$ are there such that no two adjacent elements sum to less than $K$? Find the count modulo $998244353$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $0 \leq K \leq 10^9$
- $0 \leq A_i \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
4 5
1 2 3 4
```

```output1
4
```

The following four permutations satisfy the condition:

- $(1, 4, 2, 3)$
- $(1, 4, 3, 2)$
- $(2, 3, 4, 1)$
- $(3, 2, 4, 1)$

```input2
4 3
1 2 3 3
```

```output2
12
```

There are $12$ permutations of $A$, all of which satisfy the condition.

```input3
10 7
3 1 4 1 5 9 2 6 5 3
```

```output3
108
```