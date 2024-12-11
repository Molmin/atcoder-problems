Score : $800$ points

## Problem Statement

You are given a tree with $N$ vertices, where $N$ is **odd**.
The vertices are numbered from $1$ through $N$ and edges from $1$ through $N-1$.
The edge $i$ connects vertices $u_i$ and $v_i$ and its initial weight is $w^1_i$.

You can perform the following operation any number of times:

- Choose an edge $(u, v)$ of the tree, and suppose that its weight now is $w$. For every edge, which is incident to exactly one of $u$ and $v$, we **XOR** the weight of that edge with $w$ (if it was $w_1$, replace it with $w_1 \oplus w$).

Your goal is to reach the state where each edge $i$ has weight $w^2_i$.
Determine if you can get to the goal by performing the operation above any number of times.

## Constraints

- $1 \le N \le 10^5$
- $N$ is odd.
- $1\le u_i, v_i \le N$
- $u_i \neq v_i$
- $0\le w^1_i, w^2_i &lt; 2^{30}$
- All values in input are integers.
- The input represents a valid tree.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $u_1$ $v_1$ $w^1_1$ $w^2_1$
> 
> $u_2$ $v_2$ $w^1_2$ $w^2_2$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$ $w^1_{N-1}$ $w^2_{N-1}$

## Output

If you can get the goal weight assignment from the initial state, output `YES`. Otherwise, output `NO`.
Note that the checker is case-insensitive: you can print letters in both uppercase and lowercase.

```input1
3
1 2 1 1
2 3 8 9
```

```output1
YES
```

If you perform the operation on the edge $1$, the weight of the edge $2$ becomes $8 \oplus 1=9$.

```input2
5
1 2 0 3
1 3 1 0
1 4 2 1
1 5 0 0
```

```output2
NO
```