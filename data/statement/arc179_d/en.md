Score : $700$ points

## Problem Statement

You are given a tree with $N$ vertices numbered $1, 2, \dots, N$. The $i$-th edge connects vertices $u_i$ and $v_i$ bidirectionally.

Initially, all vertices are painted white.

To efficiently visit all vertices of this tree, Alice has invented a magical gate. She uses one piece and one gate to travel according to the following procedure.

First, she chooses a vertex and places both the piece and the gate on that vertex. Then, she repeatedly performs the following operations until all vertices are painted black.

- Choose one of the following actions:-   1. Paint the vertex where the piece is placed black.
-   2. Choose a vertex adjacent to the vertex where the piece is placed and move the piece to that vertex. The cost of this action is $1$.
-   3. Move the piece to the vertex where the gate is placed.
-   4. Move the gate to the vertex where the piece is placed.

Note that only the second action incurs a cost.

It can be proved that it is possible to paint all vertices black in a finite number of operations. Find the minimum total cost required.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq u_i, v_i \leq N$
- The given graph is a tree.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $u_1$ $v_1$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$

## Output

Print the answer.

```input1
4
1 2
1 3
1 4
```

```output1
3
```

Here is an example of Alice's procedure. Let $(u, v)$ denote the state where the piece is at vertex $u$ and the gate is at vertex $v$.

- Place the piece and the gate at vertex $4$.-   - The state is now $(4, 4)$.
- Perform action $1$.-   - Vertex $4$ is painted black.
-   - The state is now $(4, 4)$.
- Perform action $2$ and move the piece to vertex $1$.-   - This costs $1$.
-   - The state is now $(1, 4)$.
- Perform action $1$.-   - Vertex $1$ is painted black.
- Perform action $4$.-   - The state is now $(1, 1)$.
- Perform action $2$ and move the piece to vertex $2$.-   - This costs $1$.
-   - The state is now $(2, 1)$.
- Perform action $1$.-   - Vertex $2$ is painted black.
- Perform action $3$.-   - The state is now $(1, 1)$.
- Perform action $2$ and move the piece to vertex $3$.-   - This costs $1$.
-   - The state is now $(3, 1)$.
- Perform action $1$.-   - Vertex $3$ is painted black.
-   - All vertices are now painted black, so the procedure ends.

The total cost of performing action $2$ is $3$, and there is no procedure with a smaller cost.

```input2
10
1 7
7 10
10 8
8 3
8 4
10 9
9 6
9 5
7 2
```

```output2
10
```