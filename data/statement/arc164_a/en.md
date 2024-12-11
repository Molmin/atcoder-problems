Score : $300$ points

## Problem Statement

You are given integers $N$ and $K$.
Is it possible to express $N$ as the sum of exactly $K$ numbers of the form $3^m$ ($m$ is a non-negative integer)?
In other words, is there a sequence of non-negative integers $(m_1, m_2,\ldots, m_K)$ such that:

$N= 3^{m_1}+3^{m_2}+...+3^{m_K}$?

You are given $T$ test cases. Answer each of them.

## Constraints

- $1 \leq T \leq 10^5$
- $1 \leq K \leq N \leq 10^{18}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$ 
> 
> $\mathrm{case}_T$

Each test case, $\mathrm{case}_i (1\leq i \leq T)$, is in the following format:

> $N$ $K$

## Output

Print $T$ lines. The $i$-th line should contain `Yes` if there is a sought sequence of non-negative integers for the $i$-th test case, and `No` otherwise.

```input1
4
5 3
17 2
163 79
1000000000000000000 1000000000000000000
```

```output1
Yes
No
Yes
Yes
```

For the first test case, we have $5=3^1+3^0+3^0$, so the condition in question is satisfied.

For the second test case, there is no sequence of non-negative integers $(m_1, m_2)$ such that $17=3^{m_1}+3^{m_2}$, so the condition in question is not satisfied.