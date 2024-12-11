Score : $300$ points

## Problem Statement

You are given $N$-digit positive integers $A$ and $B$ whose topmost digits are not $0$.

You can repeat the following operation any number of times (possibly zero).

- Choose an integer $i$ such that $1 \le i \le N$ and swap the $i$-th lowest digits of $A$ and $B$.

Find the smallest possible value of $A \times B$ after your operations, modulo $998244353$.

Note that you are not asked to minimize the remainder when $A \times B$ is divided by $998244353$.

## Constraints

- $1 \le N \le 200000$
- $A$ and $B$ are $N$-digit positive integers whose topmost digits are not $0$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A$
> 
> $B$

## Output

Print a single line containing the answer.

```input1
2
13
22
```

```output1
276
```

You can make $A \times B = 276$ by performing the operation once, as follows.

- Choose $i=1$ to swap the bottommost digits of $A$ and $B$, making $A=12, B=23$.

You cannot make $A \times B = 275$ or less, so the answer is $276$.

```input2
8
20220122
21002300
```

```output2
54558365
```

Find the value modulo $998244353$.