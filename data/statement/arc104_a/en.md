Score : $100$ points

## Problem Statement

Takahashi has two integers $X$ and $Y$.

He computed $X + Y$ and $X - Y$, and the results were $A$ and $B$, respectively.

Now he cannot remember what $X$ and $Y$ were. Find $X$ and $Y$ for him.

## Constraints

- $-100 \leq A, B \leq 100$
- For the given integers $A$ and $B$, there uniquely exist integers $X$ and $Y$ such that $X + Y = A$ and $X - Y = B$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print $X$ and $Y$.

```input1
2 -2
```

```output1
0 2
```

If $X = 0$ and $Y = 2$, they match the situation: $0 + 2 = 2$ and $0 - 2 = -2$.

```input2
3 1
```

```output2
2 1
```