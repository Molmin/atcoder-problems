Score : $600$ points

## Problem Statement

Takahashi is on a skating rink consisting of $H$ rows and $W$ columns of squares.
Let $(r, c)$ denote the square at the $r$-th row from the north and $c$-th column from the west.
Each square is ice or ground; $(r, c)$ is ground if $S_{r, c}$ is `#` and ice if $S_{r, c}$ is `.`.
There are walls around the rink.

When Takahashi is standing still on the rink, he can start moving to the east, west, south, or north.
After he starts moving, he will keep moving in the same direction, until he bumps into a wall or he is *on* a ground square (other than the square where he started moving).

We say the rink is efficient for $(r, c)$ when the following condition is satisfied:

- There is a sequence of moves that starts at $(r, c)$, standing still, and *passes* every square. (It is not required to stop on each square.)

Takahashi wants to change some number of ice squares to ground squares so that the rink is efficient for every square.
How many squares does he need to change, at least?

## Constraints

- $2\le H,W \le 1000$
- $S_{r,c}$ is `#` or `.`.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_{1,1}\dots S_{1,W}$
> 
> $\vdots$
> 
> $S_{H,1}\dots S_{H,W}$

## Output

Print the minimum number of changes needed to make the rink efficient for every square.

```input1
3 9
.........
.........
.........
```

```output1
1
```

Initially, it is impossible to start at $(1, 1)$ and pass $(2, 2)$.
One way to meet the objective is to change the rink as follows:

```output1
.........
........#
.........
```

```input2
10 10
..........
#...#.....
..........
..........
..........
....#.....
.#......#.
..........
..........
..........
```

```output2
6
```