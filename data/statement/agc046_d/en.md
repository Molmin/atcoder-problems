Score : $1100$ points

## Problem Statement

Given is a string $S$ consisting of `0` and `1`. Find the number of strings, modulo $998244353$, that can result from applying the following operation on $S$ zero or more times:

- Remove the two characters at the beginning of $S$, erase one of them, and reinsert the other somewhere in $S$. This operation can be applied only when $S$ has two or more characters.

## Constraints

- $1 \leq |S| \leq 300$
- $S$ consists of `0` and `1`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the number of strings, modulo $998244353$, that can result from applying the operation on $S$ zero or more times.

```input1
0001
```

```output1
8
```

Eight strings, `0001`, `001`, `010`, `00`, `01`, `10`, `0`, and `1`, can result.

```input2
110001
```

```output2
24
```

```input3
11101111011111000000000110000001111100011111000000001111111110000000111111111
```

```output3
697354558
```