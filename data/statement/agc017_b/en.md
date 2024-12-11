Score : $400$ points

## Problem Statement

There are $N$ squares in a row.
The leftmost square contains the integer $A$, and the rightmost contains the integer $B$. The other squares are empty.

Aohashi would like to fill the empty squares with integers so that the following condition is satisfied:

- For any two adjacent squares, the (absolute) difference of the two integers in those squares is between $C$ and $D$ (inclusive).

As long as the condition is satisfied, it is allowed to use arbitrarily large or small integers to fill the squares.
Determine whether it is possible to fill the squares under the condition.

## Constraints

- $3 \leq N \leq 500000$
- $0 \leq A \leq 10^9$
- $0 \leq B \leq 10^9$
- $0 \leq C \leq D \leq 10^9$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $A$ $B$ $C$ $D$

## Output

Print `YES` if it is possible to fill the squares under the condition; print `NO` otherwise.

```input1
5 1 5 2 4
```

```output1
YES
```

For example, fill the squares with the following integers: $1$, $-1$, $3$, $7$, $5$, from left to right.

```input2
4 7 6 4 5
```

```output2
NO
```

```input3
48792 105960835 681218449 90629745 90632170
```

```output3
NO
```

```input4
491995 412925347 825318103 59999126 59999339
```

```output4
YES
```