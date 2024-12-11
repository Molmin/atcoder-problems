Score : $500$ points

## Problem Statement

You are given $N$ strings consisting of lowercase English letters.  Let $S_i$ be the $i$-th $(i = 1, 2, \dots, N)$ of them.

For two strings $x$ and $y$, $\mathrm{LCP}(x, y)$ is defined to be the maximum integer $n$ that satisfies all of the following conditions:

- The lengths of $x$ and $y$ are both at least $n$.
- For all integers $i$ between $1$ and $n$, inclusive, the $i$-th character of $x$ and that of $y$ are equal.

Find the following value for all $i = 1, 2, \dots, N$:

- $\displaystyle \max_{i \neq j} \mathrm{LCP}(S_i, S_j)$

## Constraints

- $2 \leq N \leq 5 \times 10^5$
- $N$ is an integer.
- $S_i$ is a string of length at least $1$ consisting of lowercase English letters $(i = 1, 2, \dots, N)$.
- The sum of lengths of $S_i$ is at most $5 \times 10^5$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print $N$ lines.  The $i$-th $(i = 1, 2, \dots, N)$ line should contain $\displaystyle \max_{i \neq j} \mathrm{LCP}(S_i, S_j)$.

```input1
3
abc
abb
aac
```

```output1
2
2
1
```

$\mathrm{LCP}(S_1, S_2) = 2, \mathrm{LCP}(S_1, S_3) = 1$, and $\mathrm{LCP}(S_2, S_3) = 1$.  

```input2
11
abracadabra
bracadabra
racadabra
acadabra
cadabra
adabra
dabra
abra
bra
ra
a
```

```output2
4
3
2
1
0
1
0
4
3
2
1
```