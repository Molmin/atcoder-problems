Score : $1000$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of the characters `A` and `B`.

For a string $X$ of length $N$ consisting of the characters `1`, `2`, and `3`, the **score** is determined by the following procedure:

First, initialize the variables $h_1, h_2, h_3, P$ to $0$.

Then, for $i = 1, 2, \dots, N$ in this order, perform the following operations:

- <p>If the $i$-th character of $S$ is `A`, perform operation A; if it is `B`, perform operation B. Let $d$ be the number represented by the $i$-th character of $X$.</p>
-   - &lt;p&gt;**Operation A**: Add $2$ to $h_d$.&lt;/p&gt;
-   - &lt;p&gt;**Operation B**: If $d = 2$ or $h_d \neq h_2$, set $P$ to $-10^{100}$. Otherwise, add $1$ to both $h_d$ and $h_2$.&lt;/p&gt;
- <p>If $h_1 = h_2 = h_3$, add $1$ to $P$.</p>

The final value of $P$ is the score.

Print one string $X$ that maximizes the score.

You have $T$ test cases to solve.

## Constraints

- $1 \leq T \leq 10^5$
- $1 \leq N \leq 10^6$
- $S$ is a string of length $N$ consisting of `A` and `B`.
- $T$ and $N$ are integers.
- The sum of $N$ across all test cases is at most $10^6$.

## Input

The input is given from Standard Input in the following format. Here, $\mathrm{test}_i$ denotes the $i$-th test case.

> $T$
> 
> $\mathrm{test}_1$
> 
> $\mathrm{test}_2$
> 
> $\vdots$
> 
> $\mathrm{test}_T$

Each test case is given in the following format:

> $N$
> 
> $S$

## Output

Print $T$ lines.

The $i$-th line $(1 \leq i \leq T)$ should contain a string $X$ that maximizes the score for the $i$-th test case.

If multiple strings $X$ maximize the score, any of them is considered correct.

```input1
5
4
ABBA
5
AAAAA
6
BBBBBB
7
ABABABA
20
AAABBBBBBBBAAABBBABA
```

```output1
1333
12321
333333
1313212
33311111133121111311
```

Let us describe the changes in $(h_1, h_2, h_3, P)$ as we proceed with $i = 1, 2, \dots, N$.

- For the first test case, $(0,0,0,0) \rightarrow (2,0,0,0) \rightarrow (2,1,1,0) \rightarrow (2,2,2,1) \rightarrow (2,2,4,1)$. The maximum score is $1$.
- For the second test case, $(0,0,0,0) \rightarrow (2,0,0,0) \rightarrow (2,2,0,0) \rightarrow (2,2,2,1) \rightarrow (2,4,2,1) \rightarrow (4,4,2,1)$. The maximum score is $1$.

For the third, fourth, and fifth test cases, the maximum scores are $0$, $0$, and $2$, respectively. There may be multiple strings $X$ that maximize the score, but you only need to print one of them.