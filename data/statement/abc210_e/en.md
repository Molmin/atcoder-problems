Score : $500$ points

## Problem Statement

We have an undirected graph with $N$ vertices and $0$ edges.
Let us call the $N$ vertices Vertex $0$, Vertex $1$, Vertex $2$, $\ldots$, Vertex $N-1$.

Consider $M$ kinds of operations on this graph.<br>
For each $i = 1, 2, \ldots, M$, the operation of the $i$-th kind is to choose an integer $x$ such that $0 \leq x \lt N$ and add an undirected edge connecting Vertex $x$ and Vertex $(x + A_i) \bmod N$. Here, $a \bmod b$ denotes the remainder when dividing $a$ by $b$.
It costs $C_i$ yen to do the operation of the $i$-th kind once.

You can do these $M$ kinds of operations any number of times (possibly zero) in any order. For example, if three kinds of operations are available, you can choose to do the first operation twice, the second zero times, and the third once.

Determine whether it is possible to make the graph connected. If it is possible, find the minimum total cost needed to do so.

## Constraints

- $2 \leq N \leq 10^9$
- $1 \leq M \leq 10^5$
- $1 \leq A_i \leq N-1$
- $1 \leq C_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $C_1$
> 
> $A_2$ $C_2$
> 
> $\vdots$
> 
> $A_M$ $C_M$

## Output

If it is possible to make the graph connected, print the minimum total cost needed to do so.<br>
If it is impossible to make the graph connected, print $-1$.

```input1
4 2
2 3
3 5
```

```output1
11
```

If we first do the operation of the first kind to connect Vertices $0$ and $2$, then do it again to connect Vertices $1$ and $3$, and finally the operation of the second kind to connect Vertices $1$ and $0$, the graph will be connected.
The total cost incurred here is $3+3+5 = 11$ yen, which is the minimum possible.

```input2
6 1
3 4
```

```output2
-1
```

There is no way to make the graph connected, so we should print $-1$.