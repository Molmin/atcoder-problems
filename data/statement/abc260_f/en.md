Score : $500$ points

## Problem Statement

We have a simple undirected graph $G$ with $(S+T)$ vertices and $M$ edges.  The vertices are numbered $1$ through $(S+T)$, and the edges are numbered $1$ through $M$.  Edge $i$ connects Vertices $u_i$ and $v_i$.<br>
Here, vertex sets $V_1 = \lbrace 1, 2,\dots, S\rbrace$ and $V_2 = \lbrace S+1, S+2, \dots, S+T \rbrace$ are both independent sets.

A cycle of length $4$ is called a 4-cycle.<br>
If $G$ contains a 4-cycle, choose any of them and print the vertices in the cycle.  You may print the vertices in any order.<br>
If $G$ does not contain a 4-cycle, print `-1`.

What is an independent set?
An independent set of a graph $G$ is a set $V'$ of some of the vertices in $G$ such that no two vertices of $V'$ have an edge between them.

## Constraints

- $2 \leq S \leq 3 \times 10^5$
- $2 \leq T \leq 3000$
- $4 \leq M \leq \min(S \times T,3 \times 10^5)$
- $1 \leq u_i \leq S$
- $S + 1 \leq v_i \leq S + T$
- If $i \neq j$, then $(u_i, v_i) \neq (u_j, v_j)$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $S$ $T$ $M$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$

## Output

If $G$ contains a 4-cycle, choose any of them, and print the indices of the four distinct vertices in the cycle.  (The order of the vertices does not matter.)<br>
If $G$ does not contain a 4-cycle, print `-1`.

```input1
2 3 5
1 3
1 4
1 5
2 4
2 5
```

```output1
1 2 4 5
```

There are edges between Vertices $1$ and $4$, $4$ and $2$, $2$ and $5$, and $5$ and $1$, so Vertices $1$, $2$, $4$, and $5$ form a 4-cycle.  Thus, $1$, $2$, $4$, and $5$ should be printed.<br>
The vertices may be printed in any order.  Besides the Sample Output, `2 5 1 4` is also considered correct, for example.

```input2
3 2 4
1 4
1 5
2 5
3 5
```

```output2
-1
```

Some inputs may give $G$ without a 4-cycle.

```input3
4 5 9
3 5
1 8
3 7
1 9
4 6
2 7
4 8
1 7
2 9
```

```output3
1 7 2 9
```