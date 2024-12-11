Score : $550$ points

## Problem Statement

You are given a tree $T$ with $N$ vertices. The vertices are numbered $1$ to $N$, and the $i$-th edge $(1 \leq i \leq N-1)$ connects vertices $u_i$ and $v_i$ bidirectionally.

Using $T$, define a complete graph $G$ with $N$ vertices as follows:

- The weight $w(x,y)$ of the edge between vertices $x$ and $y$ in $G$ is the shortest distance between vertices $x$ and $y$ in $T$.

Find one **maximum weight maximum matching** in $G$. That is, find a set of $\lfloor N/2 \rfloor$ pairs of vertices $M=\{(x_1,y_1),(x_2,y_2),\dots,(x_{\lfloor N/2 \rfloor},y_{\lfloor N/2 \rfloor})\}$ such that each vertex $1,2,\dots, N$ appears in $M$ at most once, and $\displaystyle \sum_{i=1}^{\lfloor N/2 \rfloor} w(x_i,y_i)$ is maximized.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq u_i &lt; v_i \leq N$
- The input graph is a tree.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

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

Print a solution as $\{(x_1,y_1),(x_2,y_2),\dots,(x_{\lfloor N/2 \rfloor},y_{\lfloor N/2 \rfloor})\}$ in the following format. If multiple solutions exist, any of them is acceptable.

> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $\vdots$
> 
> $x_{\lfloor N/2 \rfloor}$ $y_{\lfloor N/2 \rfloor}$

```input1
4
1 2
2 3
3 4
```

```output1
2 4
1 3
```

In $T$, the distance between vertices $2$ and $4$ is $2$, and the distance between vertices $1$ and $3$ is $2$, so the weight of the matching $\{(2,4),(1,3)\}$ is $4$. There is no matching with a weight greater than $4$, so this is a maximum weight maximum matching. Other acceptable outputs include:

```output1
2 3
1 4
```

```input2
3
1 2
2 3
```

```output2
1 3
```

In $T$, the distance between vertices $1$ and $3$ is $2$, so the weight of the matching $\{(1,3)\}$ is $2$. There is no matching with a weight greater than $2$, so this is a maximum weight maximum matching. Another acceptable output is:

```output2
3 1
```