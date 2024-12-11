Score : $600$ points

## Problem Statement

There is a directed graph with $N$ vertices and $M$ edges.<br>
The vertices are numbered $1, \dots, N$, and the $i$-th edge $(1 \leq i \leq M)$ goes from Vertex $A_i$ to Vertex $B_i$.

Initially, there are $X_i$ items on Vertex $i$ $(1 \leq i \leq N)$ that someone has lost. $K$ people will collect these items.

The $K$ people will travel in the graph one by one. Each person will do the following.

- Start on Vertex $1$. Then, traverse an edge any finite number of times. For each vertex visited (including Vertex $1$), collect all items on it if they have not been collected yet.

Find the maximum total number of items that can be collected.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq 2 \times 10^5$
- $1 \leq K \leq 10$
- $1 \leq A_i, B_i \leq N$
- $A_i \neq B_i$
- $A_i \neq A_j$ or $B_i \neq B_j$, if $i \neq j$.
- $1 \leq X_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$
> 
> $X_1$ $\ldots$ $X_N$

## Output

Print the answer.

```input1
5 5 2
1 2
2 3
3 2
1 4
1 5
1 4 5 2 8
```

```output1
18
```

The two people can collect $18$ items as follows.

- The first person goes $1 \rightarrow 2 \rightarrow 3 \rightarrow 2$ and collects the items on Vertices $1$, $2$, and $3$.
- The second person goes $1 \rightarrow 5$ and collects the items on Vertex $5$.

It is impossible to collect $19$ or more items, so we should print $18$.

```input2
3 1 10
2 3
1 100 100
```

```output2
1
```