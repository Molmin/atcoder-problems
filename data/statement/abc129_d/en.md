Score : $400$ points

## Problem Statement

There is a grid with $H$ horizontal rows and $W$ vertical columns, and there are obstacles on some of the squares.

Snuke is going to choose one of the squares not occupied by an obstacle and place a lamp on it.
The lamp placed on the square will emit straight beams of light in four cardinal directions: up, down, left, and right.
In each direction, the beam will continue traveling until it hits a square occupied by an obstacle or it hits the border of the grid. It will light all the squares on the way, including the square on which the lamp is placed, but not the square occupied by an obstacle.

Snuke wants to maximize the number of squares lighted by the lamp.

You are given $H$ strings $S_i$ ($1 \leq i \leq H$), each of length $W$. If the $j$-th character ($1 \leq j \leq W$) of $S_i$ is `#`, there is an obstacle on the square at the $i$-th row from the top and the $j$-th column from the left; if that character is `.`, there is no obstacle on that square.

Find the maximum possible number of squares lighted by the lamp.

## Constraints

- $1 \leq H \leq 2,000$
- $1 \leq W \leq 2,000$
- $S_i$ is a string of length $W$ consisting of `#` and `.`.
- `.` occurs at least once in one of the strings $S_i$ ($1 \leq i \leq H$).

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_1$
> 
> $:$
> 
> $S_H$

## Output

Print the maximum possible number of squares lighted by the lamp.

```input1
4 6
#..#..
.....#
....#.
#.#...
```

```output1
8
```

If Snuke places the lamp on the square at the second row from the top and the second column from the left, it will light the following squares: the first through fifth squares from the left in the second row, and the first through fourth squares from the top in the second column, for a total of eight squares.

```input2
8 8
..#...#.
....#...
##......
..###..#
...#..#.
##....#.
#...#...
###.#..#
```

```output2
13
```