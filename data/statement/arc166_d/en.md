Score : $600$ points

## Problem Statement

You are given positive integers $x_1, \ldots, x_N$ such that $x_1 &lt; \cdots &lt; x_N$, and positive integers $y_1, \ldots, y_N$.

Consider a tuple $(M, L_1, R_1, \ldots, L_M, R_M)$ that satisfies all of the following conditions.

- $M$ is a positive integer.
- For each $j \ (1\leq j\leq M)$, $L_j$ and $R_j$ are integers such that $L_j\leq R_j$.
- For each $i \ (1\leq i\leq N)$, exactly $y_i$ integers $j \ (1\leq j\leq M)$ satisfy $L_j\leq x_i\leq R_j$.

It can be proved that such a tuple always exists. Find the maximum value of $\min \lbrace R_j-L_j\mid 1\leq j\leq M\rbrace$ for such a tuple. If there is no maximum value, print `-1`.

## Constraints

- $1\leq N\leq 2\times 10^5$
- $1\leq x_1 &lt; \cdots &lt; x_N \leq 10^9$
- $1\leq y_i \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $\cdots$ $x_N$
> 
> $y_1$ $\cdots$ $y_N$

## Output

Print the maximum value of $\min \lbrace R_j-L_j\mid 1\leq j\leq M\rbrace$ for a tuple that satisfies the conditions, or `-1` if there is no maximum value.

```input1
3
1 3 5
1 3 1
```

```output1
2
```

For example, we have $\min \lbrace R_j-L_j\mid 1\leq j\leq M\rbrace = 2$ for the tuple $(3, 1, 4, 2, 4, 3, 5)$.

```input2
3
1 10 100
2 3 2
```

```output2
-1
```

For example, we have $\min \lbrace R_j-L_j\mid 1\leq j\leq M\rbrace = 990$ for the tuple $(3, -1000, 10, -1000, 1000, 10, 1000)$. There is no maximum value of $\min \lbrace R_j-L_j\mid 1\leq j\leq M\rbrace$.

```input3
7
10 31 47 55 68 73 90
3 7 4 6 3 4 4
```

```output3
56
```