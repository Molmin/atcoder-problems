Score : $600$ points

## Problem Statement

Given is a tree with $N$ vertices. The vertices are numbered $1,2,\ldots,N$, and the $i$-th edge $(1 \leq i \leq N-1)$ connects Vertex $u_i$ and Vertex $v_i$.

Find the number of integers $i$ $(1 \leq i \leq N)$ that satisfy the following condition.

- The size of the maximum matching of the graph obtained by deleting Vertex $i$ and all incident edges from the tree is equal to the size of the maximum matching of the original tree.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq u_i &lt; v_i \leq N$
- The given graph is a tree.
- All values in input are integers.

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

Print the answer.

```input1
3
1 2
2 3
```

```output1
2
```

The size of the maximum matching of the original tree is $1$.

The size of the maximum matching of the graph obtained by deleting Vertex $1$ and all incident edges from the tree is $1$.

The size of the maximum matching of the graph obtained by deleting Vertex $2$ and all incident edges from the tree is $0$.

The size of the maximum matching of the graph obtained by deleting Vertex $3$ and all incident edges from the tree is $1$.

Thus, two integers $i=1,3$ satisfy the condition, so we should print $2$.

```input2
2
1 2
```

```output2
0
```

```input3
6
2 5
3 5
1 4
4 5
4 6
```

```output3
4
```