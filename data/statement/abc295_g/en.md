Score : $600$ points

## Problem Statement

We have a directed graph $G_S$ with $N$ vertices numbered $1$ to $N$.
It has $N-1$ edges. The $i$-th edge $(1\leq i \leq N-1)$ goes from vertex $p_i\ (1\leq p_i \leq i)$ to vertex $i+1$.

We have another directed graph $G$ with $N$ vertices numbered $1$ to $N$.
Initially, $G$ equals $G_S$.
Process $Q$ queries on $G$ in the order they are given. There are two kinds of queries as follows.

- `1 u v` : Add an edge to $G$ that goes from vertex $u$ to vertex $v$.
It is guaranteed that the following conditions are satisfied.-   - $u \neq v$.
-   - On $G_S$, vertex $u$ is reachable from vertex $v$ via some edges.
- `2 x` : Print the smallest vertex number of a vertex reachable from vertex $x$ via some edges on $G$ (including vertex $x$).

## Constraints

- $2\leq N \leq 2\times 10^5$
- $1\leq Q \leq 2\times 10^5$
- $1\leq p_i\leq i$
- For each query in the first format:-   - $1\leq u,v \leq N$.
-   - $u \neq v$.
-   - On $G_S$, vertex $u$ is reachable from vertex $v$ via some edges.
- For each query in the second format, $1\leq x \leq N$.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $p_1$ $p_2$ $\dots$ $p_{N-1}$
> 
> $Q$
> 
> $\mathrm{query}_1$
> 
> $\mathrm{query}_2$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

Here, $\mathrm{query}_i$ denotes the $i$-th query and is in one of the following formats:

> $1$ $u$ $v$
> $2$ $x$

## Output

Print $q$ lines, where $q$ is the number of queries in the second format.
The $i$-th line $(1\leq j \leq q)$ should contain the answer to the $j$-th query in the second format.

```input1
5
1 2 3 3
5
2 4
1 4 2
2 4
1 5 1
2 4
```

```output1
4
2
1
```

- At the time of the first query, only vertex $4$ is reachable from vertex $4$ via some edges on $G$.
- At the time of the third query, vertices $2$, $3$, $4$, and $5$ are reachable from vertex $4$ via some edges on $G$.
- At the time of the fifth query, vertices $1$, $2$, $3$, $4$, and $5$ are reachable from vertex $4$ via some edges on $G$.

```input2
7
1 1 2 2 3 3
10
2 5
1 5 2
2 5
1 2 1
1 7 1
1 6 3
2 5
2 6
2 1
1 7 1
```

```output2
5
2
1
1
1
```