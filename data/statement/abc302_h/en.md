Score : $625$ points

## Problem Statement

We have a tree with $N$ vertices.  The $i$-th $(1 \le i \le N-1)$ edge is an undirected edge between vertices $U_i$ and $V_i$.  Vertex $i$ $(1 \le i \le N)$ has a ball with $A_i$ written on it and another with $B_i$.

For each $v = 2,3,\dots,N$, answer the following question.  (Each query is independent.)

- Consider traveling from vertex $1$ to vertex $v$ on the shortest path.  Every time you visit a vertex (including vertices $1$ and $v$), you pick up one ball placed there.  Find the maximum number of distinct integers written on the picked-up balls.

## Constraints

- $2 \le N \le 2 \times 10^5$
- $1 \le A_i,B_i \le N$
- The given graph is a tree.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$
> 
> $U_1$ $V_1$
> 
> $U_2$ $V_2$
> 
> $\vdots$
> 
> $U_{N-1}$ $V_{N-1}$

## Output

Print the answers for $v=2,3,\dots,N$, separated by spaces.

```input1
4
1 2
2 3
3 1
1 2
1 2
2 3
3 4
```

```output1
2 3 3
```

For example, when $v=4$, you visit vertices $1,2,3$, and $4$.  By choosing balls with $A_1,B_2,B_3,B_4(=1,3,1,2)$ written on them, the number of distinct integers on the balls is $3$, which is the maximum.

```input2
10
2 5
2 2
8 8
4 3
6 10
8 1
9 10
1 7
9 3
5 10
9 3
1 9
3 6
4 1
3 8
10 9
5 4
7 2
9 7
```

```output2
4 3 2 3 4 3 4 2 3
```