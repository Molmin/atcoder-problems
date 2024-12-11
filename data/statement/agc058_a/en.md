Score : $400$ points

## Problem Statement

You are given a permutation $P=(P_1,P_2,\cdots,P_{2N})$ of $(1,2,\cdots,2N)$.

The following operation may be performed between $0$ and $N$ times (inclusive).

- Choose an integer $x$ ($1 \leq x \leq 2N-1$). Swap the values of $P_x$ and $P_{x+1}$.

Present a sequence of operations that make $P$ satisfy the following conditions.

- $P_i&lt;P_{i+1}$ for each $i=1,3,5,\cdots,2N-1$;
- $P_i &gt; P_{i+1}$ for each $i=2,4,6,\cdots,2N-2$.

It can be proved that such a sequence of operations always exists.

## Constraints

- $1 \leq N \leq 10^5$
- $(P_1,P_2,\cdots,P_{2N})$ is a permutation of $(1,2,\cdots,{2N})$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\cdots$ $P_{2N}$

## Output

Print a desired sequence of operations in the following format:

> $K$
> 
> $x_1$ $x_2$ $\cdots$ $x_K$

Here, $K$ is the number of operations performed ($0 \leq K \leq N$), and $x_i$ is the value of $x$ chosen in the $i$-th operation ($1 \leq x_i \leq 2N-1$).
If there are multiple solutions satisfying the condition, printing any of them will be accepted.

```input1
2
4 3 2 1
```

```output1
2
1 3
```

These operations make $P=(3,4,1,2)$, which satisfies the conditions.

```input2
1
1 2
```

```output2
0
```