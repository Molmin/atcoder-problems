Score : $200$ points

## Problem Statement

You are given an $H$-by-$W$ matrix $A$.<br>
The element at the $i$-th row from the top and $j$-th column from the left of $A$ is $A_{i,j}$.

Let $B$ be a $W$-by-$H$ matrix whose element at the $i$-th row from the top and $j$-th column from the left equals $A_{j, i}$.<br>
That is, $B$ is the transpose of $A$.

Print $B$.

## Constraints

- $1\leq H,W \leq 10^5$
- $H \times W \leq 10^5$
- $1 \leq A_{i,j} \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $A_{1,1}$ $A_{1,2}$ $\ldots$ $A_{1,W}$
> 
> $A_{2,1}$ $A_{2,2}$ $\ldots$ $A_{2,W}$
> 
> $\vdots$
> 
> $A_{H,1}$ $A_{H,2}$ $\ldots$ $A_{H,W}$

## Output

Print $B$ in the following format:

> $B_{1,1}$ $B_{1,2}$ $\ldots$ $B_{1,H}$
> 
> $B_{2,1}$ $B_{2,2}$ $\ldots$ $B_{2,H}$
> 
> $\vdots$
> 
> $B_{W,1}$ $B_{W,2}$ $\ldots$ $B_{W,H}$

```input1
4 3
1 2 3
4 5 6
7 8 9
10 11 12
```

```output1
1 4 7 10
2 5 8 11
3 6 9 12
```

For example, we have $A_{2,1}=4$, so the element at the $1$-st row from the top and $2$-nd column from the left of the transpose $B$ is $4$.

```input2
2 2
1000000000 1000000000
1000000000 1000000000
```

```output2
1000000000 1000000000
1000000000 1000000000
```