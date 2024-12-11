Score : $600$ points

## Problem Statement

You are given a string $s$ consisting of `A`, `B` and `C`.

Snuke wants to perform the following operation on $s$ as many times as possible:

- Choose a contiguous substring of $s$ that reads `ABC` and replace it with `BCA`.

Find the maximum possible number of operations.

## Constraints

- $1 \leq |s| \leq 200000$
- Each character of $s$ is `A`, `B` and `C`.

## Input

Input is given from Standard Input in the following format:

> $s$

## Output

Find the maximum possible number of operations.

```input1
ABCABC
```

```output1
3
```

You can perform the operations three times as follows: `ABCABC` → `BCAABC` → `BCABCA` → `BCBCAA`. This is the maximum result.

```input2
C
```

```output2
0
```

```input3
ABCACCBABCBCAABCB
```

```output3
6
```