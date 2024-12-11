Score : $2000$ points

## Problem Statement

There is a tree whose vertices are labelled with either $0$ or $1$.
The tree has $N$ vertices numbered $1$ through $N$.
For each $i$, there is an edge connecting Vertex $a_i$ and Vertex $b_i$.
The label of Vertex $i$ is $c_i$.

Snuke wants to repeat performing the following operation on the tree:

- Choose an edge, contract it, and label the new vertex with the NAND of the labels of two old vertices.

![](https://img.atcoder.jp/agc050/6fd816a993f20325edb625c93745ee8f.png)

After performing $N - 1$ operations, the tree ends up with a single vertex.
Among $(N-1)!$ ways to do so, how many will result in a vertex labelled with $1$?
Compute the answer <font color="red">**modulo $2$**</font>.

## Notes

- NAND operation is defined as follows: $NAND(0, 0) = NAND(0, 1) = NAND(1, 0) = 1, NAND(1, 1) = 0$.
- When we contract an edge between Vertex $s$ and Vertex $t$, we remove the edge, and simultaneously merge the two vertices.
There is an edge between the merged vertex and Vertex $u$ in the new tree iff there is an edge between $s$ and $u$, or an edge between $t$ and $u$, in the old tree.

## Constraints

- $2 \leq N \leq 300$
- $1 \leq a_i &lt; b_i \leq N$
- The input represents a valid tree.
- $0 \leq c_i \leq 1$
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> $:$
> 
> $a_{N-1}$ $b_{N-1}$
> 
> $c_1$ $c_2$ $\cdots$ $c_N$

## Output

Print the answer.

```input1
4
1 2
2 3
2 4
0 1 1 0
```

```output1
0
```

It turns out that in $4$ of all $6$ ways the final label will be $1$, so the answer is $4 \ mod \ 2 = 0$.

```input2
4
1 2
2 3
3 4
1 1 0 1
```

```output2
1
```

```input3
20
3 15
1 12
10 16
3 19
5 20
1 9
6 13
14 19
2 4
8 11
12 16
6 20
2 17
16 18
17 19
7 10
16 20
2 20
8 20
1 0 0 1 1 0 1 1 1 0 0 1 0 1 0 1 1 1 0 0
```

```output3
0
```