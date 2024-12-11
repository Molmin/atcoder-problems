Score : $1000$ points

## Problem Statement

Snuke arranged $N$ colorful balls in a row.
The $i$-th ball from the left has color $c_i$ and weight $w_i$.

He can rearrange the balls by performing the following two operations any number of times, in any order:

- Operation $1$: Select two balls with the same color. If the total weight of these balls is at most $X$, swap the positions of these balls.
- Operation $2$: Select two balls with different colors. If the total weight of these balls is at most $Y$, swap the positions of these balls.

How many different sequences of colors of balls can be obtained? Find the count modulo $10^9 + 7$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq X, Y \leq 10^9$
- $1 \leq c_i \leq N$
- $1 \leq w_i \leq 10^9$
- $X, Y, c_i, w_i$ are all integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$ $Y$
> 
> $c_1$ $w_1$
> 
> $:$
> 
> $c_N$ $w_N$

## Output

Print the answer.

```input1
4 7 3
3 2
4 3
2 1
4 4
```

```output1
2
```

- The sequence of colors $(2,4,3,4)$ can be obtained by swapping the positions of the first and third balls by operation $2$.
- It is also possible to swap the positions of the second and fourth balls by operation $1$, but it does not affect the sequence of colors.

```input2
1 1 1
1 1
```

```output2
1
```

```input3
21 77 68
16 73
16 99
19 66
2 87
2 16
7 17
10 36
10 68
2 38
10 74
13 55
21 21
3 7
12 41
13 88
18 6
2 12
13 87
1 9
2 27
13 15
```

```output3
129729600
```