Score : $200$ points

## Problem Statement

In some village, there are $999$ towers that are $1,(1+2),(1+2+3),...,(1+2+3+...+999)$ meters high from west to east, at intervals of $1$ meter.

It had been snowing for a while before it finally stopped. For some two adjacent towers located $1$ meter apart, we measured the lengths of the parts of those towers that are not covered with snow, and the results are $a$ meters for the west tower, and $b$ meters for the east tower.

Assuming that the depth of snow cover and the altitude are the same everywhere in the village, find the amount of the snow cover.

Assume also that the depth of the snow cover is always at least $1$ meter.

## Constraints

- $1 \leq a &lt; b &lt; 499500(=1+2+3+...+999)$
- All values in input are integers.
- There is no input that contradicts the assumption.

## Input

Input is given from Standard Input in the following format:

> $a$ $b$

## Output

If the depth of the snow cover is $x$ meters, print $x$ as an integer.

```input1
8 13
```

```output1
2
```

The heights of the two towers are $10$ meters and $15$ meters, respectively.
Thus, we can see that the depth of the snow cover is $2$ meters.

```input2
54 65
```

```output2
1
```