Score : $200$ points

## Problem Statement

There is a string $S$ consisting of digits `1`, `2`, $...$, `9`.
Lunlun, the Dachshund, will take out three consecutive digits from $S$, treat them as a single integer $X$ and bring it to her master. (She cannot rearrange the digits.)

The master's favorite number is $753$. The closer to this number, the better.
What is the minimum possible (absolute) difference between $X$ and $753$?

## Constraints

- $S$ is a string of length between $4$ and $10$ (inclusive).
- Each character in $S$ is `1`, `2`, $...$, or `9`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the minimum possible difference between $X$ and $753$.

```input1
1234567876
```

```output1
34
```

Taking out the seventh to ninth characters results in $X = 787$, and the difference between this and $753$ is $787 - 753 = 34$. The difference cannot be made smaller, no matter where $X$ is taken from.

Note that the digits cannot be rearranged. For example, taking out `567` and rearranging it to `765` is not allowed.

We cannot take out three digits that are not consecutive from $S$, either. For example, taking out the seventh digit `7`, the ninth digit `7` and the tenth digit `6` to obtain `776` is not allowed.

```input2
35753
```

```output2
0
```

If `753` itself can be taken out, the answer is $0$.

```input3
1111111111
```

```output3
642
```

No matter where $X$ is taken from, $X = 111$, with the difference $753 - 111 = 642$.