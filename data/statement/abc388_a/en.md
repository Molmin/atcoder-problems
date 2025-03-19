Score : $100$ points

## Problem Statement

You are given a string $S$. Here, the first character of $S$ is an uppercase English letter, and the second and subsequent characters are lowercase English letters.

Print the string formed by concatenating the first character of $S$ and `UPC` in this order.

## Constraints

- $S$ is a string of length between $1$ and $100$, inclusive.
- The first character of $S$ is an uppercase English letter.
- The second and subsequent characters of $S$ are lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the string formed by concatenating the first character of $S$ and `UPC` in this order.

```input1
Kyoto
```

```output1
KUPC
```

The first character of `Kyoto` is `K`, so concatenate `K` and `UPC`, and print `KUPC`.

```input2
Tohoku
```

```output2
TUPC
```