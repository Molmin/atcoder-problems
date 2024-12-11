Score : $1200$ points

## Problem Statement

There is a rooted tree $T$ with $N$ vertices numbered from $1$ to $N$.
Vertex $1$ is the root, and the parent of vertex $i$ ($2 \leq i \leq N$) is $P_i$ ($P_i &lt; i$).

A permutation $x = (x_1, x_2, \cdots, x_N)$ of $(1, 2, \cdots, N)$ is judged to be a **good** permutation or not by the following criteria.

- Consider the following operation on $x$.-   - Choose two adjacent elements $u$ and $v$ in $x$ such that $u$ and $v$ are in an ancestor-descendant relationship in $T$. It does not matter which is the ancestor and which is the descendant. Then, swap $u$ and $v$.
- If it is possible to obtain a permutation that is lexicographically strictly smaller than the initial state by performing the above operation zero or more times, $x$ is **not** a good permutation. If it is impossible to obtain a permutation lexicographically smaller than the initial state by any such operations, $x$ is a good permutation.

You are given a positive integer $B$.
For a permutation $x$, define $\operatorname{hash}(x) = \sum_{1 \leq i \leq N} B^{i-1} \times x_i$.

Find the sum of $\operatorname{hash}(x)$ over all good permutations $x$, modulo $998244353$.

 What is lexicographical order on sequences?

A sequence $S = (S_1, S_2, \ldots, S_{|S|})$ is said to be **lexicographically smaller** than a sequence $T = (T_1, T_2, \ldots, T_{|T|})$ if and only if 1. or 2. below holds.
Here, $|S|$ and $|T|$ denote the lengths of $S$ and $T$, respectively.

1. $|S| \lt |T|$ and $(S_1, S_2, \ldots, S_{|S|}) = (T_1, T_2, \ldots, T_{|S|})$.
2. There exists an integer $1 \leq i \leq \min\{ |S|, |T| \}$ such that the following two statements hold.
    1.    - $(S_1, S_2, \ldots, S_{i-1}) = (T_1, T_2, \ldots, T_{i-1})$.
2.    - $S_i$ is smaller than $T_i$ (as a number).

## Constraints

- $2 \leq N \leq 100$
- $1 \leq B &lt; 998244353$
- $1 \leq P_i &lt; i$ ($2 \leq i \leq N$)
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $B$
> 
> $P_2$ $P_3$ $\cdots$ $P_N$

## Output

Print the answer.

```input1
3 100
1 1
```

```output1
50502
```

For example, $x = (3, 1, 2)$ is not a good permutation, because by swapping $3$ and $1$, which are in an ancestor-descendant relationship, we can obtain $(1, 3, 2)$, a lexicographically smaller permutation.

In this sample, the good permutations are $x = (1, 2, 3)$ and $x = (1, 3, 2)$.
Thus, the answer is $\operatorname{hash}((1,2,3)) + \operatorname{hash}((1,3,2)) = 30201 + 20301 = 50502$.

```input2
5 100
1 2 3 4
```

```output2
504030201
```

In this sample, any two vertices are in an ancestor-descendant relationship.
Therefore, the only good permutation is $x = (1, 2, 3, 4, 5)$.

```input3
10 248730679
1 2 1 2 5 6 1 8 1
```

```output3
856673861
```

```input4
20 480124393
1 2 3 2 3 4 3 8 3 4 11 10 4 14 15 12 17 18 19
```

```output4
488941820
```