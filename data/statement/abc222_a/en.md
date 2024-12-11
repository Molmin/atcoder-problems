Score : $100$ points

## Problem Statement

You are given an integer $N$ between $0$ and $9999$ (inclusive).

Print it as a four-digit string after appending to it the necessary number of leading zeros.

## Constraints

- $0 \leq N \leq 9999$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
321
```

```output1
0321
```

$321$ has three digits, so we need to add one leading zero to it to make it have four digits.

```input2
7777
```

```output2
7777
```

```input3
1
```

```output3
0001
```