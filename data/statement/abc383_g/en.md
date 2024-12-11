Score : $625$ points

## Problem Statement

You have a row of $N$ cells. The $i$-th cell from the left contains an integer $A_i$.

You also have $\lfloor \frac{N}{K} \rfloor$ tiles, each of which covers $K$ consecutive cells.

For each $i = 1, \ldots, \lfloor \frac{N}{K} \rfloor$, solve the following problem:

- When placing exactly $i$ tiles without overlap, find the maximum possible sum of the numbers in the covered cells.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq \min(5,N)$
- $-10^9 \leq A_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the answers for $i = 1, \ldots, \lfloor \frac{N}{K} \rfloor$ separated by spaces in one line.

```input1
6 2
-5 3 4 -1 6 -2
```

```output1
7 12 5
```

For $i=1$, if you cover the 2nd and 3rd cells with one tile, the sum of the numbers in the covered cells is $7$.

For $i=2$, if you cover the 2nd and 3rd cells with one tile and the 4th and 5th cells with another tile, the sum of the numbers in the covered cells is $12$.

```input2
20 4
-5 3 4 -1 6 -2 13 -1 13 7 6 -12 3 -5 12 -6 -3 10 -15 -5
```

```output2
32 45 57 52 22
```