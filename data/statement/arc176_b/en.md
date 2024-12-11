Score : $400$ points

## Problem Statement

Find the last digit of the remainder when $2^N$ is divided by $2^M - 2^K$.

You are given $T$ test cases, each of which must be solved.

## Constraints

- $1 \le T \le 2 \times 10^5$
- $1 \le N \le 10^{18}$
- $1 \le K &lt; M \le 10^{18}$
- $N,M,K$ are integers.

## Input

The input is given from Standard Input in the following format, where $\mathrm{case}_i$ represents the $i$-th test case:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case is given in the following format:

> $N$ $M$ $K$

## Output

Print the answer.

```input1
5
9 6 2
123 84 50
95 127 79
1000000007 998244353 924844033
473234053352300580 254411431220543632 62658522328486675
```

```output1
2
8
8
8
4
```

For the first test case, the remainder of $2^9$ divided by $2^6 - 2^2$ is $32$. Thus, the answer is the last digit of $32$, which is $2$.