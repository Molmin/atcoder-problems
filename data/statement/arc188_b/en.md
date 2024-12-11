Score : $600$ points

## Problem Statement

On a circle, there are $N$ equally spaced points numbered $0,1,\ldots,N-1$ in this order, with Alice at point $0$ and Bob at point $K$. Initially, all points are colored white. Starting with Alice, they alternately perform the following operation:

- Choose one of the currently white points and color it black. Here, after the operation, the coloring of the points must be symmetric with respect to the straight line connecting the operator and the center of the circle.

If the operator cannot perform an operation satisfying the above condition, the sequence of operations ends there.

Both players cooperate and make the best choices to maximize the total number of points colored black in the end. Determine whether all points are colored black at the end of the sequence of operations.

You are given $T$ test cases to solve.

## Constraints

- $1 \leq T \leq 10^5$
- $2 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq N-1$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$ 
> 
> $\mathrm{case}_T$

Each test case $\mathrm{case}_i$ $(1 \leq i \leq T)$ is in the following format:

> $N$ $K$

## Output

Print $T$ lines. The $i$-th line should contain `Yes` if all points can be colored black for the $i$-th test case, and `No` otherwise.

```input1
4
6 2
6 3
6 1
200000 100000
```

```output1
Yes
No
Yes
No
```

For $N=6$ and $K=2$, all points can be colored black by, for example, performing operations in the following order:

1. Alice colors point $3$ black.
2. Bob colors point $1$ black.
3. Alice colors point $5$ black.
4. Bob colors point $2$ black.
5. Alice colors point $4$ black.
6. Bob colors point $0$ black.

![](https://img.atcoder.jp/arc188/ecb64f0798aaa883117c594cb6db2724.png)

For $N=6$ and $K=3$, below is one possible progression. Actually, no matter what they do, they cannot color all points black.

1. Alice colors point $3$ black.
2. Bob colors point $0$ black.
3. Alice cannot color any point black so that the coloring will be symmetric with respect to her line, so she cannot perform the operation.