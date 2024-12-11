Score : $100$ points

## Problem Statement

You are given a $3$-character string $S$, which is a concatenation of integers $a$ and $b$ between $1$ and $9$ (inclusive) and the character `x` in this order: `axb`.

Find the product of $a$ and $b$.

## Constraints

- The length of $S$ is $3$.
- The $1$-st and $3$-rd characters are digits between $1$ and $9$ (inclusive).
- The $2$-nd character is `x`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
3x7
```

```output1
21
```

We have $3 \times 7 = 21$, which should be printed.

```input2
9x9
```

```output2
81
```

```input3
1x1
```

```output3
1
```