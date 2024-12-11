Score : $400$ points

## Problem Statement

For a sequence $a = (a_1, a_2, a_3, \dots, a_k)$, let $f(a)$ be the sum of its elements after the following is done:

- For each $i = 1, 2, 3, \dots, k$, in this order, do the following operation:<br>
    add the current maximum value of an element in $a$ to $a_i$.

You are given a sequence of length $N$: $A = (A_1, A_2, A_3, \dots, A_N)$.<br>
For each integer $k$ between $1$ and $N$ (inclusive), find $f(a)$ when $a = (A_1, A_2, A_3, \dots, A_k)$.

## Constraints

- $1 \le N \le 2 \times 10^5$
- $1 \le A_i \le 10^7$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $A_3$ $\dots$ $A_N$

## Output

Print $N$ lines. The $k$-th line should contain $f(a)$ when $a = (A_1, A_2, A_3, \dots, A_k)$.

```input1
3
1 2 3
```

```output1
2
8
19
```

For example, when $a = (A_1, A_2, A_3)$, $f(a)$ is computed as follows:

- First, for $i = 1$, add to $a_1$ the current maximum value of $a$, which is $3$, making $a = (4, 2, 3)$.
- Next, for $i = 2$, add to $a_2$ the current maximum value of $a$, which is $4$, making $a = (4, 6, 3)$.
- Finally, for $i = 3$, add to $a_3$ the current maximum value of $a$, which is $6$, making $a = (4, 6, 9)$.
- $f(a)$ is the sum of the elements of $a$ now, which is $19$.