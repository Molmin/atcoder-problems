Score : $300$ points

## Problem Statement

You are given a permutation $P=(P_1,P_2,\dots,P_N)$ of $(1,2,\dots,N)$.

You want to satisfy $P_i=i$ for all $i=1,2,\dots,N$ by performing the following operation zero or more times:

- Choose an integer $k$ such that $1 \leq k \leq N$. If $k \geq 2$, sort the $1$-st through $(k-1)$-th terms of $P$ in ascending order. Then, if $k \leq N-1$, sort the $(k+1)$-th through $N$-th terms of $P$ in ascending order.

It can be proved that under the constraints of this problem, it is possible to satisfy $P_i=i$ for all $i=1,2,\dots,N$ with a finite number of operations for any $P$. Find the minimum number of operations required.

You have $T$ test cases to solve.

## Constraints

- $1 \leq T \leq 10^5$
- $3 \leq N \leq 2 \times 10^5$
- $P$ is a permutation of $(1,2,\dots,N)$.
- All input values are integers.
- The sum of $N$ across the test cases in a single input is at most $2 \times 10^5$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each case is given in the following format:

> $N$
> 
> $P_1$ $P_2$ $\dots$ $P_N$

## Output

Print $T$ lines. The $i$-th line should contain the answer for the $i$-th test case.

```input1
3
5
2 1 3 5 4
3
1 2 3
7
3 2 1 7 5 6 4
```

```output1
1
0
2
```

For the first test case,

- <p>Performing the operation with $k=1$ results in $P$ becoming $(2,1,3,4,5)$.</p>
- <p>Performing the operation with $k=2$ results in $P$ becoming $(2,1,3,4,5)$.</p>
- <p>Performing the operation with $k=3$ results in $P$ becoming $(1,2,3,4,5)$.</p>
- <p>Performing the operation with $k=4$ results in $P$ becoming $(1,2,3,5,4)$.</p>
- <p>Performing the operation with $k=5$ results in $P$ becoming $(1,2,3,5,4)$.</p>

Specifically, performing the operation with $k=3$ results in $P$ satisfying $P_i=i$ for all $i=1,2,\dots,5$. Therefore, the minimum number of operations required is $1$.

For the third test case, performing the operation with $k=4$ followed by $k=3$ results in $P$ changing as $(3,2,1,7,5,6,4) \rightarrow (1,2,3,7,4,5,6) \rightarrow (1,2,3,4,5,6,7)$.