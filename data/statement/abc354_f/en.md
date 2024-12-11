Score : $525$ points

## Problem Statement

You are given an integer sequence $A$ of length $N$.

For each $t = 1, 2, \dots, N$, determine whether $A_t$ is included in a longest increasing subsequence of $A$.

Here, $A_t$ is included in a longest increasing subsequence of $A$ if and only if the following holds:

- <p>
Let $L$ be the length of a longest increasing subsequence of $A$. There exists a strictly increasing integer sequence $i = (i_1, i_2, \dots, i_L) \ (i_1 &lt; i_2 &lt; \dots &lt; i_L)$, where each element is between $1$ and $N$, inclusive, that satisfies all of the following conditions:
</p>
-   - $A_{i_1} &amp;lt; A_{i_2} &amp;lt; \dots &amp;lt; A_{i_L}$.
-   - $i_k = t$ for some $k \ (1 \leq k \leq L)$.

You are given $T$ test cases; solve each of them.

What is a longest increasing subsequence?

A subsequence of a sequence $A$ is a sequence that can be derived by extracting some elements from $A$ without changing the order.

A longest increasing subsequence of a sequence $A$ is a subsequence of $A$ that is strictly increasing with the greatest possible length.

## Constraints

- $1 \leq T \leq 2 \times 10^5$
- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^9$
- The sum of $N$ across all test cases is at most $2 \times 10^5$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Here, $\mathrm{case_i}$ represents the input for the $i$-th case. Each case is given in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answers in the following format:

> $\mathrm{answer}_1$
> 
> $\mathrm{answer}_2$
> 
> $\vdots$
> 
> $\mathrm{answer}_T$

Here, $\mathrm{answer}_i$ represents the output for the $i$-th case. For each case, let there be $m$ indices $t$ such that $A_t$ is included in a longest increasing subsequence of $A$, which are $i_1, i_2, \dots, i_m$ in ascending order. Print these in the following format:

> $m$
> 
> $i_1$ $i_2$ $\cdots$ $i_m$

```input1
1
5
2 1 4 5 3
```

```output1
4
1 2 3 4
```

One of the longest increasing subsequences is $(2, 4, 5)$, with a length of $3$. Another longest increasing subsequence is $(1, 4, 5)$. However, no longest increasing subsequence includes $A_5$.

Therefore, print $1, 2, 3, 4$.

```input2
2
6
2 5 3 4 3 4
5
10000 1000 100 1 10
```

```output2
5
1 3 4 5 6
2
4 5
```