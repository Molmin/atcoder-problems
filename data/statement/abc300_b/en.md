Score : $200$ points

## Problem Statement

Takahashi is developing an RPG.  He has decided to write a code that checks whether two maps are equal.

We have grids $A$ and $B$ with $H$ horizontal rows and $W$ vertical columns.  Each cell in the grid has a symbol `#` or `.` written on it.<br>
The symbols written on the cell at the $i$-th row from the top and $j$-th column from the left in $A$ and $B$ are denoted by $A_{i, j}$ and $B_{i, j}$, respectively.

The following two operations are called a **vertical shift** and **horizontal shift**.

- For each $j=1, 2, \dots, W$, simultaneously do the following:-   - simultaneously replace $A_{1,j}, A_{2,j}, \dots, A_{H-1, j}, A_{H,j}$ with $A_{2,j}, A_{3,j}, \dots, A_{H,j}, A_{1,j}$.
- For each $i = 1, 2, \dots, H$, simultaneously do the following:-   - simultaneously replace $A_{i,1}, A_{i,2}, \dots, A_{i,W-1}, A_{i,W}$ with $A_{i, 2}, A_{i, 3}, \dots, A_{i,W}, A_{i,1}$.

Is there a pair of non-negative integers $(s, t)$ that satisfies the following condition?  Print `Yes` if there is, and `No` otherwise.

- After applying a vertical shift $s$ times and a horizontal shift $t$ times, $A$ is equal to $B$.

Here, $A$ is said to be equal to $B$ if and only if $A_{i, j} = B_{i, j}$ for all integer pairs $(i, j)$ such that $1 \leq i \leq H$ and $1 \leq j \leq W$.

## Constraints

- $2 \leq H, W \leq 30$
- $A_{i,j}$ is `#` or `.`, and so is $B_{i,j}$.
- $H$ and $W$ are integers.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $A_{1,1}A_{1,2}\dots A_{1,W}$
> 
> $A_{2,1}A_{2,2}\dots A_{2,W}$
> 
> $\vdots$
> 
> $A_{H,1}A_{H,2}\dots A_{H,W}$
> 
> $B_{1,1}B_{1,2}\dots B_{1,W}$
> 
> $B_{2,1}B_{2,2}\dots B_{2,W}$
> 
> $\vdots$
> 
> $B_{H,1}B_{H,2}\dots B_{H,W}$

## Output

Print `Yes` if there is a conforming integer pair $(s, t)$; print `No` otherwise.

```input1
4 3
..#
...
.#.
...
#..
...
.#.
...
```

```output1
Yes
```

By choosing $(s, t) = (2, 1)$, the resulting $A$ is equal to $B$.<br>
We describe the procedure when $(s, t) = (2, 1)$ is chosen.  Initially, $A$ is as follows.

```output1
..#
...
.#.
...
```

We first apply a vertical shift to make $A$ as follows.

```output1
...
.#.
...
..#
```

Then we apply another vertical shift to make $A$ as follows.

```output1
.#.
...
..#
...
```

Finally, we apply a horizontal shift to make $A$ as follows, which equals $B$.

```output1
#..
...
.#.
...
```

```input2
3 2
##
##
#.
..
#.
#.
```

```output2
No
```

No choice of $(s, t)$ makes $A$ equal $B$.

```input3
4 5
#####
.#...
.##..
..##.
...##
#...#
#####
...#.
```

```output3
Yes
```

```input4
10 30
..........##########..........
..........####....###.....##..
.....##....##......##...#####.
....####...##..#####...##...##
...##..##..##......##..##....#
#.##....##....##...##..##.....
..##....##.##..#####...##...##
..###..###..............##.##.
.#..####..#..............###..
#..........##.................
................#..........##.
######....................####
....###.....##............####
.....##...#####......##....##.
.#####...##...##....####...##.
.....##..##....#...##..##..##.
##...##..##.....#.##....##....
.#####...##...##..##....##.##.
..........##.##...###..###....
...........###...#..####..#...
```

```output4
Yes
```