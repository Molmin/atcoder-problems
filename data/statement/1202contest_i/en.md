Score : $100$ points

## Problem Statement

You are given $N$ distinct integer grid points $(X_i, Y_i) \ (i = 1, 2, \dots, N)$ in the plane, each of which has an integer score $P_i$.
You can choose an arbitrary number of grid points among them under the following condition.
Find the maximum value of the sum of the scores of chosen grid points.

**Condition:**
A grid point **dominated** by a **convex combination** of the chosen grid points must be chosen.
That is, for each $k = 1, 2, \dots, N$, if there exists a tuple $(\lambda_1, \lambda_2, \dots, \lambda_N)$ of $N$ **nonnegative** reals with the following conditions, then $(X_k, Y_k)$ is chosen:

- $\lambda_i &gt; 0 \implies (X_i, Y_i)$ is chosen.
- $\sum_{i=1}^N \lambda_i = 1.$
- $\sum_{i=1}^N \lambda_i X_i \geq X_k.$
- $\sum_{i=1}^N \lambda_i Y_i \geq Y_k.$

## Constraints

- $1 \leq N \leq 200$
- $1 \leq X_i \leq 10^9 \ \ (1 \leq i \leq N)$
- $1 \leq Y_i \leq 10^9 \ \ (1 \leq i \leq N)$
- $(X_i, Y_i) \neq (X_j, Y_j) \ \ (i \neq j)$
- $|P_i| \leq 10^7 \ \ (1 \leq i \leq N)$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $X_1 \ Y_1 \ P_1$
> 
> $X_2 \ Y_2 \ P_2$
> 
> $\vdots$
> 
> $X_N \ Y_N \ P_N$

## Output

Print the maximum value of the sum of the scores of grid points that are chosen under the condition.

```input1
3
1 4 2
4 1 3
2 2 -4
```

```output1
3
```

It is optimal to choose only $(X_2, Y_2) = (4, 1)$.
If you choose $(X_1, Y_1) = (1, 4)$ in addition, then for example $\lambda_1 = 0.4$ and $\lambda_2 = 0.6$ satisfy

<span>\[
    \lambda_1 + \lambda_2 = 0.4 + 0.6 = 1\\[1mm]
    \lambda_1 X_1 + \lambda_2 X_2 = 0.4 \times 1 + 0.6 \times 4 = 2.8 \geq 2 = X_3\\[1mm]
    \lambda_1 Y_1 + \lambda_2 Y_2 = 0.4 \times 4 + 0.6 \times 1 = 2.2 \geq 2 = Y_3,
    \]</span>

and hence $(X_3, Y_3) = (2, 2)$ must be chosen in addition, which decreases the sum of scores as a result.

```input2
3
1 4 2
4 1 3
2 2 -1
```

```output2
4
```

It is optimal to choose all the grid points.

```input3
3
1 4 2
4 1 3
1 1 -6
```

```output3
0
```

It is sometimes optimal to choose no grid point.