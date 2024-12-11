Score : $500$ points

## Problem Statement

You are given a rooted tree with $N$ vertices. The root is Vertex $1$.<br>
For each $i = 1, 2, \ldots, N-1$, the $i$-th edge connects Vertex $u_i$ and Vertex $v_i$.

For each $i = 1, 2, \ldots, N$, let $S_i$ denote the set of all vertices in the subtree rooted at Vertex $i$. (Each vertex is in the subtree rooted at itself, that is, $i \in S_i$.)

Additionally, for integers $l$ and $r$, let $[l, r]$ denote the set of all integers between $l$ and $r$, that is, $[l, r] = \lbrace l, l+1, l+2, \ldots, r \rbrace$.

Consider a sequence of $N$ pairs of integers $\big((L_1, R_1), (L_2, R_2), \ldots, (L_N, R_N)\big)$ that satisfies the conditions below.

- $1 \leq L_i \leq R_i$ for every integer $i$ such that $1 \leq i \leq N$.
- The following holds for every pair of integers $(i, j)$ such that $1 \leq i, j \leq N$.-   - $[L_i, R_i] \subseteq [L_j, R_j]$ if $S_i \subseteq S_j$
-   - $[L_i, R_i] \cap [L_j, R_j] = \emptyset$ if $S_i \cap S_j = \emptyset$

It can be shown that there is at least one sequence $\big((L_1, R_1), (L_2, R_2), \ldots, (L_N, R_N)\big)$.
Among those sequences, print one that minimizes $\max \lbrace L_1, L_2, \ldots, L_N, R_1, R_2, \ldots, R_N \rbrace$, the maximum integer used. (If there are multiple such sequences, you may print any of them.)

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq u_i, v_i \leq N$
- All values in input are integers.
- The given graph is a tree.

## Input

Input is given from Standard Input in the following format:

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

Print $N$ lines in the format below. That is, for each $i = 1, 2, \ldots, N$, the $i$-th line should contain $L_i$ and $R_i$ separated by a space.

> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_N$ $R_N$

```input1
3
2 1
3 1
```

```output1
1 2
2 2
1 1
```

$(L_1, R_1) = (1, 2), (L_2, R_2) = (2, 2), (L_3, R_3) = (1, 1)$ satisfies the conditions.<br>
Indeed, we have $[L_2, R_2] \subseteq [L_1, R_1], [L_3, R_3] \subseteq [L_1, R_1], [L_2, R_2] \cap [L_3, R_3] = \emptyset$.<br>
Additionally, $\max \lbrace L_1, L_2, L_3, R_1, R_2, R_3 \rbrace = 2$ is the minimum possible value.

```input2
5
3 4
5 4
1 2
1 4
```

```output2
1 3
3 3
2 2
1 2
1 1
```

```input3
5
4 5
3 2
5 2
3 1
```

```output3
1 1
1 1
1 1
1 1
1 1
```