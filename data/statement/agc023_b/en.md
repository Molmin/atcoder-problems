Score : $500$ points

## Problem Statement

Snuke has two boards, each divided into a grid with $N$ rows and $N$ columns.
For both of these boards, the square at the $i$-th row from the top and the $j$-th column from the left is called Square $(i,j)$.

There is a lowercase English letter written in each square on the first board. The letter written in Square $(i,j)$ is $S_{i,j}$. On the second board, nothing is written yet.

Snuke will write letters on the second board, as follows:

- First, choose two integers $A$ and $B$ ( $0 \leq A, B &lt; N$ ).
- Write one letter in each square on the second board.
Specifically, write the letter written in Square $( i+A, j+B )$ on the first board into Square $(i,j)$ on the second board.
Here, the $k$-th row is also represented as the $(N+k)$-th row, and the $k$-th column is also represented as the $(N+k)$-th column.

After this operation, the second board is called a *good* board when, for every $i$ and $j$ ( $1 \leq i, j \leq N$ ), the letter in Square $(i,j)$ and the letter in Square $(j,i)$ are equal.

Find the number of the ways to choose integers $A$ and $B$ ( $0 \leq A, B &lt; N$ ) such that the second board is a good board.

## Constraints

- $1 \leq N \leq 300$
- $S_{i,j}$ ( $1 \leq i, j \leq N$ ) is a lowercase English letter.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_{1,1}S_{1,2}..S_{1,N}$
> 
> $S_{2,1}S_{2,2}..S_{2,N}$
> 
> $:$
> 
> $S_{N,1}S_{N,2}..S_{N,N}$

## Output

Print the number of the ways to choose integers $A$ and $B$ ( $0 \leq A, B &lt; N$ ) such that the second board is a good board.

```input1
2
ab
ca
```

```output1
2
```

For each pair of $A$ and $B$, the second board will look as shown below:

![](https://img.atcoder.jp/agc023/2414e26dc3abb6dd7bfa0c800bb4af0c.png)

The second board is a good board when $(A,B) = (0,1)$ or $(A,B) = (1,0)$, thus the answer is $2$.

```input2
4
aaaa
aaaa
aaaa
aaaa
```

```output2
16
```

Every possible choice of $A$ and $B$ makes the second board good.

```input3
5
abcde
fghij
klmno
pqrst
uvwxy
```

```output3
0
```

No possible choice of $A$ and $B$ makes the second board good.