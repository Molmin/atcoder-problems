Score : $700$ points

## Problem Statement

Given is a sequence $p$ of length $N+M$, which is a permutation of $(1,2 \ldots, N+M)$.
The $i$-th term of $p$ is $p_i$.

You can do the following **Operation** any number of times.

Operation: Choose an integer $n$ between $1$ and $N$ (inclusive), and an integer $m$ between $1$ and $M$ (inclusive). Then, swap $p_{n}$ and $p_{N+m}$.

Find the minimum number of Operations needed to sort $p$ in ascending order. We can prove that it is possible to sort $p$ in ascending order under the Constraints of this problem.

## Constraints

- All values in input are integers.
- $1 \leq N,M \leq 10^5$
- $1 \leq p_i \leq N+M$
- $p$ is a permutation of $(1,2 \ldots, N+M)$.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $p_{1}$ $\cdots$ $p_{N+M}$

## Output

Print the minimum number of Operations needed to sort $p$ in ascending order.

```input1
2 3
1 4 2 5 3
```

```output1
3
```

```input2
5 7
9 7 12 6 1 11 2 10 3 8 4 5
```

```output2
10
```