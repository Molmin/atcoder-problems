Score : $300$ points

## Problem Statement

Takahashi has a red jewel of level $N$.  (He has no other jewels.) <br>
Takahashi can do the following operations any number of times.

- Convert a red jewel of level $n$ ($n$ is at least $2$) into "a red jewel of level $(n-1)$ and $X$ blue jewels of level $n$".
- Convert a blue jewel of level $n$ ($n$ is at least $2$) into "a red jewel of level $(n-1)$ and $Y$ blue jewels of level $(n-1)$".

Takahashi wants as many blue jewels of level $1$ as possible.  At most, how many blue jewels of level $1$ can he obtain by the operations?

## Constraints

- $1 \leq N \leq 10$
- $1 \leq X \leq 5$
- $1 \leq Y \leq 5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$ $Y$

## Output

Print the answer.

```input1
2 3 4
```

```output1
12
```

Takahashi can obtain $12$ blue jewels of level $1$ by the following conversions.

- First, he converts a red jewel of level $2$ into a red jewel of level $1$ and $3$ blue jewels of level $2$.-   - After this operation, Takahashi has $1$ red jewel of level $1$ and $3$ blue jewels of level $2$.
- Next, he repeats the following conversion $3$ times: converting a blue jewel of level $2$ into a red jewel of level $1$ and $4$ blue jewels of level $1$.-   - After these operations, Takahashi has $4$ red jewels of level $1$ and $12$ blue jewels of level $1$.
- He cannot perform a conversion anymore.

He cannot obtain more than $12$ blue jewels of level $1$, so the answer is $12$.

```input2
1 5 5
```

```output2
0
```

Takahashi may not be able to obtain a blue jewel of level $1$.

```input3
10 5 5
```

```output3
3942349900
```

Note that the answer may not fit into a $32$-bit integer type.