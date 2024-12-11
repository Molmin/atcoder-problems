Score : $500$ points

## Problem Statement

We have an $N \times M$ matrix, whose elements are initially all $0$.

Process $Q$ given queries.  Each query is in one of the following formats.

- `1 l r x` : Add $x$ to every element in the $l$-th, $(l+1)$-th, $\ldots$, and $r$-th column.
- `2 i x`: Replace every element in the $i$-th row with $x$.
- `3 i j`: Print the $(i, j)$-th element.

## Constraints

- $1 \leq N, M, Q \leq 2 \times 10^5$
- Every query is in one of the formats listed in the Problem Statement.
- For each query in the format `1 l r x`, $1 \leq l \leq r \leq M$ and $1 \leq x \leq 10^9$.
- For each query in the format `2 i x`, $1 \leq i \leq N$ and $1 \leq x \leq 10^9$.
- For each query in the format `3 i j`, $1 \leq i \leq N$ and $1 \leq j \leq M$.
- At least one query in the format `3 i j` is given.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $Q$
> 
> $\mathrm{Query}_1$
> 
> $\vdots$
> 
> $\mathrm{Query}_Q$

$\mathrm{Query}_i$, which denotes the $i$-th query, is in one of the following formats:

> $1$ $l$ $r$ $x$
> $2$ $i$ $x$
> $3$ $i$ $j$

## Output

For each query in the format `3 i j`, print a single line containing the answer.

```input1
3 3 9
1 1 2 1
3 2 2
2 3 2
3 3 3
3 3 1
1 2 3 3
3 3 2
3 2 3
3 1 2
```

```output1
1
2
2
5
3
4
```

The matrix transitions as follows.

$\begin{pmatrix} 0 &amp; 0 &amp; 0 \\ 0 &amp; 0 &amp; 0 \\ 0 &amp; 0 &amp; 0 \\ \end{pmatrix} \rightarrow \begin{pmatrix} 1 &amp; 1 &amp; 0 \\ 1 &amp; 1 &amp; 0 \\ 1 &amp; 1 &amp; 0 \\ \end{pmatrix} \rightarrow \begin{pmatrix} 1 &amp; 1 &amp; 0 \\ 1 &amp; 1 &amp; 0 \\ 2 &amp; 2 &amp; 2 \\ \end{pmatrix} \rightarrow \begin{pmatrix} 1 &amp; 4 &amp; 3 \\ 1 &amp; 4 &amp; 3 \\ 2 &amp; 5 &amp; 5 \\ \end{pmatrix}$

```input2
1 1 10
1 1 1 1000000000
1 1 1 1000000000
1 1 1 1000000000
1 1 1 1000000000
1 1 1 1000000000
1 1 1 1000000000
1 1 1 1000000000
1 1 1 1000000000
1 1 1 1000000000
3 1 1
```

```output2
9000000000
```

```input3
10 10 10
1 1 8 5
2 2 6
3 2 1
3 4 7
1 5 9 7
3 3 2
3 2 8
2 8 10
3 8 8
3 1 10
```

```output3
6
5
5
13
10
0
```