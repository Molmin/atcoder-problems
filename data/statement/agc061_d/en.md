Score : $1000$ points

## Problem Statement

There are positive integers $N, M$, and an $N \times M$ positive integer matrix $A_{i, j}$. For two **(strictly) increasing** positive integer sequences $X = (X_1, \ldots, X_N)$ and $Y = (Y_1, \ldots, Y_M)$, we define the penalty $D(X, Y)$ as $\max_{1 \leq i \leq N, 1 \leq j \leq M} |X_i Y_j - A_{i, j}|$.

Find two **(strictly) increasing** positive integer sequences $X$ and $Y$ such that $D(X, Y)$ is the smallest possible.

## Constraints

- $1 \leq N, M \leq 5$
- $1 \leq A_{i, j} \leq 10^9$ ($1 \leq i \leq N$, $1 \leq j \leq M$)
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_{1,1}$ $\ldots$ $A_{1,M}$
> 
> $\vdots$
> 
> $A_{N,1}$ $\ldots$ $A_{N,M}$

## Output

Output your answer in the following format:

> $D_{min}$
> 
> $X_1$ $\ldots$ $X_N$
> 
> $Y_1$ $\ldots$ $Y_M$

Here, $D_{min}$ is the smallest possible penalty and the following conditions should be satisfied:

- $D(X, Y)$ should be equal to $D_{min}$.
- $X_i &lt; X_{i + 1}$ ($1 \leq i \leq N - 1$).
- $Y_j &lt; Y_{j + 1}$ ($1 \leq j \leq M - 1$).
- $1 \leq X_i \leq 2\cdot 10^9$ ($1 \leq i \leq N$).
- $1 \leq Y_j \leq 2\cdot 10^9$ ($1 \leq j \leq M$).

One can show that there is an optimal solution satisfying the last two conditions.

```input1
1 1
853922530
```

```output1
0
31415
27182
```

```input2
3 3
4 4 4
4 4 4
4 4 4
```

```output2
5
1 2 3 
1 2 3
```

```input3
3 4
4674 7356 86312 100327
8737 11831 145034 167690
47432 66105 809393 936462
```

```output3
357
129 216 1208 
39 55 670 775
```