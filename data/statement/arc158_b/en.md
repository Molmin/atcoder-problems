Score : $500$ points

## Problem Statement

You are given non-zero integers $x_1, \ldots, x_N$. Find the minimum and maximum values of $\dfrac{x_i+x_j+x_k}{x_ix_jx_k}$ for integers $i$, $j$, $k$ such that $1\leq i &lt; j &lt; k\leq N$.

## Constraints

- $3\leq N\leq 2\times 10^5$
- $-10^6\leq x_i \leq 10^6$
- $x_i\neq 0$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $\ldots$ $x_N$

## Output

Print the minimum value of $\dfrac{x_i+x_j+x_k}{x_ix_jx_k}$ in the first line and the maximum value in the second line.

Your output will be considered correct when the absolute or relative error is at most $10^{-12}$.

```input1
4
-2 -4 4 5
```

```output1
-0.175000000000000
-0.025000000000000
```

$\dfrac{x_i+x_j+x_k}{x_ix_jx_k}$ can take the following four values.

- $(i,j,k) = (1,2,3)$: $\dfrac{(-2) + (-4) + 4}{(-2)\cdot (-4)\cdot 4} = -\dfrac{1}{16}$.
- $(i,j,k) = (1,2,4)$: $\dfrac{(-2) + (-4) + 5}{(-2)\cdot (-4)\cdot 5} = -\dfrac{1}{40}$．
- $(i,j,k) = (1,3,4)$: $\dfrac{(-2) + 4 + 5}{(-2)\cdot 4\cdot 5} = -\dfrac{7}{40}$．
- $(i,j,k) = (2,3,4)$: $\dfrac{(-4) + 4 + 5}{(-4)\cdot 4\cdot 5} = -\dfrac{1}{16}$.

Among them, the minimum is $-\dfrac{7}{40}$, and the maximum is $-\dfrac{1}{40}$.

```input2
4
1 1 1 1
```

```output2
3.000000000000000
3.000000000000000
```

```input3
5
1 2 3 4 5
```

```output3
0.200000000000000
1.000000000000000
```