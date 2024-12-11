Score : $500$ points

## Problem Statement

The Republic of AtCoder has $N$ islands.
Initially, none of the islands has an airport or harbor, and there is no road between any two of them.
Takahashi, the king, will provide some means of transportation between these islands.
Specifically, he can do the following operations any number of times in any order.

- Choose an integer $i$ such that $1\leq i\leq N$ and pay a cost of $X_i$ to build an airport on island $i$.
- Choose an integer $i$ such that $1\leq i\leq N$ and pay a cost of $Y_i$ to build a harbor on island $i$.
- Choose an integer $i$ such that $1\leq i\leq M$ and pay a cost of $Z_i$ to build a road that bidirectionally connects island $A_i$ and island $B_i$.

Takahashi's objective is to make it possible, for every pair of different islands $U$ and $V$, to reach island $V$ from island $U$ when one can perform the following actions any number of times in any order.

- When islands $S$ and $T$ both have airports, go from island $S$ to island $T$.
- When islands $S$ and $T$ both have harbors, go from island $S$ to island $T$.
- When islands $S$ and $T$ are connected by a road, go from island $S$ to island $T$.

Find the minimum total cost Takahashi needs to pay to achieve his objective.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $1 \leq M \leq 2\times 10^5$
- $1\leq X_i\leq 10^9$
- $1\leq Y_i\leq 10^9$
- $1\leq A_i&lt;B_i\leq N$
- $1\leq Z_i\leq 10^9$
- $(A_i,B_i)\neq (A_j,B_j)$, if $i\neq j$.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $X_1$ $X_2$ $\ldots$ $X_N$
> 
> $Y_1$ $Y_2$ $\ldots$ $Y_N$
> 
> $A_1$ $B_1$ $Z_1$
> 
> $A_2$ $B_2$ $Z_2$
> 
> $\vdots$
> 
> $A_M$ $B_M$ $Z_M$

## Output

Print the minimum total cost Takahashi needs to pay to achieve his objective.

```input1
4 2
1 20 4 7
20 2 20 3
1 3 5
1 4 6
```

```output1
16
```

Takahashi will build the following infrastructure.

- Pay a cost of $X_1=1$ to build an airport on island $1$.
- Pay a cost of $X_3=4$ to build an airport on island $3$.
- Pay a cost of $Y_2=2$ to build a harbor on island $2$.
- Pay a cost of $Y_4=3$ to build a harbor on island $4$.
- Pay a cost of $Z_2=6$ to build a road connecting island $1$ and island $4$.

Then, the objective will be achieved at a cost of $16$.
There is no way to achieve the objective for a cost of $15$ or less, so $16$ should be printed.

```input2
3 1
1 1 1
10 10 10
1 2 100
```

```output2
3
```

It is not mandatory to build all three types of facilities at least once.

```input3
7 8
35 29 36 88 58 15 25
99 7 49 61 67 4 57
2 3 3
2 5 36
2 6 89
1 6 24
5 7 55
1 3 71
3 4 94
5 6 21
```

```output3
160
```