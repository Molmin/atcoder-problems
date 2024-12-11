Score : $100$ points

## Problem Statement

You are given a string $S$ of length $3$ consisting of lowercase English letters.

How many different strings can be obtained by permuting the characters in $S$?

## Constraints

- $S$ is a string $S$ of length $3$ consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the number of different strings that can be obtained by permuting the characters in $S$.

```input1
aba
```

```output1
3
```

By permuting the characters in $S=$ `aba`, three different strings can be obtained: `aab`, `aba`, `baa`.

```input2
ccc
```

```output2
1
```

By permuting the characters in $S=$ `ccc`, just one string can be obtained: `ccc`.

```input3
xyz
```

```output3
6
```

By permuting the characters in $S=$ `xyz`, six different strings can be obtained: `xyz`, `xzy`, `yxz`, `yzx`, `zxy`, `zyx`.