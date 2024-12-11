Score : $600$ points

## Problem Statement

For a sequence $A = (A_1, \ldots, A_N)$ of length $N$, define $f(A)$ as follows.

- Prepare a graph with $N$ vertices labeled $1$ to $N$ and zero edges. For every integer pair $(i, j)$ satisfying $1 \leq i &lt; j \leq N$, if $A_i \leq A_j$, draw a bidirectional edge connecting vertices $i$ and $j$. Define $f(A)$ as the number of connected components in the resulting graph.

You are given a sequence $B = (B_1, \ldots, B_N)$ of length $N$. Each element of $B$ is $-1$ or an integer between $1$ and $M$, inclusive.

By replacing every occurrence of $-1$ in $B$ with an integer between $1$ and $M$, one can obtain $M^q$ sequences $B'$, where $q$ is the number of $-1$ in $B$.

Find the sum, modulo $998244353$, of $f(B')$ over all possible $B'$.

## Constraints

- All input numbers are integers.
- $2 \leq N \leq 2000$
- $1 \leq M \leq 2000$
- Each $B_i$ is $-1$ or an integer between $1$ and $M$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $B_1$ $\ldots$ $B_N$

## Output

Print the answer.

```input1
3 3
2 -1 1
```

```output1
6
```

There are three possible sequences $B'$: $(2,1,1)$, $(2,2,1)$, and $(2,3,1)$.

When $B' = (2,1,1)$, an edge is drawn only between vertices $2$ and&nbsp;$3$, so the number of connected components is $2$. Thus, $f(B') = 2$.

Similarly, $f(B') = 2$ for $B' = (2,2,1)$ and $f(B') = 2$ for $B' = (2,3,1)$, so the answer is $2 + 2 + 2 = 6$.

```input2
10 8
-1 7 -1 -1 -1 2 -1 1 -1 2
```

```output2
329785
```

```input3
11 12
-1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
```

```output3
529513150
```

Remember to find the sum modulo $998244353$.