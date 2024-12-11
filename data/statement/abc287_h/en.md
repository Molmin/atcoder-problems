Score : $600$ points

## Problem Statement

There is a directed graph with $N$ vertices and $M$ edges.  The vertices are numbered $1$ through $N$, and the $i$-th directed edge goes from vertex $a_i$ to vertex $b_i$.

The cost of a path on this graph is defined as:

- the maximum index of a vertex on the path (including the initial and final vertices).

Solve the following problem for each $x=1,2,\ldots,Q$.

- Find the minimum cost of a path from vertex $s_x$ to vertex $t_x$. If there is no such path, print `-1` instead.

The use of fast input and output methods is recommended because of potentially large input and output.

## Constraints

- $2 \leq N \leq 2000$
- $0 \leq M \leq N(N-1)$
- $1 \leq a_i,b_i \leq N$
- $a_i \neq b_i$
- If $i \neq j$, then $(a_i,b_i) \neq (a_j,b_j)$.
- $1 \leq Q \leq 10^4$
- $1 \leq s_i,t_i \leq N$
- $s_i \neq t_i$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $b_1$
> 
> $\vdots$
> 
> $a_M$ $b_M$
> 
> $Q$
> 
> $s_1$ $t_1$
> 
> $\vdots$
> 
> $s_Q$ $t_Q$

## Output

Print $Q$ lines.<br>
The $i$-th line should contain the answer for $x=i$.

```input1
4 4
1 2
2 3
3 1
4 3
3
1 2
2 1
1 4
```

```output1
2
3
-1
```

For $x=1$, the path via the $1$-st edge from vertex $1$ to vertex $2$ has a cost of $2$, which is the minimum.<br>
For $x=2$, the path via the $2$-nd edge from vertex $2$ to vertex $3$ and then via the $3$-rd edge from vertex $3$ to vertex $1$ has a cost of $3$, which is the minimum.<br>
For $x=3$, there is no path from vertex $1$ to vertex $4$, so `-1` should be printed.