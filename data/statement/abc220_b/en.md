Score : $200$ points

## Problem Statement

You are given integers $A$ and $B$, in base $K$.<br>
Print $A \times B$ in decimal.

## Notes

For base-$K$ representation, see [Wikipedia's article on Positional notation](https://en.wikipedia.org/wiki/Positional_notation).

## Constraints

- $2 \leq K \leq 10$
- $1 \leq A,B \leq 10^5$
- $A$ and $B$ are in base-$K$ representation.

## Input

Input is given from Standard Input in the following format:

> $K$
> 
> $A$ $B$

## Output

Print the answer.

```input1
2
1011 10100
```

```output1
220
```

`1011` in base $2$ corresponds to $11$ in base $10$.<br>
`10100` in base $2$ corresponds to $20$ in base $10$.<br>
We have $11 \times 20 = 220$, so print $220$.

```input2
7
123 456
```

```output2
15642
```

`123` in base $7$ corresponds to $66$ in base $10$.<br>
`456` in base $7$ corresponds to $237$ in base $10$.<br>
We have $66 \times 237 = 15642$, so print $15642$.