Score : $400$ points

## Problem Statement

On a two-dimensional coordinate plane where the $\mathrm{x}$ axis points to the right and the $\mathrm{y}$ axis points up, we have a regular $N$-gon with $N$ vertices $p_0, p_1, p_2, \dots, p_{N - 1}$.<br>
Here, $N$ is guaranteed to be even, and the vertices $p_0, p_1, p_2, \dots, p_{N - 1}$ are in counter-clockwise order.<br>
Let $(x_i, y_i)$ denotes the coordinates of $p_i$.<br>
Given $x_0$, $y_0$, $x_{\frac{N}{2}}$, and $y_{\frac{N}{2}}$, find $x_1$ and $y_1$.

## Constraints

- $4 \le N \le 100$
- $N$ is even.
- $0 \le x_0, y_0 \le 100$
- $0 \le x_{\frac{N}{2}}, y_{\frac{N}{2}} \le 100$
- $(x_0, y_0) \neq (x_{\frac{N}{2}}, y_{\frac{N}{2}})$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_0$ $y_0$
> 
> $x_{\frac{N}{2}}$ $y_{\frac{N}{2}}$

## Output

Print $x_1$ and $y_1$ in this order, with a space in between.<br>
Your output is considered correct when, for each value printed, the absolute or relative error from our answer is at most $10^{-5}$.

```input1
4
1 1
2 2
```

```output1
2.00000000000 1.00000000000
```

We are given $p_0 = (1, 1)$ and $p_2 = (2, 2)$.<br>
The fact that $p_0$, $p_1$, $p_2$, and $p_3$ form a square and they are in counter-clockwise order uniquely determines the coordinates of the other vertices, as follows:

- $p_1 = (2, 1)$
- $p_3 = (1, 2)$

```input2
6
5 3
7 4
```

```output2
5.93301270189 2.38397459622
```