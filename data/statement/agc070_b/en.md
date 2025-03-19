Score : $1000$ points

## Problem Statement

You are given a rooted tree $T$ with $N$ vertices labeled from $1$ to $N$. The root is the vertex $1$, and the parent of vertex $i$ $(2 \leq i \leq N)$ is $p_i$ $(p_i \lt i)$.

Consider a directed graph $G$ with $N$ vertices labeled from $1$ to $N$. We call $G$ **good** if it satisfies all of the following conditions (here, let $u \to v$ denote an edge from vertex $u$ to vertex $v$):

- Every vertex in $G$ has outdegree $1$.
- $G$ has no cycle of even length.
- For every $i$ $(2 \leq i \leq N)$, $G$ does not contain the edge $i \to p_i$.

Find the sum, modulo $998244353$, of $2^{(\text{number of cycles in }G)}$ over all good graphs $G$.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq p_i \lt i$
- All values given in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $p_2$ $p_3$ $\dots$ $p_N$

## Output

Print the sum, modulo $998244353$, of $2^{(\text{number of cycles in }G)}$ over all good graphs $G$.

```input1
2
1
```

```output1
6
```

Here are the two possible good graphs:

- The graph with edges $1 \to 1$ and $2 \to 2$.
- The graph with edges $1 \to 2$ and $2 \to 2$.

The number of cycles in these graphs are $2$ and $1$, respectively. Thus, the answer is $(2^2 + 2^1) \bmod{998244353} = 6$.

```input2
3
1 2
```

```output2
34
```

For example, the graph with edges $1 \to 2$, $2 \to 3$, and $3 \to 1$ is a good graph, whose number of cycle is $1$.

```input3
5
1 2 1 1
```

```output3
3104
```

```input4
20
1 2 2 2 5 3 5 1 7 9 4 6 4 12 8 2 5 16 6
```

```output4
784973196
```

Remember to find the sum modulo $998244353$.