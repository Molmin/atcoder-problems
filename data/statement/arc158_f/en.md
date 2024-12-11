Score : $900$ points

## Problem Statement

For non-negative integers $x$ and $k$, the $k$-th lowest digit of $x$ is the remainder when $\bigl\lfloor \frac{x}{10^k}\bigr\rfloor$ is divided by $10$. For instance, the $0$-th, $1$-st, $2$-nd, and $3$-rd lowest digits of $123$ are $3$, $2$, $1$, and $0$, respectively.

You are given positive integers $N$, $M$, $K$, and sequences of non-negative integers $A = (A_1, \ldots, A_N)$ and $B = (B_1, \ldots, B_N)$.

Consider rearranging $A$ by the following process.

- Do the following $M$ times.-   - Choose an integer $k$ such that $0\leq k \leq K - 1$.
-   - Then, perform a stable sort on $A$ by $k$-th lowest digit. That is, let $A^{(d)}$ be the subsequence of $A$ composed of all elements of $A$ whose $k$-th lowest digits are $d$, and replace $A$ with the concatenation of $A^{(0)}, A^{(1)}, \ldots, A^{(9)}$ in this order.

There are $K^M$ ways to execute this process. How many of them end up making $A$ equal $B$? Find this count modulo $998244353$.

## Constraints

- $1\leq N\leq 2\times 10^5$
- $1\leq M\leq 10^9$
- $1\leq K\leq 18$
- $0\leq A_i &lt; 10^K$
- $0\leq B_i &lt; 10^K$
- $A$ and $B$ are equal as multisets. That is, every integer $x$ occurs the same number of times in $A$ and $B$.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $A_1$ $\ldots$ $A_N$
> 
> $B_1$ $\ldots$ $B_N$

## Output

Print the number, modulo $998244353$, of ways to execute the process that end up making $A$ equal $B$.

```input1
3 2 3
74 42 54
42 54 74
```

```output1
5
```

Let $k_1$ and $k_2$ be the $k$ chosen in the first and second iterations, respectively. For instance, if $k_1 = 0$ and $k_2 = 1$, then $A$ changes as follows.

- A stable sort by $k_1$-th ($0$-th) lowest digit makes $A = (42,74,54)$.
- A stable sort by $k_2$-th ($1$-st) lowest digit makes $A = (42,54,74)$.

Here are all the ways to execute the process and the resulting $A$.

- $(k_1, k_2) = (0,0)$: $A = (42,74,54)$.
- $(k_1, k_2) = (0,1)$: $A = (42,54,74)$.
- $(k_1, k_2) = (0,2)$: $A = (42,74,54)$.
- $(k_1, k_2) = (1,0)$: $A = (42,54,74)$.
- $(k_1, k_2) = (1,1)$: $A = (42,54,74)$.
- $(k_1, k_2) = (1,2)$: $A = (42,54,74)$.
- $(k_1, k_2) = (2,0)$: $A = (42,74,54)$.
- $(k_1, k_2) = (2,1)$: $A = (42,54,74)$.
- $(k_1, k_2) = (2,2)$: $A = (74,42,54)$.

```input2
2 1 1
2 3
3 2
```

```output2
0
```

There is no way to satisfy the condition.

```input3
5 100 4
0 12 34 56 78
0 12 34 56 78
```

```output3
982924732
```

All $4^{100}$ ways satisfy the condition.