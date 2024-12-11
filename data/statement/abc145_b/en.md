Score : $200$ points

## Problem Statement

Given are a positive integer $N$ and a string $S$ of length $N$ consisting of lowercase English letters.

Determine whether the string is a concatenation of two copies of some string.
That is, determine whether there is a string $T$ such that $S = T + T$.

## Constraints

- $1 \leq N \leq 100$
- $S$ consists of lowercase English letters.
- $|S| = N$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

If $S$ is a concatenation of two copies of some string, print `Yes`; otherwise, print `No`.

```input1
6
abcabc
```

```output1
Yes
```

Let $T =$ `abc`, and $S = T + T$.

```input2
6
abcadc
```

```output2
No
```

```input3
1
z
```

```output3
No
```