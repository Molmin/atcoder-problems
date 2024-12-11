Score : $1000$ points

## Problem Statement

You are given a tree with $N$ vertices. The vertices are numbered $0$ through $N-1$, and the edges are numbered $1$ through $N-1$.
Edge $i$ connects Vertex $x_i$ and $y_i$, and has a value $a_i$.
You can perform the following operation any number of times:

- Choose a simple path and a non-negative integer $x$, then for each edge $e$ that belongs to the path, change $a_e$ by executing $a_e \gets a_e \oplus x$ (⊕ denotes XOR).

Your objective is to have $a_e = 0$ for all edges $e$.
Find the minimum number of operations required to achieve it.

## Constraints

- $2 \leq N \leq 10^5$
- $0 \leq x_i,y_i \leq N-1$
- $0 \leq a_i \leq 15$
- The given graph is a tree.
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$ $a_1$
> 
> $x_2$ $y_2$ $a_2$
> 
> $:$
> 
> $x_{N-1}$ $y_{N-1}$ $a_{N-1}$

## Output

Find the minimum number of operations required to achieve the objective.

```input1
5
0 1 1
0 2 3
0 3 6
3 4 4
```

```output1
3
```

The objective can be achieved in three operations, as follows:

- First, choose the path connecting Vertex $1, 2$, and $x = 1$.
- Then, choose the path connecting Vertex $2, 3$, and $x = 2$.
- Lastly, choose the path connecting Vertex $0, 4$, and $x = 4$.

```input2
2
1 0 0
```

```output2
0
```