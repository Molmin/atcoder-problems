Score : $300$ points

## Problem Statement

Given an integer $N$, solve the following problem.

Let $f(x)=$ (The number of positive integers at most $x$ with the same number of digits as $x$).<br>
Find $f(1)+f(2)+\dots+f(N)$ modulo $998244353$.

## Constraints

- $N$ is an integer.
- $1 \le N &lt; 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer as an integer.

```input1
16
```

```output1
73
```

- For a positive integer $x$ between $1$ and $9$, the positive integers at most $x$ with the same number of digits as $x$ are $1,2,\dots,x$.-   - Thus, we have $f(1)=1,f(2)=2,...,f(9)=9$.
- For a positive integer $x$ between $10$ and $16$, the positive integers at most $x$ with the same number of digits as $x$ are $10,11,\dots,x$.-   - Thus, we have $f(10)=1,f(11)=2,...,f(16)=7$.

The final answer is $73$.

```input2
238
```

```output2
13870
```

```input3
999999999999999999
```

```output3
762062362
```

Be sure to find the sum modulo $998244353$.