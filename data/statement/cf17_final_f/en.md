Score : $1000$ points

## Problem Statement

Select any integer $N$ between $1000$ and $2000$ (inclusive), and any integer $K$ not less than $1$, then solve the problem below.

### Problem

We have $N$ sheets of paper.
Write $K$ integers on each of them to satisfy the following conditions:

- Each integer written must be between $1$ and $N$ (inclusive).
- The $K$ integers written on the same sheet must be all different.
- Each of the integers between $1$ and $N$ must be written on exactly $K$ sheets.
- For any two sheet, there is exactly one integer that appears on both.

## Input

There is no input in this problem.

## Output

In the first line, print $N$ and $K$ separated by a space.

In the subsequent $N$ lines, print your solution.
The $i$-th of these lines must contain the $K$ integers written on the $i$-th sheet, with spaces in between.

## Sample Output

```plain
3 2
1 2
2 3
3 1
```

This is an example of a solution for $N = 3$ and $K = 2$.

Note that this output will be judged as incorrect, since the constraint on $N$ is not satisfied.