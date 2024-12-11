Score : $400$ points

## Problem Statement

You are given a directed graph with $N$ vertices and $M$ edges. The $j$-th directed edge goes from vertex $u_j$ to vertex $v_j$ and has a weight of $w_j$.

Find one way to write an integer between $-10^{18}$ and $10^{18}$, inclusive, to each vertex such that the following condition is satisfied.

- Let $x_i$ be the value written on vertex $i$. For all edges $j=1,2,\dots,M$, it holds that $x_{v_j} - x_{u_j} = w_j$.

It is guaranteed that at least one such assignment exists for the given input.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq \min\{2 \times 10^5,N(N-1)/2\}$
- $1 \leq u_j, v_j \leq N$
- $u_j \neq v_j$
- If $i \neq j$, then $(u_i, v_i) \neq (u_j, v_j)$ and $(u_i, v_i) \neq (v_j, u_j)$
- $|w_j| \leq 10^9$
- All input values are integers.
- There exists at least one assignment satisfying the conditions.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $u_1$ $v_1$ $w_1$
> 
> $u_2$ $v_2$ $w_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$ $w_M$

## Output

Let $x_i$ be the integer written on vertex $i$. Print $x_1, x_2, \dots, x_N$ in this order, separated by spaces, on a single line. If there are multiple solutions, you may print any of them.

```input1
3 3
1 2 2
3 2 3
1 3 -1
```

```output1
3 5 2
```

By setting $x = (3, 5, 2)$, we have $x_2 - x_1 = w_1 = 2$, $x_2 - x_3 = w_2 = 3$, $x_3 - x_1 = w_3 = -1$, satisfying the conditions.

For example, $x = (-1, 1, -2)$ is also a valid answer.

```input2
4 2
2 1 5
3 4 -3
```

```output2
5 0 6 3
```

For example, $x = (0, -5, 4, 1)$ and $x = (5, 0, 4, 1)$ are also valid answers.

```input3
5 7
2 1 18169343
3 1 307110901
4 1 130955934
2 3 -288941558
2 5 96267410
5 3 -385208968
4 3 -176154967
```

```output3
200401298 182231955 -106709603 69445364 278499365
```