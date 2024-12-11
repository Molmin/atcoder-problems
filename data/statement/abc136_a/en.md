Score : $100$ points

## Problem Statement

We have two bottles for holding water.

Bottle $1$ can hold up to $A$ milliliters of water, and now it contains $B$ milliliters of water.

Bottle $2$ contains $C$ milliliters of water.

We will transfer water from Bottle $2$ to Bottle $1$ as much as possible.

How much amount of water will remain in Bottle $2$?

## Constraints

- All values in input are integers.
- $1 \leq B \leq A \leq 20$
- $1 \leq C \leq 20$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

Print the integer representing the amount of water, in milliliters, that will remain in Bottle $2$.

```input1
6 4 3
```

```output1
1
```

We will transfer two milliliters of water from Bottle $2$ to Bottle $1$, and one milliliter of water will remain in Bottle $2$.

```input2
8 3 9
```

```output2
4
```

```input3
12 3 7
```

```output3
0
```