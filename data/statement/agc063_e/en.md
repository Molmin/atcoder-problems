Score : $1400$ points

## Problem Statement

There is a rooted tree with $N$ vertices numbered $1$ to $N$. Vertex $1$ is the root, and the parent of vertex $i$ ($2\leq i\leq N$) is $P_i$.

You are given a non-negative integer $r$ and a sequence of non-negative integers $A = (A_1, \ldots, A_N)$. You can perform the following operation on the sequence any number of times, possibly zero.

- Choose an $i$ such that $i\geq 2$ and $A_i \geq 1$. Replace $A_i$ with $A_i - 1$ and $A_{P_i}$ with $A_{P_i}+r$.

Find the number, modulo $998244353$, of possible final states of the sequence $A$.

## Constraints

- $2\leq N\leq 300$
- $1\leq P_i \leq i - 1$ ($2\leq i\leq N$)
- $0\leq r \leq 10^9$
- $0\leq A_i \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $P_2$ $\ldots$ $P_N$
> 
> $r$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the number, modulo $998244353$, of possible final states of the sequence $A$.

```input1
3
1 1
2
1 1 1
```

```output1
4
```

The four possible final states of $A$ are $(1,1,1)$, $(3,0,1)$, $(3,1,0)$, and $(5,0,0)$.

```input2
3
1 2
1
1 1 1
```

```output2
5
```

The five possible final states of $A$ are $(1,1,1)$, $(1,2,0)$, $(2,0,1)$, $(2,1,0)$, and $(3,0,0)$.

```input3
3
1 2
2
1 1 1
```

```output3
6
```

The six possible final states of $A$ are $(1,1,1)$, $(1,3,0)$, $(3,0,1)$, $(3,2,0)$, $(5,1,0)$, and $(7,0,0)$.

```input4
5
1 1 3 3
2
0 1 0 1 2
```

```output4
48
```

```input5
5
1 1 3 3
123456789
1 2 3 4 5
```

```output5
87782255
```