Score : $700$ points

## Problem Statement

Snuke's mother gave Snuke an undirected graph consisting of $N$ vertices numbered $0$ to $N-1$ and $M$ edges.
This graph was connected and contained no parallel edges or self-loops.

One day, Snuke broke this graph.
Fortunately, he remembered $Q$ clues about the graph.
The $i$-th clue ($0 \leq i \leq Q-1$) is represented as integers $A_i,B_i,C_i$ and means the following:

- If $C_i=0$: there was exactly one simple path (a path that never visits the same vertex twice) from Vertex $A_i$ to $B_i$.
- If $C_i=1$: there were two or more simple paths from Vertex $A_i$ to $B_i$.

Snuke is not sure if his memory is correct, and worried whether there is a graph that matches these $Q$ clues.
Determine if there exists a graph that matches Snuke's memory.

## Constraints

- $2 \leq N \leq 10^5$
- $N-1 \leq M \leq N \times (N-1)/2$
- $1 \leq Q \leq 10^5$
- $0 \leq A_i,B_i \leq N-1$
- $A_i \neq B_i$
- $0 \leq C_i \leq 1$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $Q$
> 
> $A_0$ $B_0$ $C_0$
> 
> $A_1$ $B_1$ $C_1$
> 
> $\vdots$
> 
> $A_{Q-1}$ $B_{Q-1}$ $C_{Q-1}$

## Output

If there exists a graph that matches Snuke's memory, print `Yes`; otherwise, print `No`.

```input1
5 5 3
0 1 0
1 2 1
2 3 0
```

```output1
Yes
```

For example, consider a graph with edges $(0,1),(1,2),(1,4),(2,3),(2,4)$. This graph matches the clues.

```input2
4 4 3
0 1 0
1 2 1
2 3 0
```

```output2
No
```

```input3
10 9 9
7 6 0
4 5 1
9 7 0
2 9 0
2 3 0
4 1 0
8 0 0
9 1 0
3 0 0
```

```output3
No
```