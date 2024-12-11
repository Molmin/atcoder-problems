Score : $300$ points

## Problem Statement

Among the positive integers that consist of $0$'s and $2$'s when written in base $10$, find the $K$-th smallest integer.

## Constraints

- $K$ is an integer between $1$ and $10^{18}$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $K$

## Output

Print the answer as an integer.<br>
Here, the exact value must be printed as an integer, even if it is big. Exponential notations such as `2.34e+22`, for example, or unnecessary leading zeros such as `0523` are not allowed.

```input1
3
```

```output1
22
```

The positive integers that consist of $0$'s and $2$'s when written in base $10$ are $2,20,22,\dots$ in ascending order.<br>
The $(K=)$ $3$-rd of them, which is $22$, should be printed.

```input2
11
```

```output2
2022
```

```input3
923423423420220108
```

```output3
220022020000202020002022022000002020002222002200002022002200
```

Note that the exact value of the answer must be printed as an integer, even if it is big.