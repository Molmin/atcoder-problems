Score : $500$ points

## Problem Statement

We have a connected undirected graph with $N$ vertices and $M$ edges.<br>
The vertices are numbered $1$ through $N$, and the edges are numbered $1$ through $M$. Edge $i$ connects Vertices $A_i$ and $B_i$.

Takahashi is going to remove zero or more edges from this graph.

When removing Edge $i$, a reward of $C_i$ is given if $C_i \geq 0$, and a fine of $|C_i|$ is incurred if $C_i&lt;0$. 

Find the maximum total reward that Takahashi can get when the graph must be connected after removing edges.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $N-1 \leq M \leq 2\times 10^5$
- $1 \leq A_i,B_i \leq N$
- $-10^9 \leq C_i \leq 10^9$
- The given graph is connected.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$ $C_1$
> 
> $A_2$ $B_2$ $C_2$
> 
> $\vdots$
> 
> $A_M$ $B_M$ $C_M$

## Output

Print the answer.  

```input1
4 5
1 2 1
1 3 1
1 4 1
3 2 2
4 2 2
```

```output1
4
```

Removing Edges $4$ and $5$ yields a total reward of $4$. You cannot get any more, so the answer is $4$.

```input2
3 3
1 2 1
2 3 0
3 1 -1
```

```output2
1
```

There may be edges that give a negative reward when removed.

```input3
2 3
1 2 -1
1 2 2
1 1 3
```

```output3
5
```

There may be multi-edges and self-loops.