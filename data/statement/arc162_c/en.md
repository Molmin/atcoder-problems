Score : $500$ points

## Problem Statement

You are given a rooted tree with $N$ vertices numbered $1$ to $N$. Vertex $1$ is the root, and the parent of vertex $i\ (2\leq i \leq N)$ is $P_i$.

Some vertices of the rooted tree have non-negative integers from $0$ to $N$ written on them. This information is given by the sequence $A=(A_1,A_2,\ldots,A_N)$. If $A_i \neq -1$, vertex $i$ has the integer $A_i$ written on it; if $A_i=-1$, vertex $i$ does not have an integer written on it.

Alice and Bob play a game. Alice goes first, and they take turns performing the following operation until all vertices have an integer written on them.

- Choose one vertex without an integer written on it and write a non-negative integer between $0$ and $N$ on it.

After the operations, for each vertex $v$, let $f(v)$ be the smallest non-negative integer not written on any vertex (including $v$) in the subtree rooted at vertex $v$.

If there is a vertex $v$ such that $f(v) = K$, Alice wins. Otherwise, Bob wins. Determine the winner when both players play optimally.

There are $T$ test cases. Answer each of them.

## Constraints

- $1 \leq T \leq 10^3$
- $2 \leq N \leq 10^3$
- $0 \leq K \leq N$
- $1 \leq P_i &lt; i\ (2\leq i\leq N)$
- $-1 \leq A_i \leq N\ (1\leq i\leq N)$
- All input values are integers.
- The sum of $N$ over all test cases in a single input is at most $2\times 10^3$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each case is given in the following format:

> $N$ $K$
> 
> $P_2$ $P_3$ $\ldots$ $P_N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print $T$ lines. The $i$-th $(1\leq i \leq T)$ line should contain `Alice` if Alice wins, and `Bob` if Bob wins when both players play optimally in the $i$-th test case.

```input1
2
4 2
1 1 2
-1 -1 3 1
6 4
1 2 2 1 3
-1 -1 -1 -1 -1 -1
```

```output1
Alice
Bob
```

In the first test case, if Alice writes $0$ on vertex $2$, then $f(2) = 2$ regardless of Bob's operation. Therefore, Alice can win.

In the second test case, Bob can ensure that there will be no vertex with $f(v) = 4$ by choosing the right integer to write.