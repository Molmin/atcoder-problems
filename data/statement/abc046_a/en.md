Score : $100$ points

## Problem Statement

AtCoDeer the deer recently bought three paint cans.
The color of the one he bought two days ago is $a$, the color of the one he bought yesterday is $b$, and the color of the one he bought today is $c$.
Here, the color of each paint can is represented by an integer between $1$ and $100$, inclusive.

Since he is forgetful, he might have bought more than one paint can in the same color.
Count the number of different kinds of colors of these paint cans and tell him.

## Constraints

- $1 \leq a,b,c \leq 100$

## Input

The input is given from Standard Input in the following format:

> $a$ $b$ $c$

## Output

Print the number of different kinds of colors of the paint cans.

```input1
3 1 4
```

```output1
3
```

Three different colors: $1$, $3$, and $4$.

```input2
3 3 33
```

```output2
2
```

Two different colors: $3$ and $33$.