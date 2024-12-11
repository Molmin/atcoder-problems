Score : $400$ points

## Problem Statement

You are given positive integers $a$ and $b$ such that $a\leq b$, and a sequence of positive integers $A = (A_1, A_2, \ldots, A_N)$.

On this sequence, you can perform the following operation any number of times (possibly zero):

- Choose distinct indices $i, j$ ($1\leq i, j \leq N$). Add $a$ to $A_i$ and subtract $b$ from $A_j$.

Find the maximum possible value of $\min(A_1, A_2, \ldots, A_N)$ after your operations.

## Constraints

- $2\leq N\leq 3\times 10^5$
- $1\leq a\leq b\leq 10^9$
- $1\leq A_i\leq 10^{9}$

## Input

Input is given from Standard Input in the following format:

> $N$ $a$ $b$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the maximum possible value of $\min(A_1, A_2, \ldots, A_N)$ after your operations.

```input1
3 2 2
1 5 9
```

```output1
5
```

Here is one way to achieve $\min(A_1, A_2, A_3) = 5$.

- Perform the operation with $i = 1, j = 3$. $A$ becomes $(3, 5, 7)$.
- Perform the operation with $i = 1, j = 3$. $A$ becomes $(5, 5, 5)$.

```input2
3 2 3
11 1 2
```

```output2
3
```

Here is one way to achieve $\min(A_1, A_2, A_3) = 3$.

- Perform the operation with $i = 1, j = 3$. $A$ becomes $(13, 1, -1)$.
- Perform the operation with $i = 2, j = 1$. $A$ becomes $(10, 3, -1)$.
- Perform the operation with $i = 3, j = 1$. $A$ becomes $(7, 3, 1)$.
- Perform the operation with $i = 3, j = 1$. $A$ becomes $(4, 3, 3)$.

```input3
3 1 100
8 5 6
```

```output3
5
```

You can achieve $\min(A_1, A_2, A_3) = 5$ by not performing the operation at all.

```input4
6 123 321
10 100 1000 10000 100000 1000000
```

```output4
90688
```