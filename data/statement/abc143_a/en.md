Score : $100$ points

## Problem Statement

The window of Takahashi's room has a width of $A$. There are two curtains hung over the window, each of which has a horizontal length of $B$. (Vertically, the curtains are long enough to cover the whole window.)

We will close the window so as to minimize the total horizontal length of the uncovered part of the window.
Find the total horizontal length of the uncovered parts of the window then.

## Constraints

- $1 \leq A \leq 100$
- $1 \leq B \leq 100$
- $A$ and $B$ are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the total horizontal length of the uncovered parts of the window.

```input1
12 4
```

```output1
4
```

We have a window with a horizontal length of $12$, and two curtains, each of length $4$, that cover both ends of the window, for example. The uncovered part has a horizontal length of $4$.

```input2
20 15
```

```output2
0
```

If the window is completely covered, print $0$.

```input3
20 30
```

```output3
0
```

Each curtain may be longer than the window.