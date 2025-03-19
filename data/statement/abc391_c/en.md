Score : $300$ points

## Problem Statement

There are $N$ pigeons numbered from $1$ to $N$, and there are $N$ nests numbered from $1$ to $N$. Initially, pigeon $i$ is in nest $i$ for $1\leq i\leq N$.

You are given $Q$ queries, which you must process in order. There are two types of queries, each given in one of the following formats:

- `1 P H` : Move pigeon $P$ to nest $H$.
- `2` : Output the number of nests that contain more than one pigeon.

## Constraints

- $2 \leq N \leq 10^6$
- $1 \leq Q \leq 3\times 10^5$
- $1 \leq P, H \leq N$
- For a query of the first type, pigeon $P$ is not in nest $H$ before the move.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $\mathrm{query}_1$
> 
> $\mathrm{query}_2$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

Each query is given in one of the following two formats:

> $1$ $P$ $H$

> $2$

## Output

Print the answer to each query on a new line according to the instructions in the problem statement.

```input1
4 7
2
1 1 2
2
1 3 2
2
1 3 4
2
```

```output1
0
1
1
2
```

Initially, pigeons $1,2,3,4$ are in nests $1,2,3,4$, respectively.

- For the 1st query, the counts of pigeons in nests $1,2,3,4$ are $1,1,1,1$. No nests contain multiple pigeons, output $0$.
- For the 2nd query, move pigeon $1$ to nest $2$.
- For the 3rd query, the counts become $0,2,1,1$, respectively. One nest (nest $2$) contains multiple pigeons, so output $1$.
- For the 4th query, move pigeon $3$ to nest $2$.
- For the 5th query, the counts become $0,3,0,1$, respectively. One nest (nest $2$) contains multiple pigeons, so output $1$.
- For the 6th query, move pigeon $3$ to nest $4$.
- For the 7th query, the counts become $0,2,0,2$, respectively. Two nests (nests $2$ and $4$) contain multiple pigeons, so output $2$.

```input2
5 10
2
1 4 3
1 4 5
2
1 3 1
2
1 2 3
1 2 5
1 1 3
2
```

```output2
0
1
2
1
```