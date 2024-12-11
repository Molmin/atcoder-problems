Score : $200$ points

## Problem Statement

You are given a string $S$. Each character of $S$ is uppercase or lowercase English letter.
Determine if $S$ satisfies all of the following conditions:

- The initial character of $S$ is an uppercase `A`.
- There is exactly one occurrence of `C` between the third character from the beginning and the second to last character (inclusive).
- All letters except the `A` and `C` mentioned above are lowercase.

## Constraints

- $4 \leq |S| \leq 10$ ($|S|$ is the length of the string $S$.)
- Each character of $S$ is uppercase or lowercase English letter.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If $S$ satisfies all of the conditions in the problem statement, print `AC`; otherwise, print `WA`.

```input1
AtCoder
```

```output1
AC
```

The first letter is `A`, the third letter is `C` and the remaining letters are all lowercase, so all the conditions are satisfied.

```input2
ACoder
```

```output2
WA
```

The second letter should not be `C`.

```input3
AcycliC
```

```output3
WA
```

The last letter should not be `C`, either.

```input4
AtCoCo
```

```output4
WA
```

There should not be two or more occurrences of `C`.

```input5
Atcoder
```

```output5
WA
```

The number of `C` should not be zero, either.