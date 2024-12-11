Score : $1200$ points

## Problem Statement

We have a weighted directed graph with $N$ vertices numbered $0$ to $N-1$.

The graph initially has $N-1$ edges. The $i$-th edge ($0 \leq i \leq N-2$) is directed from Vertex $i$ to Vertex $i+1$ and has a weight of $0$.

Snuke will now add a new edge $(i \to j)$ for every pair $i, j$ ($0 \leq i,j \leq N-1,\ i \neq j$).
The weight of the edge will be $-1$ if $i &lt; j$, and $1$ otherwise.

Ringo is a boy. A negative cycle (a cycle whose total weight is negative) in a graph makes him sad.
He will delete some of the edges added by Snuke so that the graph will no longer contain a negative cycle.
The cost of deleting the edge $(i \to j)$ is $A_{i,j}$. He cannot delete edges that have been present from the beginning.

Find the minimum total cost required to achieve Ringo's objective.

## Constraints

- $3 \leq N \leq 500$
- $1 \leq A_{i,j} \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_{0,1}$ $A_{0,2}$ $A_{0,3}$ $\cdots$ $A_{0,N-1}$
> 
> $A_{1,0}$ $A_{1,2}$ $A_{1,3}$ $\cdots$ $A_{1,N-1}$
> 
> $A_{2,0}$ $A_{2,1}$ $A_{2,3}$ $\cdots$ $A_{2,N-1}$
> 
> $\vdots$
> 
> $A_{N-1,0}$ $A_{N-1,1}$ $A_{N-1,2}$ $\cdots$ $A_{N-1,N-2}$

## Output

Print the minimum total cost required to achieve Ringo's objective.

```input1
3
2 1
1 4
3 3
```

```output1
2
```

If we delete the edge $(0 \to 1)$ added by Snuke, the graph will no longer contain a negative cycle.
The cost will be $2$ in this case, which is the minimum possible.

```input2
4
1 1 1
1 1 1
1 1 1
1 1 1
```

```output2
2
```

If we delete the edges $(1 \to 2)$ and $(3 \to 0)$ added by Snuke, the graph will no longer contain a negative cycle.
The cost will be $1+1=2$ in this case, which is the minimum possible.

```input3
10
190587 2038070 142162180 88207341 215145790 38 2 5 20
32047998 21426 4177178 52 734621629 2596 102224223 5 1864
41 481241221 1518272 51 772 146 8805349 3243297 449
918151 126080576 5186563 46354 6646 491776 5750138 2897 161
3656 7551068 2919714 43035419 495 3408 26 3317 2698
455357 3 12 1857 5459 7870 4123856 2402 258
3 25700 16191 102120 971821039 52375 40449 20548149 16186673
2 16 130300357 18 6574485 29175 179 1693 2681
99 833 131 2 414045824 57357 56 302669472 95
8408 7 1266941 60620177 129747 41382505 38966 187 5151064
```

```output3
2280211
```