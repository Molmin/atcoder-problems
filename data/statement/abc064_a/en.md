Score : $100$ points

## Problem Statement

AtCoDeer has three cards, one red, one green and one blue.<br>
An integer between $1$ and $9$ (inclusive) is written on each card: $r$ on the red card, $g$ on the green card and $b$ on the blue card.<br>
We will arrange the cards in the order red, green and blue from left to right, and read them as a three-digit integer.<br>
Is this integer a multiple of $4$?  

## Constraints

- $1 \leq r, g, b \leq 9$

## Input

Input is given from Standard Input in the following format:

> $r$ $g$ $b$

## Output

If the three-digit integer is a multiple of $4$, print `YES` (case-sensitive); otherwise, print `NO`.

```input1
4 3 2
```

```output1
YES
```

$432$ is a multiple of $4$, and thus `YES` should be printed.

```input2
2 3 4
```

```output2
NO
```

$234$ is not a multiple of $4$, and thus `NO` should be printed.