Score : $100$ points

## Problem Statement

You are parking at a parking lot. You can choose from the following two fee plans:

- Plan $1$: The fee will be $A \times T$ yen (the currency of Japan) when you park for $T$ hours.
- Plan $2$: The fee will be $B$ yen, regardless of the duration.

Find the minimum fee when you park for $N$ hours.

## Constraints

- $1 \leq N \leq 20$
- $1 \leq A \leq 100$
- $1 \leq B \leq 2000$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $A$ $B$

## Output

When the minimum fee is $x$ yen, print the value of $x$.

```input1
7 17 120
```

```output1
119
```

- If you choose Plan $1$, the fee will be $7 \times 17=119$ yen.
- If you choose Plan $2$, the fee will be $120$ yen.

Thus, the minimum fee is $119$ yen.

```input2
5 20 100
```

```output2
100
```

The fee might be the same in the two plans.

```input3
6 18 100
```

```output3
100
```