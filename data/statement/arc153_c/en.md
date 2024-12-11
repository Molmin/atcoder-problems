Score : $600$ points

## Problem Statement

You are given a sequence of length $N$, $A = (A_1, \ldots, A_N)$, consisting of $1$ and $-1$.

Determine whether there is an integer sequence $x = (x_1, \ldots, x_N)$ that satisfies all of the following conditions, and print one such sequence if it exists.

- $|x_i| \leq 10^{12}$ for every $i$ ($1\leq i\leq N$).
- $x$ is strictly increasing. That is, $x_1 &lt; \cdots &lt; x_N$.
- $\sum_{i=1}^N A_ix_i = 0$.

## Constraints

- $1\leq N\leq 2\times 10^5$
- $A_i \in \lbrace 1, -1\rbrace$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## Output

If there is an integer sequence $x$ that satisfies all of the conditions in question, print `Yes`; otherwise, print `No`. In case of `Yes`, print the elements of such an integer sequence $x$ in the subsequent line, separated by spaces.

> $x_1$ $\ldots$ $x_N$

If multiple integer sequences satisfy the conditions, you may print any of them.

```input1
5
-1 1 -1 -1 1
```

```output1
Yes
-3 -1 4 5 7
```

For this output, we have $\sum_{i=1}^NA_ix_i= -(-3) + (-1) - 4 - 5 + 7 = 0$.

```input2
1
-1
```

```output2
Yes
0
```

```input3
2
1 -1
```

```output3
No
```