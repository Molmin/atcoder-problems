Score : $500$ points

## Problem Statement

For a positive integer $x$, let $f(x)$ denote the sum of its digits. For instance, $f(158) = 1 + 5 + 8 = 14$, $f(2023) = 2 + 0 + 2 + 3 = 7$, and $f(1) = 1$.

You are given a sequence of positive integers $A = (A_1, \ldots, A_N)$. Find $\sum_{i=1}^N\sum_{j=1}^N f(A_i + A_j)$.

## Constraints

- $1\leq N\leq 2\times 10^5$
- $1\leq A_i &lt; 10^{15}$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print $\sum_{i=1}^N\sum_{j=1}^N f(A_i + A_j)$.

```input1
2
53 28
```

```output1
36
```

We have $\sum_{i=1}^N\sum_{j=1}^N f(A_i + A_j) = f(A_1+A_1)+f(A_1+A_2)+f(A_2+A_1)+f(A_2+A_2)=7+9+9+11=36$.

```input2
1
999999999999999
```

```output2
135
```

We have $\sum_{i=1}^N\sum_{j=1}^N f(A_i + A_j) = f(A_1+A_1) = 135$.

```input3
5
123 456 789 101 112
```

```output3
321
```