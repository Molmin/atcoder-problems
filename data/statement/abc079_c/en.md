Score : $300$ points

## Problem Statement

Sitting in a station waiting room, Joisino is gazing at her train ticket.

The ticket is numbered with four digits $A$, $B$, $C$ and $D$ in this order, each between $0$ and $9$ (inclusive).

In the formula $A$ $op1$ $B$ $op2$ $C$ $op3$ $D$ $=$ $7$, replace each of the symbols $op1$, $op2$ and $op3$ with `+` or `-` so that the formula holds.

The given input guarantees that there is a solution. If there are multiple solutions, any of them will be accepted.

## Constraints

- $0 \leq A,B,C,D \leq 9$
- All input values are integers.
- It is guaranteed that there is a solution.

## Input

Input is given from Standard Input in the following format:

> $ABCD$

## Output

Print the formula you made, including the part `=7`.

Use the signs `+` and `-`.

Do not print a space between a digit and a sign.

```input1
1222
```

```output1
1+2+2+2=7
```

This is the only valid solution.

```input2
0290
```

```output2
0-2+9+0=7
```

$0 - 2 + 9 - 0 = 7$ is also a valid solution.

```input3
3242
```

```output3
3+2+4-2=7
```