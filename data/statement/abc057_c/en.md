Score : $300$ points

## Problem Statement

You are given an integer $N$.<br>
For two positive integers $A$ and $B$, we will define $F(A,B)$ as the larger of the following: the number of digits in the decimal notation of $A$, and the number of digits in the decimal notation of $B$.<br>
For example, $F(3,11) = 2$ since $3$ has one digit and $11$ has two digits.<br>
Find the minimum value of $F(A,B)$ as $(A,B)$ ranges over all pairs of positive integers such that $N = A \times B$.

## Constraints

- $1 \leq N \leq 10^{10}$
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the minimum value of $F(A,B)$ as $(A,B)$ ranges over all pairs of positive integers such that $N = A \times B$.

```input1
10000
```

```output1
3
```

$F(A,B)$ has a minimum value of $3$ at $(A,B)=(100,100)$.

```input2
1000003
```

```output2
7
```

There are two pairs $(A,B)$ that satisfy the condition: $(1,1000003)$ and $(1000003,1)$. For these pairs, $F(1,1000003)=F(1000003,1)=7$.

```input3
9876543210
```

```output3
6
```