Score : $600$ points

## Problem Statement

You are given a simple undirected graph $G$ with $N$ vertices.

$G$ is given as the $N \times N$ adjacency matrix $A$. That is, there is an edge between Vertices $i$ and $j$ if $A_{i,j}$ is $1$, and there is not if $A_{i,j}$ is $0$.

Find the number of triples of integers $(i,j,k)$ satisfying $1 \le i &lt; j &lt; k \le N$ such that there is an edge between Vertices $i$ and $j$, an edge between Vertices $j$ and $k$, and an edge between Vertices $i$ and $k$.

## Constraints

- $3 \le N \le 3000$
- $A$ is the adjacency matrix of a simple undirected graph $G$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_{1,1}A_{1,2}\dots A_{1,N}$
> 
> $A_{2,1}A_{2,2}\dots A_{2,N}$
> 
> $\vdots$
> 
> $A_{N,1}A_{N,2}\dots A_{N,N}$

## Output

Print the answer.

```input1
4
0011
0011
1101
1110
```

```output1
2
```

$(i,j,k)=(1,3,4),(2,3,4)$ satisfy the condition.

$(i,j,k)=(1,2,3)$ does not satisfy the condition, because there is no edge between Vertices $1$ and $2$.

Thus, the answer is $2$.

```input2
10
0000000000
0000000000
0000000000
0000000000
0000000000
0000000000
0000000000
0000000000
0000000000
0000000000
```

```output2
0
```