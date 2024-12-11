Score : $400$ points

## Problem Statement

There is a grid consisting of $N$ cells numbered $1$ to $N$.

Initially, cell $i$ $(1 \le i \le N)$ has an integer $i \bmod 2$ written in it. You can perform the following operation any number of times, possibly zero:

- Choose cells $l$ and $r$ ($l+1 &lt; r$) that satisfy the following conditions, and replace each of the integers written in cells $l+1, l+2, \dots, r-1$ with the integer written in cell $l$.-   - The integer written in cell $l$ is equal to the integer written in cell $r$.
-   - The integer written in cell $i$ $(l &amp;lt; i &amp;lt; r)$ is different from the integer written in cell $l$.

Find the number, modulo $998244353$, of sequences of operations that result in the integers written in cell $i$ ($1 \leq i \leq N$) being $A_i$.

Two sequences of operations are considered different if and only if their lengths are different or there exists a positive integer $t$ not exceeding the length of the sequences such that the $(l, r)$ chosen in the $t$-th operations differ.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq A_i \leq 1$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
6
1 1 1 1 1 0
```

```output1
3
```

To make the integers written in each cell $i$ equal to $A_i$, for example, you can perform the following operations. (Here, we represent the state of the grid as a sequence $X = (X_1, X_2, \dots, X_N)$.)

- Initially, $X = (1, 0, 1, 0, 1, 0)$.
- Choose cells $2$ and $4$. $X$ becomes $(1, 0, 0, 0, 1, 0)$.
- Choose cells $1$ and $5$. $X$ becomes $(1, 1, 1, 1, 1, 0)$.

Besides the above, there are two other sequences of operations that result in the integers written in cell $i$ being $A_i$, so the answer is $3$.

```input2
10
1 1 1 1 1 0 1 1 1 0
```

```output2
9
```