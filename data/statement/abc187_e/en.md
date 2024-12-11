Score : $500$ points

## Problem Statement

We have a tree with $N$ vertices and $N-1$ edges, where the vertices are numbered $1, 2, \dots, N$ and the edges are numbered $1, 2, \dots, N-1$. Edge $i$ connects Vertices $a_i$ and $b_i$.<br>
Each vertex in the tree has an integer written on it. Let $c_i$ be the integer written on Vertex $i$. Initially, $c_i = 0$.

You will be given $Q$ queries. The $i$-th query, consisting of integers $t_i$, $e_i$, and $x_i$, is as follows:

- If $t_i = 1$: for each Vertex $v$ reachable from Vertex $a_{e_i}$ without visiting Vertex $b_{e_i}$ by traversing edges, replace $c_v$ with $c_v + x_i$.
- If $t_i = 2$: for each Vertex $v$ reachable from Vertex $b_{e_i}$ without visiting Vertex $a_{e_i}$ by traversing edges, replace $c_v$ with $c_v + x_i$.

After processing all queries, print the integer written on each vertex.

## Constraints

- All values in input are integers.
- $2 \le N \le 2 \times 10^5$
- $1 \le a_i, b_i \le N$
- The given graph is a tree.
- $1 \le Q \le 2 \times 10^5$
- $t_i \in \{1, 2\}$
- $1 \le e_i \le N-1$
- $1 \le x_i \le 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> $\vdots$
> 
> $a_{N-1}$ $b_{N-1}$
> 
> $Q$
> 
> $t_1$ $e_1$ $x_1$
> 
> $\vdots$
> 
> $t_Q$ $e_Q$ $x_Q$

## Output

Print the values $c_1, c_2, \dots, c_N$ after processing all queries, each in its own line.

```input1
5
1 2
2 3
2 4
4 5
4
1 1 1
1 4 10
2 1 100
2 2 1000
```

```output1
11
110
1110
110
100
```

In the first query, we add $1$ to each vertex reachable from Vertex $1$ without visiting Vertex $2$, that is, Vertex $1$.<br>
In the second query, we add $10$ to each vertex reachable from Vertex $4$ without visiting Vertex $5$, that is, Vertex $1, 2, 3, 4$.<br>
In the third query, we add $100$ to each vertex reachable from Vertex $2$ without visiting Vertex $1$, that is, Vertex $2, 3, 4, 5$.<br>
In the fourth query, we add $1000$ to each vertex reachable from Vertex $3$ without visiting Vertex $2$, that is, Vertex $3$.   

```input2
7
2 1
2 3
4 2
4 5
6 1
3 7
7
2 2 1
1 3 2
2 2 4
1 6 8
1 3 16
2 4 32
2 1 64
```

```output2
72
8
13
26
58
72
5
```

```input3
11
2 1
1 3
3 4
5 2
1 6
1 7
5 8
3 9
3 10
11 4
10
2 6 688
1 10 856
1 8 680
1 8 182
2 2 452
2 4 183
2 6 518
1 3 612
2 6 339
2 3 206
```

```output3
1657
1657
2109
1703
1474
1657
3202
1474
1247
2109
2559
```