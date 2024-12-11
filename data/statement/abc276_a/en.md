Score : $100$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English letters.<br>
If `a` appears in $S$, print the last index at which it appears; otherwise, print $-1$. (The index starts at $1$.)

## Constraints

- $S$ is a string of length between $1$ and $100$ (inclusive) consisting of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
abcdaxayz
```

```output1
7
```

`a` appears three times in $S$. The last occurrence is at index $7$, so you should print $7$.

```input2
bcbbbz
```

```output2
-1
```

`a` does not appear in $S$, so you should print $-1$.

```input3
aaaaa
```

```output3
5
```