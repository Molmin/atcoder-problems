Score : $200$ points

## Problem Statement

A string $S$ is given.

Find how many places in $S$ have `A`, `B`, and `C` in this order at even intervals.

Specifically, find the number of triples of integers $(i,j,k)$ that satisfy all of the following conditions. Here, $|S|$ denotes the length of $S$, and $S_x$ denotes the $x$-th character of $S$.

- $1 \leq i &lt; j &lt; k \leq |S|$
- $j - i = k - j$
- $S_i =$ `A`
- $S_j =$ `B`
- $S_k =$ `C`

## Constraints

- $S$ is an uppercase English string with length between $3$ and $100$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
AABCC
```

```output1
2
```

There are two triples $(i,j,k) = (1,3,5)$ and $(2,3,4)$ that satisfy the conditions.

```input2
ARC
```

```output2
0
```

```input3
AABAAABBAEDCCCD
```

```output3
4
```