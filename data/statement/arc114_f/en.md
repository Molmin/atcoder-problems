Score : $900$ points

## Problem Statement

You are given a permutation $P$ of $1, 2, \cdots, N$.

You can divide $P$ into exactly $K$ non-empty contiguous subsequences as you like.

Maroon will rearrange those subsequences you make and concatenate them to make a new permutation $Q$.
Here, he will lexicographically maximize $Q$.

You want to divide $P$ in a way that lexicographically minimizes $Q$. Find $Q$ in that case.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq N$
- $1 \leq P_i \leq N$
- $P_i \neq P_j (i \neq j)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P_1$ $P_2$ $\cdots$ $P_N$

## Output

Print $Q$ when you optimally divide $P$. 

```input1
3 2
1 2 3
```

```output1
2 3 1
```

You have two ways to divide $P$: $(1, 2),(3)$ and $(1), (2, 3)$.

In the former case, Maroon will rearrange them in the order $(3), (1, 2)$ to get $Q = (3, 1, 2)$.

In the latter case, Maroon will rearrange them in the order $(2, 3), (1)$ to get $Q = (2, 3, 1)$.

Thus, you should choose the latter.

```input2
4 3
4 3 1 2
```

```output2
4 3 1 2
```

```input3
20 7
10 5 8 2 1 9 12 20 15 3 7 6 19 4 11 17 13 14 16 18
```

```output3
10 5 8 2 7 6 19 4 11 17 13 14 16 18 3 1 9 12 20 15
```