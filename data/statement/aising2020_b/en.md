Score : $200$ points

## Problem Statement

We have $N$ squares assigned the numbers $1,2,3,\ldots,N$. Each square has an integer written on it, and the integer written on Square $i$ is $a_i$.

How many squares $i$ satisfy both of the following conditions?

- The assigned number, $i$, is odd.
- The written integer is odd.

## Constraints

- All values in input are integers.
- $1 \leq N, a_i \leq 100$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $\cdots$ $a_N$

## Output

Print the number of squares that satisfy both of the conditions.

```input1
5
1 3 4 5 7
```

```output1
2
```

- Two squares, Square $1$ and $5$, satisfy both of the conditions.
- For Square $2$ and $4$, the assigned numbers are not odd.
- For Square $3$, the written integer is not odd.

```input2
15
13 76 46 15 50 98 93 77 31 43 84 90 6 24 14
```

```output2
3
```