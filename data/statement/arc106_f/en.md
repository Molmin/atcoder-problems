Score : $800$ points

## Problem Statement

Takahashi is about to assemble a character figure, consisting of $N$ parts called Part $1$, Part $2$, ..., Part $N$ and $N-1$ connecting components. Parts are distinguishable, but connecting components are not.

Part $i$ has $d_i$ holes, called Hole $1$, Hole $2$, ..., Hole $d_i$, into which a connecting component can be inserted. These holes in the parts are distinguishable.
Each connecting component will be inserted into two holes in different parts, connecting these two parts. It is impossible to insert multiple connecting components into a hole.

The character figure is said to be complete when it has the following properties:

- All of the $N-1$ components are used to connect parts.
- Consider a graph with $N$ vertices corresponding to the parts and $N-1$ undirected edges corresponding to the pairs of vertices connected by a connecting component. Then, this graph is connected.

Two ways A and B to make the figure complete are considered the same when the following is satisfied: for every pair of holes, A uses a connecting component to connect these holes if and only if B uses one to connect them.

Find the number of ways to make the figure complete. Since the answer can be enormous, find the count modulo $998244353$.

## Constraints

- All values in input are integers.
- $2 \leq N \leq 2 \times 10^5$
- $1 \leq d_i &lt; 998244353$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $d_1$ $d_2$ $\cdots$ $d_N$

## Output

Print the answer.

```input1
3
1 1 3
```

```output1
6
```

One way to make the figure complete is to connect Hole $1$ in Part $1$ and Hole $3$ in Part $3$ and then connect Hole $1$ in Part $2$ and Hole $1$ in Part $3$.

```input2
3
1 1 1
```

```output2
0
```

```input3
6
7 3 5 10 6 4
```

```output3
389183858
```

```input4
9
425656 453453 4320 1231 9582 54336 31435436 14342 423543
```

```output4
667877982
```