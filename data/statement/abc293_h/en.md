Score : $600$ points

## Problem Statement

You are given a tree with $N$ vertices numbered $1$ through $N$.  The $i$-th edge connects vertex $A_i$ and vertex $B_i$.  

Find the minimum integer $K$ such that you can paint each vertex in a color so that the following two conditions are satisfied.  You may use any number of colors.

- For each color, the set of vertices painted in the color is connected and forms a simple path.
- For all simple paths on the tree, there are at most $K$ distinct colors of the vertices in the path.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i, B_i \leq N$
- The given graph is a tree.
- All values in the input are integers.

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
7
3 4
1 5
4 5
1 2
7 4
1 6
```

```output1
3
```

If $K=3$, the conditions can be satisfied by painting vertices $1,2,3,4$, and $5$ in color $1$, vertex $6$ in color $2$, and vertex $7$ in color $3$.
If $K \leq 2$, there is no way to paint the vertices to satisfy the conditions, so the answer is $3$.

```input2
6
3 5
6 4
6 3
4 2
1 5
```

```output2
1
```

```input3
9
1 3
9 5
8 7
2 1
5 2
5 8
4 8
6 1
```

```output3
3
```