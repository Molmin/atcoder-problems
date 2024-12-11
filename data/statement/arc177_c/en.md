Score: $500$ points

## Problem Statement

There is a grid with $N$ rows and $N$ columns. Let $(i, j)$ $(1 \leq i \leq N, 1 \leq j \leq N)$ denote the cell at the $i$-th row from the top and the $j$-th column from the left. Each cell is initially painted red or blue, with cell $(i, j)$ being red if $c_{i,j}=$`R` and blue if $c_{i,j}=$`B`. You want to change the colors of some cells to purple so that the following two conditions are simultaneously satisfied:

**Condition 1**: You can move from cell $(1, 1)$ to cell $(N, N)$ by only passing through cells that are red or purple.<br>
**Condition 2**: You can move from cell $(1, N)$ to cell $(N, 1)$ by only passing through cells that are blue or purple.

Here, "**You can move**" means that you can reach the destination from the starting point by repeatedly moving to a horizontally or vertically adjacent cell of the relevant colors.

What is the minimum number of cells that must be changed to purple to satisfy these conditions?

## Constraints

- $3 \leq N \leq 500$
- Each $c_{i,j}$ is `R` or `B`.
- $c_{1,1}$ and $c_{N,N}$ are `R`.
- $c_{1,N}$ and $c_{N,1}$ are `B`.
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $c_{1,1}$$c_{1,2}$$\cdots$$c_{1,N}$
> 
> $c_{2,1}$$c_{2,2}$$\cdots$$c_{2,N}$
> 
> $\vdots$
> 
> $c_{N,1}$$c_{N,2}$$\cdots$$c_{N,N}$

## Output

Print the answer.

```input1
5
RBRBB
RBRRR
RRRBR
RBBRB
BBRBR
```

```output1
3
```

As shown in the figure below, changing cells $(1, 3), (3, 2), (4, 5)$ to purple satisfies the conditions.

![](https://img.atcoder.jp/arc177/7f2b28ec79263ffd4381a20038c7daef.png)

```input2
5
RBBBB
BBBBB
BBBBB
BBBBB
BBBBR
```

```output2
7
```

As shown in the figure below, changing cells $(1, 2), (2, 2), (2, 3), (3, 3), (3, 4), (4, 4), (4, 5)$ to purple satisfies the conditions.

![](https://img.atcoder.jp/arc177/0f50b092f2abc545bdbfb7b8cfa66bdc.png)

```input3
10
RRBBBBBBBB
BRRBBBBBBB
BBRRBBBBBB
BBBRRBBBBB
BBBBRRBBBB
BBBBBRRBBB
BBBBBBRRBB
BBBBBBBRRB
BBBBBBBBRR
BBBBBBBBBR
```

```output3
2
```

```input4
17
RBBRRBRRRRRBBBBBB
BBRBRBRRBRRBRRBBR
BRBRBBBRBBRBBRBBB
RBRRBBBBBBRRBRRRR
RRRRRBRBRRRBBRBBR
RRRRRBRRBRBBRRRBB
BBBRRRBRBRBBRRRBB
BBRRRBRBBBRBRRRBR
RRBBBBBBBBBBBRBRR
RRRBRRBRBRBRBRBBB
RRBRRRRBRBRRBRBBR
RRRBBRBRBBBRBBRBR
BBRBBRRBRRRBBRBBB
BBBRBRRRRRRRBBRBB
RRRRRBRBRBBRRBRRR
BRRRRBBBRRRBRRBBB
BBRRBBRRRBBBRBBBR
```

```output4
8
```