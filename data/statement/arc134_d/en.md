Score : $600$ points

## Problem Statement

Given is an integer sequence $a$ of length $2N$.

Snuke is going to make a sequence using a **non-empty** (not necessarily contiguous) subsequence $x=(x_1,x_2,\ldots,x_k)$ of $(1,2, \ldots, N)$.
The sequence will be made by extracting and concatenating the $x_1$-th, $x_2$-th, $\ldots$, $x_k$-th, $(x_{1}+N)$-th, $\ldots$, $(x_{k}+N)$-th elements of $a$ in this order.

Find the lexicographically smallest sequence that Snuke can make.

Lexicographical order on sequences

Here is the algorithm to determine the lexicographical order between different sequences $S$ and $T$.

Below, let $S_i$ denote the $i$-th element of $S$. Also, if $S$ is lexicographically smaller than $T$, we will denote that fact as $S \lt T$; if $S$ is lexicographically larger than $T$, we will denote that fact as $S \gt T$.

1. Let $L$ be the smaller of the lengths of $S$ and $T$. For each $i=1,2,\dots,L$, we check whether $S_i$ and $T_i$ are the same.
2. If there is an $i$ such that $S_i \neq T_i$, let $j$ be the smallest such $i$. Then, we compare $S_j$ and $T_j$. If $S_j$ is smaller than $T_j$ in numerical order, we determine that $S \lt T$ and quit; if $S_j$ is greater than $T_j$, we determine that $S \gt T$ and quit.
3. If there is no $i$ such that $S_i \neq T_i$, we compare the lengths of $S$ and $T$. If $S$ is shorter than $T$, we determine that $S \lt T$ and quit; if $S$ is longer than $T$, we determine that $S \gt T$ and quit.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^5$
- $1 \leq a_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_{1}$ $\cdots$ $a_{2N}$

## Output

Print the lexicographically smallest sequence that Snuke can make.

```input1
3
2 1 3 1 2 2
```

```output1
1 2
```

- We choose $x = (2)$.
- Then, the resulting sequence will be $(1,2)$, the lexicographically smallest possible result.

```input2
10
38 38 80 62 62 67 38 78 74 52 53 77 59 83 74 63 80 61 68 55
```

```output2
38 38 38 52 53 77 80 55
```

```input3
12
52 73 49 63 55 74 35 68 22 22 74 50 71 60 52 62 65 54 70 59 65 54 60 52
```

```output3
22 22 50 65 54 52
```