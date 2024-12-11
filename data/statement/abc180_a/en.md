Score : $100$ points

## Problem Statement

We have removed $A$ balls from a box that contained $N$ balls and then put $B$ new balls into that box. How many balls does the box contain now?

## Constraints

- All values in input are integers.
- $100 \leq N \leq 200$
- $1 \leq A,B \leq 100$

## Input

Input is given from Standard Input in the following format:

> $N$ $A$ $B$

## Output

Print the answer as an integer.

```input1
100 1 2
```

```output1
101
```

The box contained $100$ balls. After removing $1$ ball and putting $2$ new balls, it now contains $101$ balls.

```input2
100 2 1
```

```output2
99
```

```input3
100 1 1
```

```output3
100
```