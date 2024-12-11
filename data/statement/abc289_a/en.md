Score : $100$ points

## Problem Statement

You are given a string $s$ consisting of two kinds of characters, `0` and `1`.
Print the string obtained by replacing `0` with `1` and `1` with `0` in $s$.

## Constraints

- The length of $s$ is between $1$ and $10$, inclusive.
- $s$ consists of two kinds of characters, `0` and `1`.

## Input

The input is given from Standard Input in the following format:

> $s$

## Output

Print the answer in a single line.

```input1
01
```

```output1
10
```

The $1$-st character of $s$ is `1`, so the $1$-st character to print is `0`.
The $2$-nd character of $s$ is `0`, so the $2$-nd character to print is `1`.

```input2
1011
```

```output2
0100
```

```input3
100100001
```

```output3
011011110
```