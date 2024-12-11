Score : $525$ points

## Problem Statement

You are given an integer $K$. For a set $S$ that is initially empty, process $Q$ queries of the following two types in order:

- `1 x`: An integer $x$ is given. If $x$ is in $S$, remove $x$ from $S$. Otherwise, add $x$ to $S$.
- `2 x`: An integer $x$ that is in $S$ is given. Consider a graph where the vertices are the numbers in $S$, and there is an edge between two numbers if and only if the absolute difference between them is at most $K$. Print the count of vertices in the connected component that contains $x$.

## Constraints

- $1 \leq Q \leq 2\times 10^5$
- $0 \leq K \leq 10^{18}$
- For each query, $1 \leq x \leq 10^{18}$.
- For each query of the second type, the given $x$ is in $S$ at that point.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $Q$ $K$
> 
> $\mathrm{query}_1$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

Each query is given in the following format:

> $1$ $x$
> $2$ $x$

## Output

Process the queries.

```input1
7 5
1 3
1 10
2 3
1 7
2 3
1 10
2 3
```

```output1
1
3
2
```

The query processing proceeds as follows:

- In the first query, $3$ is added to $S$, resulting in $S=\{3\}$.
- In the second query, $10$ is added to $S$, resulting in $S=\{3,10\}$.
- In the third query, consider a graph with vertices $3$ and $10$ and no edges. The connected component containing $3$ has a size of $1$, so print $1$.
- In the fourth query, $7$ is added to $S$, resulting in $S=\{3,7,10\}$.
- In the fifth query, consider a graph with vertices $3$, $7$, and $10$, with edges between $3$ and $7$, and $7$ and $10$. The connected component containing $3$ has a size of $3$, so print $3$.
- In the sixth query, $10$ is removed from $S$, resulting in $S=\{3,7\}$.
- In the seventh query, consider a graph with vertices $3$ and $7$, with an edge between them. The connected component containing $3$ has a size of $2$, so print $2$.

```input2
11 1000000000000000000
1 1
1 100
1 10000
1 1000000
1 100000000
1 10000000000
1 1000000000000
1 100000000000000
1 10000000000000000
1 1000000000000000000
2 1
```

```output2
10
```

```input3
8 0
1 1
1 2
2 1
1 1
1 2
1 1
1 2
2 1
```

```output3
1
1
```