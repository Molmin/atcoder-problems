Score : $400$ points

## Problem Statement

Given are integers $A$, $B$, and $N$.

Find the maximum possible value of $floor(Ax/B) - A \times floor(x/B)$ for a non-negative integer $x$ not greater than $N$.

Here $floor(t)$ denotes the greatest integer not greater than the real number $t$.

## Constraints

- $1 \leq A \leq 10^{6}$
- $1 \leq B \leq 10^{12}$
- $1 \leq N \leq 10^{12}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $N$

## Output

Print the maximum possible value of $floor(Ax/B) - A \times floor(x/B)$ for a non-negative integer $x$ not greater than $N$, as an integer.

```input1
5 7 4
```

```output1
2
```

When $x=3$, $floor(Ax/B)-A \times floor(x/B) = floor(15/7) - 5 \times floor(3/7) = 2$. This is the maximum value possible.

```input2
11 10 9
```

```output2
9
```