Score : $200$ points

## Problem Statement

Snuke has decided to construct a string that starts with `A` and ends with `Z`, by taking out a substring of a string $s$ (that is, a consecutive part of $s$).

Find the greatest length of the string Snuke can construct. Here, the test set guarantees that there always exists a substring of $s$ that starts with `A` and ends with `Z`.

## Constraints

- $1 \leq |s| \leq 200{,}000$
- $s$ consists of uppercase English letters.
- There exists a substring of $s$ that starts with `A` and ends with `Z`.

## Input

The input is given from Standard Input in the following format:

> $s$

## Output

Print the answer.

```input1
QWERTYASDFZXCV
```

```output1
5
```

By taking out the seventh through eleventh characters, it is possible to construct `ASDFZ`, which starts with `A` and ends with `Z`.

```input2
ZABCZ
```

```output2
4
```

```input3
HASFJGHOGAKZZFEGA
```

```output3
12
```