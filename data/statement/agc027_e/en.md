Score : $1300$ points

## Problem Statement

There is a string $s$ consisting of `a` and `b`.
Snuke can perform the following two kinds of operation any number of times in any order:

- Choose an occurrence of `aa` as a substring, and replace it with `b`.
- Choose an occurrence of `bb` as a substring, and replace it with `a`.

How many strings $s$ can be obtained by this sequence of operations?
Find the count modulo $10^9 + 7$.

## Constraints

- $1 \leq |s| \leq 10^5$
- $s$ consists of `a` and `b`.

## Input

Input is given from Standard Input in the following format:

> $s$

## Output

Print the number of strings $s$ that can be obtained, modulo $10^9 + 7$.

```input1
aaaa
```

```output1
6
```

Six strings can be obtained:

- `aaaa`
- `aab`
- `aba`
- `baa`
- `bb`
- `a`

```input2
aabb
```

```output2
5
```

Five strings can be obtained:

- `aabb`
- `aaa`
- `bbb`
- `ab`
- `ba`

```input3
ababababa
```

```output3
1
```

Snuke cannot perform any operation.

```input4
babbabaaba
```

```output4
35
```