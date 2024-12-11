Score : $1000$ points

## Problem Statement

We have a sequence of positive integers of length $N^2$, $A=(A_1,\ A_2,\ \dots,\ A_{N^2})$, and a positive integer $S$. For this sequence of positive integers, $A_i=A_{i+N}$ holds for positive integers $i\ (1\leq i \leq N^2-N)$, and only $A_1,\ A_2,\ \dots,\ A_N$ are given as the input.

Find the minimum integer $L$ such that every sequence $B$ of positive integers totaling $S$ is a (not necessarily contiguous) subsequence of the sequence $(A_1,\ A_2,\ \dots,\ A_L)$ of positive integers.

It can be shown that at least one such $L$ exists under the Constraints of this problem.

## Constraints

- $1 \leq N \leq 1.5 \times 10^6$
- $1 \leq S \leq \min(N,2 \times 10^5)$
- $1 \leq A_i \leq S$
- For every positive integer $x\ (1\leq x \leq S)$, $(A_1,\ A_2,\ \dots,\ A_N)$ contains at least one occurrence of $x$.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $S$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
6 4
1 1 2 1 4 3
```

```output1
9
```

There are eight sequences $B$ to consider: $B=(1,\ 1,\ 1,\ 1),\ (1,\ 1,\ 2),\ (1,\ 2,\ 1),\ (1,\ 3),\ (2,\ 1,\ 1),\ (2,\ 2),\ (3,\ 1),\ (4)$.

For $L=8$, for instance, $B=(2,\ 2)$ is not a subsequence of $(A_1,A_2,\ \dots,\ A_8)=(1,\ 1,\ 2,\ 1,\ 4,\ 3,\ 1,\ 1)$.

For $L=9$, on the other hand, every $B$ is a subsequence of $(A_1,A_2,\ \dots,\ A_9)=(1,\ 1,\ 2,\ 1,\ 4,\ 3,\ 1,\ 1,\ 2)$.

```input2
14 5
1 1 1 2 3 1 2 4 5 1 1 2 3 1
```

```output2
11
```

```input3
19 10
1 6 2 7 4 8 5 9 1 10 4 1 3 1 3 2 2 2 1
```

```output3
39
```