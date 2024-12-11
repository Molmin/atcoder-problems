Score : $650$ points

## Problem Statement

You are given a sequence $(A_1, A_2, \ldots , A_N)$.
Let us define a sequence $(F_0, F_1, \ldots , F_N)$ by the following formulae.

- $F_0 = 1$
- $F_n = A_n\displaystyle\sum_{i+j&lt;n}F_iF_j$ $(1 \leq n \leq N)$

Find $F_1, \ldots , F_N$ modulo $998244353$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq A_i &lt; 998244353$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print $F_1, \ldots , F_N$ modulo $998244353$ in this order, with spaces in between.

```input1
5
1 2 3 4 5
```

```output1
1 6 48 496 6240
```

$F_1 = A_1F_0F_0 = 1$.
$F_2 = A_2(F_0F_0+F_0F_1+F_1F_0) = 6$.
Similarly, we find $F_3 = 48, F_4 = 496, F_5 = 6240$.

```input2
3
12345 678901 2345678
```

```output2
12345 790834943 85679169
```