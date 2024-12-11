Score : $500$ points

## Problem Statement

Find the maximum side length of a regular triangle that can be drawn within a rectangle whose side lengths are $A$ and $B$.

## Constraints

- $1 \leq A,B \leq 1000$
- $A$ and $B$ are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the answer.<br>
Your output is considered correct if the absolute or relative error from the true answer is at most $10^{-9}$.

```input1
1 1
```

```output1
1.03527618041008295791
```

The following figure shows an optimal drawing, with the side length of $\sqrt{6} - \sqrt{2}$.

![image](https://img.atcoder.jp/abc292/2cd44ddc3d8241e510a356be9533631f.png)

Note that the sample output does not strictly match $\sqrt{6}- \sqrt{2}$, but the error is within $10^{-9}$, so it is considered correct.