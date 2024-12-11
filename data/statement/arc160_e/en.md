Score : $800$ points

## Problem Statement

You are given an undirected tree $G$ with $N$ vertices. **The degree of every vertex in $G$ is at most $3$.**<br>
The vertices are numbered $1$ to $N$. The edges are numbered $1$ to $N-1$, and edge $i$ connects vertex $u_i$ and vertex $v_i$.<br>
Each vertex has a fixed weight, and the weight of vertex $i$ is $W_i$.

You will add zero or more edges to $G$. The cost of adding an edge between vertex $i$ and vertex $j$ is $W_i + W_j$.

Print one way to add edges to satisfy the following condition for the minimum possible total cost.

- $G$ is $2$-vertex-connected. In other words, for every vertex $v$ in $G$, removing $v$ and its incident edges from $G$ would not disconnect $G$.

You have $T$ test cases to solve.

## Constraints

- $1 \leq T \leq 2 \times 10^5$
- $3 \leq N \leq 2 \times 10^5$
- $1 \leq u_i, v_i \leq N$
- The given graph is a tree.
- The degree of every vertex in the given graph is at most $3$.
- $1 \leq W_i \leq 10^9$
- $W_i$ is an integer.
- The sum of $N$ across the test cases is at most $2 \times 10^5$.

## Input

The input is given from Standard Input in the following format, where $\mathrm{case}_i$ represents the $i$-th test case:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_N$

Each test case is in the following format:

> $N$ 
> 
> $W_1$ $W_2$ $\dots$ $W_N$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$

## Output

For each test case, print a solution in the following format, where:

- $M$ is the number of added edges, and
- the $i$-th added edge connects vertex $a_i$ and vertex $b_i$.

If multiple solutions exist, any of them would be accepted.

> $M$ 
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $\vdots$
> 
> $a_M$ $b_M$

```input1
2
3
2 3 5
1 2
2 3
7
1 10 100 1000 10000 100000 1000000
1 2
2 3
2 4
3 5
3 6
4 7
```

```output1
1
1 3
2
7 6
1 5
```

In the first test case, adding an edge connecting vertex $1$ and vertex $3$ makes $G$ satisfy the condition in the problem statement.<br>
The cost of this is $W_1 + W_3 = 2 + 5 = 7$.
There is no way to add edges to satisfy the condition for a cost of less than $7$, so this is a valid solution.

In the second test case, the solution above has a total cost of $(W_7 + W_6) + (W_1 + W_5) = 1100000 + 10001 = 1110001$, which is the minimum possible.