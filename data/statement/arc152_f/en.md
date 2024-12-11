Score : $1000$ points

## Problem Statement

You are given a tree with $N$ vertices numbered $1$ to $N$.
The $i$-th edge connects two vertices $a_i$ and $b_i$ $(1\leq i\leq N-1)$.

Initially, a piece is placed at vertex $1$. You will perform the following operation exactly $N$ times.

- Choose a vertex that is not occupied by the piece at that moment and is never chosen in the previous operations, and move the piece one vertex toward the chosen vertex.

A way to perform the operation $N$ times is called a *good procedure* if the piece ends up at vertex $N$.
Additionally, a good procedure is called an *ideal procedure* if the number of vertices visited by the piece at least once during the procedure (including vertices $1$ and $N$) is the minimum possible. 

Find the number of vertices visited by the piece at least once during an ideal procedure.
If there is no good procedure, print `-1` instead.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq a_i,b_i \leq N$
- All values in the input are integers.
- The given graph is a tree.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $\vdots$ 
> 
> $a_{N-1}$ $b_{N-1}$

## Output

Print the answer as an integer.

```input1
4
1 2
2 4
3 4
```

```output1
3
```

If you choose vertices $3$, $1$, $2$, $4$ in this order, the piece will go along the path $1$ → $2$ → $1$ → $2$ → $4$. This is an ideal procedure.

```input2
6
1 6
2 6
2 3
3 4
4 5
```

```output2
-1
```

There is no good procedure.

```input3
14
1 2
1 3
3 4
3 5
5 6
6 7
5 8
8 9
8 14
14 10
10 11
14 12
12 13
```

```output3
5
```