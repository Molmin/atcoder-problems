Score : $700$ points

## Problem Statement

An integer sequence where no two adjacent elements are the same is called a **good sequence**.

You are given two good sequences of length $N$: $A=(A_1,A_2,\dots,A_N)$ and $B=(B_1,B_2,\dots,B_N)$. Each element of $A$ and $B$ is between $0$ and $M-1$, inclusive.

You can perform the following operations on $A$ any number of times, possibly zero:

- Choose an integer $i$ between $1$  and $N$, inclusive, and perform one of the following:-   - Set $A_i \leftarrow (A_i + 1) \bmod M$.
-   - Set $A_i \leftarrow (A_i - 1) \bmod M$. Here, $(-1) \bmod M = M - 1$.

However, you cannot perform an operation that makes $A$ no longer a good sequence.

Determine if it is possible to make $A$ equal to $B$, and if it is possible, find the minimum number of operations required to do so.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $2 \leq M \leq 10^6$
- $0\leq A_i,B_i&lt; M(1\leq i\leq N)$
- $A_i\ne A_{i+1}(1\leq i\leq N-1)$
- $B_i\ne B_{i+1}(1\leq i\leq N-1)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_N$

## Output

If the goal is unachievable, print `-1`.

Otherwise, print the minimum number of operations required as an integer.

```input1
3 9
2 0 1
4 8 1
```

```output1
3
```

You can achieve the goal in three operations as follows:

- Set $A_1 \leftarrow (A_1 + 1) \bmod M$. Now $A = (3, 0, 1)$.
- Set $A_2 \leftarrow (A_2 - 1) \bmod M$. Now $A = (3, 8, 1)$.
- Set $A_1 \leftarrow (A_1 + 1) \bmod M$. Now $A = (4, 8, 1)$.

It is impossible to achieve the goal in two or fewer operations, so the answer is 3.

For example, you cannot set $A_2 \leftarrow (A_2 + 1) \bmod M$ in the first operation, because it would make $A = (2, 1, 1)$, which is not a good sequence.

```input2
3 9
1 8 2
1 8 2
```

```output2
0
```

$A$ and $B$ might be equal from the beginning.

```input3
24 182
128 115 133 52 166 92 164 119 143 99 54 162 86 2 59 166 24 78 81 5 109 67 172 99
136 103 136 28 16 52 2 85 134 64 123 74 64 28 85 161 19 74 14 110 125 104 180 75
```

```output3
811
```