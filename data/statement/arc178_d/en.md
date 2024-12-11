Score : $700$ points

## Problem Statement

You are given a positive integer $N$ and a sequence of $M$ non-negative integers $A = (A_{1}, A_{2}, \dots, A_{M})$.

Here, all elements of $A$ are distinct integers between $0$ and $N-1$, inclusive.

Find the number, modulo $998244353$, of permutations $P$ of $(0, 1, \dots, N-1)$ that satisfy the following condition.

- After initializing a sequence $B = (B_{1}, B_{2}, \dots, B_{N})$ to $P$, it is possible to make $B = A$ by repeating the following operation some number of times:-   - Choose $l$ and $r$ such that $1 \leq l \leq r \leq |B|$, and if $\mathrm{mex}(\{B_{l}, B_{l+1}, \dots, B_{r}\})$ is contained in $B$, remove it from $B$.

  What is $\mathrm{mex}(X)$?  For a finite set $X$ of non-negative integers, $\mathrm{mex}(X)$ is defined as the smallest non-negative integer that is not in $X$. 

## Constraints

- $1 \leq M \leq N \leq 500$
- $0 \leq A_{i} &lt; N$
- All elements of $A$ are distinct.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_{1}$ $A_{2}$ $\cdots$ $A_{M}$

## Output

Print the answer.

```input1
4 2
1 3
```

```output1
8
```

After initializing $B = (2, 1, 0, 3)$, it is possible to make $B = A$ using the following steps:

- Choose $(l, r) = (2, 4)$, remove $\mathrm{mex}(\{1, 0, 3\}) = 2$ from $B$, making $B = (1, 0, 3)$.
- Choose $(l, r) = (3, 3)$, remove $\mathrm{mex}(\{3\}) = 0$ from $B$, making $B = (1, 3)$.

Thus, $P = (2, 1, 0, 3)$ satisfies the condition.

There are eight permutations $P$ that satisfy the condition, including the above, so print $8$.

```input2
4 4
0 3 2 1
```

```output2
1
```

Only $P = (0, 3, 2, 1)$ satisfies the condition.

```input3
16 7
9 2 4 0 1 6 7
```

```output3
3520
```

```input4
92 4
1 67 16 7
```

```output4
726870122
```

Find the count modulo $998244353$.