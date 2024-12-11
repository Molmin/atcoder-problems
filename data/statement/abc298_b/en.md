Score : $200$ points

## Problem Statement

You are given $N$-by-$N$ matrices $A$ and $B$ where each element is $0$ or $1$.<br>
Let $A_{i,j}$ and $B_{i,j}$ denote the element at the $i$-th row and $j$-th column of $A$ and $B$, respectively.<br>
Determine whether it is possible to rotate $A$ so that $B_{i,j} = 1$ for every pair of integers $(i, j)$ such that $A_{i,j} = 1$.<br>
Here, to rotate $A$ is to perform the following operation zero or more times:

- for every pair of integers $(i, j)$ such that $1 \leq i, j \leq N$, simultaneously replace $A_{i,j}$ with $A_{N + 1 - j,i}$.

## Constraints

- $1 \leq N \leq 100$
- Each element of $A$ and $B$ is $0$ or $1$.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_{1,1}$ $A_{1,2}$ $\ldots$ $A_{1,N}$
> 
> $\vdots$
> 
> $A_{N,1}$ $A_{N,2}$ $\ldots$ $A_{N,N}$
> 
> $B_{1,1}$ $B_{1,2}$ $\ldots$ $B_{1,N}$
> 
> $\vdots$
> 
> $B_{N,1}$ $B_{N,2}$ $\ldots$ $B_{N,N}$

## Output

If it is possible to rotate $A$ so that $B_{i,j} = 1$ for every pair of integers $(i, j)$ such that $A_{i,j} = 1$, print `Yes`; otherwise, print `No`.

```input1
3
0 1 1
1 0 0
0 1 0
1 1 0
0 0 1
1 1 1
```

```output1
Yes
```

Initially, $A$ is :

```output1
0 1 1
1 0 0
0 1 0
```

After performing the operation once, $A$ is :

```output1
0 1 0
1 0 1 
0 0 1
```

After performing the operation once again, $A$ is :

```output1
0 1 0
0 0 1
1 1 0
```

Here, $B_{i,j} = 1$ for every pair of integers $(i, j)$ such that $A_{i,j} = 1$, so you should print `Yes`.

```input2
2
0 0
0 0
1 1
1 1
```

```output2
Yes
```

```input3
5
0 0 1 1 0
1 0 0 1 0
0 0 1 0 1
0 1 0 1 0
0 1 0 0 1
1 1 0 0 1
0 1 1 1 0
0 0 1 1 1
1 0 1 0 1
1 1 0 1 0
```

```output3
No
```