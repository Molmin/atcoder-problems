Score : $300$ points

## Problem Statement

Let $f(n)$ be the number of triples of integers $(x,y,z)$ that satisfy both of the following conditions:

- $1 \leq x,y,z$
- $x^2 + y^2 + z^2 + xy + yz + zx = n$

Given an integer $N$, find each of $f(1),f(2),f(3),\ldots,f(N)$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^4$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print $N$ lines. The $i$-th line should contain the value $f(i)$.

```input1
20
```

```output1
0
0
0
0
0
1
0
0
0
0
3
0
0
0
0
0
3
3
0
0
```

- For $n=6$, only $(1,1,1)$ satisfies both of the conditions. Thus, $f(6) = 1$.
- For $n=11$, three triples, $(1,1,2)$, $(1,2,1)$, and $(2,1,1)$, satisfy both of the conditions. Thus, $f(6) = 3$.
- For $n=17$, three triples, $(1,2,2)$, $(2,1,2)$, and $(2,2,1)$, satisfy both of the conditions. Thus, $f(17) = 3$.
- For $n=18$, three triples, $(1,1,3)$, $(1,3,1)$, and $(3,1,1)$, satisfy both of the conditions. Thus, $f(18) = 3$.