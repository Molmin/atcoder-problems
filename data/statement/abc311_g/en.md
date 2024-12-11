Score : $575$ points

## Problem Statement

There is an $N \times M$ grid, where the square at the $i$-th row from the top and $j$-th column from the left has a non-negative integer $A_{i,j}$ written on it.<br>
Let us choose a rectangular region $R$.<br>
Formally, the region is chosen as follows.

- Choose integers $l_x, r_x, l_y, r_y$ such that $1 \le l_x \le r_x \le N, 1 \le l_y \le r_y \le M$.
- Then, square $(i,j)$ is in $R$ if and only if $l_x \le i \le r_x$ and $l_y \le j \le r_y$.

Find the maximum possible value of $f(R) =$ (the sum of integers written on the squares in $R$) $\times$ (the smallest integer written on a square in $R$).

## Constraints

- All input values are integers.
- $1 \le N,M \le 300$
- $1 \le A_{i,j} \le 300$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_{1,1}$ $A_{1,2}$ $\dots$ $A_{1,M}$
> 
> $A_{2,1}$ $A_{2,2}$ $\dots$ $A_{2,M}$
> 
> $\vdots$
> 
> $A_{N,1}$ $A_{N,2}$ $\dots$ $A_{N,M}$

## Output

Print the answer as an integer.

```input1
3 3
5 4 3
4 3 2
3 2 1
```

```output1
48
```

Choosing the rectangular region whose top-left corner is square $(1, 1)$ and whose bottom-right corner is square $(2, 2)$ achieves $f(R) = (5+4+4+3) \times \min(5,4,4,3) = 48$, which is the maximum possible value.

```input2
4 5
3 1 4 1 5
9 2 6 5 3
5 8 9 7 9
3 2 3 8 4
```

```output2
231
```

```input3
6 6
1 300 300 300 300 300
300 1 300 300 300 300
300 300 1 300 300 300
300 300 300 1 300 300
300 300 300 300 1 300
300 300 300 300 300 1
```

```output3
810000
```