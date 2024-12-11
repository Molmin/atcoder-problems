Score : $500$ points

## Problem Statement

We have a connected undirected graph $G$ with $N$ vertices and $M$ edges. The vertices are numbered $1$ to $N$. The $i$-th edge connects vertices $U_i$ and $V_i$.

Additionally, we are given an integer sequence of length $N$, $A=(A_1,\ A_2, \dots,\ A_N)$, and an integer sequence of length $K$, $B=(B_1,\ B_2,\ \dots,\ B_K)$.

Determine whether $G$, $A$, and $B$ satisfy the following condition.

- For every simple path from vertex $1$ to $N$ in $G$, $v=(v_1,\ v_2, \dots,\ v_k)\ (v_1=1,\ v_k=N)$, $B$ is a (not necessarily contiguous) subsequence of $(A_{v_1},\ A_{v_2},\ \dots,\ A_{v_k})$.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq K \leq N$
- $N-1 \leq M \leq 2 \times 10^5$
- $1 \leq U_i &lt; V_i \leq N$
- $(U_i,\ V_i) \neq (U_j,\ V_j)$ if $i \neq j$.
- $1 \leq A_i,\ B_i \leq N$
- All values in the input are integers.
- The given graph $G$ is connected.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $U_1$ $V_1$
> 
> $U_2$ $V_2$
> 
> $\vdots$
> 
> $U_M$ $V_M$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_K$

## Output

If the condition is satisfied, print `Yes`; otherwise, print `No`.

```input1
6 6 3
1 2
1 3
2 4
3 5
4 6
5 6
1 2 4 5 2 6
1 2 6
```

```output1
Yes
```

There are two simple paths from vertex $1$ to vertex $6$: $(1,\ 2,\ 4,\ 6)$ and $(1,\ 3,\ 5,\ 6)$. The $(A_{v_1},\ A_{v_2},\ \dots,\ A_{v_k})$ corresponding to these paths are $(1,\ 2,\ 5,\ 6)$ and $(1,\ 4,\ 2,\ 6)$. Both of them have $B=(1,\ 2,\ 6)$ as a subsequence, so the answer is `Yes`.

```input2
5 5 3
1 2
2 3
3 4
4 5
2 5
1 2 3 5 2
1 3 2
```

```output2
No
```

For a simple path $(1,\ 2,\ 5)$ from vertex $1$ to vertex $5$, the $(A_{v_1},\ A_{v_2},\ \dots,\ A_{v_k})$ is $(1,\ 2,\ 2)$, which does not have $B=(1,\ 3,\ 2)$ as a subsequence.

```input3
10 20 3
5 6
5 10
5 7
3 5
3 7
2 6
3 8
4 5
5 8
7 10
1 6
1 9
4 6
1 2
1 4
6 7
4 8
2 5
3 10
6 9
2 5 8 5 1 5 1 1 5 10
2 5 1
```

```output3
Yes
```