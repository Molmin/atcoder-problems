Score : $100$ points

## Problem Statement

You are given integers $a$, $b$, $c$, and $d$. Print two lines as follows.

The first line should contain the result of calculating $(a + b) \times (c - d)$ as an integer.<br>
The second line should contain `Takahashi`, regardless of the input.

## Constraints

- $-100 \leq a, b, c, d \leq 100$
- $a$, $b$, $c$, and $d$ are integers.

## Input

The input is given from Standard Input in the following format:

> $a$ $b$ $c$ $d$

## Output

Print two lines according to the Problem Statement.

```input1
1 2 5 3
```

```output1
6
Takahashi
```

We have $(1 + 2) \times(5 - 3) = 3 \times 2 = 6$, so the first line should contain $6$.<br>
The second line should contain `Takahashi`. Lowercasing the first character or incorrect spelling will not be accepted, so be careful.

```input2
10 -20 30 -40
```

```output2
-700
Takahashi
```

The input or output may contain negative numbers.

```input3
100 100 100 -100
```

```output3
40000
Takahashi
```