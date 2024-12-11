Score : $300$ points

## Problem Statement

You are given patterns $S$ and $T$ consisting of `#` and `.`, each with $H$ rows and $W$ columns.<br>
The pattern $S$ is given as $H$ strings, and the $j$-th character of $S_i$ represents the element at the $i$-th row and $j$-th column. The same goes for $T$.

Determine whether $S$ can be made equal to $T$ by rearranging the columns of $S$.

Here, rearranging the columns of a pattern $X$ is done as follows.

- Choose a permutation $P=(P_1,P_2,\dots,P_W)$ of $(1,2,\dots,W)$.
- Then, for every integer $i$ such that $1 \le i \le H$, simultaneously do the following. -   - For every integer $j$ such that $1 \le j \le W$, simultaneously replace the element at the $i$-th row and $j$-th column of $X$ with the element at the $i$-th row and $P_j$-th column.

## Constraints

- $H$ and $W$ are integers.
- $1 \le H,W$
- $1 \le H \times W \le 4 \times 10^5$
- $S_i$ and $T_i$ are strings of length $W$ consisting of `#` and `.`.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_H$
> 
> $T_1$
> 
> $T_2$
> 
> $\vdots$
> 
> $T_H$

## Output

If $S$ can be made equal to $T$, print `Yes`; otherwise, print `No`.

```input1
3 4
##.#
##..
#...
.###
..##
...#
```

```output1
Yes
```

If you, for instance, arrange the $3$-rd, $4$-th, $2$-nd, and $1$-st columns of $S$ in this order from left to right, $S$ will be equal to $T$.

```input2
3 3
#.#
.#.
#.#
##.
##.
.#.
```

```output2
No
```

In this input, $S$ cannot be made equal to $T$.

```input3
2 1
#
.
#
.
```

```output3
Yes
```

It is possible that $S=T$.

```input4
8 7
#..#..#
.##.##.
#..#..#
.##.##.
#..#..#
.##.##.
#..#..#
.##.##.
....###
####...
....###
####...
....###
####...
....###
####...
```

```output4
Yes
```