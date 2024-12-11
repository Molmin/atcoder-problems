Score: $300$ points

## Problem Statement

For positive integers $x$ and $y$, define $f(x, y)$ as the remainder of $(x + y)$ divided by $10^8$.

You are given a sequence of positive integers $A = (A_1, \ldots, A_N)$ of length $N$. Find the value of the following expression:

$\displaystyle \sum_{i=1}^{N-1}\sum_{j=i+1}^N f(A_i,A_j)$.

<br>

## Constraints

- $2 \leq N \leq 3\times 10^5$
- $1 \leq A_i &lt; 10^8$
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
3 50000001 50000002
```

```output1
100000012
```

- $f(A_1,A_2)=50000004$
- $f(A_1,A_3)=50000005$
- $f(A_2,A_3)=3$

Thus, the answer is $f(A_1,A_2) + f(A_1,A_3) + f(A_2,A_3) = 100000012$.

Note that you are not asked to compute the remainder of the sum divided by $10^8$.

```input2
5
1 3 99999999 99999994 1000000
```

```output2
303999988
```