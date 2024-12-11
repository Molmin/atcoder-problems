Score : $400$ points

## Problem Statement

How many arithmetic progressions consisting of integers with a common difference of $1$ have a sum of $N$?

## Constraints

- $1 \leq N \leq 10^{12}$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
12
```

```output1
4
```

We have four such progressions:

- $[12]$
- $[3, 4, 5]$
- $[-2, -1, 0, 1, 2, 3, 4, 5]$
- $[-11, -10, -9, \dots, 10, 11, 12]$

```input2
1
```

```output2
2
```

We have two such progressions:

- $[1]$
- $[0, 1]$

```input3
963761198400
```

```output3
1920
```