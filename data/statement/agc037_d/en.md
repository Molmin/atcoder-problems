Score : $1100$ points

## Problem Statement

We have a grid with $N$ rows and $M$ columns of squares.
Each integer from $1$ to $NM$ is written in this grid once.
The number written in the square at the $i$-th row from the top and the $j$-th column from the left is $A_{ij}$.

You need to rearrange these numbers as follows:

1. First, for each of the $N$ rows, rearrange the numbers written in it as you like.
2. Second, for each of the $M$ columns, rearrange the numbers written in it as you like.
3. Finally, for each of the $N$ rows, rearrange the numbers written in it as you like.

After rearranging the numbers, you want the number written in the square at the $i$-th row from the top and the $j$-th column from the left to be $M\times (i-1)+j$.
Construct one such way to rearrange the numbers. The constraints guarantee that it is always possible to achieve the objective.

## Constraints

- $1 \leq N,M \leq 100$
- $1 \leq A_{ij} \leq NM$
- $A_{ij}$ are distinct.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_{11}$ $A_{12}$ $...$ $A_{1M}$
> 
> $:$
> 
> $A_{N1}$ $A_{N2}$ $...$ $A_{NM}$

## Output

Print one way to rearrange the numbers in the following format:

> $B_{11}$ $B_{12}$ $...$ $B_{1M}$
> 
> $:$
> 
> $B_{N1}$ $B_{N2}$ $...$ $B_{NM}$
> 
> $C_{11}$ $C_{12}$ $...$ $C_{1M}$
> 
> $:$
> 
> $C_{N1}$ $C_{N2}$ $...$ $C_{NM}$

Here $B_{ij}$ is the number written in the square at the $i$-th row from the top and the $j$-th column from the left after Step $1$, and $C_{ij}$ is the number written in that square after Step $2$.

```input1
3 2
2 6
4 3
1 5
```

```output1
2 6 
4 3 
5 1 
2 1 
4 3 
5 6
```

```input2
3 4
1 4 7 10
2 5 8 11
3 6 9 12
```

```output2
1 4 7 10 
5 8 11 2 
9 12 3 6 
1 4 3 2 
5 8 7 6 
9 12 11 10
```