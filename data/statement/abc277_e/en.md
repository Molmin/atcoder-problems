Score : $500$ points

## Problem Statement

You are given an undirected graph consisting of $N$ vertices and $M$ edges.<br>
For $i = 1, 2, \ldots, M$, the $i$-th edge is an undirected edge connecting vertex $u_i$ and $v_i$ that is initially passable if $a_i = 1$ and initially impassable if $a_i = 0$.
Additionally, there are switches on $K$ of the vertices: vertex $s_1$, vertex $s_2$, $\ldots$, vertex $s_K$.

Takahashi is initially on vertex $1$, and will repeat performing one of the two actions below, **Move** or **Hit Switch**, which he may choose each time, as many times as he wants.

- **Move**: Choose a vertex adjacent to the vertex he is currently on via an edge, and move to that vertex.
- **Hit Switch**: If there is a switch on the vertex he is currently on, hit it. This will invert the passability of every edge in the graph. That is, a passable edge will become impassable, and vice versa.

Determine whether Takahashi can reach vertex $N$, and if he can, print the minimum possible number of times he performs **Move** before reaching vertex $N$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq 2 \times 10^5$
- $0 \leq K \leq N$
- $1 \leq u_i, v_i \leq N$
- $u_i \neq v_i$
- $a_i \in \lbrace 0, 1\rbrace$
- $1 \leq s_1 \lt s_2 \lt \cdots \lt s_K \leq N$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $u_1$ $v_1$ $a_1$
> 
> $u_2$ $v_2$ $a_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$ $a_M$
> 
> $s_1$ $s_2$ $\ldots$ $s_K$

## Output

If Takahashi cannot reach vertex $N$, print $-1$;
if he can, print the minimum possible number of times he performs **Move** before reaching vertex $N$.

```input1
5 5 2
1 3 0
2 3 1
5 4 1
2 1 1
1 4 0
3 4
```

```output1
5
```

Takahashi can reach vertex $N$ as follows.

- Move from vertex $1$ to vertex $2$.
- Move from vertex $2$ to vertex $3$.
- Hit the switch on vertex $3$. This inverts the passability of every edge in the graph.
- Move from vertex $3$ to vertex $1$.
- Move from vertex $1$ to vertex $4$.
- Hit the switch on vertex $4$. This again inverts the passability of every edge in the graph.
- Move from vertex $4$ to vertex $5$.

Here, Move is performed five times, which is the minimum possible number.

```input2
4 4 2
4 3 0
1 2 1
1 2 0
2 1 1
2 4
```

```output2
-1
```

The given graph may be disconnected or contain multi-edges.
In this sample input, there is no way for Takahashi to reach vertex $N$, so you should print $-1$.