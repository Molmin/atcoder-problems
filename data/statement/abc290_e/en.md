Score : $500$ points

## Problem Statement

For a sequence $X$, let $f(X) =$ (the minimum number of elements one must modify to make $X$ a palindrome).

Given a sequence $A$ of length $N$, find the sum of $f(X)$ over all **contiguous** subarrays of $A$.

Here, a sequence $X$ of length $m$ is said to be a palindrome if and only if the $i$-th and the $(m+1-i)$-th elements of $X$ are equal for all $1 \le i \le m$.

## Constraints

- All values in the input are integers.
- $1 \le N \le 2 \times 10^5$
- $1 \le A_i \le N$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer as an integer.

```input1
5
5 2 1 2 2
```

```output1
9
```

- $f(5) = 0$
- $f(2) = 0$
- $f(1) = 0$
- $f(2) = 0$
- $f(2) = 0$
- $f(5,2) = 1$
- $f(2,1) = 1$
- $f(1,2) = 1$
- $f(2,2) = 0$
- $f(5,2,1) = 1$
- $f(2,1,2) = 0$
- $f(1,2,2) = 1$
- $f(5,2,1,2) = 2$
- $f(2,1,2,2) = 1$
- $f(5,2,1,2,2) = 1$

Therefore, the sought answer is $9$.