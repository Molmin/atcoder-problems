Score : $1200$ points

## Problem Statement

You are given positive integers $N, a, b, c, d$.

Determine whether there is a non-negative integer $x$ such that $x\equiv a+kb \pmod{c+kd}$ for every $k=0,1,\ldots,N-1$. If it exists, find the smallest such $x$ modulo $998244353$.

## Constraints

- $2\leq N\leq 10^6$
- $1\leq a,b,c,d\leq 10^6$

## Input

The input is given from Standard Input in the following format:

> $N$ $a$ $b$ $c$ $d$

## Output

If there is no non-negative integer $x$ satisfying the condition, print `-1`.
Otherwise, print the smallest such $x$ modulo $998244353$.

```input1
2 1 2 3 4
```

```output1
10
```

$x=10$ is the smallest non-negative integer such that $x\equiv 1\pmod{3}$ and $x\equiv 3\pmod{7}$.

```input2
2 1 1 10 10
```

```output2
-1
```

No non-negative integer $x$ satisfies $x\equiv 1\pmod{10}$ and $x\equiv 2\pmod{20}$.

```input3
100 20 30 2 3
```

```output3
0
```

$x= 0$ is the smallest non-negative integer satisfying the condition.

```input4
9 12 34 56 78
```

```output4
827501367
```

$x=15977769171609124$ is the smallest non-negative integer satisfying the condition.