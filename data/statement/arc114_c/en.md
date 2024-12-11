Score : $600$ points

## Problem Statement

For a sequence $A$ of length $N$ consisting of integers between $1$ and $M$ (inclusive), let us define $f(A)$ as follows:

- We have a sequence $X$ of length $N$, where every element is initially $0$. $f(A)$ is the minimum number of operations required to make $X$ equal $A$ by repeating the following operation:-   - Specify $1 \leq l \leq r \leq N$ and $1 \leq v \leq M$, then replace $X_i$ with $\max(X_i, v)$ for each $l \leq i \leq r$.

Find the sum, modulo $998244353$, of $f(A)$ over all $M^N$ sequences that can be $A$.

## Constraints

- $1 \leq N, M \leq 5000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the sum of $f(A)$ over all sequences $A$, modulo $998244353$.

```input1
2 3
```

```output1
15
```

The $3 ^ 2 = 9$ sequences and the value of $f$ for those are as follows:

- For $A = (1, 1)$, we can make $X$ equal it with one operation with $(l = 1, r = 2, v = 1)$, so $f(A) = 1$.
- For $A = (1, 2)$, we can make $X$ equal it with two operations with $(l = 1, r = 2, v = 1)$ and $(l = 2, r = 2, v = 2)$, so $f(A) = 2$.
- For $A = (1, 3)$, we can make $X$ equal it with two operations with $(l = 1, r = 2, v = 1)$ and $(l = 2, r = 2, v = 3)$, so $f(A) = 2$.
- For $A = (2, 1)$, we can make $X$ equal it with two operations with $(l = 1, r = 2, v = 1)$ and $(l = 1, r = 1, v = 2)$, so $f(A) = 2$.
- For $A = (2, 2)$, we can make $X$ equal it with one operation with $(l = 1, r = 2, v = 2)$, so $f(A) = 1$.
- For $A = (2, 3)$, we can make $X$ equal it with two operations with $(l = 1, r = 2, v = 2)$ , $(l = 2, r = 2, v = 3)$, so $f(A) = 2$.
- For $A = (3, 1)$, we can make $X$ equal it with two operations with $(l = 1, r = 2, v = 1)$ and $(l = 1, r = 1, v = 3)$ so $f(A) = 2$.
- For $A = (3, 2)$, we can make $X$ equal it with two operations with $(l = 1, r = 2, v = 2)$ and $(l = 1, r = 1, v = 3)$, so $f(A) = 2$.
- For $A = (3, 3)$, we can make $X$ equal it with one operation with $(l = 1, r = 2, v = 3)$, so $f(A) = 1$.

The sum of these values is $3 \times 1 + 6 \times 2 = 15$.

```input2
3 2
```

```output2
15
```

```input3
34 56
```

```output3
649717324
```