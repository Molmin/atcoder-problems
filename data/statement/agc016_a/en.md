Score : $300$ points

## Problem Statement

Snuke can change a string $t$ of length $N$ into a string $t'$ of length $N - 1$ under the following rule:

- For each $i$ ($1 \leq i \leq N - 1$), the $i$-th character of $t'$ must be either the $i$-th or $(i + 1)$-th character of $t$.

There is a string $s$ consisting of lowercase English letters.
Snuke's objective is to apply the above operation to $s$ repeatedly so that all the characters in $s$ are the same.
Find the minimum necessary number of operations.

## Constraints

- $1 \leq |s| \leq 100$
- $s$ consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $s$

## Output

Print the minimum necessary number of operations to achieve the objective.

```input1
serval
```

```output1
3
```

One solution is: `serval` → `srvvl` → `svvv` → `vvv`.

```input2
jackal
```

```output2
2
```

One solution is: `jackal` → `aacaa` → `aaaa`.

```input3
zzz
```

```output3
0
```

All the characters in $s$ are the same from the beginning.

```input4
whbrjpjyhsrywlqjxdbrbaomnw
```

```output4
8
```

In $8$ operations, he can change $s$ to `rrrrrrrrrrrrrrrrrr`.