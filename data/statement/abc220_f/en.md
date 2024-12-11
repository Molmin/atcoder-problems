Score : $500$ points

## Problem Statement

Given is a tree with $N$ vertices. The vertices are numbered $1,2,\ldots ,N$, and the $i$-th edge is an undirected edge connecting Vertices $u_i$ and $v_i$.

For each integer $i\,(1 \leq i \leq N)$, find $\sum_{j=1}^{N}dis(i,j)$.

Here, $dis(i,j)$ denotes the minimum number of edges that must be traversed to go from Vertex $i$ to Vertex $j$.

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

Print $N$ lines.

The $i$-th line should contain $\sum_{j=1}^{N}dis(i,j)$.

```input1
3
1 2
2 3
```

```output1
3
2
3
```

We have:

$dis(1,1)+dis(1,2)+dis(1,3)=0+1+2=3$,

$dis(2,1)+dis(2,2)+dis(2,3)=1+0+1=2$,

$dis(3,1)+dis(3,2)+dis(3,3)=2+1+0=3$.

```input2
2
1 2
```

```output2
1
1
```

```input3
6
1 6
1 5
1 3
1 4
1 2
```

```output3
5
9
9
9
9
9
```