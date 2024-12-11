Score : $800$ points

## Problem Statement

You are given a positive integer $n$, and a prime number $p$ at least $5$.

Find a triple of integers $(x,y,z)$ that satisfies all of the following conditions.

- $1\leq x &lt; y &lt; z \leq p - 1$.
- $(x+y+z)(x^n+y^n+z^n)(x^{2n}+y^{2n}+z^{2n}) \equiv x^{3n}+y^{3n}+z^{3n}\pmod{p}$.

It can be proved that such a triple $(x,y,z)$ always exists.

You have $T$ test cases to solve.

## Constraints

- $1\leq T\leq 10^5$
- $1\leq n\leq 10^9$
- $p$ is a prime number satisfying $5\leq p\leq 10^9$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\vdots$
> 
> $\text{case}_T$

Each case is in the following format:

> $n$ $p$

## Output

Print $T$ lines. The $i$-th line should contain $x,y,z$ with spaces in between where $(x,y,z)$ is a solution for the $i$-th test case.

If multiple solutions exist, you may print any of them.

```input1
3
1 7
2 7
10 998244353
```

```output1
1 4 6
1 2 5
20380119 21549656 279594297
```

For the first test case:

- $(x+y+z)(x^n+y^n+z^n)(x^{2n}+y^{2n}+z^{2n}) = (1+4+6)(1+4+6)(1+16+36) = 6413$, and
- $x^{3n}+y^{3n}+z^{3n} = 1 + 64 + 216 = 281$.

We have $6413\equiv 281\pmod{7}$, so the conditions are satisfied.