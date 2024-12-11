Score : $400$ points

## Problem Statement

We have a string $S$ of length $N$, where each character is `&amp;lt;` or `&amp;gt;`.

A non-negative integer sequence of $N+1$ elements, $X_0,X_1,\ldots,X_N$, is said to be *good* when it satisfies the following for every $1 \leq i \leq N$:

- $X_{i-1}&lt;X_i$, if $S_i$ is `&amp;lt;`;
- $X_{i-1} &gt; X_i$, if $S_i$ is `&amp;gt;`.

Given a good non-negative integer sequence $A$, divide it into as many good non-negative integer sequences as possible.
That is, find a positive integer $k$ and $k$ good non-negative integer sequences $B_1,B_2,\ldots, B_k$ satisfying the following with the maximum possible value of $k$:

- For every $0 \leq i \leq N$, the sum of the $i$-th elements of $B_1,\ldots,B_k$ equals $A_i$.

## Constraints

- $1 \leq N \leq 100$
- $0 \leq A_i \leq 10^4$
- $S$ is a string of length $N$ consisting of `&amp;lt;` and `&amp;gt;`.
- $A$ is a good non-negative integer sequence. Particularly, $A$ has $N+1$ elements.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $A_0$ $A_1$ $\cdots$ $A_N$

## Output

Print your answer to Standard Output in the following format:

> $k$
> 
> $B_{1,0}$ $B_{1,1}$ $\cdots$ $B_{1,N}$
> 
> $:$
> 
> $B_{k,0}$ $B_{k,1}$ $\cdots$ $B_{k,N}$

Here, $B_{i,j}$ denotes the value of the $j$-th element of the good non-negative integer sequence $B_i$.

```input1
3
<><
3 8 6 10
```

```output1
2
1 5 4 7
2 3 2 3
```