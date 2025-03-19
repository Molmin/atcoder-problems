Score: $100$ points

## Problem Statement

You are given a tree with $N$ vertices. The vertices of the tree are numbered $1, 2, \dots, N$, and the $i$-th edge $(1 \leq i \leq N-1)$ connects vertex $u_i$ and vertex $v_i$.

Alice and Bob play a game where they alternately mark vertices with their own markers. Initially, no vertices are marked.

First, Alice chooses any vertex and marks it with her marker. Then, starting with Bob, the two players alternate performing the following operation. The player who cannot make a move loses, and the other player wins.

- Choose a vertex $v$ that satisfies the following conditions:-   - Vertex $v$ is not marked.
-   - There exists a vertex $u$ connected to $v$ by an edge such that $u$ is marked with the opponent's marker.
- Mark the chosen vertex $v$ with their own marker.

Determine the winner when both players adopt the optimal strategy for their own victory.

## Constraints

- All input values are integers.
- $1 \leq N \leq 2 \times 10^5$
- $1 \leq u_i, v_i \leq N$
- The given graph is a tree.

## Input

The input is given in the following format:

> $N$
> 
> $u_1$ $v_1$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$

## Output

If Alice wins, output `Alice`. If Bob wins, output `Bob`.

```input1
5
1 2
2 3
3 4
2 5
```

```output1
Alice
```

For example, consider the following scenario:

1. Alice starts by marking vertex $1$ with her marker.
2. Bob marks vertex $2$ (vertex $1$ is marked by the opponent and is connected to vertex $2$ by an edge).
3. Alice marks vertex $3$ (vertex $2$ is marked by the opponent and is connected to vertex $3$ by an edge).
4. Bob marks vertex $4$ (vertex $3$ is marked by the opponent and is connected to vertex $4$ by an edge).
5. Alice marks vertex $5$ (vertex $2$ is marked by the opponent and is connected to vertex $5$ by an edge).
6. Bob cannot make a move. Alice wins.

In this tree, Alice has a winning strategy, so you should output `Alice`.

```input2
4
1 2
3 4
3 2
```

```output2
Bob
```

```input3
7
1 2
2 3
3 4
3 5
1 6
6 7
```

```output3
Alice
```