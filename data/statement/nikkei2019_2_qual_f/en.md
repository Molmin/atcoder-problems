Score : $1400$ points

## Problem Statement

In a two-dimensional plane, there is a square frame whose vertices are at coordinates $(0,0)$, $(N,0)$, $(0,N)$, and $(N,N)$.
The frame is made of mirror glass. A ray of light striking an edge of the frame (but not a vertex) will be reflected so that the angle of incidence is equal to the angle of reflection.
A ray of light striking a vertex of the frame will be reflected in the direction opposite to the direction it is coming from.

We will define the *path* for a grid point (a point with integer coordinates) $(i,j)$ ($0&lt;i,j&lt;N$) strictly within the frame, as follows:

- The path for $(i,j)$ is the union of the trajectories of four rays of light emitted from $(i,j)$ to $(i-1,j-1)$, $(i-1,j+1)$, $(i+1,j-1)$, and $(i+1,j+1)$.

![](https://img.atcoder.jp/nikkei2019-2-qual/f82200c30253b6e06c6043a2c7668735.png)

Figure: an example of a path for a grid point

There is a light bulb at each grid point strictly within the frame. We will assign a state - ON or OFF - to each bulb. The state of the whole set of bulbs are called *beautiful* if it is possible to turn OFF all the bulbs by repeating the following operation:

- Choose a grid point strictly within the frame, and switch the states of all the bulbs on its path.

Takahashi has set the states of some of the bulbs, but not for the remaining bulbs.
Find the number of ways to set the states of the remaining bulbs so that the state of the whole set of bulbs is beautiful, modulo $998244353$.
The state of the bulb at the grid point $(i,j)$ is set to be ON if $A_{i,j}=$`o`, OFF if $A_{i,j}=$`x`, and unset if $A_{i,j}=$`?`.

## Constraints

- $2 \leq N \leq 1500$
- $A_{ij}$ is `o`, `x`, or `?`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_{1,1}...A_{1,N-1}$
> 
> $:$
> 
> $A_{N-1,1}...A_{N-1,N-1}$

## Output

Print the answer.

```input1
4
o?o
???
?x?
```

```output1
1
```

The state of the whole set of bulbs will be beautiful if we set the state of each bulb as follows:

```output1
oxo
xox
oxo
```

We can turn OFF all the bulbs by, for example, choosing the point $(1, 1)$ and switching the states of the bulbs at $(1,1)$, $(1,3)$, $(2,2)$, $(3,1)$, and $(3,3)$.

```input2
5
o?o?
????
o?x?
????
```

```output2
0
```

```input3
6
?o???
????o
??x??
o????
???o?
```

```output3
32
```

```input4
9
????o??x
?????x??
??o?o???
?o?x????
???????x
x?o?o???
????????
x?????x?
```

```output4
4
```