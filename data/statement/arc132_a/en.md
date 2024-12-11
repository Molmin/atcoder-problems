Score : $400$ points

## Problem Statement

Given are two permutations of $1,\dots,n$: $R_1,\dots,R_n$ and $C_1,\dots,C_n$.

We have a grid with $n$ horizontal rows and $n$ vertical columns. You will paint each square black or white to satisfy the following conditions.

- For each $i=1,\dots,n$, the $i$-th row from the top has exactly $R_i$ black squares.
- For each $j=1,\dots,n$, the $j$-th column from the left has exactly $C_j$ black squares.

It can be proved that, under the Constraints of this problem, there is exactly one way to paint the grid to satisfy the conditions.

You are given $q$ queries $(r_1,c_1),\dots,(r_q,c_q)$.
For each $i=1,\dots,q$, print `#` if the square at the $r_i$-th row from the top and $c_i$-th column from the left is painted black; print `.` if that square is painted white.

## Constraints

- $1\le n,q\le 10^5$
- $R_1,\dots,R_n$ and $C_1,\dots,C_n$ are each permutations of $1,\dots,n$.
- $1\le r_i,c_i \le n$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $n$
> 
> $R_1$ $\dots$ $R_n$
> 
> $C_1$ $\dots$ $C_n$
> 
> $q$
> 
> $r_1$ $c_1$
> 
> $\vdots$
> 
> $r_q$ $c_q$

## Output

Print a string of length $q$ whose $i$-th character is the answer to the $i$-th query.

```input1
5
5 2 3 4 1
4 2 3 1 5
7
1 5
5 1
1 1
2 2
3 3
4 4
5 5
```

```output1
#.#.#.#
```

The conditions are satisfied by painting the grid as follows.

```output1
#####
#...#
#.#.#
###.#
....#
```