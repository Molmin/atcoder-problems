Score : $300$ points

## Problem Statement

For two strings $A$ and $B$, let $A+B$ denote the concatenation of $A$ and $B$ in this order.

You are given $N$ strings $S_1,\ldots,S_N$. Modify and print them as follows, in the order $i=1, \ldots, N$:

- if none of $S_1,\ldots,S_{i-1}$ is equal to $S_i$, print $S_i$;
- if $X$ $(X &gt; 0)$ of $S_1,\ldots,S_{i-1}$ are equal to $S_i$, print $S_i+$ `(` $+X+$ `)`, treating $X$ as a string.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $S_i$ is a string of length between $1$ and $10$ (inclusive) consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

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

Print $N$ lines as specified in the Problem Statement.

```input1
5
newfile
newfile
newfolder
newfile
newfolder
```

```output1
newfile
newfile(1)
newfolder
newfile(2)
newfolder(1)
```

```input2
11
a
a
a
a
a
a
a
a
a
a
a
```

```output2
a
a(1)
a(2)
a(3)
a(4)
a(5)
a(6)
a(7)
a(8)
a(9)
a(10)
```