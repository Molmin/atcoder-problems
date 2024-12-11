Score : $500$ points

## Problem Statement

In an $N$-dimensional space, the Manhattan distance $d(x,y)$ between two points $x=(x_1, x_2, \dots, x_N)$ and $y = (y_1, y_2, \dots, y_N)$ is defined by:

$\displaystyle d(x,y)=\sum_{i=1}^n \vert x_i - y_i \vert.$

A point $x=(x_1, x_2, \dots, x_N)$ is said to be a lattice point if the components $x_1, x_2, \dots, x_N$ are all integers.  

You are given lattice points $p=(p_1, p_2, \dots, p_N)$ and $q = (q_1, q_2, \dots, q_N)$ in an $N$-dimensional space.<br>
How many lattice points $r$ satisfy $d(p,r) \leq D$ and $d(q,r) \leq D$?  Find the count modulo $998244353$.

## Constraints

- $1 \leq N \leq 100$
- $0 \leq D \leq 1000$
- $-1000 \leq p_i, q_i \leq 1000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $D$ 
> 
> $p_1$ $p_2$ $\dots$ $p_N$
> 
> $q_1$ $q_2$ $\dots$ $q_N$

## Output

Print the answer.

```input1
1 5
0
3
```

```output1
8
```

When $N=1$, we consider points in a one-dimensional space, that is, on a number line.<br>
$8$ lattice points satisfy the conditions: $-2,-1,0,1,2,3,4,5$.

```input2
3 10
2 6 5
2 1 2
```

```output2
632
```

```input3
10 100
3 1 4 1 5 9 2 6 5 3
2 7 1 8 2 8 1 8 2 8
```

```output3
145428186
```