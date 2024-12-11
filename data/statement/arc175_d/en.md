Score: $700$ points

## Problem Statement

There is a tree with $N$ vertices numbered $1$ to $N$. The $i$-th edge of the tree connects vertices $u_i$ and $v_i$ bidirectionally.

For a permutation $P=(P_1,\ldots,P_N)$ of $(1,\ldots,N)$, we define $f(P)$ as follows:

- For each vertex $i\ (1\leq i\leq N)$, let $(v_1=1,v_2,\ldots,v_k=i)$ be the simple path from vertex $1$ to vertex $i$, and let $L_i$ be the length of a longest increasing subsequence of $(P_{v_1},P_{v_2},\ldots,P_{v_k})$. We define $f(P) = \sum_{i=1}^N L_i$.

You are given an integer $K$. Determine whether there is a permutation $P$ of $(1,\ldots,N)$ such that $f(P)=K$. If it exists, present one such permutation.

What is a longest increasing subsequence?

A **subsequence** of a sequence is a sequence obtained by removing zero or more elements from the original sequence and concatenating the remaining elements without changing the order.
For example, $(10,30)$ is a subsequence of $(10,20,30)$, but $(20,10)$ is not.

The **longest increasing subsequence** of a sequence is the longest strictly increasing subsequence of that sequence.

 What is a simple path?
For vertices $X$ and $Y$ in a graph $G$, a **walk** from vertex $X$ to vertex $Y$ is a sequence of vertices $(v_1,v_2, \ldots, v_k)$ such that
$v_1=X$, $v_k=Y$, and $v_i$ and
$v_{i+1}$ are connected by an edge for all $1\leq i\leq k-1$.  
Furthermore, if $v_1,v_2, \ldots, v_k$ are all distinct, it is called a **simple path** (or simply a **path**) from vertex $X$ to vertex $Y$.

## Constraints

- All input values are integers.
- $2 \leq N \leq 2\times 10^5$
- $1\leq K \leq 10^{11}$
- $1\leq u_i,v_i\leq N$
- The given graph is a tree.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $u_1$ $v_1$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$

## Output

If there is no permutation $P$ such that $f(P)=K$, print `No`.

If there is a permutation $P$ such that $f(P)=K$, print it in the following format:

> Yes
> 
> $P_1$ $\ldots$ $P_N$

If multiple permutations $P$ satisfy the condition, any of them will be accepted.

```input1
5 8
1 2
2 3
2 4
4 5
```

```output1
Yes
3 2 1 4 5
```

If $P=(3,2,1,4,5)$, then $f(P)$ is determined as follows:

- <p>The simple path from vertex $1$ to vertex $1$ is $(1)$, and the length of the longest increasing subsequence of $(P_1)=(3)$ is $1$. Thus, $L_1 = 1$.</p>
- <p>The simple path from vertex $1$ to vertex $2$ is $(1,2)$, and the length of the longest increasing subsequence of $(P_1,P_2)=(3,2)$ is $1$. Thus, $L_2 = 1$.</p>
- <p>The simple path from vertex $1$ to vertex $3$ is $(1,2,3)$, and the length of the longest increasing subsequence of $(P_1,P_2,P_3)=(3,2,1)$ is $1$. Thus, $L_3 = 1$.</p>
- <p>The simple path from vertex $1$ to vertex $4$ is $(1,2,4)$, and the length of the longest increasing subsequence of $(P_1,P_2,P_4)=(3,2,4)$ is $2$. Thus, $L_4 = 2$.</p>
- <p>The simple path from vertex $1$ to vertex $5$ is $(1,2,4,5)$, and the length of the longest increasing subsequence of $(P_1,P_2,P_4,P_5)=(3,2,4,5)$ is $3$. Thus, $L_5 = 3$.</p>
- <p>From the above, $f(P)=1+1+1+2+3= 8$.</p>

Hence, the permutation $P$ in the sample output satisfies the condition $f(P)=8$. Besides, $P=(3,2,4,5,1)$ also satisfies the condition, for example.

```input2
7 21
2 1
7 2
5 1
3 7
2 6
3 4
```

```output2
No
```

It can be proved that no permutation $P$ satisfies $f(P) = 21$.

```input3
8 20
3 1
3 8
7 1
7 5
3 2
6 5
4 7
```

```output3
Yes
2 1 3 5 6 8 4 7
```