Score : $100$ points

## Problem Statement

You are given positive integers $N, M, K$, and a sequence of $K$ positive integers $c=(c_1, c_2, \dots, c_K)$.

A **multiset** $S$ consisting of $N$ positive integers less than or equal to $M$ is called *good*, if there exists at least one sequence of $K$ multisets $(S_1, S_2, \dots, S_K)$ satisfying the following conditions.

- None of $S_1, S_2, \dots, S_K$ is empty.
- The median of $S_i$ equals to $c_i$, for all $i=1, 2, \dots, K$.
- $S_1, S_2, \dots, S_K$ have exactly $N$ elements in total. A multiset consisting of those $N$ elements coincides with $S$.

Note that we define the median of a multiset $T$ with $n\ (\geq 1)$ elements as the $\lceil n / 2 \rceil$-th element of $T$ in ascending order. For example, the median of $T=\lbrace 1, 2, 3, 4 \rbrace$ is $2$, and that of $T=\lbrace 1, 3, 5, 7, 7 \rbrace$ is $5$.

Find the number of good multisets modulo $998244353$.

## Constraints

- $1 \leq N, M \leq 10^7$
- $1 \leq K \leq \min(2 \times 10^5, N)$
- $1 \leq c_i \leq M$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N \ M \ K$
> 
> $c_1 \ c_2 \ \dots \ c_K$

## Output

Print the number of good multisets modulo $998244353$.

```input1
8 5 3
4 1 5
```

```output1
105
```

For example, $S=\lbrace 1,1,1,2,3,4,5,5 \rbrace$ is a good multiset because there exists $(S_1, S_2, S_3)$ satisfying the conditions as follows.

- $S_1 = \lbrace 1, \mathbf{4}, 5 \rbrace$
- $S_2 = \lbrace 1, \mathbf{1}, 2, 3 \rbrace$
- $S_3 = \lbrace \mathbf{5} \rbrace$

```input2
10000000 2 2
1 2
```

```output2
9999999
```

```input3
30 10 5
3 1 4 1 5
```

```output3
38446044
```