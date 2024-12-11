Score : $1800$ points

## Problem Statement

Snuke has $X+Y$ balls.
$X$ of them have an integer $A$ written on them, and the other $Y$ of them have an integer $B$ written on them.

Snuke will divide these balls into some number of groups.
Here, every ball should be contained in exactly one group, and every group should contain one or more balls.

A group is said to be **good** when the sum of the integers written on the balls in that group is a multiple of an integer $C$.
Find the maximum possible number of good groups.

Solve $T$ test cases for each input file.

## Constraints

- $1 \leq T \leq 2 \times 10^4$
- $1 \leq A,X,B,Y,C \leq 10^9$
- $A \neq B$

## Input

Input is given from Standard Input in the following format.
The first line is as follows:

> $T$

Then, $T$ test cases follow.
Each test case is given in the following format:

> $A$ $X$ $B$ $Y$ $C$

## Output

For each test case, print a line containing the maximum possible number of good groups.

```input1
3
3 3 4 4 5
2 1 1 5 3
3 1 4 2 5
```

```output1
2
2
0
```

In the first test case, we can have two good groups by making the following groups: $\{3,3,4\}$ and $\{3,4,4,4\}$.

In the second test case, we can have two good groups by making the following groups: $\{2,1\}, \{1,1,1\},$ and $\{1\}$.