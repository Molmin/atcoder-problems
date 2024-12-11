Score: $425$ points

## Problem Statement

You are given a permutation $P = (P_1, P_2, \dots, P_N)$ of $(1, 2, \dots, N)$.

A length-$K$ sequence of indices $(i_1, i_2, \dots, i_K)$ is called a **good index sequence** if it satisfies both of the following conditions:

- $1 \leq i_1 &lt; i_2 &lt; \dots &lt; i_K \leq N$.
- The subsequence $(P_{i_1}, P_{i_2}, \dots, P_{i_K})$ can be obtained by rearranging some consecutive $K$ integers.
<br>Formally, there exists an integer $a$ such that $\lbrace P_{i_1},P_{i_2},\dots,P_{i_K} \rbrace = \lbrace a,a+1,\dots,a+K-1 \rbrace$.

Find the minimum value of $i_K - i_1$ among all good index sequences. It can be shown that at least one good index sequence exists under the constraints of this problem.

## Constraints

- $1 \leq K \leq N \leq 2 \times 10^5$
- $1 \leq P_i \leq N$
- $P_i \neq P_j$ if $i \neq j$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P_1$ $P_2$ $\dots$ $P_N$

## Output

Print the minimum value of $i_K - i_1$ among all good index sequences.

```input1
4 2
2 3 1 4
```

```output1
1
```

The good index sequences are $(1,2),(1,3),(2,4)$. For example, $(i_1, i_2) = (1,3)$ is a good index sequence because $1 \leq i_1 &lt; i_2 \leq N$ and $(P_{i_1}, P_{i_2}) = (2,1)$ is a rearrangement of two consecutive integers $1, 2$.

Among these good index sequences, the smallest value of $i_K - i_1$ is for $(1,2)$, which is $2-1=1$.

```input2
4 1
2 3 1 4
```

```output2
0
```

$i_K - i_1 = i_1 - i_1 = 0$ in all good index sequences.

```input3
10 5
10 1 6 8 7 2 5 9 3 4
```

```output3
5
```