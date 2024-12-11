Score : $400$ points

## Problem Statement

There are $N$ trampolines on a two-dimensional planar town where Takahashi lives.  The $i$-th trampoline is located at the point $(x_i, y_i)$ and has a power of $P_i$.  Takahashi's jumping ability is denoted by $S$.  Initially, $S=0$.  Every time Takahashi trains, $S$ increases by $1$.

Takahashi can jump from the $i$-th to the $j$-th trampoline if and only if:

- $P_iS\geq |x_i - x_j| +|y_i - y_j|$.

Takahashi's objective is to become able to choose a starting trampoline such that he can reach any trampoline from the chosen one with some jumps.

At least how many times does he need to train to achieve his objective?

## Constraints

- $2 \leq N \leq 200$
- $-10^9 \leq x_i,y_i \leq 10^9$
- $1 \leq P_i \leq 10^9$
- $(x_i, y_i) \neq (x_j,y_j)\ (i\neq j)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$ $P_1$
> 
> $\vdots$
> 
> $x_N$ $y_N$ $P_N$

## Output

Print the answer.

```input1
4
-10 0 1
0 0 5
10 0 1
11 0 1
```

```output1
2
```

If he trains twice, $S=2$,
in which case he can reach any trampoline from the $2$-nd one.

For example, he can reach the $4$-th trampoline as follows.

- <p>Jump from the $2$-nd to the $3$-rd trampoline.  (Since $P_2 S = 10$ and $|x_2-x_3| + |y_2-y_3| = 10$, it holds that $P_2 S \geq |x_2-x_3| + |y_2-y_3|$.)</p>
- <p>Jump from the $3$-rd to the $4$-th trampoline.  (Since $P_3 S = 2$ and $|x_3-x_4| + |y_3-y_4| = 1$, it holds that $P_3 S \geq |x_3-x_4| + |y_3-y_4|$.)</p>

```input2
7
20 31 1
13 4 3
-10 -15 2
34 26 5
-2 39 4
0 -50 1
5 -20 2
```

```output2
18
```