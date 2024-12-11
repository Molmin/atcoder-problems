Score : $1000$ points

## Problem Statement

For an $n \times n$ grid, let $(r, c)$ denote the square at the $(r+1)$-th row from the top and the $(c+1)$-th column from the left.
A *good* coloring of this grid using $K$ colors is a coloring that satisfies the following:

- Each square is painted in one of the $K$ colors.
- Each of the $K$ colors is used for some squares.
- Let us number the $K$ colors $1, 2, ..., K$. For any colors $i$ and $j$ ($1 \leq i \leq K, 1 \leq j \leq K$), every square in Color $i$ has the same number of adjacent squares in Color $j$. Here, the squares adjacent to square $(r, c)$ are $((r-1)\; mod\; n, c), ((r+1)\; mod\; n, c), (r, (c-1)\; mod\; n)$ and $(r, (c+1)\; mod\; n)$ (if the same square appears multiple times among these four, the square is counted that number of times).

Given $K$, choose **$n$ between $1$ and $500$** (inclusive) freely and construct a good coloring of an $n \times n$ grid using $K$ colors.
It can be proved that this is always possible under the constraints of this problem,

## Constraints

- $1 \leq K \leq 1000$

## Input

Input is given from Standard Input in the following format:

> $K$

## Output

Output should be in the following format:

> $n$
> 
> $c_{0,0}$ $c_{0,1}$ $...$ $c_{0,n-1}$
> 
> $c_{1,0}$ $c_{1,1}$ $...$ $c_{1,n-1}$
> 
> $:$
> 
> $c_{n-1,0}$ $c_{n-1,1}$ $...$ $c_{n-1,n-1}$

$n$ should represent the size of the grid, and $1 \leq n \leq 500$ must hold.
$c_{r,c}$ should be an integer such that $1 \leq c_{r,c} \leq K$ and represent the color for the square $(r, c)$.

```input1
2
```

```output1
3
1 1 1
1 1 1
2 2 2
```

- Every square in Color $1$ has three adjacent squares in Color $1$ and one adjacent square in Color $2$.
- Every square in Color $2$ has two adjacent squares in Color $1$ and two adjacent squares in Color $2$.

Output such as the following will be judged incorrect:

```output1
2
1 2
2 2
```

```output1
3
1 1 1
1 1 1
1 1 1
```

```input2
9
```

```output2
3
1 2 3
4 5 6
7 8 9
```