Score : $200$ points

## Problem Statement

We have $A$ cards, each of which has an integer $1$ written on it. Similarly, we also have $B$ cards with $0$s and $C$ cards with $-1$s.

We will pick up $K$ among these cards. What is the maximum possible sum of the numbers written on the cards chosen?

## Constraints

- All values in input are integers.
- $0 \leq A, B, C$
- $1 \leq K \leq A + B + C \leq 2 \times 10^9$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$ $K$

## Output

Print the maximum possible sum of the numbers written on the cards chosen.

```input1
2 1 1 3
```

```output1
2
```

Consider picking up two cards with $1$s and one card with a $0$.
In this case, the sum of the numbers written on the cards is $2$, which is the maximum possible value.

```input2
1 2 3 4
```

```output2
0
```

```input3
2000000000 0 0 2000000000
```

```output3
2000000000
```