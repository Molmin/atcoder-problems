Score : $300$ points

## Problem Statement

We have $N$ sticks with negligible thickness.
The length of the $i$-th stick is $A_i$.

Snuke wants to select four different sticks from these sticks and form a rectangle (including a square), using the sticks as its sides.
Find the maximum possible area of the rectangle.

## Constraints

- $4 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9$
- $A_i$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ ... $A_N$

## Output

Print the maximum possible area of the rectangle.
If no rectangle can be formed, print $0$.

```input1
6
3 1 2 4 2 1
```

```output1
2
```

$1 \times 2$ rectangle can be formed.

```input2
4
1 2 3 4
```

```output2
0
```

No rectangle can be formed.

```input3
10
3 3 3 3 4 4 4 5 5 5
```

```output3
20
```