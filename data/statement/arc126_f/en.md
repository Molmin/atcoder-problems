Score : $1100$ points

## Problem Statement

Given is a sequence of $N$ positive integers $X = (X_1, X_2, \ldots, X_N)$.

For a positive integer $K$, let $f(K)$ be the number of triples of integers $(a,b,c)$ that satisfy all of the following conditions.

- $1\leq c \leq K$.
- $0\leq a &lt; c$ and $0\leq b &lt; c$.
- For each $i$, let $Y_i$ be the remainder when $aX_i + b$ is divided by $c$. Then, $Y_1 &lt; Y_2 &lt; \cdots &lt; Y_N$ holds.

It can be proved that the limit $\displaystyle \lim_{K\to\infty} \frac{f(K)}{K^3}$ exists. Find this value modulo $998244353$ (see Notes).

## Notes

We can prove that the limit in question is always a rational number. Additionally, under the Constraints of this problem, when that number is represented as $\frac{P}{Q}$ using two coprime integers $P$ and $Q$, we can prove that there is a unique integer $R$ such that $R\times Q\equiv P\pmod{998244353}$ and $0\leq R &lt; 998244353$. Find this $R$.

## Constraints

- $2\leq N\leq 10^3$
- $X_i$ are positive integers such that $\sum_{i=1}^N X_i \leq 5\times 10^5$.
- $X_i\neq X_j$ if $i\neq j$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $X_2$ $\ldots$ $X_N$

## Output

Print $\displaystyle \lim_{K\to\infty} \frac{f(K)}{K^3}$ modulo $998244353$.

```input1
3
3 1 2
```

```output1
291154603
```

- For example, when $(a,b,c) = (3,5,7)$, we have $Y_1 = 0$, $Y_2 = 1$, $Y_3 = 4$, which satisfy $Y_1 &lt; Y_2 &lt; Y_3$.
- We have $f(1) = 0$, $f(2) = 0$, $f(3) = 1$, $f(4) = 2$, $f(5) = 5$.
- We have $\displaystyle \lim_{K\to\infty} \frac{f(K)}{K^3} = \frac{1}{24}$.

```input2
3
5 9 2
```

```output2
832860616
```

We have $\displaystyle \lim_{K\to\infty} \frac{f(K)}{K^3} = \frac{55}{1008}$ .

```input3
2
2 3
```

```output3
166374059
```

We have $\displaystyle \lim_{K\to\infty} \frac{f(K)}{K^3} = \frac{1}{6}$.

```input4
4
4 5 3 2
```

```output4
0
```

We have $\displaystyle \lim_{K\to\infty} \frac{f(K)}{K^3} = 0$.