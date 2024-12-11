Score : $1000$ points

## Problem Statement

You are given a permutation $P=(P_1,P_2,\cdots,P_N)$ of $(1,2,\cdots,N)$.

Find one sequence of integer pairs $((l_1,r_1),(l_2,r_2),\cdots,(l_k,r_k))$ that satisfies all of the following conditions.

- The length $k$ of the sequence satisfies $0 \leq k \leq N-1$.
- $1 \leq l_i \leq r_i \leq N$ ($1 \leq i \leq k$).
- For each $1 \leq i \leq k-1$, it holds that $r_{i+1} \leq l_i$ or $r_i \leq l_{i+1}$.
- Performing the following $k$ operations sorts $P$ in ascending order.-   - The $i$-th operation: swap the values of $P_{l_i}$ and $P_{r_i}$.
If $l_i=r_i$, do nothing.

It can be proved that such a sequence always exists under the constraints of this problem.

Process $T$ test cases for each input file.

## Constraints

- $1 \leq T \leq 250000$
- $1 \leq N \leq 250000$
- $P=(P_1,P_2,\cdots,P_N)$ is a permutation of $(1,2,\cdots,N)$.
- The sum of $N$ for each input file is at most $250000$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

Each test case $case_i$ is in the following format:

> $N$
> 
> $P_1$ $P_2$ $\cdots$ $P_N$

## Output

For each test case, print a solution in the following format:

> $k$
> 
> $l_1$ $r_1$
> 
> $l_2$ $r_2$
> 
> $\vdots$
> 
> $l_k$ $r_k$

If multiple solutions exist, any of them will be accepted.

```input1
3
3
2 3 1
4
4 3 2 1
1
1
```

```output1
2
2 3
1 2
3
1 4
1 1
2 3
0
```

Let us explain the first test case.

The sample output satisfies all of the conditions.
For example, the fourth condition can be verified as follows:
$P=(2,3,1)\to$(swap $P_2,P_3$)$\to(2,1,3)\to$(swap $P_1,P_2$)$\to(1,2,3)$．

The following output, on the other hand, is not correct:

```output1
2
1 2
1 3
```

This is because the third condition is not satisfied.