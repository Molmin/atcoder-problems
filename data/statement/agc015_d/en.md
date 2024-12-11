Score : $900$ points

## Problem Statement

Nukes has an integer that can be represented as the bitwise OR of one or more integers between $A$ and $B$ (inclusive).
How many possible candidates of the value of Nukes's integer there are?

## Constraints

- $1 \leq A \leq B &lt; 2^{60}$
- $A$ and $B$ are integers.

## Input

The input is given from Standard Input in the following format:

> $A$
> 
> $B$

## Output

Print the number of possible candidates of the value of Nukes's integer.

```input1
7
9
```

```output1
4
```

In this case, $A=7$ and $B=9$. There are four integers that can be represented as the bitwise OR of a non-empty subset of {$7$, $8$, $9$}: $7$, $8$, $9$ and $15$.

```input2
65
98
```

```output2
63
```

```input3
271828182845904523
314159265358979323
```

```output3
68833183630578410
```