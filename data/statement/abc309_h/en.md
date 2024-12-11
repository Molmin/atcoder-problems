Score : $650$ points

## Problem Statement

We have a grid with $N$ rows and $M$ columns.  We denote by $(i,j)$ the cell in the $i$-th row from the top and $j$-th column from the left.

You are given integer sequences $A=(A_1,A_2,\dots,A_K)$ and $B=(B_1,B_2,\dots,B_L)$ of lengths $K$ and $L$, respectively.

Find the sum, modulo $998244353$, of the answers to the following question over all integer pairs $(i,j)$ such that $1 \le i \le K$ and $1 \le j \le L$.

- A piece is initially placed at $(1,A_i)$.  How many paths are there to take it to $(N,B_j)$ by repeating the following move $(N-1)$ times?-   - Let $(p,q)$ be the piece's current cell.  Move it to $(p+1,q-1),(p+1,q)$, or $(p+1,q+1)$, without moving it outside the grid.

## Constraints

- $1 \le N \le 10^9$
- $1 \le M,K,L \le 10^5$
- $1 \le A_i,B_j \le M$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$ $L$
> 
> $A_1$ $A_2$ $\dots$ $A_K$
> 
> $B_1$ $B_2$ $\dots$ $B_L$

## Output

Print the answer.

```input1
3 4 1 2
1
1 2
```

```output1
4
```

For $(i,j)=(1,1)$, the following two paths are possible:

- $(1,1) \rightarrow (2,1) \rightarrow (3,1)$
- $(1,1) \rightarrow (2,2) \rightarrow (3,1)$

For $(i,j)=(1,2)$, the following two paths are possible:

- $(1,1) \rightarrow (2,1) \rightarrow (3,2)$
- $(1,1) \rightarrow (2,2) \rightarrow (3,2)$

Thus, the answer is $2 + 2 =4$.

```input2
5 8 4 5
3 1 4 1
2 7 1 8 2
```

```output2
137
```

```input3
883671387 87719 10 12
86879 64174 47274 41688 17713 50897 53989 7210 30894 5714
60358 28835 48036 48450 67149 36558 35929 69025 77539 19195 60762 60721
```

```output3
941873621
```