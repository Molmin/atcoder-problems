Score : $100$ points

## Problem Statement

Takahashi melted and mixed $A$ grams of gold and $B$ grams of silver $(0 \leq A,B,\ 0 \lt A+B)$ to produce new metal.

What metal did he produce: pure gold, pure silver, or an alloy?

Formally, the product is called as follows.

- Pure gold, if $0 \lt A$ and $B=0$.
- Pure silver, if $A=0$ and $0 \lt B$.
- An alloy, if $0 \lt A$ and $0 \lt B$.

## Constraints

- $0 \leq A,B \leq 100$
- $1 \leq A+B$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

If the product is pure gold, print `Gold`; if it is pure silver, print `Silver`; if it is an alloy, print `Alloy`.

```input1
50 50
```

```output1
Alloy
```

We have $0 \lt A$ and $0 \lt B$, so the product is an alloy.

```input2
100 0
```

```output2
Gold
```

We have $0 \lt A$ and $B=0$, so the product is pure gold.

```input3
0 100
```

```output3
Silver
```

We have $A=0$ and $0 \lt B$, so the product is pure silver.

```input4
100 2
```

```output4
Alloy
```