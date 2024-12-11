Score: $1100$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of `A` and `B`. It is guaranteed that the number of `A`s in $S$ is at most $\frac{N+1}{2}$. Additionally, you are given a sequence of positive integers $(x_1, \ldots, x_{N-1})$.

On this string, you can repeatedly perform the following operation:

- Choose an integer $i$ such that $1\leq i\leq N-1$, and swap the $i$-th and $(i+1)$-th characters of $S$. The cost of this operation is $x_i$.

Your goal is to rearrange $S$ so that no two `A`s are adjacent. Find the minimum total cost required to achieve this goal.

$T$ test cases are given; solve each of them.

## Constraints

- $1\leq T\leq 10^5$
- $2\leq N\leq 10^6$
- $S$ is a string of length $N$ consisting of `A` and `B`.
- The number of `A`s in $S$ is at most $\frac{N+1}{2}$.
- $1\leq x_i \leq 10^6$
- The sum of $N$ over all test cases in a single input is at most $10^6$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\vdots$
> 
> $\text{case}_T$

Each test case is given in the following format:

> $N$
> 
> $S$
> 
> $x_1$ $\ldots$ $x_{N-1}$

## Output

Print $T$ lines. The $i$-th line should contain the minimum total cost required to rearrange $S$ so that no two `A`s are adjacent for the $i$-th test case.

```input1
5
4
BAAB
3 4 5
5
BBBBB
1 2 3 4
7
BAAABBB
8 7 6 5 4 3
7
BAAABBB
100 7 6 5 4 3
20
BAABAABBBABAAABBBABB
12 85 37 44 25 14 36 29 71 53 15 47 13 80 14 74 53 76 19
```

```output1
3
0
13
15
133
```

- For the first test case, performing the operation with $i=1$ changes $S$ as `BAAB` → `ABAB`, achieving the goal. The total cost in this case is $x_1=3$.
- For the second test case, performing nothing achieves the goal. The total cost in this case is $0$.
- For the third test case, performing the operation with $i=1$ and $i=4$ changes $S$ as `BAAABBB` → `ABAABBB` → `ABABABB`, achieving the goal. The total cost in this case is $x_1+x_4=13$.
- For the fourth test case, performing the operation with $i=4$, $i=3$, and $i=5$ changes $S$ as `BAAABBB` → `BAABABB` → `BABAABB` → `BABABAB`, achieving the goal. The total cost in this case is $x_4+x_3+x_5=15$.