Score : $1100$ points

## Problem Statement

You are given a prime number $p$ and non-negative integers $a$ and $b$.

Determine if there is an infinite sequence of non-negative integers $t = \bigl(t(0), t(1), t(2), \ldots)$ that satisfies all of the following conditions.

- $0\leq t(x) &lt; p$ for every non-negative integer $x$.
- $t(x+y)\bigl(1-t(x)t(y)\bigr)\equiv t(x)+t(y)\pmod{p}$ for all non-negative integers $x$ and $y$.
- $t(a)=b$.

You have $T$ test cases to solve.

## Constraints

- $1\leq T\leq 2\times 10^5$
- $p$ is a prime number such that $1\leq p\leq 10^9$.
- $0\leq a\leq 10^{9}$
- $0\leq b &lt; p$

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

> $p$ $a$ $b$

## Output

Print $T$ lines. The $i$-th line should contain `Yes` if there is a sequence of non-negative integers that satisfies all of the conditions, and `No` otherwise.

```input1
4
11 1 0
11 1 1
11 1 3
11 1 5
```

```output1
Yes
No
No
Yes
```

- For $p=11, a=1, b=0$, a constant sequence $t = (0,0,0,0,\ldots)$ satisfies the conditions.
- For $p=11, a=1, b=5$, a sequence $t = (0,5,6,0,5,6,\ldots)$ of period $3$ satisfies the conditions.

```input2
5
5 0 0
5 1 1
5 2 2
5 3 3
5 4 4
```

```output2
Yes
No
Yes
Yes
No
```

```input3
7
2 3 1
2 5 0
5 0 1
5 0 2
7 1 4
11 12345 5
13 12345 5
```

```output3
Yes
Yes
No
Yes
No
No
Yes
```