Score : $2000$ points

## Problem Statement

You are given a connected graph with $N$ vertices and $M$ edges. The vertices are numbered $1$ to $N$. The $i$-th edge is an undirected edge of length $C_i$ connecting Vertex $A_i$ and Vertex $B_i$.

Additionally, an odd number $MOD$ is given.

You will be given $Q$ queries, which should be processed. The queries take the following form:

- Given in the $i$-th query are $S_i$, $T_i$ and $R_i$. Print `YES` if there exists a path from Vertex $S_i$ to Vertex $T_i$ whose length is $R_i$ modulo $MOD$, and print `NO` otherwise. A path may traverse the same edge multiple times, or go back using the edge it just used.

Here, in this problem, the length of a path is <font color="red">**NOT**</font> the sum of the lengths of its edges themselves, but the length of the first edge used in the path gets multiplied by $1$, the second edge gets multiplied by $2$, the third edge gets multiplied by $4$, and so on. (More formally, let $L_1,...,L_k$ be the lengths of the edges used, in this order. The length of that path is the sum of $L_i \times 2^{i-1}$.)

## Constraints

- $1 \leq N,M,Q \leq 50000$
- $3 \leq MOD \leq 10^{6}$
- $MOD$ is odd.
- $1 \leq A_i,B_i\leq N$
- $0 \leq C_i \leq MOD-1$
- $1 \leq S_i,T_i \leq N$
- $0 \leq R_i \leq MOD-1$
- The given graph is connected. (It may contain self-loops or multiple edges.)

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $Q$ $MOD$
> 
> $A_1$ $B_1$ $C_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$ $C_M$
> 
> $S_1$ $T_1$ $R_1$
> 
> $\vdots$
> 
> $S_Q$ $T_Q$ $R_Q$

## Output

Print the answers to the $i$-th query in the $i$-th line.

```input1
3 2 2 2019
1 2 1
2 3 2
1 3 5
1 3 4
```

```output1
YES
NO
```

The answer to each query is as follows:

- The first query: If we take the path $1,2,3$, its length is $1 \times 2^0 + 2 \times 2^1 = 5$, so there exists a path whose length is $5$ modulo $2019$. The answer is `YES`.
- The second query: No matter what path we take from Vertex $1$ to Vertex $3$, its length will never be $4$ modulo $2019$. The answer is `NO`.

```input2
6 6 3 2019
1 2 4
2 3 4
3 4 4
4 5 4
5 6 4
6 1 4
2 6 1110
3 1 1111
4 5 1112
```

```output2
YES
NO
NO
```

```input3
1 2 3 25
1 1 1
1 1 2
1 1 13
1 1 6
1 1 14
```

```output3
YES
YES
YES
```

```input4
10 15 10 15
1 2 1
2 3 6
3 4 6
2 5 1
5 6 1
4 7 6
1 8 11
2 9 6
5 10 11
9 10 11
3 6 1
2 5 1
2 7 11
9 10 11
5 6 11
1 3 5
9 8 3
7 7 7
7 10 13
4 1 10
9 3 12
10 10 14
9 2 1
6 6 5
8 8 4
```

```output4
YES
NO
NO
NO
NO
NO
NO
YES
YES
NO
```