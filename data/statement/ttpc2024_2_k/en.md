Score: $100$ points

## Problem Statement

You are given a sequence $A = (A_1, A_2, \cdots, A_N)$ of length $N$, consisting of $0$, $1$, and $-1$.

There are $2^q$ ways to replace all $-1$s in $A$ with either $0$ or $1$, where $q$ is the number of $-1$s in $A$. Among these, for all sequences that contain both $0$ and $1$, calculate the sum of the answers to the following problem modulo $998244353$:

Let $\alpha$ and $\beta$ be the number of $0$s and $1$s in $A$, respectively.<br>
Also, let $X = (X_0, X_1, \cdots, X_{\alpha-1})$ be the sequence of indices of $A_i = 0$, arranged in increasing order, and let $Y = (Y_0, Y_1, \cdots, Y_{\beta-1})$ be the sequence of indices of $A_i = 1$, arranged in increasing order (note that the indices of $X$ and $Y$ start from $0$).<br>

$\displaystyle\sum_{i=0}^{\mathrm{LCM}(\alpha, \beta)-1} |X_{(i \bmod \alpha)} - Y_{(i \bmod \beta)}|$

Calculate the value of the above expression.

Here, $\mathrm{LCM}(x, y)$ represents the least common multiple of $x$ and $y$, and $x \bmod y$ denotes the remainder when $x$ is divided by $y$.

## Constraints

- All input values are integers.
- $2 \leq N \leq 2250$
- Each $A_i$ is either $0$, $1$, or $-1$ $(i = 1, 2, \cdots, N)$.

## Partial Score

- $30$ points will be awarded for passing the test set satisfying the additional constraint $N \leq 100$.

## Input

The input is given in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Output the answer.

```input1
4
1 1 -1 -1
```

```output1
14
```

For $A = (1, 1, 0, 0)$, $|3 - 1| + |4 - 2| = 4$.<br>
For $A = (1, 1, 0, 1)$, $|3 - 1| + |3 - 2| + |3 - 4| = 4$.<br>
For $A = (1, 1, 1, 0)$, $|4 - 1| + |4 - 2| + |4 - 3| = 6$.<br>
Thus, the answer is $4 + 4 + 6 = 14$.

```input2
3
0 0 0
```

```output2
0
```

Since it is not possible to form a sequence containing both $0$ and $1$, the answer is $0$.

```input3
10
-1 -1 0 -1 -1 1 -1 -1 -1 -1
```

```output3
10152
```