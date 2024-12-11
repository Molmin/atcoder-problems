Score : $400$ points

## Problem Statement

You are given a permutation $p_1,p_2,...,p_N$ consisting of $1$,$2$,..,$N$.
You can perform the following operation any number of times (possibly zero):

Operation: Swap two **adjacent** elements in the permutation.

You want to have $p_i \neq i$ for all $1 \leq i \leq N$.
Find the minimum required number of operations to achieve this.

## Constraints

- $2 \leq N \leq 10^5$
- $p_1,p_2,..,p_N$ is a permutation of $1,2,..,N$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $p_1$ $p_2$ .. $p_N$

## Output

Print the minimum required number of operations

```input1
5
1 4 3 5 2
```

```output1
2
```

Swap $1$ and $4$, then swap $1$ and $3$. $p$ is now $4,3,1,5,2$ and satisfies the condition.
This is the minimum possible number, so the answer is $2$.

```input2
2
1 2
```

```output2
1
```

Swapping $1$ and $2$ satisfies the condition.

```input3
2
2 1
```

```output3
0
```

The condition is already satisfied initially.

```input4
9
1 2 4 9 5 8 7 3 6
```

```output4
3
```