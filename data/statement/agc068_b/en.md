Score : $900$ points

## Problem Statement

A pair of strings $(S, T)$ consisting of `0` and `1` is called **good** if and only if all of the following conditions are satisfied.

- $S$ and $T$ contain the same number of `0`s.
- $S$ and $T$ contain the same number of `1`s.

Particularly, for a good string pair $(S, T)$, $S$ and $T$ have the same length.

For a good string pair $(S, T)$, we define an undirected graph $G(S, T)$ as follows.

- Let $L$ be the length of $S$. Create a graph $g$ with vertices $1, 2, \cdots, L$.
- Let $n$ be the number of `0`s in $S$. Let the indices of `0`s in $S$ be $1 \leq a_1 &lt; a_2 &lt; \cdots &lt; a_n \leq L$. Let the indices of `0`s in $T$ be $1 \leq b_1 &lt; b_2 &lt; \cdots &lt; b_n \leq L$. For each $1 \leq i \leq n$, add an edge between vertices $a_i$ and $b_i$ to $g$.
- Let $m$ be the number of `1`s in $S$. Let the indices of `1`s in $S$ be $1 \leq c_1 &lt; c_2 &lt; \cdots &lt; c_m \leq L$. Let the indices of `1`s in $T$ be $1 \leq d_1 &lt; d_2 &lt; \cdots &lt; d_m \leq L$. For each $1 \leq i \leq m$, add an edge between vertices $c_i$ and $d_i$ to $g$.
- The graph $g$ obtained through the above steps is $G(S, T)$.

You are given an integer sequence $A = (A_1, A_2, \cdots, A_N)$ of length $N$.
Find one good string pair $(S, T)$ satisfying all of the following conditions.

- Let $L$ be the length of $S$. It satisfies $N \leq L \leq 10^5$.
- For each pair $1 \leq i, j \leq N$, vertices $i$ and $j$ belong to the same connected component in $G(S, T)$ if and only if $A_i = A_j$.

It can be proved that a solution always exists under the constraints of this problem.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq A_i \leq N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print a solution in the following format:

> $L$
> 
> $S$
> 
> $T$

Here, $L$ is the length of $S$ and $T$.
If multiple solutions exist, any of them will be accepted.

```input1
3
1 2 1
```

```output1
4
0011
1100
```

For the $S$ and $T$ in the sample output, we obtain $G(S, T)$ as follows:

- Prepare a graph $g$ with $4$ vertices.
- The indices of `0`s in $S$ are $(1, 2)$, and the indices of `0`s in $T$ are $(3, 4)$. Add edges $(1, 3)$ and $(2, 4)$ to $g$.
- The indices of `1`s in $S$ are $(3, 4)$, and the indices of `1`s in $T$ are $(1, 2)$. Add edges $(3, 1)$ and $(4, 2)$ to $g$.
- Let $G(S, T) = g$.

$G(S, T)$ has a connected component with vertices $(1, 3)$ and another with vertices $(2, 4)$.
This satisfies all the conditions, so this $(S, T)$ is a valid output.

```input2
5
1 2 3 4 5
```

```output2
5
01010
01010
```

```input3
6
1 1 1 1 1 1
```

```output3
6
011111
111110
```

```input4
10
1 2 3 2 4 3 4 4 5 6
```

```output4
21
000101010111100011011
011010000010101111110
```