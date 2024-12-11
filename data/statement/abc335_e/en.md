Score : $525$ points

## Problem Statement

There is a connected undirected graph with $N$ vertices and $M$ edges, where the $i$-th edge connects vertex $U_i$ and vertex $V_i$ bidirectionally.<br>
Each vertex has an integer written on it, with integer $A_v$ written on vertex $v$.

For a simple path from vertex $1$ to vertex $N$ (a path that does not pass through the same vertex multiple times), the score is determined as follows:

- Let $S$ be the sequence of integers written on the vertices along the path, listed in the order they are visited.
- If $S$ is not non-decreasing, the score of that path is $0$.
- Otherwise, the score is the number of distinct integers in $S$.

Find the path from vertex $1$ to vertex $N$ with the highest score among all simple paths and print that score.

 What does it mean for $S$ to be non-decreasing?
A sequence $S=(S_1,S_2,\dots,S_l)$ of length $l$ is said to be non-decreasing if and only if $S_i \le S_{i+1}$ for all integers $1 \le i < l$.

## Constraints

- All input values are integers.
- $2 \le N \le 2 \times 10^5$
- $N-1 \le M \le 2 \times 10^5$
- $1 \le A_i \le 2 \times 10^5$
- The graph is connected.
- $1 \le U_i &lt; V_i \le N$
- $(U_i,V_i) \neq (U_j,V_j)$ if $i \neq j$.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $U_1$ $V_1$
> 
> $U_2$ $V_2$
> 
> $\vdots$
> 
> $U_M$ $V_M$

## Output

Print the answer as an integer.

```input1
5 6
10 20 30 40 50
1 2
1 3
2 5
3 4
3 5
4 5
```

```output1
4
```

The path $1 \rightarrow 3 \rightarrow 4 \rightarrow 5$ has $S=(10,30,40,50)$ for a score of $4$, which is the maximum.

```input2
4 5
1 10 11 4
1 2
1 3
2 3
2 4
3 4
```

```output2
0
```

There is no simple path from vertex $1$ to vertex $N$ such that $S$ is non-decreasing. In this case, the maximum score is $0$.

```input3
10 12
1 2 3 3 4 4 4 6 5 7
1 3
2 9
3 4
5 6
1 2
8 9
4 5
8 10
7 10
4 6
2 8
6 7
```

```output3
5
```