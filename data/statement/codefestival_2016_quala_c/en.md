Score : $400$ points

## Problem Statement

Mr. Takahashi has a string $s$ consisting of lowercase English letters.
He repeats the following operation on $s$ exactly $K$ times.

- Choose an arbitrary letter on $s$ and change that letter to the next alphabet. Note that the next letter of `z` is `a`.

For example, if you perform an operation for the second letter on `aaz`, `aaz` becomes `abz`.
If you then perform an operation for the third letter on `abz`, `abz` becomes `aba`.

Mr. Takahashi wants to have the lexicographically smallest string after performing exactly $K$ operations on $s$.
Find the such string.

## Constraints

- $1 \leq |s| \leq 10^5$
- All letters in $s$ are lowercase English letters.
- $1 \leq K \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $s$
> 
> $K$

## Output

Print the lexicographically smallest string after performing exactly $K$ operations on $s$.

```input1
xyz
4
```

```output1
aya
```

For example, you can perform the following operations: `xyz`, `yyz`, `zyz`, `ayz`, `aya`.

```input2
a
25
```

```output2
z
```

You have to perform exactly $K$ operations.

```input3
codefestival
100
```

```output3
aaaafeaaivap
```