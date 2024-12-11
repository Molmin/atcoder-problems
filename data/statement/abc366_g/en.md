Score : $600$ points

## Problem Statement

You are given a simple undirected graph with $N$ vertices and $M$ edges. The $i$-th edge connects vertices $u_i$ and $v_i$ bidirectionally.

Determine if there exists a way to write an integer between $1$ and $2^{60} - 1$, inclusive, on each vertex of this graph so that the following condition is satisfied:

- For every vertex $v$ with a degree of at least $1$, the total XOR of the numbers written on its adjacent vertices (excluding $v$ itself) is $0$.

What is XOR?

The XOR of two non-negative integers $A$ and $B$, denoted as $A \oplus B$, is defined as follows:

- In the binary representation of $A \oplus B$, the bit at position $2^k \, (k \geq 0)$ is $1$ if and only if exactly one of the bits at position $2^k$ in the binary representations of $A$ and $B$ is $1$. Otherwise, it is $0$.

For example, $3 \oplus 5 = 6$ (in binary: $011 \oplus 101 = 110$).

In general, the bitwise XOR of $k$ integers $p_1, \dots, p_k$ is defined as $(\cdots ((p_1 \oplus p_2) \oplus p_3) \oplus \cdots \oplus p_k)$.  It can be proved that this is independent of the order of $p_1, \dots, p_k$.

## Constraints

- $1 \leq N \leq 60$
- $0 \leq M \leq N(N-1)/2$
- $1 \leq u_i &lt; v_i \leq N$
- $(u_i, v_i) \neq (u_j, v_j)$ for $i \neq j$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$

## Output

If there is no way to write integers satisfying the condition, print `No`.

Otherwise, let $X_v$ be the integer written on vertex $v$, and print your solution in the following format. If multiple solutions exist, any of them will be accepted.

> Yes
> 
> $X_1$ $X_2$ $\dots$ $X_N$

```input1
3 3
1 2
1 3
2 3
```

```output1
Yes
4 4 4
```

Other acceptable solutions include writing $(2,2,2)$ or $(3,3,3)$.

```input2
2 1
1 2
```

```output2
No
```

```input3
1 0
```

```output3
Yes
1
```

Any integer between $1$ and $2^{60} - 1$ can be written.

```input4
4 5
1 2
1 3
2 3
2 4
3 4
```

```output4
Yes
12 4 4 8
```