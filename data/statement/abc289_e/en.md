Score : $500$ points

## Problem Statement

There is a simple undirected graph with $N$ vertices numbered $1$ through $N$ and $M$ edges numbered $1$ through $M$.  Edge $i$ connects vertex $u_i$ and vertex $v_i$.<br>
Every vertex is painted either red or blue.  The color of vertex $i$ is represented by $C_i$; vertex $i$ is painted red if $C_i$ is $0$ and blue if $C_i$ is $1$.

Now, Takahashi is on vertex $1$ and Aoki is on vertex $N$.<br>
They may repeat the following move zero or more times.

- Each of the two simultaneously moves to a vertex adjacent to the current vertex.<br>
    Here, the vertices that Takahashi and Aoki move to must have different colors.

By repeating the move above, can Takahashi and Aoki simultaneously end up on vertices $N$ and $1$, respectively?<br>
If it is possible, find the minimum number of moves required.  If it is impossible, print `-1`.

You are given $T$ at the beginning of the input.  Solve the problem for $T$ test cases.

## Constraints

- $1 \leq T \leq 1000$
- $2 \leq N \leq 2000$
- $1 \leq M \leq \min(\frac{N(N-1)}{2}, 2000)$
- $C_i \in \lbrace 0, 1 \rbrace$
- $1 \leq u_i, v_i \leq N$
- The graph given in the input is simple.
- All values in the input are integers.
- The sum of $N$ over all test cases does not exceed $2000$.
- The sum of $M$ over all test cases does not exceed $2000$.

## Input

The input is given from Standard Input in the following format, where $\text{test}_i$ denotes the $i$-th test case:

> $T$
> 
> $\text{test}_1$
> 
> $\text{test}_2$
> 
> $\vdots$
> 
> $\text{test}_T$

Each test case is given in the following format:

> $N$ $M$
> 
> $C_1$ $C_2$ $\dots$ $C_N$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$

## Output

Print $T$ lines.  The $i$-th line should contain the answer to the $i$-th test case.<br>
For each test case, print the minimum number of moves required for Takahashi and Aoki to simultaneously end up in vertices $N$ and $1$, respectively, if it is possible, and `-1` otherwise.

```input1
3
4 4
0 1 0 1
1 2
2 3
1 3
2 4
3 3
0 1 0
1 2
2 3
1 3
6 6
0 0 1 1 0 1
1 2
2 6
3 6
4 6
4 5
2 4
```

```output1
3
-1
3
```

For the $1$-st test case, Takahashi and Aoki can achieve the objective by making the following $3$ moves, which is the minimum number:

- Takahashi moves to vertex $3$, and Aoki moves to vertex $2$.
- Takahashi moves to vertex $2$, and Aoki moves to vertex $3$.
- Takahashi moves to vertex $4$, and Aoki moves to vertex $1$.

Note that in the $1$-st move, it is disallowed that both Takahashi and Aoki move to vertex $2$ (because the colors of vertices that Takahashi and Aoki move to must be different.)

For the $2$-nd case, no matter how they move, they cannot achieve the objective.