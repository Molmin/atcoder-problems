Score : $100$ points

## Problem Statement

There are two rectangles.
The lengths of the vertical sides of the first rectangle are $A$, and the lengths of the horizontal sides of the first rectangle are $B$.
The lengths of the vertical sides of the second rectangle are $C$, and the lengths of the horizontal sides of the second rectangle are $D$.

Print the area of the rectangle with the larger area.
If the two rectangles have equal areas, print that area.

## Constraints

- All input values are integers.
- $1 \leq A \leq 10^4$
- $1 \leq B \leq 10^4$
- $1 \leq C \leq 10^4$
- $1 \leq D \leq 10^4$

## Input

The input is given from Standard Input in the following format:

> $A$ $B$ $C$ $D$

## Output

Print the area of the rectangle with the larger area.
If the two rectangles have equal areas, print that area.

```input1
3 5 2 7
```

```output1
15
```

The first rectangle has an area of $3 \times 5=15$, and the second rectangle has an area of $2 \times 7=14$.
Thus, the output should be $15$, the larger area.

```input2
100 600 200 300
```

```output2
60000
```