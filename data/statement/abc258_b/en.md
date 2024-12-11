Score : $200$ points

## Problem Statement

You are given a positive integer $N$.

We have a grid with $N$ rows and $N$ columns, where the square at the $i$-th row from the top and $j$-th column from the left has a digit $A_{i,j}$ written on it.

Assume that the upper and lower edges of this grid are connected, as well as the left and right edges. In other words, all of the following holds.

- $(N,i)$ is just above $(1,i)$, and $(1,i)$ is just below $(N,i)$. $(1\le i\le N)$.
- $(i,N)$ is just to the left of $(i,1)$, and $(i,1)$ is just to the right of $(i,N)$. $(1\le i\le N)$.

Takahashi will first choose one of the following eight directions: up, down, left, right, and the four diagonal directions. Then, he will start on a square of his choice and repeat moving one square in the chosen direction $N-1$ times.

In this process, Takahashi visits $N$ squares. Find the greatest possible value of the integer that is obtained by arranging the digits written on the squares visited by Takahashi from left to right in the order visited by him.

## Constraints

- $1 \le N \le 10$
- $1 \le A_{i,j} \le 9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_{1,1}A_{1,2}\dots A_{1,N}$
> 
> $A_{2,1}A_{2,2}\dots A_{2,N}$
> 
> $\vdots$
> 
> $A_{N,1}A_{N,2}\dots A_{N,N}$

## Output

Print the answer.

```input1
4
1161
1119
7111
1811
```

```output1
9786
```

If Takahashi starts on the square at the $2$-nd row from the top and $4$-th column from the left and goes down and to the right, the integer obtained by arranging the digits written on the visited squares will be $9786$.
It is impossible to make a value greater than $9786$, so the answer is $9786$.

```input2
10
1111111111
1111111111
1111111111
1111111111
1111111111
1111111111
1111111111
1111111111
1111111111
1111111111
```

```output2
1111111111
```

Note that the answer may not fit into a 32-bit integer.