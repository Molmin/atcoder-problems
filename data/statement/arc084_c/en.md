Score : $800$ points

## Problem Statement

In Finite Encyclopedia of Integer Sequences (FEIS), all integer sequences of lengths between $1$ and $N$ (inclusive) consisting of integers between $1$ and $K$ (inclusive) are listed.

Let the total number of sequences listed in FEIS be $X$. Among those sequences, find the $(X/2)$-th (rounded up to the nearest integer) lexicographically smallest one.

## Constraints

- $1 \leq N,K \leq 3 \times 10^5$
- $N$ and $K$ are integers.

## Input

Input is given from Standard Input in the following format:

> $K$ $N$

## Output

Print the $(X/2)$-th (rounded up to the nearest integer) lexicographically smallest sequence listed in FEIS, with spaces in between, where $X$ is the total number of sequences listed in FEIS.

```input1
3 2
```

```output1
2 1
```

There are $12$ sequences listed in FEIS: $(1),(1,1),(1,2),(1,3),(2),(2,1),(2,2),(2,3),(3),(3,1),(3,2),(3,3)$.
The $(12/2 = 6)$-th lexicographically smallest one among them is $(2,1)$.

```input2
2 4
```

```output2
1 2 2 2
```

```input3
5 14
```

```output3
3 3 3 3 3 3 3 3 3 3 3 3 2 2
```