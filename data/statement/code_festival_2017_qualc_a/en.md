Score : $100$ points

## Problem Statement

Snuke built an online judge to hold a programming contest.

When a program is submitted to the judge, the judge returns a verdict, which is a two-character string that appears in the string $S$ as a contiguous substring.
(The judge can return any two-character substring of $S$.)

Determine whether the judge can return the string `AC` as the verdict to a program.

## Constraints

- $2 \leq |S| \leq 5$
- $S$ consists of uppercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If the judge can return the string `AC` as a verdict to a program, print `Yes`; if it cannot, print `No`.

```input1
BACD
```

```output1
Yes
```

The string `AC` appears in `BACD` as a contiguous substring (the second and third characters).

```input2
ABCD
```

```output2
No
```

Although the string `ABCD` contains both `A` and `C` (the first and third characters), the string `AC` does not appear in `ABCD` as a contiguous substring.

```input3
CABD
```

```output3
No
```

```input4
ACACA
```

```output4
Yes
```

```input5
XX
```

```output5
No
```