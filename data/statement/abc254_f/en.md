Score : $500$ points

## Problem Statement

You are given a positive integer $N$ and sequences of $N$ positive integers each: $A=(A_1,A_2,\dots,A_N)$ and $B=(B_1,B_2,\dots,B_N)$.

We have an $N \times N$ grid. The square at the $i$-th row from the top and the $j$-th column from the left is called the square $(i,j)$. For each pair of integers $(i,j)$ such that $1 \le i,j \le N$, the square $(i,j)$ has the integer $A_i + B_j$ written on it. Process $Q$ queries of the following form.

- You are given a quadruple of integers $h_1,h_2,w_1,w_2$ such that $1 \le h_1 \le h_2 \le N,1 \le w_1 \le w_2 \le N$. Find the greatest common divisor of the integers contained in the rectangle region whose top-left and bottom-right corners are $(h_1,w_1)$ and $(h_2,w_2)$, respectively.

## Constraints

- $1 \le N,Q \le 2 \times 10^5$
- $1 \le A_i,B_i \le 10^9$
- $1 \le h_1 \le h_2 \le N$
- $1 \le w_1 \le w_2 \le N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_N$
> 
> $\mathrm{query}_1$
> 
> $\mathrm{query}_2$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

Each query is in the following format:

> $h_1$ $h_2$ $w_1$ $w_2$

## Output

Print $Q$ lines. The $i$-th line should contain the answer to $\mathrm{query}_i$.

```input1
3 5
3 5 2
8 1 3
1 2 2 3
1 3 1 3
1 1 1 1
2 2 2 2
3 3 1 1
```

```output1
2
1
11
6
10
```

Let $C_{i,j}$ denote the integer on the square $(i,j)$.

For the $1$-st query, we have $C_{1,2}=4,C_{1,3}=6,C_{2,2}=6,C_{2,3}=8$, so the answer is their greatest common divisor, which is $2$.

```input2
1 1
9
100
1 1 1 1
```

```output2
109
```