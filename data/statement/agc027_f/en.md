Score : $1900$ points

## Problem Statement

Snuke has found two trees $A$ and $B$, each with $N$ vertices numbered $1$ to $N$.
The $i$-th edge of $A$ connects Vertex $a_i$ and $b_i$, and the $j$-th edge of $B$ connects Vertex $c_j$ and $d_j$.
Also, all vertices of $A$ are initially painted white.

Snuke would like to perform the following operation on $A$ zero or more times so that $A$ coincides with $B$:

- Choose a leaf vertex that is painted white. (Let this vertex be $v$.)
- Remove the edge incident to $v$, and add a new edge that connects $v$ to another vertex.
- Paint $v$ black.

Determine if $A$ can be made to coincide with $B$, ignoring color. If the answer is yes, find the minimum number of operations required.

You are given $T$ cases of this kind. Find the answer for each of them.

## Constraints

- $1 \leq T \leq 20$
- $3 \leq N \leq 50$
- $1 \leq a_i,b_i,c_i,d_i \leq N$
- All given graphs are trees.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $:$
> 
> $case_{T}$

Each case is given in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> $:$
> 
> $a_{N-1}$ $b_{N-1}$
> 
> $c_1$ $d_1$
> 
> $:$
> 
> $c_{N-1}$ $d_{N-1}$

## Output

For each case, if $A$ can be made to coincide with $B$ ignoring color, print the minimum number of operations required, and print `-1` if it cannot.

```input1
2
3
1 2
2 3
1 3
3 2
6
1 2
2 3
3 4
4 5
5 6
1 2
2 4
4 3
3 5
5 6
```

```output1
1
-1
```

- The graph in each case is shown below.
- In case $1$, $A$ can be made to coincide with $B$ by choosing Vertex $1$, removing the edge connecting $1$ and $2$, and adding an edge connecting $1$ and $3$. Note that Vertex $2$ is not a leaf vertex and thus cannot be chosen.

![3f020b4a4e883680357cc55adb571fbc.png](https://img.atcoder.jp/agc027/3f020b4a4e883680357cc55adb571fbc.png)

```input2
3
8
2 7
4 8
8 6
7 1
7 3
5 7
7 8
4 2
5 2
1 2
8 1
3 2
2 6
2 7
4
1 2
2 3
3 4
3 4
2 1
3 2
9
5 3
4 3
9 3
6 8
2 3
1 3
3 8
1 7
4 1
2 8
9 6
3 6
3 5
1 8
9 7
1 6
```

```output2
6
0
7
```

- $A$ may coincide with $B$ from the beginning.