Score : $300$ points

## Problem Statement

There are $N$ people numbered from $1$ to $N$.

Person $i$ is wearing a bib with the number $Q_i$ and is staring at person $P_i$.

For each $i = 1,2,\ldots,N$, find the number written on the bib of the person that the person wearing the bib with number $i$ is staring at.

## Constraints

- $2 \leq N \leq 3\times 10^5$
- $1 \leq P_i \leq N$
- The values of $P_i$ are distinct.
- $1 \leq Q_i \leq N$
- The values of $Q_i$ are distinct.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\dots$ $P_N$
> 
> $Q_1$ $Q_2$ $\dots$ $Q_N$

## Output

Let $S_i$ be the number written on the bib of the person that the person wearing the bib with number $i$ is staring at.<br>
Print $S_1, S_2, \ldots, S_N$ in this order, separated by a single space.

```input1
4
4 3 2 1
2 3 1 4
```

```output1
3 4 1 2
```

Person $3$ is wearing the bib with the number $1$, and the person that person $3$ is staring at, person $2$, is wearing the bib with the number $3$.
Thus, the answer for $i = 1$ is $3$.

![Figure](https://img.atcoder.jp/abc392/965b8e458deb7426d2813e2dba014a5b.png)

```input2
10
2 6 4 3 7 8 9 10 1 5
1 4 8 2 10 5 7 3 9 6
```

```output2
4 8 6 5 3 10 9 2 1 7
```