Score : $400$ points

## Problem Statement

Among the strings of length $A + B$ containing $A$ occurrences of `a` and $B$ occurrences of `b`, find the string that comes $K$-th in the lexicographical order.

## Constraints

- $1 \leq A, B \leq 30$
- $1 \leq K \leq S$, where $S$ is the number of strings of length $A + B$ containing $A$ occurrences of `a` and $B$ occurrences of `b`.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $K$

## Output

Print the answer.

```input1
2 2 4
```

```output1
baab
```

Here are the strings containing two `a`s and two `b`s in the lexicographical order: `aabb`, `abab`, `abba`, `baab`, `baba`, and `bbaa`.
The fourth string, `baab`, should be printed.

```input2
30 30 118264581564861424
```

```output2
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

$K$ may not fit into a $32$-bit integer type.