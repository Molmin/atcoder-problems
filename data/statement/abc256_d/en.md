Score : $400$ points

## Problem Statement

For real numbers $L$ and $R$, let us denote by $[L,R)$ the set of real numbers greater than or equal to $L$ and less than $R$.  Such a set is called a right half-open interval.

You are given $N$ right half-open intervals $[L_i,R_i)$.  Let $S$ be their union.  Represent $S$ as a union of the minimum number of right half-open intervals.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $1 \leq L_i \lt R_i \leq 2\times 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $L_1$ $R_1$
> 
> $\vdots$
> 
> $L_N$ $R_N$

## Output

Let $k$ be the minimum number of right half-open intervals needed to represent $S$ as their union.   Print $k$ lines containing such $k$ right half-open intervals $[X_i,Y_i)$ in ascending order of $X_i$, as follows:

> $X_1$ $Y_1$
> 
> $\vdots$
> 
> $X_k$ $Y_k$

```input1
3
10 20
20 30
40 50
```

```output1
10 30
40 50
```

The union of the three right half-open intervals $[10,20),[20,30),[40,50)$ equals the union of two right half-open intervals $[10,30),[40,50)$.

```input2
3
10 40
30 60
20 50
```

```output2
10 60
```

The union of the three right half-open intervals $[10,40),[30,60),[20,50)$ equals the union of one right half-open interval $[10,60)$.