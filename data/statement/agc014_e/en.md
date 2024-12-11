Score : $1400$ points

## Problem Statement

There is a tree with $N$ vertices numbered $1$ through $N$.
The $i$-th of the $N-1$ edges connects vertices $a_i$ and $b_i$.

Initially, each edge is painted blue.
Takahashi will convert this blue tree into a red tree, by performing the following operation $N-1$ times:

- Select a simple path that consists of only blue edges, and remove one of those edges.
- Then, span a new red edge between the two endpoints of the selected path.

His objective is to obtain a tree that has a red edge connecting vertices $c_i$ and $d_i$, for each $i$.

Determine whether this is achievable.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq a_i,b_i,c_i,d_i \leq N$
- $a_i \neq b_i$
- $c_i \neq d_i$
- Both input graphs are trees.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> :
> 
> $a_{N-1}$ $b_{N-1}$
> 
> $c_1$ $d_1$
> 
> :
> 
> $c_{N-1}$ $d_{N-1}$

## Output

Print `YES` if the objective is achievable; print `NO` otherwise.

```input1
3
1 2
2 3
1 3
3 2
```

```output1
YES
```

The objective is achievable, as below:

- First, select the path connecting vertices $1$ and $3$, and remove a blue edge $1-2$. Then, span a new red edge $1-3$.
- Next, select the path connecting vertices $2$ and $3$, and remove a blue edge $2-3$. Then, span a new red edge $2-3$.

```input2
5
1 2
2 3
3 4
4 5
3 4
2 4
1 4
1 5
```

```output2
YES
```

```input3
6
1 2
3 5
4 6
1 6
5 1
5 3
1 4
2 6
4 3
5 6
```

```output3
NO
```