Score : $400$ points

## Problem Statement

We have a tree with $N$ vertices numbered $1, 2, \dots, N$.<br>
The $i$-th edge $(1 \leq i \leq N - 1)$ connects Vertex $u_i$ and Vertex $v_i$ and has a weight $w_i$.

For different vertices $u$ and $v$, let $f(u, v)$ be the greatest weight of an edge contained in the shortest path from Vertex $u$ to Vertex $v$.

Find $\displaystyle \sum_{i = 1}^{N - 1} \sum_{j = i + 1}^N f(i, j)$.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq u_i, v_i \leq N$
- $1 \leq w_i \leq 10^7$
- The given graph is a tree.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $u_1$ $v_1$ $w_1$
> 
> $\vdots$
> 
> $u_{N - 1}$ $v_{N - 1}$ $w_{N - 1}$

## Output

Print the answer.

```input1
3
1 2 10
2 3 20
```

```output1
50
```

We have $f(1, 2) = 10$, $f(2, 3) = 20$, and $f(1, 3) = 20$, so we should print their sum, or $50$.

```input2
5
1 2 1
2 3 2
4 2 5
3 5 14
```

```output2
76
```