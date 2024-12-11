Score : $300$ points

## Problem Statement

In AtCoder Land, there are $N$ popcorn stands numbered $1$ to $N$. They have $M$ different flavors of popcorn, labeled $1, 2, \dots, M$, but not every stand sells all flavors of popcorn.

Takahashi has obtained information about which flavors of popcorn are sold at each stand. This information is represented by $N$ strings $S_1, S_2, \dots, S_N$ of length $M$. If the $j$-th character of $S_i$ is `o`, it means that stand $i$ sells flavor $j$ of popcorn. If it is `x`, it means that stand $i$ does not sell flavor $j$. Each stand sells at least one flavor of popcorn, and each flavor of popcorn is sold at least at one stand.

Takahashi wants to try all the flavors of popcorn but does not want to move around too much. Determine the minimum number of stands Takahashi needs to visit to buy all the flavors of popcorn.

## Constraints

- $N$ and $M$ are integers.
- $1 \leq N, M \leq 10$
- Each $S_i$ is a string of length $M$ consisting of `o` and `x`.
- For every $i$ $(1 \leq i \leq N)$, there is at least one `o` in $S_i$.
- For every $j$ $(1 \leq j \leq M)$, there is at least one $i$ such that the $j$-th character of $S_i$ is `o`.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the minimum number of stands Takahashi needs to visit to buy all the flavors of popcorn.

```input1
3 5
oooxx
xooox
xxooo
```

```output1
2
```

By visiting the 1st and 3rd stands, you can buy all the flavors of popcorn. It is impossible to buy all the flavors from a single stand, so the answer is $2$.

```input2
3 2
oo
ox
xo
```

```output2
1
```

```input3
8 6
xxoxxo
xxoxxx
xoxxxx
xxxoxx
xxoooo
xxxxox
xoxxox
oxoxxo
```

```output3
3
```