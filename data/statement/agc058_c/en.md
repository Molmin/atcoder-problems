Score : $900$ points

## Problem Statement

There are $N$ vertices on a circumference.
The vertices are numbered $1$ to $N$ in clockwise order, and Vertex $i$ has an integer $A_i$ written on it, where $A_i$ is $1$, $2$, $3$, or $4$. Here, $A$ contains each of $1$, $2$, $3$, and $4$ at least once.

Consider making a tree by adding $N-1$ edges connecting these $N$ vertices.
Here, the following conditions must be satisfied.

- <p>If Vertices $x$ and $y$ are directly connected by an edge, $|A_x-A_y|=1$.</p>
- <p>When the edges are drawn as segments, no two of them intersect except at an endpoint.</p>

For instance, the figure below shows a tree that satisfies the conditions:

![figure1](https://img.atcoder.jp/agc058/8ed6a07d693053455f589dff2d9dccfa.png)

Determine whether it is possible to construct a tree that satisfies the conditions.

Solve $T$ test cases for each input file.

## Constraints

- $1 \leq T \leq 75000$
- $4 \leq N \leq 300000$
- $1 \leq A_i \leq 4$
- $A$ contains each of $1$, $2$, $3$, and $4$ at least once.
- The sum of $N$ in one input file does not exceed $300000$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

Each case is in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

For each case, print `Yes` if it is possible to construct a tree that satisfies the conditions, and `No` otherwise.

```input1
3
4
1 2 3 4
4
1 3 4 2
4
1 4 2 3
```

```output1
Yes
Yes
No
```

```input2
3
8
4 2 3 4 1 2 2 1
8
3 2 2 3 1 3 3 4
8
2 3 3 2 1 4 1 4
```

```output2
Yes
Yes
No
```

The first test case corresponds to the figure in the Problem Statement.