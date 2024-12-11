Score : $800$ points

## Problem Statement

Consider an $N \times N$ matrix. Let us denote by $a_{i, j}$ the entry in the $i$-th row and $j$-th column. For $a_{i, j}$ where $i=1$ or $j=1$ holds, its value is one of $0$, $1$ and $2$ and given in the input. The remaining entries are defined as follows:

- $a_{i,j} = \mathrm{mex}(a_{i-1,j}, a_{i,j-1}) (2 \leq i, j \leq N)$ where $\mathrm{mex}(x, y)$ is defined by the following table:

$\mathrm{mex}(x, y)$
$y=0$
$y=1$
$y=2$

$x=0$
$1$
$2$
$1$

$x=1$
$2$
$0$
$0$

$x=2$
$1$
$0$
$0$

How many entries of the matrix are $0, 1,$ and $2$, respectively?

## Constraints

- $1 \leq N \leq 500{,}000$
- $a_{i,j}$'s given in input are one of $0$, $1$ and $2$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_{1, 1}$ $a_{1, 1}$ $...$ $a_{1, N}$
> 
> $a_{2, 1}$
> 
> $:$
> 
> $a_{N, 1}$

## Output

Print the number of $0$'s, $1$'s, and $2$'s separated by whitespaces.

```input1
4
1 2 0 2
0
0
0
```

```output1
7 4 5
```

The matrix is as follows:

```output1
1 2 0 2
0 1 2 0
0 2 0 1
0 1 2 0
```