Score : $500$ points

## Problem Statement

There is a town represented as a two-dimensional grid with $H$ horizontal rows and $W$ vertical columns.<br>
A character $a_{i,j}$ describes the square at the $i$-th row from the top and $j$-th column from the left. Here, $a_{i,j}$ is one of the following: `S` , `G` , `.` , `#` , `a`, ..., and `z`.<br>
`#` represents a square that cannot be entered, and `a`, ..., `z` represent squares with teleporters.  

Takahashi is initially at the square represented as `S`. In each second, he will make one of the following moves:

- Go to a non-`#` square that is horizontally or vertically adjacent to his current position.
- Choose a square with the same character as that of his current position, and teleport to that square. He can only use this move when he is at a square represented as `a`, ..., or `z`.

Find the shortest time Takahashi needs to reach the square represented as `G` from the one represented as `S`.<br>
If the destination is unreachable, report `-1` instead.  

## Constraints

- $1 \le H, W \le 2000$
- $a_{i,j}$ is `S`, `G`, `.`, `#`, or a lowercase English letter.
- There is exactly one square represented as `S` and one square represented as `G`.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $a_{1,1}\dots a_{1,W}$
> 
> $\vdots$
> 
> $a_{H,1}\dots a_{H,W}$

## Output

Print the shortest time Takahashi needs to reach the square represented as `G` from the one represented as `S`.<br>
If the destination is unreachable from the initial position, print `-1` instead.  

```input1
2 5
S.b.b
a.a.G
```

```output1
4
```

Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left.<br>
Initially, Takahashi is at $(1, 1)$.
One way to reach $(2, 5)$ in four seconds is:

- go from $(1, 1)$ to $(2, 1)$;
- teleport from $(2, 1)$ to $(2, 3)$, which is also an `a` square;
- go from $(2, 3)$ to $(2, 4)$;
- go from $(2, 4)$ to $(2, 5)$.

```input2
11 11
S##...#c...
...#d.#.#..
..........#
.#....#...#
#.....bc...
#.##......#
.......c..#
..#........
a..........
d..#...a...
.#........G
```

```output2
14
```

```input3
11 11
.#.#.e#a...
.b..##..#..
#....#.#..#
.#dd..#..#.
....#...#e.
c#.#a....#.
.....#..#.e
.#....#b.#.
.#...#..#..
......#c#G.
#..S...#...
```

```output3
-1
```