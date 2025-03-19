Score : $450$ points

## Problem Statement

We have a directed graph with $N$ vertices, numbered $1, 2, \ldots, N$.

Information about the edges is given by $N^2$ characters $C_{1, 1}, C_{1, 2}, \ldots, C_{1, N}, C_{2, 1}, \ldots, C_{N, N}$. Here, each $C_{i, j}$ is either a lowercase English letter or `-`.

If $C_{i, j}$ is a lowercase English letter, then there is exactly one directed edge from vertex $i$ to vertex $j$ labeled $C_{i, j}$. If $C_{i, j}$ is `-`, there is no edge from vertex $i$ to vertex $j$.

For each integer pair $(i, j)$ with $1 \leq i, j \leq N$, answer the following question:

- Among all (not necessarily simple) paths from vertex $i$ to vertex $j$ whose concatenation of labels on the edges forms a palindrome, what is the length of the shortest such path? If there is no such path, the answer is $-1$.

## Constraints

- $1 \leq N \leq 100$
- $N$ is an integer.
- Each $C_{i, j}$ is either a lowercase English letter or `-`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $C_{1, 1}$$C_{1, 2}$$\ldots$$C_{1, N}$
> 
> $C_{2, 1}$$C_{2, 2}$$\ldots$$C_{2, N}$
> 
> $\vdots$
> 
> $C_{N, 1}$$C_{N, 2}$$\ldots$$C_{N, N}$

## Output

Let $A_{i, j}$ be the answer to the question for the pair $(i, j)$. Print them in the following format:

> $A_{1, 1}$ $A_{1, 2}$ $\ldots$ $A_{1, N}$
> 
> $A_{2, 1}$ $A_{2, 2}$ $\ldots$ $A_{2, N}$
> 
> $\vdots$
> 
> $A_{N, 1}$ $A_{N, 2}$ $\ldots$ $A_{N, N}$

```input1
4
ab--
--b-
---a
c---
```

```output1
0 1 2 4
-1 0 1 -1
3 -1 0 1
1 -1 -1 0
```

For example, consider the case $(i, j) = (1, 4)$.<br>
By taking the path $1 \to 1 \to 2 \to 3 \to 4$, and concatenating the labels on its edges in order, we get the string `abba`, which is a palindrome.<br>
There is no path of length at most $3$ from vertex $1$ to vertex $4$ whose concatenation of labels is a palindrome. Thus, the answer for $(1, 4)$ is $4$.

Note that the empty string is also a palindrome.

```input2
5
us---
-st--
--s--
u--s-
---ts
```

```output2
0 1 3 -1 -1
-1 0 1 -1 -1
-1 -1 0 -1 -1
1 3 -1 0 -1
-1 -1 5 1 0
```