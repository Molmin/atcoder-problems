Score : $500$ points

## Problem Statement

A box contains $N$ balls, each with an integer between $1$ and $M-1$ written on it.
For $i = 1, 2, \ldots, N$, the integer written on the $i$-th ball is $A_i$.

While the box has two or more balls remaining, Takahashi will repeat the following.

- First, choose two balls arbitrarily.
- Then, get a score equal to the remainder when $x^y + y^x$ is divided by $M$, where $x$ and $y$ are the integers written on the two balls.
- Finally, choose one of the two balls arbitrarily, eat it, and return the other to the box.

Print the maximum possible total score Takahashi will get.

## Constraints

- $2 \leq N \leq 500$
- $2 \leq M \leq 10^9$
- $1 \leq A_i \leq M-1$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
4 10
4 2 3 2
```

```output1
20
```

Consider the following scenario. Below, $X \bmod Y$ denotes the remainder when a non-negative integer $X$ is divided by a positive integer $Y$.

1. Take the first and third balls from the box to score $(4^3 + 3^4) \bmod 10 = 5$ points. Then, eat the first ball and return the third to the box. Now, the box has the second, third, and fourth balls.
2. Take the third and fourth balls from the box to score $(3^2 + 2^3) \bmod 10 = 7$ points. Then, eat the third ball and return the fourth to the box. Now, the box has the second and fourth balls.
3. Take the second and fourth balls from the box to score $(2^2 + 2^2) \bmod 10 = 8$ points. Then, eat the second ball and return the fourth to the box. Now, the box has just the fourth ball.

Here, Takahashi scores a total of $5 + 7 + 8 = 20$ points, which is the maximum possible value.

```input2
20 100
29 31 68 20 83 66 23 84 69 96 41 61 83 37 52 71 18 55 40 8
```

```output2
1733
```