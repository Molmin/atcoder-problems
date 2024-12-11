Score : $100$ points

## Problem Statement

You are given positive integers $X, M \ (X \leq M)$.

You like positive integers less than or equal to $M$, but you hate $X$ as the exception. So you decide to construct a set $S$ satisfying the following conditions.

- $S$ consists of distinct positive integers less than or equal to $10^5$.
- $S$ has at most $20$ elements.
- For all positive intergers $k$ satisfying $1 \leq k \leq M$ and $k \neq X$, there exists at least one subset of $S$ such that the sum of its elements equals to $k$.
- There is no subset of $S$ such that the sum of its elements equals to $X$.

Determine whether such a set $S$ exists, and if so, construct one example.

Solve $T$ test cases for each input file.

## Constraints

- $1 \leq T \leq 100$
- $1 \leq X \le M \leq 10^5$
- $M \geq 2$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case is given in the following format:

> $X \ M$

## Output

For each test case, if there is no $S$ satisfying the conditions then print $-1$, and if there is then print one example of $S$ in the following format:

> $N$
> 
> $a_1 \ a_2 \ \dots \ a_N$

Here $N$ denotes the number of elements in $S$ and $(a_1, a_2, \dots, a_N)$ denotes the sequence of elements in $S$ in ascending order, which must satisfy the following constraints.

- $1 \leq N \leq 20$
- $1 \leq a_1 \lt a_2 \lt \dots \lt a_N \leq 10^5$

Also, start a new line for each test case.

```input1
3
4 6
3 7
11 11
```

```output1
3
1 2 5
-1
4
1 2 3 4
```

- In the first case, $S=\lbrace 1, 2, 5 \rbrace$ is one example of $S$．
- In the second case, there is no $S$ satisfying the conditions.
- In the third case, $S=\lbrace 1, 2, 3, 4 \rbrace$ is one example of $S$．