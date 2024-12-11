Score : $150$ points

## Problem Statement

  There are some goats on a grid with $H$ rows and $W$ columns. 
  Alice wants to put some fences at some cells where goats do not exist so that no goat can get outside the grid. 
  Goats can move in the four directions, that is, up, down, right and left.
  Goats can not move onto the cells where fences are placed. 
  If a goat exists at one of the outermost cells in the grid, it can move outside.
  Goats do not move until all fences are placed.  
  Find the minimum number of fences to be placed. 

## Constraints

- $1 \leq H \leq 100$
- $1 \leq W \leq 100$
- There is at least one goat on the given grid.

## Input

The input is given from the Standart Input in the following format:

> $H$ $W$
> 
> $S_1$
> 
> :
> 
> $S_H$

  The $j$-th $(1 \leq j \leq W)$ character in $S_i$ $(1 \leq i \leq H)$ represents 
  whether a goat exists at the cell located at row $i$ and column $j$. 
  Character `.` represents there is no goat, and `X` represents there is one goat at the cell. 

## Output

  Print the minimun number of fences to be placed. If there is no way to keep all the goats inside the grid, print $-1$.

```input1
4 5
.....
.....
..X..
.....
```

```output1
4
```

  The optimum answer is to put fences at the cells located at 
  row $3$ and column $2$, 
  row $2$ and column $3$, 
  row $3$ and column $4$, 
  and row $4$ and column $3$. 

```input2
2 2
..
.X
```

```output2
-1
```

In this case, there is no way to keep the goats inside the grid. 

```input3
6 6
......
......
..X...
.X..X.
..X...
......
```

```output3
10
```