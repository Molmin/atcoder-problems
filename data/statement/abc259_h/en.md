Score : $600$ points

## Problem Statement

We have a grid of squares with $N$ rows arranged vertically and $N$ columns arranged horizontally. The square at the $i$-th row from the top and $j$-th column from the left has an integer label $a_{i,j}$.<br>
Consider paths obtained by starting on one of the squares and going **right or down** to an adjacent square zero or more times. Find the number, modulo $998244353$, of such paths that start and end on squares with the same label.<br>
Two paths are distinguished when they visit different sets of squares (including the starting and ending squares).

## Constraints

- $1 \leq N \leq 400$
- $1 \leq a_{i,j} \leq N^2$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_{1,1}$ $\ldots$ $a_{1,N}$
> 
> $\vdots$
> 
> $a_{N,1}$ $\ldots$ $a_{N,N}$

## Output

Print the answer.

```input1
2
1 3
3 1
```

```output1
6
```

The following six paths satisfy the requirements. ($(i, j)$ denotes the square at the $i$-th row from the top and $j$-th column from the left. Each path is represented as a sequence of squares it visits.)

- $(1,1)$
- $(1,1)$ → $(1,2)$ → $(2,2)$
- $(1,1)$ → $(2,1)$ → $(2,2)$
- $(1,2)$
- $(2,1)$
- $(2,2)$