Score : $1800$ points

## Problem Statement

There are three indistinguishable stones at integer coordinates on a number line. Consider the following operation on these stones:

- Let $A, B, C$ be the three stones in ascending order of coordinate (ties broken arbitrarily). Perform one of the following.-   - Move $A$ to the symmetric position with respect to $B$.
-   - Move $C$ to the symmetric position with respect to $B$.

You are given the initial coordinates $a, b, c$ of the three stones. Find the number, modulo $998244353$, of possible combinations of coordinates of the three stones after zero or more operations.

Note that the stones are indistinguishable. More strictly speaking, count the possible **multisets** of coordinates of the three stones.

We will give you $T$ test cases; solve each of them.

## Constraints

- $1\leq T\leq 10^5$
- $-10^{18}\leq a\leq b\leq c\leq 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\vdots$
> 
> $\text{case}_T$

Each case is in the following format:

> $a$ $b$ $c$

## Output

Print $T$ lines. The $i$-th line should contain the answer for $\text{case}_i$.

```input1
6
1 3 5
-2 -2 5
0 1 3
31 41 59
-123456789 0 987654321
-1000000000000000000 0 1000000000000000000
```

```output1
5
2
9
70
182333351
5
```

For $(a,b,c) = (1,3,5)$, the five possible combinations of the three stones after operations are:

- $(1,3,5)$, $(1,1,3)$, $(-1,1,1)$, $(3,5,5)$, $(5,5,7)$.

The figure below may be helpful.

<br>

![](https://img.atcoder.jp/agc057/5fc6a5c57abe2c69d457111ddc3f6a51.png)