Score : $900$ points

## Problem Statement

There are $N$ squares in a row. The squares are numbered $1, 2, ..., N$ from left to right.

You have two pieces, initially placed on square $A$ and $B$, respectively.
You will be asked to process $Q$ queries of the following kind, in the order received:

- Given an integer $x_i$, move one of the two pieces of your choice to square $x_i$.

Here, it takes you one second to move a piece one square.
That is, the time it takes to move a piece from square $X$ to $Y$ is $|X-Y|$ seconds.

Your objective is to process all the queries in the shortest possible time.

You may only move the pieces in response to queries, and you may not move both pieces at the same time.
Also, it is not allowed to rearrange the order in which queries are given.
It is, however, allowed to have both pieces in the same square at the same time.

## Constraints

- $1 \leq N, Q \leq 200,000$
- $1 \leq A, B \leq N$
- $1 \leq x_i \leq N$

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$ $A$ $B$
> 
> $x_1$ $x_2$ ... $x_Q$

## Output

Let the shortest possible time to process all the queries be $X$ seconds. Print $X$.

```input1
8 3 1 8
3 5 1
```

```output1
7
```

All the queries can be processed in seven seconds, by:

- moving the piece at square $1$ to $3$
- moving the piece at square $8$ to $5$
- moving the piece at square $3$ to $1$

```input2
9 2 1 9
5 1
```

```output2
4
```

The piece at square $9$ should be moved first.

```input3
9 2 1 9
5 9
```

```output3
4
```

The piece at square $1$ should be moved first.

```input4
11 16 8 1
1 1 5 1 11 4 5 2 5 3 3 3 5 5 6 7
```

```output4
21
```