Score : $1000$ points

## Problem Statement

Given is a tree with $N$ vertices numbered $1, \ldots, N$. The $i$-th edge connects Vertex $u_i$ and Vertex $v_i$. Additionally, Vertex $i$ has an integer $h_i$ written on it. <br>
We have $K$ pieces, the $i$-th of which is initially on Vertex $s_i$. You will repeat the following operation: choose a piece and move it to one of the vertices adjacent to the vertex the piece is currently on.
You will end this process when each piece $i$ is on Vertex $t_i$. It is **not** required for each piece $i$ to go along the shortest path from Vertex $s_i$ to Vertex $t_i$. <br>
For an arrangement of the pieces, let its **potential** be the sum of the integers written on the vertices the pieces are on. If multiple pieces are on the same vertex, the integer on that vertex is added the number of times equal to that number of pieces. <br>
Find the minimum possible value of the maximum potential during the process, including the initial and final states.

## Constraints

- $1 \leq N,K \leq 2000$
- $1 \leq u_i,v_i \leq N$
- $1 \leq h_i \leq 10^9$
- $1 \leq s_i,t_i \leq N$
- The given graph is a tree.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $h_1$ $h_2$ $\ldots$ $h_N$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $:$
> 
> $u_{N-1}$ $v_{N-1}$
> 
> $K$
> 
> $s_1$ $t_1$
> 
> $s_2$ $t_2$
> 
> $:$
> 
> $s_K$ $t_K$

## Output

Print the answer.

```input1
3
1 3 2
1 2
2 3
2
1 3
3 1
```

```output1
4
```

We can make $4$ the maximum potential during the process, as follows:

- Initially, the potential is $3$.
- Move Piece $2$ to Vertex $2$. The potential is now $4$.
- Move Piece $2$ to Vertex $1$. The potential is now $2$.
- Move Piece $1$ to Vertex $2$. The potential is now $4$.
- Move Piece $1$ to Vertex $3$. The potential is now $3$.

There is no way to make the maximum potential during the process less than $4$, so the answer is $4$.

```input2
7
100 101 1 100 101 1 1000
1 2
2 3
4 5
5 6
1 7
4 7
2
1 3
4 6
```

```output2
201
```

```input3
5
2 1 100 5 6
1 2
2 3
3 4
3 5
2
2 2
4 5
```

```output3
101
```

```input4
4
1 2 3 100
1 4
2 4
3 4
9
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```

```output4
115
```

```input5
6
1 100 1 1 10 1000
1 2
2 3
4 5
1 6
4 6
3
1 3
5 5
5 5
```

```output5
102
```