Score : $300$ points

## Problem Statement

You are given $N$ real values $A_1, A_2, \ldots, A_N$.
Compute the number of pairs of indices $(i, j)$
    such that $i &lt; j$ and the product $A_i \cdot A_j$ is integer.

## Constraints

- $2 \leq N \leq 200\,000$
- $0 &lt; A_i &lt; 10^4$
- $A_i$ is given with at most 9 digits after the decimal.

## Input

Input is given from Standard Input in the following format.

> $N$
> 
> $A_1$
> 
> $A_2$
> 
> $\vdots$
> 
> $A_N$

## Output

Print the number of pairs with integer product $A_i \cdot A_j$ (and $i &lt; j$).

```input1
5
7.5
2.4
17.000000001
17
16.000000000
```

```output1
3
```

There are 3 pairs with integer product:

- $7.5 \cdot 2.4 = 18$
- $7.5 \cdot 16 = 120$
- $17 \cdot 16 = 272$

```input2
11
0.9
1
1
1.25
2.30000
5
70
0.000000001
9999.999999999
0.999999999
1.000000001
```

```output2
8
```