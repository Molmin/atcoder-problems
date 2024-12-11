Score : $300$ points

## Problem Statement

You are given a string of length $N$, $S=S_1S_2\dots S_N$, consisting of `0`, `1`, and `?`.

We like to replace every `?` with `0` or `1` so that all of the following conditions are satisfied.

- $S$ contains exactly $K$ occurrences of `1`.
- These $K$ occurrences of `1` are consecutive. That is, there is an $i\ (1 \leq i \le N-K+1)$ such that $S_i=S_{i+1}=\dots=S_{i+K-1}=$ `1`.

Determine whether there is exactly one way to replace the characters to satisfy the conditions.

You have $T$ test cases to solve.

## Constraints

- $1 \leq T \leq 10^5$
- $1 \leq K &lt; N \leq 3 \times 10^5$
- $S$ is a string of length $N$ consisting of `0`, `1`, and `?`.
- The sum of $N$ across the test cases is at most $3 \times 10^5$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each case is in the following format:

> $N$ $K$
> 
> $S$

## Output

Print $T$ lines. The $i$-th line should contain `Yes` if, for the $i$-th test case, there is exactly one way to replace the characters to satisfy the conditions, and `No` otherwise.

```input1
4
3 2
1??
4 2
?1?0
6 3
011?1?
10 5
00?1???10?
```

```output1
Yes
No
No
Yes
```

For the first test case, turning $S$ into `101`, for instance, does not satisfy the conditions since the `1`s will not be consecutive. The only way to satisfy the conditions is to turn $S$ into `110`.

For the second test case, we may turn $S$ into `1100` or `0110` to satisfy the conditions, so there are two ways to satisfy them.

For the third test case, there is no way to replace the characters to satisfy the conditions.