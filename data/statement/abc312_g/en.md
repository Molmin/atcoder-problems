Score : $550$ points

## Problem Statement

You are given a tree with $N$ vertices.  The vertices are numbered from $1$ through $N$, and the $i$-th edge connects vertex $A_i$ and vertex $B_i$.<br>
Find the number of tuples of integers $(i,j,k)$ such that:  

- $1 \leq i &lt; j &lt; k \leq N$; and
- the given tree does not contain a simple path that contains all of vertices $i$, $j$, and $k$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i, B_i \leq N$
- The given graph is a tree.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_{N-1}$ $B_{N-1}$

## Output

Print the answer.

```input1
5
1 2
2 3
2 4
1 5
```

```output1
2
```

Two tuples satisfy the conditions: $(i,j,k) = (1,3,4),(3,4,5)$.

```input2
6
1 2
2 3
3 4
4 5
5 6
```

```output2
0
```

```input3
12
1 6
3 4
10 4
5 9
3 1
2 3
7 2
2 12
1 5
6 8
4 11
```

```output3
91
```