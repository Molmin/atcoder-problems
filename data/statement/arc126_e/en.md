Score : $800$ points

## Problem Statement

Given are a sequence of $N$ positive integers $A = (A_1, A_2, \ldots, A_N)$ and $Q$ queries. The $i$-th query is as follows:

- given integers $x_i$ and $y_i$ (where $1\leq x_i\leq N$), change $A_{x_i}$ to $y_i$.

Each time the query changes the sequence, find the answer to the following problem modulo $998244353$ (see Notes).

Let $f(n)$ be the maximum total number of points when doing the following operation $n$ times on $A$.

- Choose $i, j$ such that $A_i\leq A_j$ and choose **non-negative real number** $x$ such that $A_i + 2x \leq A_j$.
- Add $x$ to $A_i$ and subtract $x$ from $A_j$.
- Gain $x$ points.

It can be proved that the limit $\displaystyle \lim_{n\to\infty} f(n)$ exists. Find this limit.

## Notes

We can prove that the limit in question is always a rational number. Additionally, under the Constraints of this problem, when that number is represented as $\frac{P}{Q}$ using two coprime integers $P$ and $Q$, we can prove that there is a unique integer $R$ such that $R\times Q\equiv P\pmod{998244353}$ and $0\leq R &lt; 998244353$. Find this $R$.

## Constraints

- $2\leq N\leq 3\times 10^5$
- $1\leq Q\leq 3\times 10^5$
- $1\leq A_i \leq 10^9$
- $1\leq x_i\leq N$
- $1\leq y_i\leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $x_1$ $y_1$
> 
> $\vdots$
> 
> $x_Q$ $y_Q$

## Output

Print $Q$ lines; the $i$-th line should contain the answer to the problem just after the change by the $i$-th query.

```input1
3 4
7 5 5
1 5
2 6
1 7
3 5
```

```output1
0
1
2
2
```

The first query changes the sequence to $(5, 5, 5)$. Here, we have $f(n) = 0$ for any $n$, so the answer is $0$.

The second query changes the sequence to $(5, 6, 5)$. Here, one possible way to do the operations is as follows.

- Choose $(i,j,x) = (3,2,0.4)$, changing the sequence to $(5, 5.6, 5.4)$ and gaining $0.4$ points.
- Choose $(i,j,x) = (1,2,0.3)$, changing the sequence to $(5.3, 5.3, 5.4)$ and gaining $0.3$ points.

The above two operations gain $0.7$ points, from which we can see that $f(2) \geq 0.7$.

We can prove that it is impossible to gain more than $1$ point in total, and that the total number of points that can be gained by the optimal way to do the operations tends to $1$ as the number of operations increases. Thus, we have $\displaystyle \lim_{n\to\infty} f(n) = 1$.

```input2
2 4
1 2
2 5
1 3
1 2
2 3
```

```output2
2
1
499122178
499122177
```