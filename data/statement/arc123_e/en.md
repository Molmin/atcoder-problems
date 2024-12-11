Score : $700$ points

## Problem Statement

Two programmers, $X$ and $Y$, are going to start competitive programming.

One's skill in competitive programming is represented by a positive integer called the *level*. Initially, $X$'s level is $A_X$, and $Y$'s level is $A_Y$. The two will do learning tasks to raise their levels.

We know that they level up as follows.

- $X$'s level raises by one after every $B_X$ learning tasks.
- $Y$'s level raises by one after every $B_Y$ learning tasks.

How many among $n = 1, 2, \ldots, N$ satisfy the following?

- $X$'s level and $Y$'s level are equal when each of them has done exactly $n$ learning tasks.

Process $T$ test cases per input file.

## Constraints

- $1\leq T\leq 2\times 10^5$
- $1\leq N\leq 10^{9}$
- $1\leq A_X, B_X, A_Y, B_Y \leq 10^6$

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\text{case}_2$
> 
> $\vdots$
> 
> $\text{case}_T$

Each case is in the following format:

> $N$ $A_X$ $B_X$ $A_Y$ $B_Y$

## Output

Print the answers.

```input1
5
10 5 3 4 2
5 5 3 4 2
100 5 3 4 2
10 5 3 4 3
10 5 10 5 9
```

```output1
6
3
6
0
9
```

We will describe the first test case.

For each $n = 1, 2, \ldots, 10$, the two's levels after doing $n$ learning tasks are as follows.

- $X$'s level: $5, 5, 6, 6, 6, 7, 7, 7, 8, 8$.
- $Y$'s level: $4, 5, 5, 6, 6, 7, 7, 8, 8, 9$.

There are six scenarios ($n = 2, 4, 5, 6, 7, 9$) where the two's levels are equal, so the answer is $6$.