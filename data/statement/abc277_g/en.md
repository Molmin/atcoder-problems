Score : $600$ points

## Problem Statement

You are given a connected simple undirected graph consisting of $N$ vertices and $M$ edges.<br>
For $i = 1, 2, \ldots, M$, the $i$-th edge connects vertex $u_i$ and vertex $v_i$.

Takahashi starts at **Level** $0$ on vertex $1$, and will perform the following action exactly $K$ times.

- First, choose one of the vertices adjacent to the vertex he is currently on, uniformly at random, and move to the chosen vertex.
- Then, the following happens according to the vertex $v$ he has moved to.-   - If $C_v = 0$: Takahashi's Level increases by $1$.
-   - If $C_v = 1$: Takahashi receives a money of $X^2$ yen, where $X$ is his current Level.

Print the expected value of the total amount of money Takahashi receives during the $K$ actions above, modulo $998244353$ (see Notes).

## Notes

It can be proved that the sought expected value is always a rational number. Additionally, under the Constraints of this problem, when that value is represented as $\frac{P}{Q}$ using two coprime integers $P$ and $Q$, it can also be proved that there is a unique integer $R$ such that $R \times Q \equiv P\pmod{998244353}$ and $0 \leq R \lt 998244353$. Find this $R$.

## Constraints

- $2 \leq N \leq 3000$
- $N-1 \leq M \leq \min\lbrace N(N-1)/2, 3000\rbrace$
- $1 \leq K \leq 3000$
- $1 \leq u_i, v_i \leq N$
- $u_i \neq v_i$
- $i \neq j \implies \lbrace u_i, v_i\rbrace \neq \lbrace u_j, v_j \rbrace$
- The given graph is connected.
- $C_i \in \lbrace 0, 1\rbrace$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$
> 
> $C_1$ $C_2$ $\ldots$ $C_N$

## Output

Print the answer.

```input1
5 4 8
4 5
2 3
2 4
1 2
0 0 1 1 0
```

```output1
89349064
```

Among the multiple paths that Takahashi may traverse, let us take a case where Takahashi starts on vertex $1$ and goes along the path $1 \rightarrow 2 \rightarrow 4 \rightarrow 5 \rightarrow 4 \rightarrow 2 \rightarrow 1 \rightarrow 2 \rightarrow 3$, and compute the total amount of money he receives.

1. In the first action, he moves from vertex $1$ to an adjacent vertex, vertex $2$. Then, since $C_2 = 0$, his Level increases to $1$.
2. In the second action, he moves from vertex $2$ to an adjacent vertex, vertex $4$. Then, since $C_4 = 1$, he receives $1^2 = 1$ yen.
3. In the third action, he moves from vertex $4$ to an adjacent vertex, vertex $5$. Then, since $C_5 = 0$, his Level increases to $2$.
4. In the fourth action, he moves from vertex $5$ to an adjacent vertex, vertex $4$. Then, since $C_4 = 1$, he receives $2^2 = 4$ yen.
5. In the fifth action, he moves from vertex $4$ to an adjacent vertex, vertex $2$. Then, since $C_2 = 0$, his Level increases to $3$.
6. In the sixth action, he moves from vertex $2$ to an adjacent vertex, vertex $1$. Then, since $C_1 = 0$, his Level increases to $4$.
7. In the seventh action, he moves from vertex $1$ to an adjacent vertex, vertex $2$. Then, since $C_2 = 0$, his Level increases to $5$.
8. In the eighth action, he moves from vertex $2$ to an adjacent vertex, vertex $3$. Then, since $C_3 = 1$, he receives $5^2 = 25$ yen.

Thus, he receives a total of $1 + 4 + 25 = 30$ yen.

```input2
8 12 20
7 6
2 6
6 4
2 1
8 5
7 2
7 5
3 7
3 5
1 8
6 3
1 4
0 0 1 1 0 0 0 0
```

```output2
139119094
```