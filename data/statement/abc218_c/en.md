Score : $300$ points

## Problem Statement

We have two figures $S$ and $T$ on a two-dimensional grid with square cells.

$S$ lies within a grid with $N$ rows and $N$ columns, and consists of the cells where $S_{i,j}$ is `#`.<br>
$T$ lies within the same grid with $N$ rows and $N$ columns, and consists of the cells where $T_{i,j}$ is `#`.

Determine whether it is possible to exactly match $S$ and $T$ by $90$-degree rotations and translations.

## Constraints

- $1 \leq N \leq 200$
- Each of $S$ and $T$ consists of `#` and `.`.
- Each of $S$ and $T$ contains at least one `#`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_{1,1}S_{1,2}\ldots S_{1,N}$
> 
> $\vdots$
> 
> $S_{N,1}S_{N,2}\ldots S_{N,N}$
> 
> $T_{1,1}T_{1,2}\ldots T_{1,N}$
> 
> $\vdots$
> 
> $T_{N,1}T_{N,2}\ldots T_{N,N}$

## Output

Print `Yes` if it is possible to exactly match $S$ and $T$ by $90$-degree rotations and translations, and `No` otherwise.

```input1
5
.....
..#..
.###.
.....
.....
.....
.....
....#
...##
....#
```

```output1
Yes
```

We can match $S$ to $T$ by rotating it $90$-degrees counter-clockwise and translating it.

```input2
5
#####
##..#
#..##
#####
.....
#####
#..##
##..#
#####
.....
```

```output2
No
```

It is impossible to match them by $90$-degree rotations and translations.

```input3
4
#...
..#.
..#.
....
#...
#...
..#.
....
```

```output3
Yes
```

Each of $S$ and $T$ may not be connected.

```input4
4
#...
.##.
..#.
....
##..
#...
..#.
....
```

```output4
No
```

Note that it is not allowed to rotate or translate just a part of a figure; it is only allowed to rotate or translate a whole figure.