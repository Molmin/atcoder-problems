Score: $100$ points

## Problem Statement

Shobon proposed the following problem:

### Marunomi

You are given a sequence of positive integers $W = (w_1, w_2, \dots, w_N)$.

There are $N$ living slimes, named Slime $1, 2, \dots, N$.<br>
Initially, the weight of Slime $i$ ($1 \leq i \leq N$) is $w_i$, and its number of victories is $0$.

You can perform the following operation on the slimes zero or more times:

- Choose two living slimes, say Slime $i$ and Slime $j$ ($i \neq j$).-   - Let the current weight of Slime $i$ be $W_i$ and that of Slime $j$ be $W_j$.
-   - If $W_i \gt W_j$, the number of victories of Slime $i$ increases by $1$, its weight becomes $W_i + W_j$, and Slime $j$ dies.
-   - If this condition is not satisfied, nothing happens.

![](https://img.atcoder.jp/ttpc2024_2/38d8d94bdcaac69c081c40d7d91ece34.svg)

For each $i = 1, 2, \dots, N$, let $S_i$ be the maximum number of victories Slime $i$ can achieve through your actions.<br>
Calculate the value of $S_1 + S_2 + \dots + S_N$.

However, since this problem is similar to [ARC189 D - Takahashi is Slime](https://atcoder.jp/contests/arc189/tasks/arc189_d), noya2 modified it as follows:

### Marunomi for All Prefixes

You are given a sequence of positive integers $A = (a_1, a_2, \dots, a_M)$.

For each $i = 1, 2, \dots, M$, compute the answer to the Marunomi problem when $W = (a_1, a_2, \dots, a_i)$.

Solve this problem.

## Constraints

- All input values are integers.
- $1 \leq M \leq 2 \times 10^5$
- $1 \leq a_i \leq 10^9\ (1 \leq i \leq M)$

## Input

The input is given in the following format:

> $M$
> 
> $a_1$ $a_2$ $\cdots$ $a_M$

## Output

Output $M$ lines. The $i$-th line ($1 \leq i \leq M$) should contain the answer to the Marunomi problem for $W = (a_1, a_2, \dots, a_i)$.

```input1
5
1 2 3 5 20
```

```output1
0 1 3 7 11
```

```input2
3
1 1 1
```

```output2
0 0 0
```

```input3
10
17 3467 115 716 9070 32 12251 237 549 17
```

```output3
0 1 3 6 10 15 22 29 38 46
```