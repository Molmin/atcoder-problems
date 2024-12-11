Score : $300$ points

## Problem Statement

You are given integers $N$ and $K$. Find the number of triples $(a,b,c)$ of positive integers not greater than $N$ such that $a+b,b+c$ and $c+a$ are all multiples of $K$.
The order of $a,b,c$ does matter, and some of them can be the same.

## Constraints

- $1 \leq N,K \leq 2\times 10^5$
- $N$ and $K$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the number of triples $(a,b,c)$ of positive integers not greater than $N$ such that $a+b,b+c$ and $c+a$ are all multiples of $K$.

```input1
3 2
```

```output1
9
```

$(1,1,1),(1,1,3),(1,3,1),(1,3,3),(2,2,2),(3,1,1),(3,1,3),(3,3,1)$ and $(3,3,3)$ satisfy the condition.

```input2
5 3
```

```output2
1
```

```input3
31415 9265
```

```output3
27
```

```input4
35897 932
```

```output4
114191
```