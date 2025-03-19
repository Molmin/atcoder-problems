Score : $400$ points

## Problem Statement

On a certain planet, there are $N$ aliens, all of whom are minors.

The $i$-th alien currently has $A_i$ stones, and will become an adult exactly $i$ years later.

When someone becomes an adult on this planet, every **adult** who has at least one stone gives exactly one stone as a congratulatory gift to the alien who has just become an adult.

Find how many stones each alien will have after $N$ years.

Assume that no new aliens will be born in the future.

## Constraints

- $1 \leq N \leq 5 \times 10^5$
- $0 \leq A_i \leq 5 \times 10^5$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Let $B_i$ be the number of stones owned by the $i$-th alien after $N$ years. Print $B_1, B_2, \ldots, B_N$ in this order, separated by spaces.

```input1
4
5 0 9 3
```

```output1
2 0 10 5
```

Let $C_i$ be the number of stones that the $i$-th alien has at a given time.

Initially, $(C_1, C_2, C_3, C_4) = (5, 0, 9, 3)$.

After $1$ year, $(C_1, C_2, C_3, C_4) = (5, 0, 9, 3)$.

After $2$ years, $(C_1, C_2, C_3, C_4) = (4, 1, 9, 3)$.

After $3$ years, $(C_1, C_2, C_3, C_4) = (3, 0, 11, 3)$.

After $4$ years, $(C_1, C_2, C_3, C_4) = (2, 0, 10, 5)$.

```input2
5
4 6 7 2 5
```

```output2
0 4 7 4 9
```

```input3
10
2 9 1 2 0 4 6 7 1 5
```

```output3
0 2 0 0 0 4 7 10 4 10
```