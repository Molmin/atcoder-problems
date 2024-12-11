Score : $200$ points

## Problem Statement

Snuke has $N$ integers. Among them, the smallest is $A$, and the largest is $B$.
We are interested in the sum of those $N$ integers. How many different possible sums there are?

## Constraints

- $1 \leq N,A,B \leq 10^9$
- $A$ and $B$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $A$ $B$

## Output

Print the number of the different possible sums.

```input1
4 4 6
```

```output1
5
```

There are five possible sums: $18=4+4+4+6$, $19=4+4+5+6$, $20=4+5+5+6$, $21=4+5+6+6$ and $22=4+6+6+6$.

```input2
5 4 3
```

```output2
0
```

```input3
1 7 10
```

```output3
0
```

```input4
1 3 3
```

```output4
1
```