Score : $475$ points

## Problem Statement

There is an undirected graph with $N$ vertices and $0$ edges. The vertices are numbered $1$ to $N$.

You are given $Q$ queries to process in order. Each query is of one of the following two types:

- Type $1$: Given in the format `1 u v`. Add an edge between vertices $u$ and $v$.
- Type $2$: Given in the format `2 v k`. Print the $k$-th largest vertex number among the vertices connected to vertex $v$. If there are fewer than $k$ vertices connected to $v$, print `-1`.

## Constraints

- $1 \leq N, Q \leq 2 \times 10^5$
- In a Type $1$ query, $1 \leq u &lt; v \leq N$.
- In a Type $2$ query, $1 \leq v \leq N$, $1 \leq k \leq 10$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $\mathrm{query}_1$
> 
> $\mathrm{query}_2$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

Here, $\mathrm{query}_i$ is the $i$-th query and is given in one of the following formats:

> $1$ $u$ $v$
> $2$ $v$ $k$

## Output

Let $q$ be the number of Type $2$ queries. Print $q$ lines.
The $i$-th line should contain the answer to the $i$-th Type $2$ query.

```input1
4 10
1 1 2
2 1 1
2 1 2
2 1 3
1 1 3
1 2 3
1 3 4
2 1 1
2 1 3
2 1 5
```

```output1
2
1
-1
4
2
-1
```

- In the first query, an edge is added between vertices $1$ and $2$.
- In the second query, two vertices are connected to vertex $1$: $1$ and $2$. Among them, the $1$-st largest vertex number is $2$, which should be printed.
- In the third query, two vertices are connected to vertex $1$: $1$ and $2$. Among them, the $2$-nd largest vertex number is $1$, which should be printed.
- In the fourth query, two vertices are connected to vertex $1$: $1$ and $2$, which is fewer than $3$, so print `-1`.
- In the fifth query, an edge is added between vertices $1$ and $3$.
- In the sixth query, an edge is added between vertices $2$ and $3$.
- In the seventh query, an edge is added between vertices $3$ and $4$.
- In the eighth query, four vertices are connected to vertex $1$: $1,2,3,4$. Among them, the $1$-st largest vertex number is $4$, which should be printed.
- In the ninth query, four vertices are connected to vertex $1$: $1,2,3,4$. Among them, the $3$-rd largest vertex number is $2$, which should be printed.
- In the tenth query, four vertices are connected to vertex $1$: $1,2,3,4$, which is fewer than $5$, so print `-1`.

```input2
6 20
1 3 4
1 3 5
2 1 1
2 3 1
1 1 5
2 6 9
2 1 3
2 6 1
1 4 6
2 2 1
2 6 2
2 4 7
1 1 4
2 6 2
2 3 4
1 2 5
2 4 1
1 1 6
2 3 3
2 1 3
```

```output2
1
5
-1
3
6
2
5
-1
5
3
6
4
4
```