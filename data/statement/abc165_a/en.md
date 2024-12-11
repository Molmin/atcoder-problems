Score: $100$ points

## Problem Statement

Takahashi the Jumbo will practice golf.

His objective is to get a carry distance that is a multiple of $K$, while he can only make a carry distance of between $A$ and $B$ (inclusive).

If he can achieve the objective, print `OK`; if he cannot, print `NG`.

## Constraints

- All values in input are integers.
- $1 \leq A \leq B \leq 1000$
- $1 \leq K \leq 1000$

## Input

Input is given from Standard Input in the following format:

> $K$
> 
> $A$ $B$

## Output

If he can achieve the objective, print `OK`; if he cannot, print `NG`.

```input1
7
500 600
```

```output1
OK
```

Among the multiples of $7$, for example, $567$ lies between $500$ and $600$.

```input2
4
5 7
```

```output2
NG
```

No multiple of $4$ lies between $5$ and $7$.

```input3
1
11 11
```

```output3
OK
```