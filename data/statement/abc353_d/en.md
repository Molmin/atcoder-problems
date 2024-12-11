Score: $400$ points

## Problem Statement

For positive integers $x$ and $y$, define $f(x, y)$ as follows:

- Interpret the decimal representations of $x$ and $y$ as strings and concatenate them in this order to obtain a string $z$. The value of $f(x, y)$ is the value of $z$ when interpreted as a decimal integer.

For example, $f(3, 14) = 314$ and $f(100, 1) = 1001$.

You are given a sequence of positive integers $A = (A_1, \ldots, A_N)$ of length $N$. Find the value of the following expression modulo $998244353$:

$\displaystyle \sum_{i=1}^{N-1}\sum_{j=i+1}^N f(A_i,A_j)$.

<br>

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
3
3 14 15
```

```output1
2044
```

- $f(A_1, A_2) = 314$
- $f(A_1, A_3) = 315$
- $f(A_2, A_3) = 1415$

Thus, the answer is $f(A_1, A_2) + f(A_1, A_3) + f(A_2, A_3) = 2044$.

```input2
5
1001 5 1000000 1000000000 100000
```

```output2
625549048
```

Be sure to calculate the value modulo $998244353$.