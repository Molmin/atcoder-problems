Score : $550$ points

## Problem Statement

You are given $N$ intervals numbered $1$ to $N$. Interval $i$ is $[L_i, R_i]$.

Two intervals $[l_a, r_a]$ and $[l_b, r_b]$ are said to **intersect** if and only if they satisfy either $(l_a &lt; l_b &lt; r_a &lt; r_b)$ or $(l_b &lt; l_a &lt; r_b &lt; r_a)$.

Define $f(l, r)$ as the number of intervals $i$ ($1 \leq i \leq N$) that intersect with the interval $[l, r]$.

Among all pairs of **integers** $(l, r)$ satisfying $0 \leq l &lt; r \leq 10^{9}$, find the pair $(l, r)$ that maximizes $f(l, r)$. If there are multiple such pairs, choose the one with the smallest $l$. If there are still multiple pairs, choose the one with the smallest $r$ among them. (Since $0 \leq l &lt; r$, the pair $(l, r)$ to be answered is uniquely determined.)

## Constraints

- $1 \leq N \leq 10^{5}$
- $0 \leq L_i &lt; R_i \leq 10^{9}$ $(1 \leq i \leq N)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_N$ $R_N$

## Output

Print the sought pair $(l, r)$ in the following format:

> $l$ $r$

```input1
5
1 7
3 9
7 18
10 14
15 20
```

```output1
4 11
```

The maximum value of $f(l, r)$ is $4$, and among the pairs $(l, r)$ that achieve $f(l, r) = 4$, the smallest $l$ is $4$. The pairs $(l, r)$ that satisfy $f(l, r) = 4$ and $l = 4$ are the following five:

- $(l, r) = (4, 11)$
- $(l, r) = (4, 12)$
- $(l, r) = (4, 13)$
- $(l, r) = (4, 16)$
- $(l, r) = (4, 17)$

Among these, the smallest $r$ is $11$, so print $4$ and $11$.

```input2
11
856977192 996441446
298251737 935869360
396653206 658841528
710569907 929136831
325371222 425309117
379628374 697340458
835681913 939343451
140179224 887672320
375607390 611397526
93530028 581033295
249611310 775998537
```

```output2
396653207 887672321
```