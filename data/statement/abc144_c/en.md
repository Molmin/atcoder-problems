Score : $300$ points

## Problem Statement

Takahashi is standing on a multiplication table with infinitely many rows and columns.

The square $(i,j)$ contains the integer $i \times j$. Initially, Takahashi is standing at $(1,1)$.

In one move, he can move from $(i,j)$ to either $(i+1,j)$ or $(i,j+1)$.

Given an integer $N$, find the minimum number of moves needed to reach a square that contains $N$.

## Constraints

- $2 \leq N \leq 10^{12}$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the minimum number of moves needed to reach a square that contains the integer $N$.

```input1
10
```

```output1
5
```

$(2,5)$ can be reached in five moves. We cannot reach a square that contains $10$ in less than five moves.

```input2
50
```

```output2
13
```

$(5, 10)$ can be reached in $13$ moves.

```input3
10000000019
```

```output3
10000000018
```

Both input and output may be enormous.