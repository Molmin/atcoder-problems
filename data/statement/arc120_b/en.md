Score : $400$ points

## Problem Statement

We have a grid with $H$ rows and $W$ columns. Let $(i, j)$ denote the square at the $i$-th row and $j$-th column.<br>
You are given $H$ strings $S_1, S_2, S_3, \dots, S_H$ that describe the square, as follows:

- if the $j$-th character of $S_i$ is `R`, $(i, j)$ is painted red;
- if the $j$-th character of $S_i$ is `B`, $(i, j)$ is painted blue;
- if the $j$-th character of $S_i$ is `.`, $(i, j)$ is unpainted.

Let $k$ be the number of unpainted squares. Among the $2^k$ ways to paint each of those squares red or blue, how many satisfy the following condition?

- The number of red squares visited while getting from $(1, 1)$ to $(H, W)$ by repeatedly moving one square right or down, including $(1, 1)$ and $(H, W)$, is always the same regardless of the path taken.

Since the count may be enormous, print it modulo $998244353$.

## Constraints

- $2 \le H \le 500$
- $2 \le W \le 500$
- $S_i$ is a string of length $W$ consisting of `R`, `B`, and `.`.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_1$
> 
> $S_2$
> 
> $S_3$
> 
> $\hspace{3pt} \vdots$
> 
> $S_H$

## Output

Print the count modulo $998244353$.

```input1
2 2
B.
.R
```

```output1
2
```

There are two ways to get from $(1, 1)$ to $(2, 2)$ by repeatedly moving right or down, as follows:

- $(1, 1) \rightarrow (1, 2) \rightarrow (2, 2)$
- $(1, 1) \rightarrow (2, 1) \rightarrow (2, 2)$

If we paint $(1, 2)$ and $(2, 1)$ in different colors, the above two paths will contain different numbers of red squares, violating the condition.<br>
On the other hand, if we paint $(1, 2)$ and $(2, 1)$ in the same color, the two paths will contain the same numbers of red squares, satisfying the condition.<br>
Thus, there are two ways to satisfy the condition.

```input2
3 3
R.R
BBR
...
```

```output2
0
```

There may be no way to satisfy the condition.

```input3
2 2
BB
BB
```

```output3
1
```

There is no unpainted square, and the current grid satisfies the condition, so the answer is $1$.