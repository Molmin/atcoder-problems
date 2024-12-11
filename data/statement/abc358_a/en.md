Score : $100$ points

## Problem Statement

Takahashi is heading to AtCoder Land.
There is a signboard in front of him, and he wants to determine whether it says AtCoder Land.

You are given two strings $S$ and $T$ separated by a space.
Determine whether $S=$ `AtCoder` and $T=$ `Land`.

## Constraints

- $S$ and $T$ are strings consisting of uppercase and lowercase English letters, with lengths between $1$ and $10$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $S$ $T$

## Output

If $S=$ `AtCoder` and $T=$ `Land`, print `Yes`; otherwise, print `No`.

```input1
AtCoder Land
```

```output1
Yes
```

$S=$ `AtCoder` and $T=$ `Land`.

```input2
CodeQUEEN Land
```

```output2
No
```

$S$ is not `AtCoder`.

```input3
aTcodeR lANd
```

```output3
No
```

Uppercase and lowercase letters are distinguished.