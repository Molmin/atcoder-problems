Score : $400$ points

## Problem Statement

You are given a simple connected undirected graph with $N$ vertices numbered $1$ through $N$ and $M$ edges numbered $1$ through $M$. Edge $i$ connects vertices $u_i$ and $v_i$, and has a label $w_i$.

Among all simple paths (paths that do not pass through the same vertex more than once) from vertex $1$ to vertex $N$, find the minimum XOR of the labels of the edges on the path.

Notes on XOR

For non-negative integers $A$ and $B$, their XOR $A \oplus B$ is defined as follows:

- In the binary representation of $A \oplus B$, the digit in the place corresponding to $2^k \,(k \ge 0)$ is $1$ if and only if exactly one of the digits in the same place of $A$ and $B$ is $1$; otherwise, it is $0$.

For example, $3 \oplus 5 = 6$ (in binary: $011 \oplus 101 = 110$).

In general, the XOR of $k$ integers $p_1, \dots, p_k$ is defined as $(\cdots ((p_1 \oplus p_2) \oplus p_3) \oplus \cdots \oplus p_k)$. It can be proved that it does not depend on the order of $p_1, \dots, p_k$.

## Constraints

- $2 \leq N \leq 10$
- $N-1 \leq M \leq \frac{N(N-1)}{2}$
- $1 \leq u_i &lt; v_i \leq N$
- $0 \leq w_i &lt; 2^{60}$
- The given graph is a simple connected undirected graph.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $u_1$ $v_1$ $w_1$
> 
> $u_2$ $v_2$ $w_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$ $w_M$

## Output

Print the answer.

```input1
4 4
1 2 3
2 4 5
1 3 4
3 4 7
```

```output1
3
```

There are two simple paths from vertex $1$ to vertex $4$:

- $1 \to 2 \to 4$
- $1 \to 3 \to 4$

The XOR of the labels on the edges of the first path is $6$, and that of the second path is $3$. Therefore, the answer is $3$.

```input2
4 3
1 2 1
2 3 2
3 4 4
```

```output2
7
```

```input3
7 10
1 2 726259430069220777
1 4 988687862609183408
1 5 298079271598409137
1 6 920499328385871537
1 7 763940148194103497
2 4 382710956291350101
3 4 770341659133285654
3 5 422036395078103425
3 6 472678770470637382
5 7 938201660808593198
```

```output3
186751192333709144
```