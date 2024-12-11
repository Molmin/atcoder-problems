Score : $200$ points

## Problem Statement

Snuke is interested in strings that satisfy the following conditions:

- The length of the string is at least $N$.
- The first $N$ characters equal to the string $s$.
- The last $N$ characters equal to the string $t$.

Find the length of the shortest string that satisfies the conditions.

## Constraints

- $1 \leq N \leq 100$
- The lengths of $s$ and $t$ are both $N$.
- $s$ and $t$ consist of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $s$
> 
> $t$

## Output

Print the length of the shortest string that satisfies the conditions.

```input1
3
abc
cde
```

```output1
5
```

The shortest string is `abcde`.

```input2
1
a
z
```

```output2
2
```

The shortest string is `az`.

```input3
4
expr
expr
```

```output3
4
```

The shortest string is `expr`.