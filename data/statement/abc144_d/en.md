Score : $400$ points

## Problem Statement

Takahashi has a water bottle with the shape of a rectangular prism whose base is a square of side $a \sim \mathrm{cm}$ and whose height is $b \sim \mathrm{cm}$. (The thickness of the bottle can be ignored.)

We will pour $x \sim \mathrm{cm}^3$ of water into the bottle, and gradually tilt the bottle around one of the sides of the base.

When will the water be spilled? More formally, find the maximum angle in which we can tilt the bottle without spilling any water.

## Constraints

- All values in input are integers.
- $1 \leq a \leq 100$
- $1 \leq b \leq 100$
- $1 \leq x \leq a^2b$

## Input

Input is given from Standard Input in the following format:

> $a$ $b$ $x$

## Output

Print the maximum angle in which we can tilt the bottle without spilling any water, in degrees.
Your output will be judged as correct when the absolute or relative error from the judge's output is at most $10^{-6}$.

```input1
2 2 4
```

```output1
45.0000000000
```

This bottle has a cubic shape, and it is half-full. The water gets spilled when we tilt the bottle more than $45$ degrees.

```input2
12 21 10
```

```output2
89.7834636934
```

This bottle is almost empty. When the water gets spilled, the bottle is nearly horizontal.

```input3
3 1 8
```

```output3
4.2363947991
```

This bottle is almost full. When the water gets spilled, the bottle is still nearly vertical.