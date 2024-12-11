Score : $900$ points

## Problem Statement

Given are simple undirected graphs $X$, $Y$, $Z$, with $N$ vertices each and $M_1$, $M_2$, $M_3$ edges, respectively.
The vertices in $X$, $Y$, $Z$ are respectively called $x_1, x_2, \dots, x_N$, $y_1, y_2, \dots, y_N$, $z_1, z_2, \dots, z_N$.
The edges in $X$, $Y$, $Z$ are respectively $(x_{a_i}, x_{b_i})$, $(y_{c_i}, y_{d_i})$, $(z_{e_i}, z_{f_i})$.

Based on $X$, $Y$, $Z$, we will build another undirected graph $W$ with $N^3$ vertices.
There are $N^3$ ways to choose a vertex from each of the graphs $X$, $Y$, $Z$. Each of these choices corresponds to the vertices in $W$ one-to-one. Let $(x_i, y_j, z_k)$ denote the vertex in $W$ corresponding to the choice of $x_i, y_j, z_k$.

We will span edges in $W$ as follows:

- For each edge $(x_u, x_v)$ in $X$ and each $w, l$, span an edge between $(x_u, y_w, z_l)$ and $(x_v, y_w, z_l)$.
- For each edge $(y_u, y_v)$ in $Y$ and each $w, l$, span an edge between $(x_w, y_u, z_l)$ and $(x_w, y_v, z_l)$.
- For each edge $(z_u, z_v)$ in $Z$ and each $w, l$, span an edge between $(x_w, y_l, z_u)$ and $(x_w, y_l, z_v)$.

Then, let the weight of the vertex $(x_i, y_j, z_k)$ in $W$ be $1,000,000,000,000,000,000^{(i +j + k)} = 10^{18(i + j + k)}$. Find the maximum possible total weight of the vertices in an [independent set](https://en.wikipedia.org/wiki/Independent_set_(graph_theory)) in $W$, and print that total weight modulo $998,244,353$.

## Constraints

- $2 \leq N \leq 100,000$
- $1 \leq M_1, M_2, M_3 \leq 100,000$
- $1 \leq a_i, b_i, c_i, d_i, e_i, f_i \leq N$
- $X$, $Y$, and $Z$ are simple, that is, they have no self-loops and no multiple edges.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $M_1$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $\vdots$
> 
> $a_{M_1}$ $b_{M_1}$
> 
> $M_2$
> 
> $c_1$ $d_1$
> 
> $c_2$ $d_2$
> 
> $\vdots$
> 
> $c_{M_2}$ $d_{M_2}$
> 
> $M_3$
> 
> $e_1$ $f_1$
> 
> $e_2$ $f_2$
> 
> $\vdots$
> 
> $e_{M_3}$ $f_{M_3}$

## Output

Print the maximum possible total weight of an independent set in $W$, modulo $998,244,353$.

```input1
2
1
1 2
1
1 2
1
1 2
```

```output1
46494701
```

The maximum possible total weight of an independent set is that of the set $(x_2, y_1, z_1)$, $(x_1, y_2, z_1)$, $(x_1, y_1, z_2)$, $(x_2, y_2, z_2)$. The output should be $(3 \times 10^{72} + 10^{108})$ modulo $998,244,353$, which is $46,494,701$.

```input2
3
3
1 3
1 2
3 2
2
2 1
2 3
1
2 1
```

```output2
883188316
```

```input3
100000
1
1 2
1
99999 100000
1
1 100000
```

```output3
318525248
```