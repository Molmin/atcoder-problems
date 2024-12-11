Score : $100$ points

## Problem Statement

There are four balls, and the color of the $i$-th ball is $A_i$.

Find the maximum number of times you can perform this operation: choose two balls of the same color and discard both.

## Constraints

- Each of $A_1, A_2, A_3, A_4$ is an integer between $1$ and $4$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $A_1$ $A_2$ $A_3$ $A_4$

## Output

Print the maximum number of times the operation can be performed as an integer.

```input1
2 1 2 1
```

```output1
2
```

The first and third balls both have color $2$, so you can perform the operation to discard the first and third balls together.

Next, the second and fourth balls both have color $1$, so you can perform the operation to discard the second and fourth balls together.

Hence, you can perform a total of two operations.

```input2
4 4 4 1
```

```output2
1
```

```input3
1 2 3 4
```

```output3
0
```

There are cases where you cannot perform the operation even once.