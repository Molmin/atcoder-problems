Score : $1000$ points

## Problem Statement

Given is a sequence of $N$ positive integers $A = (A_1, A_2, \ldots, A_N)$.

You can do the following operation on this sequence any number of times.

- Choose integers $i, j, k$ such that $1\leq i &lt; j &lt; k \leq N$ and $j = \frac{i+k}{2}$. Replace $A_j$ with $\lfloor\frac{A_i+A_k}{2}\rfloor$.

Find the minimum possible value of $\sum_{i=1}^N A_i$ after the operations.

## Constraints

- $3\leq N\leq 3\times 10^5$
- $1\leq A_i\leq 10^{12}$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
5
2 2 5 5 4
```

```output1
13
```

The following operations achieves $\sum_{i=1}^N A_i = 13$.

- Do the operation with $(i,j,k) = (1,3,5)$. The sequence $A$ is now $(2,2,3,5,4)$.
- Do the operation with $(i,j,k) = (3,4,5)$. The sequence $A$ is now $(2,2,3,3,4)$.
- Do the operation with $(i,j,k) = (2,3,4)$. The sequence $A$ is now $(2,2,2,3,4)$.

```input2
5
3 1 4 1 5
```

```output2
11
```

```input3
3
3 1 3
```

```output3
7
```

```input4
3
3 5 3
```

```output4
9
```