Score : $200$ points

## Problem Statement

You are given $N$ sequences numbered $1$ to $N$.<br>
Sequence $i$ has a length of $L_i$ and its $j$-th element $(1 \leq j \leq L_i)$ is $a_{i,j}$.

Sequence $i$ and Sequence $j$ are considered the same when $L_i = L_j$ and $a_{i,k} = a_{j,k}$ for every $k$ $(1 \leq k \leq L_i)$.<br>
How many different sequences are there among Sequence $1$ through Sequence $N$?

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq L_i \leq 2 \times 10^5$ $(1 \leq i \leq N)$
- $0 \leq a_{i,j} \leq 10^{9}$ $(1 \leq i \leq N, 1 \leq j \leq L_i)$
- The total number of elements in the sequences, $\sum_{i=1}^N L_i$, does not exceed $2 \times 10^5$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $L_1$ $a_{1,1}$ $a_{1,2}$ $\dots$ $a_{1,L_1}$
> 
> $L_2$ $a_{2,1}$ $a_{2,2}$ $\dots$ $a_{2,L_2}$
> 
> $\vdots$
> 
> $L_N$ $a_{N,1}$ $a_{N,2}$ $\dots$ $a_{N,L_N}$

## Output

Print the number of different sequences.

```input1
4
2 1 2
2 1 1
2 2 1
2 1 2
```

```output1
3
```

Sample Input $1$ contains four sequences:

- Sequence $1$ : $(1, 2)$
- Sequence $2$ : $(1, 1)$
- Sequence $3$ : $(2, 1)$
- Sequence $4$ : $(1, 2)$

Except that Sequence $1$ and Sequence $4$ are the same, these sequences are pairwise different, so we have three different sequences.

```input2
5
1 1
1 1
1 2
2 1 1
3 1 1 1
```

```output2
4
```

Sample Input $2$ contains five sequences:

- Sequence $1$ : $(1)$
- Sequence $2$ : $(1)$
- Sequence $3$ : $(2)$
- Sequence $4$ : $(1, 1)$
- Sequence $5$ : $(1, 1, 1)$

```input3
1
1 1
```

```output3
1
```