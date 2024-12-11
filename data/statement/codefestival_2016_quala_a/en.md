Score : $100$ points

## Problem Statement

This contest is `CODE FESTIVAL`.
However, Mr. Takahashi always writes it `CODEFESTIVAL`, omitting the single space between `CODE` and `FESTIVAL`.

So he has decided to make a program that puts the single space he omitted.

You are given a string $s$ with $12$ letters.
Output the string putting a single space between the first $4$ letters and last $8$ letters in the string $s$.

## Constraints

- $s$ contains exactly $12$ letters.
- All letters in $s$ are uppercase English letters.

## Input

The input is given from Standard Input in the following format:

> $s$

## Output

Print the string putting a single space between the first $4$ letters and last $8$ letters in the string $s$.
Put a line break at the end.

```input1
CODEFESTIVAL
```

```output1
CODE FESTIVAL
```

Putting a single space between the first $4$ letters and last $8$ letters in `CODEFESTIVAL` makes it `CODE FESTIVAL`.

```input2
POSTGRADUATE
```

```output2
POST GRADUATE
```

```input3
ABCDEFGHIJKL
```

```output3
ABCD EFGHIJKL
```