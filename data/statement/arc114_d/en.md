Score : $600$ points

## Problem Statement

Let $X = 10^{100}$. We have a graph with a vertex for each integer $-X \leq i \leq X$, and an undirected edge connecting Vertex $i$ and Vertex $i + 1$ (we will call it Edge $\{ i, i + 1 \}$) for each $-X \leq i \leq X-1$.

All edges in this graph are initially painted red.
Additionally, we have $N$ pieces, and the $i$-th of them is on Vertex $a_i$.

Maroon can repeat the following operation:

- Choose a piece. If that piece is on Vertex $i$, move it to Vertex $i-1$ or Vertex $i + 1$. Then, if the traversed edge is now painted red, repaint it blue, and vice versa.

During the process, there may be multiple pieces on the same vertex.

Maroon wants to do this operation zero or more times to make the edges painted in his desired combination of colors. The desired combination of colors is represented by an even number $K$ and $K$ integers $t_1 &lt; t_2 &lt; \cdots &lt; t_K$: it means that Edge $\{ i, i + 1 \}$ is red for $i &lt; t_1$, blue for $t_1 \leq i &lt; t_2$, $\cdots$, red for $t_K \leq i$. More formally, for each odd number $j = 1, 3, \cdots, K-1$, Edge $\{ i, i + 1 \}$ is blue for each $i$ such that $t_j \leq i &lt; t_{j+1}$; all other edges are red.

Find the minimum number of operations required to make the edges painted in the desired combination of colors. If it is impossible to do so, print $-1$.

## Constraints

- $1 \leq N \leq 5000$
- $2 \leq K \leq 5000$
- $K$ is even.
- $|a_i| \leq 10^9$
- $|t_i| \leq 10^9$
- $t_i &lt; t_{i+1}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $a_1$ $a_2$ $\cdots$ $a_N$
> 
> $t_1$ $t_2$ $\cdots$ $t_K$

## Output

Print the minimum number of operations required to make the edges painted in the desired combination of colors. If it is impossible to do so, print $-1$.

```input1
2 2
2 -1
-2 2
```

```output1
4
```

As shown below, we can achieve the desired state in four operations, which is optimal since we need to repaint four edges.

The following is the initial situation. For convenience, we have omitted edges to the left of $-3$ and the right of $3$.

![0](https://img.atcoder.jp/arc114/cfe333a77072f2bb54812c06d62de656.png)

We move the piece on $-1$ to $-2$ to get the following:

![1](https://img.atcoder.jp/arc114/93c2fca818e0d1a8069b70919a043d21.png)

Then, we move the piece on $2$ to $1$ to get the following:

![2](https://img.atcoder.jp/arc114/f7520729ea3f02659eef7df2d17c1363.png)

Then, we move the piece on $1$ to $0$ to get the following:

![3](https://img.atcoder.jp/arc114/fa295d290a5de5c01f66934899fb6280.png)

Then, we move the piece on $0$ to $-1$ to get the following, which is the desired state:

![last](https://img.atcoder.jp/arc114/eab39d19d0973644aa27e8c695ab5812.png)

```input2
2 2
2 2
5 8
```

```output2
9
```

There can be multiple pieces on the same vertex already in the beginning.

```input3
3 4
1 3 5
0 2 4 6
```

```output3
-1
```

```input4
4 4
3 4 5 6
3 4 5 6
```

```output4
2
```