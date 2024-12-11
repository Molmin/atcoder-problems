Score : $300$ points

## Problem Statement

You are given positive integers $N$ and $Q$, and a string $S$ of length $N$ consisting of lowercase English letters.

Process $Q$ queries. Each query is of one of the following two types.

- `1 x`: Perform the following $x$ times in a row: delete the last character of $S$ and append it to the beginning.
- `2 x`: Print the $x$-th character of $S$.

## Constraints

- $2 \le N \le 5 \times 10^5$
- $1 \le Q \le 5 \times 10^5$
- $1 \le x \le N$
- $|S|=N$
- $S$ consists of lowercase English letters.
- At least one query in the format `2 x`.
- $N$, $Q$, $x$ are all integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $S$
> 
> $\mathrm{query}_1$
> 
> $\mathrm{query}_2$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

Each query is in the following format, where $t$ is $1$ or $2$:

> $t$ $x$

## Output

For each query in the format `2 x`, print the answer in a single line.

```input1
3 3
abc
2 2
1 1
2 2
```

```output1
b
a
```

In the $1$-st query, $S$ is `abc`, so the $2$-nd character `b` should be printed.
In the $2$-nd query, $S$ is changed from `abc` to `cab`.
In the $3$-rd query, $S$ is `cab`, so the $2$-nd character `a` should be printed.

```input2
10 8
dsuccxulnl
2 4
2 7
1 2
2 7
1 1
1 2
1 3
2 5
```

```output2
c
u
c
u
```