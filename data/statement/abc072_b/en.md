Score : $200$ points

## Problem Statement

You are given a string $s$ consisting of lowercase English letters. Extract all the characters in the odd-indexed positions and print the string obtained by concatenating them. Here, the leftmost character is assigned the index $1$.

## Constraints

- Each character in $s$ is a lowercase English letter.
- $1 \leq |s| \leq 10^5$

## Input

The input is given from Standard Input in the following format:

> $s$

## Output

Print the string obtained by concatenating all the characters in the odd-numbered positions.

```input1
atcoder
```

```output1
acdr
```

Extract the first character `a`, the third character `c`, the fifth character `d` and the seventh character `r` to obtain `acdr`.

```input2
aaaa
```

```output2
aa
```

```input3
z
```

```output3
z
```

```input4
fukuokayamaguchi
```

```output4
fkoaaauh
```