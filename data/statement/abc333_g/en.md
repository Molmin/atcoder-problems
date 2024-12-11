Score : $625$ points

## Problem Statement

You are given a positive real number $r$ less than $1$, and a positive integer $N$.

Among the pair of integers $(p,q)$ such that $0\leq p\leq q\leq N$ and $\gcd(p,q)=1$, find the one that minimizes $\left\vert r-\dfrac pq\right\vert$.

If multiple such pairs $(p,q)$ exist, print the one with the smallest value of $\dfrac pq$.

## Constraints

- $0\lt r\lt 1$
- $r$ is given as a real number with at most $18$ decimal places.
- $1\leq N\leq 10^{10}$
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $r$
> 
> $N$

## Output

For the pair $(p,q)$ that satisfies the conditions in the problem statement, print $p$ and $q$ in this order, separated by a space, in a single line.

```input1
0.333
33
```

```output1
1 3
```

$\left\vert0.333-\dfrac13\right\vert=\dfrac1{3000}$.
There is no $0\leq p\leq q\leq33,\gcd(p,q)=1$ such that $\left\vert0.333-\dfrac pq\right\vert\lt\dfrac1{3000}$, so print `1 3`.

```input2
0.45
5
```

```output2
2 5
```

$\left\vert0.45-\dfrac12\right\vert=\left\vert0.45-\dfrac25\right\vert=\dfrac1{20}$.
There is no $0\leq p\leq q\leq5,\gcd(p,q)=1$ such that $\left\vert0.45-\dfrac pq\right\vert\lt\dfrac1{20}$, and we have $\dfrac12\gt\dfrac25$, so print `2 5`.

```input3
0.314159265358979323
10000
```

```output3
71 226
```

$\left\vert0.314159265358979323-\dfrac{71}{226}\right\vert=\dfrac{3014435336501}{113000000000000000000}$.

```input4
0.007735339533561113
7203576162
```

```output4
34928144 4515398949
```