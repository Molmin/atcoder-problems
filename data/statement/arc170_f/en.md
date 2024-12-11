Score: $1000$ points

## Problem Statement

You are given a tree with $N$ vertices numbered $1$ to $N$. The $i$-th edge of the tree connects vertices $u_i$ and $v_i$ bidirectionally.

For a permutation $P=(P_1,\ldots,P_N)$ of $(1,2,\ldots,N)$, we define the sequence $A(P)$ as follows:

- $A(P)$ is initially empty. Write $P_i$ on each vertex $i$.
- For $i=1,2,\ldots,N$ in this order, perform the following:-   - If vertex $i$ is an isolated vertex, append $0$ to the end of $A(P)$. Otherwise, select the adjacent vertex with the smallest written integer. Append the integer written on the selected vertex to the end of $A(P)$ and remove the edge connecting vertex $i$ and the selected vertex.

Find the lexicographically smallest sequence among all possible $A(P)$.

Solve each of the $T$ given test cases.

## Constraints

- $1 \leq T \leq 10^5$
- $2 \leq N \leq 2 \times 10^5$
- $1\leq u_i,v_i\leq N$
- The given graph is a tree.
- All input numbers are integers.
- The sum of $N$ over all test cases in a single input is at most $2 \times 10^5$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each case is given in the following format:

> $N$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$

## Output

Print $T$ lines. The $i$-th line $(1 \leq i \leq T)$ should contain the answer for the $i$-th test case.

```input1
3
5
1 2
2 3
2 4
4 5
8
8 6
7 2
2 1
3 7
5 6
1 6
4 3
7
7 1
5 2
1 2
6 5
4 1
5 3
```

```output1
1 2 0 1 3
1 2 2 3 1 4 0 0
1 2 2 0 3 0 4
```

In the first test case, for $P=(4,1,2,3,5)$, one can obtain $A(P)=(1,2,0,1,3)$ as follows:

- <p>The vertex adjacent to vertex $1$ with the smallest written integer is vertex $2$. Append $P_2=1$ to the end of $A(P)$ and remove the edge connecting vertices $1$ and $2$.</p>
- <p>The vertex adjacent to vertex $2$ with the smallest written integer is vertex $3$. Append $P_3=2$ to the end of $A(P)$ and remove the edge connecting vertices $2$ and $3$.</p>
- <p>Vertex $3$ is an isolated vertex, so append $0$ to the end of $A(P)$.</p>
- <p>The vertex adjacent to vertex $4$ with the smallest written integer is vertex $2$. Append $P_2=1$ to the end of $A(P)$ and remove the edge connecting vertices $4$ and $2$.</p>
- <p>The vertex adjacent to vertex $5$ with the smallest written integer is vertex $4$. Append $P_4=3$ to the end of $A(P)$ and remove the edge connecting vertices $5$ and $4$.</p>

It can be proved that this is the lexicographically smallest sequence among all possible $A(P)$.