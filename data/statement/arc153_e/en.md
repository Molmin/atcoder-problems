Score : $800$ points

## Problem Statement

For a positive integer $X$ none of whose digits is $0$, consider obtaining a positive integer $Y$ as follows.

- Initialize $S$ as an empty string.
- Let $N$ be the number of digits in $X$. For $i = 1, \ldots, N$ in this order, do the following: insert the $i$-th character in the decimal notation of $X$ at the beginning or end of $S$.
- Let $Y$ be the positive integer represented by the string $S$.

Let $f(X)$ denote the minimum positive integer that can be obtained from $X$ in this way.

You are given a positive integer $Y$ none of whose digits is $0$. Print the number, modulo $998244353$, of positive integers $X$ none of whose digits is $0$ such that $f(X) = Y$.

## Constraints

- $Y$ is a positive integer none of whose digits is $0$.
- $1\leq Y &lt; 10^{200000}$

## Input

The input is given from Standard Input in the following format:

> $Y$

## Output

Print the number, modulo $998244353$, of positive integers $X$ none of whose digits is $0$ such that $f(X) = Y$.

```input1
1332
```

```output1
3
```

Three integers, $1332$, $3132$, and $3312$, satisfy the conditions.

```input2
3312
```

```output2
0
```

```input3
12234433442
```

```output3
153
```