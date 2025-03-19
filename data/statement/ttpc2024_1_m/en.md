Score: $100$ points

## Problem Statement

You are given a permutation $A = (A_1, A_2, \dots, A_N)$ of $(1, 2, \dots, N)$.

For a pair of integers $l, r$ ($1 \le l \le r \le N$), we define the **Cartesian Tree** $\text{C}(l, r)$ as follows:

- $\text{C}(l, r)$ is a rooted binary tree with $r - l + 1$ nodes. We denote the root of this tree as $\mathit{rt}$.
- Let $m$ be the unique integer such that $A_m = \min\lbrace A_l, A_{l+1}, \dots, A_r\rbrace$.
- If $l &lt; m$, then the left subtree of $\mathit{rt}$ is $\text{C}(l, m-1)$. If $l = m$, then $\mathit{rt}$ has no left child.
- If $m &lt; r$, then the right subtree of $\mathit{rt}$ is $\text{C}(m+1, r)$. If $m = r$, then $\mathit{rt}$ has no right child.

You are given $Q$ pairs of integers $(l_1, r_1), (l_2, r_2), \dots, (l_Q, r_Q)$. Determine how many different Cartesian Trees are there among $\text{C}(l_1, r_1), \text{C}(l_2, r_2), \dots, \text{C}(l_Q, r_Q)$.

Two Cartesian Trees $X$ and $Y$ are considered the same if and only if all of the following conditions are satisfied:

Let the root of $X$ be $\mathit{rt}_X$, and the root of $Y$ be $\mathit{rt}_Y$.

- If $\mathit{rt}_X$ has a left child, then $\mathit{rt}_Y$ also has a left child and the left subtrees of $\mathit{rt}_X$ and $\mathit{rt}_Y$ are the same Cartesian Tree.
- If $\mathit{rt}_X$ has no left child, then $\mathit{rt}_Y$ also has no left child.
- If $\mathit{rt}_X$ has a right child, then $\mathit{rt}_Y$ also has a right child and the right subtrees of $\mathit{rt}_X$ and $\mathit{rt}_Y$ are the same Cartesian Tree.
- If $\mathit{rt}_X$ has no right child, then $\mathit{rt}_Y$ also has no right child.

## Constraints

- All input values are integers.
- $1 \le N \le 4 \times 10^5$
- $A$ is a permutation of $(1, 2, \dots, N)$.
- $1 \le Q \le 4 \times 10^5$
- $1 \le l_i \le r_i \le N$ ($1 \le i \le Q$)
- $(l_i, r_i) \ne (l_j, r_j)$ ($1 \le i &lt; j \le Q$)

## Input

The input is given in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $Q$
> 
> $l_1$ $r_1$
> 
> $l_2$ $r_2$
> 
> $\vdots$
> 
> $l_Q$ $r_Q$

## Output

Print the answer.

```input1
6
1 4 2 6 3 5
3
1 4
2 5
3 6
```

```output1
2
```

$\text{C}(1, 4), \text{C}(2, 5), \text{C}(3, 6)$ are the following Cartesian Trees:

![](https://img.atcoder.jp/ttpc2024_1/db8d0d930aa8deab6edbf6d1cc510f0f.svg)

$\text{C}(1, 4)$ and $\text{C}(3, 6)$ are the same Cartesian Tree, while $\text{C}(2, 5)$ is a different Cartesian Tree from these. Therefore, there are $2$ different Cartesian Trees.

```input2
4
1 2 3 4
10
1 1
2 2
3 3
4 4
1 2
2 3
3 4
1 3
2 4
1 4
```

```output2
4
```

```input3
10
3 8 4 7 2 5 9 10 1 6
13
5 8
2 6
7 9
3 8
3 5
2 4
4 6
1 9
3 7
6 9
2 10
4 9
3 9
```

```output3
11
```