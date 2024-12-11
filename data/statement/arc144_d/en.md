Score : $700$ points

## Problem Statement

You are given positive integers $N$ and $K$. Find the number, modulo $998244353$, of integer sequences $\bigl(f(0), f(1), \ldots, f(2^N-1)\bigr)$ that satisfy all of the following conditions:

- $0\leq f(x)\leq K$ for all non-negative integers $x$ ($0\leq x \leq 2^N-1$).
- $f(x) + f(y) = f(x \,\mathrm{AND}\, y) + f(x \,\mathrm{OR}\, y)$ for all non-negative integers $x$ and $y$ ($0\leq x, y \leq 2^N-1$)

Here, $\mathrm{AND}$ and $\mathrm{OR}$ denote the bitwise AND and OR, respectively.

## Constraints

- $1\leq N\leq 3\times 10^5$
- $1\leq K\leq 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the number, modulo $998244353$, of integer sequences that satisfy the conditions.

```input1
2 1
```

```output1
6
```

The following six integer sequences satisfy the conditions:

- $(0,0,0,0)$
- $(0,1,0,1)$
- $(0,0,1,1)$
- $(1,0,1,0)$
- $(1,1,0,0)$
- $(1,1,1,1)$

```input2
2 2
```

```output2
19
```

```input3
100 123456789123456789
```

```output3
34663745
```