Score : $100$ points

## Problem Statement

You are playing the slots.

The result of a spin is represented by three uppercase English letters $C_1$, $C_2$, and $C_3$. It is considered a win when all of them are the same letter.

Determine whether it is a win.

## Constraints

- $C_i$ is an uppercase English letter.

## Input

Input is given from Standard Input in the following format:

> $C_1 C_2 C_3$

## Output

If the result is a win, print `Won`; otherwise, print `Lost`.

```input1
SSS
```

```output1
Won
```

All of them are the same letter, so it is a win.

```input2
WVW
```

```output2
Lost
```

It is not a win.