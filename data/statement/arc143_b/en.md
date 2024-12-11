Score : $500$ points

## Problem Statement

Find the number of ways, modulo $998244353$, to fill the squares of an $N \times N$ grid using each integer from $1$ to $N^2$ once so that every square satisfies at least one of the following conditions.

- In the same column, there is a square containing a number greater than that of the concerned square.
- In the same row, there is a square containing a number less than that of the concerned square.

## Constraints

- $1 \leq N \leq 500$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
2
```

```output1
8
```

Here is one way to fill the grid to satisfy the requirement.

```output1
13
42
```

Here, the top-left square contains a number less than that of the bottom-left square, satisfying the first condition. It does not satisfy the second condition, however.

```input2
5
```

```output2
704332752
```

```input3
100
```

```output3
927703658
```