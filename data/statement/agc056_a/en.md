Score : $300$ points

## Problem Statement

We have a grid board with $N$ rows and $N$ columns.

Paint every square black or white to satisfy all of the conditions below.

- For each row, exactly three of the squares in that row are painted black.
- For each column, exactly three of the squares in that column are painted black.
- There are exactly $N$ connected components of black squares.
Here, two black squares $x$ and $y$ are considered connected when it is possible to start at $x$ and reach $y$ by repeatedly moving up, down, left, or right to a black square.

It can be proved that the Constraints of the problem guarantee the existence of a solution.

## Constraints

- $6 \leq N \leq 500$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print your answer in the following format:

> $s_{1,1}s_{1,2}\cdots s_{1,N}$
> 
> $s_{2,1}s_{2,2}\cdots s_{2,N}$
> 
> $\vdots$
> 
> $s_{N,1}s_{N,2}\cdots s_{N,N}$

Here, $s_{i,j}$ should be a character representing the color of the square at the $i$-th row from the top and $j$-th column from the left: $s_{i,j}=$`#` means the square is painted black, and $s_{i,j}=$`.` means it is painted white.
If multiple solutions exist, printing any of them is accepted.

```input1
6
```

```output1
##..#.
##..#.
..##.#
..##.#
##...#
..###.
```

Here, there are exactly $3$ `#`s in each row and column.
Additionally, there are exactly $6$ connected components of `#`s.